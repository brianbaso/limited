import { MyContext } from '../MyContext.js';
import Timer from '../components/Timer.js';
import CreateProgressBar from '../components/CreateProgressBar.js'
import { useContext } from 'react';

function Arrange() {
  const { isVocalsChecked } = useContext(MyContext);
  const nextPage = isVocalsChecked ? "/vocals" : "/start";

  return (
    <div className="main-container">
      <div className="a-container">
        <CreateProgressBar step={"arrangement"} />
      </div>
      <div className="b-container">
        <div>
          <Timer minutes={5} next={nextPage} />
          <h2 className="arrange-title">Arrange Your Track</h2>
          <ol>
            <li>Intro</li>
            <li>Verse</li>
            <li>Chorus</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Arrange;
