import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../MyContext';


const TRACK_OPTIONS = {
  "rock": [
    'Lead Synth',
    'Rhythm Synth',
    'Lead Guitar',
    'Rhythm Guitar',
    'Bass',
    'Drums',
  ],
  "hiphop": [
    'Lead Synth',
    'Rhythm Synth',
    'Guitar',
    'Sample',
    'Bass',
    'Drums',
  ],
  "electronic": [
    'Lead Synth',
    'Rhythm Synth',
    'Guitar',
    'Shaker',
    'Bass',
    'Drums',
  ],
}

function TrackList() {
  const [tracks, setTracks] = useState([]);
  const { genre } = useContext(MyContext);

  useEffect(() => {
    generateTracks();
  }, []);

  const generateTracks = () => {
    const selectedTracks = [];

    while (selectedTracks.length < 3) {
      const randomTrack = TRACK_OPTIONS[genre][Math.floor(Math.random() * TRACK_OPTIONS[genre].length)];

      if (
        !selectedTracks.includes(randomTrack) &&
        !selectedTracks.some((track) => track.includes('Lead') && randomTrack.includes('Lead')) &&
        !selectedTracks.some((track) => track.includes('Rhythm') && randomTrack.includes('Rhythm'))
      ) {
        selectedTracks.push(randomTrack);
      }
    }

    setTracks(selectedTracks);
  };

  return (
    <div>
      <h2>Tracks Allowed</h2>
      <ol>
        {tracks.map((track, index) => (
          <li key={index}>{track}</li>
        ))}
      </ol>
      <button onClick={generateTracks}>Generate New Tracks</button>
    </div>
  );
}

export default TrackList;
