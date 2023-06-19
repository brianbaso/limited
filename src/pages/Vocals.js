import Timer from '../components/Timer.js';

function Vocals() {
  return (
    <div className="main-container">
      <div>
          <h2>Write & Record</h2>
          <p className="vocals-text">Don't let high expecatations give you writer's block. <br/> Just have fun.</p>
      </div>
      <Timer minutes={15} next={"/"} />
    </div>
  );
}

export default Vocals;
