import { Link } from 'react-router-dom';
import SoundsList from '../components/SoundsList';

function Sounds() {
    
    return (
        <>
          <div className="sounds-container">
            <h1 className="sounds-header">Welcome! 🎉 Which sounds are you capable of producing with?</h1>
            <p className="sounds-subtext">If your DAW supports the sound, it's recommended to leave it checked. The more sounds the merrier. 🎅🏿</p>
            <SoundsList />
          </div>
          <div>
            <Link to="/start">
              <button className="primary-button continue-button">continue →</button>
            </Link>
          </div>
        </>
    );
}

export default Sounds;
