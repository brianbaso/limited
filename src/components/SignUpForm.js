import React, { useState, useEffect, useRef } from 'react';
import { auth, createUserWithEmailAndPassword } from '../firebase/firebase';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef(null)
  const buttonRef = useRef(null)

  // Auto-focus into the email field
  useEffect(() => {
    inputRef.current.focus();
  }, []); 

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
      <button ref={buttonRef} onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUpForm;
