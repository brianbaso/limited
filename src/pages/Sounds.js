import { useParams } from 'react-router-dom';
import OnboardProgressBar from '../components/OnboardProgressBar';
import SoundsList from '../components/SoundsList';

function Sounds() {
    const { soundId } = useParams();

    return (
        <>
          <div className="sounds-container">
            <OnboardProgressBar step={soundId} />
            <h1 className="sounds-header">Welcome! 🎉 Which sounds are you capable of producing with?</h1>
            <p className="sounds-subtext">If your DAW supports the sound, it's recommended to leave it checked. The more sounds the merrier. 🎅🏿</p>
            <SoundsList step={soundId} />
          </div>
        </>
    );
}

export default Sounds;
