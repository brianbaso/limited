import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { MyContext } from '../MyContext';

const SoundsList = () => {
  const defaultSounds = [
    "Piano", "Electric Piano", "Bells", "Organ", "Synth Keys", "Guitar", "Sample",
    "Brass", "Sub Bass", "Plucked Bass", "Lead Synth", "Pad Synth", "Choir",
    "Bass Guitar", "808 Bass", "Violin", "Cello", "Flute", "Drum Loop", "Bongos"
  ];
  const [checkedItems, setCheckedItems] = useState([]);
  const [customSound, setCustomSound] = useState("");
  const { cacheSounds, updateCacheSounds } = useContext(MyContext);

  // refactor defaultSounds to just sounds

  useEffect(() => {
    // Check if the user has already set their sounds
    if (sounds !== "") {
      setCheckedItems(cacheSounds)
    } else {
      setCheckedItems(defaultSounds)
    }
  }, [])

  const addCustomSound = () => {
    const updatedSounds = checkedItems.concat(customSound)
    setCheckedItems(updatedSounds)
  }

  const handleItemToggle = (item) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== item));
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  const saveSounds = async () => {
    const auth = getAuth();
    const db = getFirestore();
    const user = auth.currentUser;
    const soundsStr = checkedItems.join(',')

    // Save the sounds to the cache for new user
    updateCacheSounds(checkedItems);

    if (user) {
      await setDoc(doc(db, 'users', user.uid), {
        sounds: soundsStr
      });
    } else {
      console.log('No user found.')
    }
  };

  return (
    <>
      <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      paddingTop: '10px',
      paddingBottom: '25px',
      width: '850px'
      }}>
        {defaultSounds.map((item) => (
          <div
            className="sound-item"
            key={item}
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '5px',
              width: '160px',
              height: '50px',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: '600',
              backgroundColor: checkedItems.includes(item) ? '#535bf2' : 'grey',
            }}
            onClick={() => handleItemToggle(item)}
          >
            <input
              type="checkbox"
              checked={checkedItems.includes(item)}
              style={{
                transform: 'scale(1.3)',
                marginRight: '10px',
                marginLeft: '20px'
              }}
              readOnly
            />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter sound here..."
          value={customSound}
          onChange={(e) => setCustomSound(e.target.value)}
        />
        <button onClick={addCustomSound}>Add Sound</button>
        <Link to="/start">
          <button className="primary-button continue-button" onClick={saveSounds}>continue →</button>
        </Link>
      </div>
    </>
  );
};

export default SoundsList;
