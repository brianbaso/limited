import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { MyContext } from '../MyContext';

const SoundsList = (props) => {
  const step = props.step

  // let defaultSounds = [
  //   "Piano", "Electric Piano", "Bells", "Organ", "Synth Keys", "Guitar", "Sample",
  //   "Brass", "Lead Synth", "Pad Synth", "Choir", "Violin", "Cello", "Flute", "Saxaphone"
  // ];

  let defaultSounds = {
    "lead-and-rhythm": [
      "Piano", "Electric Piano", "Bells", "Organ", "Synth Keys", "Guitar", "Sample",
      "Brass", "Lead Synth", "Pad Synth", "Choir", "Violin", "Cello", "Flute", "Saxaphone"
    ],
    "bass": [
      "Sub Bass", "Plucked Bass", "Bass Guitar", "Synth Bass", "808 Bass", "Double Bass"
    ],
    "drums": [
      "One-Shots", "Preset Pad Drums", "Live Drums", "Sample Loop"
    ]
  }
  
  const [sounds, setSounds] = useState([])
  const [checkedItems, setCheckedItems] = useState([]);
  const [customSound, setCustomSound] = useState("");
  const { cacheSounds, updateCacheSounds } = useContext(MyContext);

  useEffect(() => {
    // Check if the user has already set their sounds
    // debugger;
    // Undefined may be a potential problem in the future?
    // Lets go for empty array
    if (cacheSounds[step] && cacheSounds[step].length !== 0) {
      // Show all the original sounds, even the ones unchecked + the users custom sounds
      // 'Set' automatically removes duplicates 
      const allSounds = defaultSounds[step].concat(cacheSounds[step].filter(item => !defaultSounds[step].includes(item)));

      setSounds(allSounds)
      setCheckedItems(cacheSounds[step])
    } else {
      setSounds(defaultSounds[step])
      setCheckedItems(defaultSounds[step])
    }
  }, [step])

  // Update the cache evertime checked items changes
  useEffect(() => {
    if (checkedItems.length > 0 && step) {
      updateCacheSounds(checkedItems, step)
    }
  }, [checkedItems])

  const addCustomSound = () => {
    const updatedCheckedItems = checkedItems.concat(customSound)
    const updatedSounds = sounds.concat(customSound)

    setCheckedItems(updatedCheckedItems)
    setSounds(updatedSounds)
  }

  const handleItemToggle = (item) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== item));
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  // Save sounds happens after drums are selected
  const saveSounds = async () => {
    const auth = getAuth();
    const db = getFirestore();
    const user = auth.currentUser;
    // const soundsStr = checkedItems.join(',')

    // Save the sounds to the cache for new user
    // updateCacheSounds(checkedItems, step);

    const jsonSoundsStr = JSON.stringify(cacheSounds)
    console.log('cache sounds:', cacheSounds)
    console.log('stringified:', jsonSoundsStr)

    if (user) {
      await setDoc(doc(db, 'users', user.uid), {
        sounds: jsonSoundsStr
      });
    } else {
      console.log('No user found.')
    }
  };

    // Create function for pressing continue and just pushing onto cache
    const handleContinue = () => {
      // debugger;
      if (step === "drums") {
        // updateCacheSounds(checkedItems, step);
        saveSounds()
      }
      console.log(cacheSounds)
      // } else {
      //   updateCacheSounds(checkedItems, step)
      //   console.log(cacheSounds)
      // }
    }

  return (
    <>
      <div className="sounds-item-container">
        {sounds.map((item) => (
          <div
            className="sound-item"
            key={item}
            style={{
              backgroundColor: checkedItems.includes(item) ? '#535bf2' : 'grey',
            }}
            onClick={() => handleItemToggle(item)}
          >
            <input
              type="checkbox"
              checked={checkedItems.includes(item)}
              className="sound-checkbox"
              readOnly
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div className="sound-list-actions">
        <div className="custom-sounds-container">
          <input
            type="text"
            placeholder="Enter sound here..."
            value={customSound}
            onChange={(e) => setCustomSound(e.target.value)}
          />
          <button onClick={addCustomSound}>Add Sound</button>
        </div>
        <div>
          <Link to={
            step === "lead-and-rhythm" ? "/sounds/bass" :
            step === "bass" ? "/sounds/drums" :
            step === "drums" ? "/start" :
            "/error"
            }>
            <button className="primary-button continue-button" onClick={handleContinue}>Continue →</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SoundsList;
