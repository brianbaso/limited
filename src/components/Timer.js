import React, { useState, useEffect } from 'react';

function Timer() {
    const [time, setTime] = useState({ minutes: 15, seconds: 0 });
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
      setTime({ minutes: 15, seconds: 0 });
      setIsRunning(false);
      setButtonText('Play');
      setButtonColor('green');
    };
  
    const handleNext = () => {
      // Handle the "done" button click event here
      // Add your custom logic or actions
    };
  
    return (
      <div>
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
          <button onClick={handleNext}>
            Next →
          </button>
        </div>
      </div>
    );
  }

  export default Timer;