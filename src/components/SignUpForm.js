import React, { useState, useEffect, useContext, useRef } from 'react';
import { auth, createUserWithEmailAndPassword } from '../firebase/firebase';
import { getAuth, signInWithPopup, GoogleAuthProvider, getAdditionalUserInfo } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { MyContext } from '../MyContext';
import { toast } from 'react-toastify';
import google from '../assets/images/google.png'


const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { updateCacheSounds } = useContext(MyContext);
  const navigate = useNavigate();
  const inputRef = useRef(null)
  const buttonRef = useRef(null)

  // Auto-focus into the email field
  useEffect(() => {
    inputRef.current.focus();
  }, []); 


  // Cache the sounds when a user signs in to reduce api calls 
  const saveSoundsToCache = async (userId) => {
    debugger;
    const db = getFirestore();
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const sounds = JSON.parse(docSnap.data()["sounds"]);
      updateCacheSounds(sounds)
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/sounds/lead-and-rhythm")
    } catch (error) {
      const errorCode = error.code;
          if (errorCode === 'auth/email-already-in-use') {
            toast.error('That email is already in use, please sign in or use a different email.');
          } else if (errorCode === 'auth/invalid-email') {
            toast.error('Invalid email. Please use a correct email format.');
          } else if (errorCode === 'auth/weak-password') {
            toast.error('Please use a password that is at least 6 characters.');
          } else {
            toast.error('Authentication failed. Please check your credentials.');
          }
    }
  };

  const handleGoogleLogin = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
  
    try {
      const result = await signInWithPopup(auth, provider);
      const isNewUser = getAdditionalUserInfo(result).isNewUser

      if (isNewUser) {
        navigate("/sounds/lead-and-rhythm")
      } else {
        const user = result.user;
        saveSoundsToCache(user.uid);
        navigate("/start");
        toast.success('Sign in success. Welcome back!')
      }
    } catch (error) {
      console.log(error.message)
      toast.error('Google sign in failed. Please try again.');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      buttonRef.current.click();
    }
  };

  return (
    <div className="auth-form">
      <button onClick={handleGoogleLogin}><div className="google-button"><img src={google} alt="Google" />Sign in with Google</div></button>
      <hr className="solid"/>
      <input
        type="email"
        placeholder="Email"
        ref={inputRef}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onKeyDown={handleKeyDown}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button ref={buttonRef} onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUpForm;
