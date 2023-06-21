import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import beep from '../assets/sounds/beep.mp3'

function Timer(props) {
    const [time, setTime] = useState({ minutes: props.minutes, seconds: 0 });
    const [isRunning, setIsRunning] = useState(false);
    const [buttonText, setButtonText] = useState('Play');
    const [buttonColor, setButtonColor] = useState('green');
  
    useEffect(() => {
      let intervalId;
  
      if (isRunning) {
        intervalId = setInterval(() => {
          if (time.minutes === 0 && time.seconds === 0) {
            setIsRunning(false);
            setButtonText('Play');
            setButtonColor('green');
            clearInterval(intervalId);
            playBeepSound();
          } else {
            if (time.seconds === 0) {
              setTime({ minutes: time.minutes - 1, seconds: 59 });
            } else {
              setTime({ ...time, seconds: time.seconds - 1 });
            }
          }
        }, 1000);
      }
  
      return () => {
        clearInterval(intervalId);
      };
    }, [isRunning, time]);
  
    const handlePlayPause = () => {
      setIsRunning(!isRunning);
      setButtonText(isRunning ? 'Play' : 'Pause');
      setButtonColor(isRunning ? 'green' : 'orange');
    };
  
    const handleRestart = () => {
      setTime({ minutes: props.minutes, seconds: 0 });
      setIsRunning(false);
      setButtonText('Play');
      setButtonColor('green');
    };
  
    const playBeepSound = () => {
      const audio = new Audio(beep);
      audio.play();
    };

    return (
      <div className="timer-container">
        <div className="timer-controls">
          <span className="timer-digits">
            {time.minutes.toString().padStart(2, '0')}:
            {time.seconds.toString().padStart(2, '0')}
          </span>
          <button onClick={handlePlayPause} style={{ backgroundColor: buttonColor }}>
            {buttonText}
          </button>
          <button onClick={handleRestart}>
          Restart
          </button>
          <Link to={props.next}>
            <button>
              {props.next === "/" ? "Done" : "Next →"}
            </button>
          </Link>
        </div>
      </div>
    );
  }

  export default Timer;