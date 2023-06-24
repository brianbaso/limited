import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import SoundsList from '../components/SoundsList';

function Sounds() {
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
          <div className="sounds-container">
            <h1 className="sounds-header">Welcome! What sounds can you produce with?</h1>
            <SoundsList />
          </div>
        </>
    );
}

export default Sounds;
