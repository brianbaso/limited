import React, { useEffect, useState, useContext, useRef } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { MyContext } from '../MyContext';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { updateCacheSounds } = useContext(MyContext);
  const navigate = useNavigate();
  const buttonRef = useRef(null)
  const inputRef = useRef(null);

  // Auto-focus into the email field
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Cache the sounds when a user signs in to reduce api calls 
  const saveSoundsToCache = async (userId) => {
    const db = getFirestore();
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const sounds = docSnap.data()["sounds"].split(',');
      updateCacheSounds(sounds)
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  const handleSignIn = async () => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log('User signed in:', user);
          saveSoundsToCache(user.uid);
          navigate("/start");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('error', errorCode, errorMessage);
        });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      buttonRef.current.click();
    }
  };

  return (
    <div className="auth-form">
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
      <button ref={buttonRef} onClick={handleSignIn}>Sign In →</button>
    </div>
  );

};

export default SignInForm;
