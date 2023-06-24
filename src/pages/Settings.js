import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Settings() {
    const navigate = useNavigate();

    const handleSignOut = async () => {
      const auth = getAuth();
      signOut(auth).then(() => {
        console.log('user signed out')
        navigate('/')
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        console.log('sign out error', error)
      });
    }
    
    return (
        <>
          <div className="settings-container">
            <h1>settings 🥀</h1>
            <Link className="settings-link">
                Edit Your Sounds &nbsp;🎹
            </Link>
            <Link className="settings-link">
                Leave Feedback &nbsp;🗣️
            </Link>
            <Link className="settings-link">
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
