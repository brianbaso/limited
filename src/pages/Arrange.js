import Timer from '../components/Timer.js';

function Arrange() {
  return (
    <div className="main-container">
      <div>
          <h2>Arrange Your Track</h2>
          <ol>
            <li>Intro</li>
            <li>Verse</li>
            <li>Chorus</li>
          </ol>
      </div>
      <Timer minutes={5} next={"/vocals"} />
    </div>
  );
}

export default Arrange;
