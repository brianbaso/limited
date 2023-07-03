import { useEffect, useState } from 'react';
import pharrell from '../assets/images/pharrell.jpeg'
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Home() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const auth = getAuth();
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false)
      });
      return () => unsubscribe();
    }, []);


    const renderComponent = (user, loading) => {
      if (loading) {
        return (
          <></>
        )
      } else {
        if (user) {
          return (
            <>
              <div>
                <Link to="/start">
                    <button className="primary-button">Start →</button>
                </Link>
              </div>
            </>
          )
        } else {
          return (
            <>
              <div>
                <Link to="/signin">
                    <button className="primary-button">Sign in →</button>
                </Link>
              </div>
              <div>
                <Link to="/signup">
                    <u>sign up</u>
                </Link>
              </div>
            </>
          ) 
        }
      }
    }

    return (
        <>
          <div>
            <h1 className="floating-heading">limited 🥀</h1>
            <p className="home-subheading">Looking to rapidly improve as a music producer?<br />Limit your creative process to simplify & enjoy the process.<br/> 20-30 minute sessions in your DAW. No expectations, just delibarate practice.</p>
            <p className="home-body">Limited is an app that encourages music producers to explore new creative approaches by imposing restrictions on their creative process. Unlock new facets of your unique style through a proven method that drives rapid improvement as a music producer.</p>
            <div className="home-quote-container">
              <img className="home-quote-photo" src={pharrell} alt="Pharrell Williams" />
              <p className="home-quote">"Once you see 10,000 buttons and infinite possibilities, it just becomes so much you can lose yourself. You should start with something that doesn’t accommodate you fully so you strive for more." — Pharrell Williams</p>
            </div>
            <div className="home-button-container">
              {renderComponent(user, loading)}
            </div>
          </div>
        </>
    );
}

export default Home;
