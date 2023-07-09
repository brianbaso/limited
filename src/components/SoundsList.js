import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { MyContext } from '../MyContext';

const SoundsList = () => {
  let defaultSounds = [
    "Piano", "Electric Piano", "Bells", "Organ", "Synth Keys", "Guitar", "Sample",
    "Brass", "Lead Synth", "Pad Synth", "Choir", "Violin", "Cello", "Flute", "Saxaphone"
  ];
  const [sounds, setSounds] = useState([])
  const [checkedItems, setCheckedItems] = useState([]);
  const [customSound, setCustomSound] = useState("");
  const { cacheSounds, updateCacheSounds } = useContext(MyContext);

  useEffect(() => {
    // Check if the user has already set their sounds
    if (cacheSounds !== "") {
      // Show all the original sounds, even the ones unchecked + the users custom sounds
      // 'Set' automatically removes duplicates 
      const allSounds = defaultSounds.concat(cacheSounds.filter(item => !defaultSounds.includes(item)));

      setSounds(allSounds)
      setCheckedItems(cacheSounds)
    } else {
      setSounds(defaultSounds)
      setCheckedItems(defaultSounds)
    }
  }, [])

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
        {sounds.map((item) => (
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
          <Link to="/start">
            <button className="primary-button continue-button" onClick={saveSounds}>Continue →</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SoundsList;
