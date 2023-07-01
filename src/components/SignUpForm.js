import React, { useState, useEffect, useRef } from 'react';
import { auth, createUserWithEmailAndPassword } from '../firebase/firebase';
import { useNavigate } from "react-router-dom";

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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('successful signup', user)
      navigate("/sounds")
    } catch (error) {
      // Handle sign-up error
      console.log('error signing up', error)
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
