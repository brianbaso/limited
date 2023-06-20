import { MyContext } from '../MyContext.js';
import Timer from '../components/Timer.js';
import { useContext } from 'react';

function Arrange() {
  const { isVocalsChecked } = useContext(MyContext);
  const nextPage = isVocalsChecked ? "/vocals" : "/";

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
      <Timer minutes={5} next={nextPage} />
    </div>
  );
}

export default Arrange;
