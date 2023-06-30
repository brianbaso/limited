import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/Timer.js';
import TrackList from '../components/TrackList.js';
import ProgressBar from '../components/ProgressBar.js';
import { MyContext } from '../MyContext.js';

function Produce() {
  const { cacheSounds } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (cacheSounds === '') {
      navigate('/sounds')
    }
  }, [])

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
