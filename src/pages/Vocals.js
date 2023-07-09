import Timer from '../components/Timer.js';
import CreateProgressBar from '../components/CreateProgressBar.js';

function Vocals() {
  return (
    <div className="main-container">
      <div className="a-container">
          <CreateProgressBar step={"vocals"} />
      </div>
      <div className="b-container">
        <div>
            <h2>Write & Record</h2>
            <p className="vocals-text">Don't let high expecatations give you writer's block. <br/> Just have fun.</p>
        </div>
        <Timer minutes={10} next={"/start"} />
      </div>
    </div>
  );
}

export default Vocals;
