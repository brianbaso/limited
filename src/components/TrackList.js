import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../MyContext';

/* Rules:
   - Only one drums
   - Only one bass
   - Only one piano
*/

/*
    Make me a component in react that utilizes an object like the following, each value array can be different lengths but the keys will stay the same:
    {
        "lead-and-rhythm": ["Piano", "Rhodes", "Bells", "Guitar", "Saxaphone"],
        "bass": ["808 Bass", "Bass guitar", "Double Bass"],
        "drums": ["Pad Drums", "Loop Drum Sample", "Live Drums"]
    }

    With this, generate me a random list of two lead-and-rhythm, one bass, and one drums. Make sure that the same lead-and-rhythm is not chosen twice.
    
    Create an ordered list with the selected tracks. Also create a button "Generate new tracks" that will randomize new tracks.
*/
const DRUM_OPTIONS = [
    "Any Drums With Clap",
    "Any Drums With Snare",
    "Any Drums No Hihats",
    "Any Drums With Ride",
    "Any Stock DAW Drums"
];

const trackList = {
  "lead-and-rhythm": ["Piano", "Rhodes", "Bells", "Guitar", "Saxophone"],
  "bass": ["808 Bass", "Bass guitar", "Double Bass"],
  "drums": ["Pad Drums", "Loop Drum Sample", "Live Drums"]
};

function TrackList() {
  const [selectedTracks, setSelectedTracks] = useState([]);
  const { cacheSounds } = useContext(MyContext);
  // Add mandatory drum options
  const drumSounds = cacheSounds["drums"].concat(DRUM_OPTIONS);

  useEffect(() => {
    generateRandomTracks();
    console.log(cacheSounds)
  }, []);

  const generateRandomTracks = () => {
    const leadAndRhythmTracks = [...cacheSounds["lead-and-rhythm"]];
    const selectedLeadAndRhythm = [];

    // Randomly select two lead-and-rhythm tracks
    while (selectedLeadAndRhythm.length < 2 && leadAndRhythmTracks.length > 0) {
      const randomIndex = Math.floor(Math.random() * leadAndRhythmTracks.length);
      const track = leadAndRhythmTracks.splice(randomIndex, 1)[0];
      selectedLeadAndRhythm.push(track);
    }

    // Randomly select one bass track
    const selectedBass = cacheSounds["bass"][Math.floor(Math.random() * cacheSounds["bass"].length)];

    // Randomly select one drums track
    const selectedDrums = drumSounds[Math.floor(Math.random() * drumSounds.length)];

    setSelectedTracks([...selectedLeadAndRhythm, selectedBass, selectedDrums]);
  };

  return (
    <div>
      <h2>Tracks Allowed</h2>
      <ol>
        {selectedTracks.map((track, index) => (
          <li key={index}>{track}</li>
        ))}
      </ol>
      <button onClick={generateRandomTracks}>Generate New Tracks</button>
    </div>
  );
}

export default TrackList;
