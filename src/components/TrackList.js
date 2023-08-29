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

const EFFECTS = [
  "Filter", "1/4 Delay", "1/8 Delay", "Arpeggio", "Small Reverb", "Big Reverb", "Slap Delay"
];

const NOTES = [
  "any notes", "any notes", "three notes", "two notes"
]

const CHORDS = [
  "any chords", "any chords", "three chords", "two chords"
]

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
    console.log('cache', cacheSounds)
  }, []);

  const generateRandomTracks = () => {
    const leadAndRhythmTracks = [...cacheSounds["lead-and-rhythm"]];
    const selectedLeadAndRhythm = [];

    // Randomly select two lead-and-rhythm tracks
    while (selectedLeadAndRhythm.length < 2 && leadAndRhythmTracks.length > 0) {
      const randomIndexTrack = Math.floor(Math.random() * leadAndRhythmTracks.length);
      const track = leadAndRhythmTracks.splice(randomIndexTrack, 1)[0];

      const randomIndexFx = Math.floor(Math.random() * EFFECTS.length);
      const fx = EFFECTS.splice(randomIndexFx, 1)[0];

      // Select chords option for first L&R, and notes for second
      if (selectedLeadAndRhythm.length > 0) {
        const randomIndexNotes = Math.floor(Math.random() * NOTES.length);
        const notes = NOTES.splice(randomIndexNotes, 1)[0];
        selectedLeadAndRhythm.push(track + " with " + fx + " using " + notes);
      } else {
        const randomIndexChords = Math.floor(Math.random() * CHORDS.length);
        const chords = CHORDS.splice(randomIndexChords, 1)[0];
        selectedLeadAndRhythm.push(track + " with " + fx + " using " + chords);
      }

    }

    // Randomly select one bass track
    const selectedBass = cacheSounds["bass"][Math.floor(Math.random() * cacheSounds["bass"].length)];

    // Randomly select one drums track
    const selectedDrums = drumSounds[Math.floor(Math.random() * drumSounds.length)];

    const tracks = {
      "lead-and-rhythm": selectedLeadAndRhythm,
      "bass": selectedBass,
      "drums": selectedDrums
    }

    setSelectedTracks(tracks);
    console.log('TRACKS',selectedTracks)
    // console.log('here', selectedLeadAndRhythm, selectedBass, selectedDrums)
  };

  return (
    <div>
      {/* <h2>Tracks Allowed</h2> */}
      {/* <ol>
        {selectedTracks.map((track, index) => (
          <li key={index}>{track}</li>
        ))}
      </ol> */}
      {selectedTracks &&
        <ul>
          <li>HARMONY: {selectedTracks["lead-and-rhythm"][0]}</li>
          <li>MELODY: {selectedTracks["lead-and-rhythm"][1]}</li>
          <li>BASS: {selectedTracks["bass"]}</li>
          <li>DRUMS {selectedTracks["drums"]}</li>
        </ul>} 
      <button onClick={generateRandomTracks}>Generate New Tracks</button>
    </div>
  );
}

export default TrackList;
