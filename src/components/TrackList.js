import React, { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { auth } from '../firebase/firebase';

const DRUM_OPTIONS = [
  "Any Drums With Clap",
  "Any Drums With Snare",
  "Any Drums No Hihats",
  "Any Drums With Ride",
  "Any Stock DAW Drums"
];

function TrackList() {
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [sounds, setSounds] = useState([]);

  useEffect(() => {
    const getSounds = async (userId) => {
      try {
        const db = getFirestore();
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const res = JSON.parse(docSnap.data()["sounds"]);
          generateRandomTracks(res)
          setSounds(res)
        }
      } catch (error) {
        console.error('Error getting sounds: ', error)
      }
    }

    const user = auth.currentUser
    if (user) getSounds(user.uid);
  }, [])

  const generateRandomTracks = (sounds) => {

    // Add mandatory drum options
    const drumSounds = sounds["drums"].concat(DRUM_OPTIONS);

    // Scoped in order to reset everytime function is called
    const EFFECTS = [
      "Filter", "1/4 Delay", "1/8 Delay", "Arpeggio", "Small Reverb", "Big Reverb", "Slap Delay"
    ];
    
    const NOTES = [
      "any notes", "any notes", "three notes", "two notes"
    ]
    
    const CHORDS = [
      "any chords", "any chords", "three chords", "two chords"
    ]

    const leadAndRhythmTracks = [...sounds["lead-and-rhythm"]];
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
    const selectedBass = sounds["bass"][Math.floor(Math.random() * sounds["bass"].length)];

    // Randomly select one drums track
    const selectedDrums = drumSounds[Math.floor(Math.random() * drumSounds.length)];

    const tracks = {
      "lead-and-rhythm": selectedLeadAndRhythm,
      "bass": selectedBass,
      "drums": selectedDrums
    }

    setSelectedTracks(tracks);
  };

  return (
    <div>
      {/* Wait until all keys are loaded */}
      {Object.keys(selectedTracks).length === 3 &&
        <ul className="track-list">
          <li className="track-list-item harmony"><p className="track-list-label">Harmony</p>{selectedTracks["lead-and-rhythm"][0]}</li>
          <li className="track-list-item melody"><p className="track-list-label">Melody</p>{selectedTracks["lead-and-rhythm"][1]}</li>
          <li className="track-list-item bass"><p className="track-list-label">Bass</p>{selectedTracks["bass"]}</li>
          <li className="track-list-item drums"><p className="track-list-label">Drums</p>{selectedTracks["drums"]}</li>
        </ul>} 
      <button onClick={() => generateRandomTracks(sounds)}>Generate New Tracks</button>
    </div>
  );
}

export default TrackList;
