import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const PrivateRoute = ({ component: Component }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(null)

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsUserLoggedIn(!!user);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);
  
  // Prevents app from auto redirecting to signin even when user is signed in
  if (isUserLoggedIn === null) {
    return null;
  }

  return isUserLoggedIn ? <Component /> : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
