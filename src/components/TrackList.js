import React, { useEffect, useState } from 'react';

const TRACK_OPTIONS = [
  'Lead Synth',
  'Rhythm Synth',
  'Lead Guitar',
  'Rhythm Guitar',
  'Bass',
  'Drums',
];

function TrackList() {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    generateTracks();
  }, []);

  const generateTracks = () => {
    const selectedTracks = [];

    while (selectedTracks.length < 3) {
      const randomTrack = TRACK_OPTIONS[Math.floor(Math.random() * TRACK_OPTIONS.length)];

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
