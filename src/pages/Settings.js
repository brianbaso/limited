import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signOut, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { MyContext } from '../MyContext';
import { toast } from 'react-toastify';

function Settings() {
    const navigate = useNavigate();
    const auth = getAuth();
    const { updateCacheSounds } = useContext(MyContext);

    const handleSignOut = async () => {
      signOut(auth).then(() => {
        console.log('user signed out')
        // Clear cache
        updateCacheSounds("")

        navigate('/')
        toast.success('You have successfully signed out.')
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        console.log('sign out error', error)
      });
    }
    
    const sendResetEmail = (email) => {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          // Email sent successfully
          console.log("Password reset email sent");
        })
        .catch((error) => {
          // Error occurred while sending email
          console.error("Error sending password reset email:", error);
        });
    };

    return (
        <>
          <div className="settings-container">
            <h1>settings 🥀</h1>
            <Link className="settings-link" to="/sounds/lead-and-rhythm">
                Edit Your Sounds &nbsp;🎹
            </Link>
            {/* <Link className="settings-link">
                Leave Feedback &nbsp;🗣️
            </Link> */}
            <Link className="settings-link" onClick={() => sendResetEmail(auth.currentUser.email)}>
                Reset Password &nbsp;🔑
            </Link>
            <Link className="settings-link sign-out" onClick={handleSignOut}>
                Sign Out →
            </Link>
          </div>
        </>
    );
}

export default Settings;
