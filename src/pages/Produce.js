import Timer from '../components/Timer.js';
import TrackList from '../components/TrackList.js';

function Produce() {
  return (
    <div className="main-container">
      <TrackList />
      <Timer minutes={15} next={"/arrange"} />
    </div>
  );
}

export default Produce;
