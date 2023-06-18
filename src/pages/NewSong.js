import Timer from '../components/Timer.js';
import TrackList from '../components/TrackList.js';

function NewSong() {
  return (
    <div className="new-song-container">
      <TrackList />
      <Timer />
    </div>
  );
}

export default NewSong;
