import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../MyContext';

/* Rules:
   - Only one drums
   - Only one bass
   - Only one piano
*/
const DRUM_OPTIONS = [
    "Drums With Clap",
    "Drums With Snare",
    "Drums No Hihats",
    "Drums With Ride",
    "Stock DAW Drums"
];

function TrackList() {
  const [tracks, setTracks] = useState([]);
  const { sounds } = useContext(MyContext);
  const allSounds = sounds.concat(DRUM_OPTIONS);

  useEffect(() => {
    generateTracks();
  }, []);

  const generateTracks = () => {
    const selectedTracks = [];

    while (selectedTracks.length < 3) {
      const randomTrack = allSounds[Math.floor(Math.random() * allSounds.length)];

      if (
        !selectedTracks.includes(randomTrack) &&
        !selectedTracks.some((track) => track.includes('Drums') && randomTrack.includes('Drums')) &&
        !selectedTracks.some((track) => track.includes('Bass') && randomTrack.includes('Bass'))
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
