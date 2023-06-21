import Timer from '../components/Timer.js';
import ProgressBar from '../components/ProgressBar.js';

function Vocals() {
  return (
    <div className="main-container">
      <div className="a-container">
          <ProgressBar step={"vocals"} />
      </div>
      <div className="b-container">
        <div>
            <h2>Write & Record</h2>
            <p className="vocals-text">Don't let high expecatations give you writer's block. <br/> Just have fun.</p>
        </div>
        <Timer minutes={10} next={"/"} />
      </div>
    </div>
  );
}

export default Vocals;
