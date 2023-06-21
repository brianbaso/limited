import Timer from '../components/Timer.js';
import TrackList from '../components/TrackList.js';
import ProgressBar from '../components/ProgressBar.js';

function Produce() {
  return (
    <div className="main-container">
      <div className="a-container">
        <ProgressBar step={"production"} />
      </div>
      <div className="b-container">
        <TrackList />
        <Timer minutes={15} next={"/arrange"} />
      </div>
    </div>
  );
}

export default Produce;
