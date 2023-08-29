import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from '../components/Timer.js';
import TrackList from '../components/TrackList.js';
import CreateProgressBar from '../components/CreateProgressBar.js';
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
        <CreateProgressBar step={"production"} />
      </div>
      <div className="b-container">
        <TrackList />
        <Timer minutes={30} next={"/arrange"} />
      </div>
    </div>
  );
}

export default Produce;
