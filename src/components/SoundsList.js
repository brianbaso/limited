import React, { useState } from 'react';

const SoundsList = () => {
  const [checkedItems, setCheckedItems] = useState([]); // State to track checked items

  const items = [
    "Lead Synth", "Pad Synth", "Choir Synth", "Piano", "Electric Piano", "Bells",
    "Organ", "Synth Keys", "Guitar", "Orchestral Strings", "Sub Bass", "Plucked Bass",
    "Bass Guitar", "808 Bass", "Sample", "Brass", "Woodwinds", "Drums With Clap",
    "Drums With Snare", "Drums (No Hi-hats)", "Drum Loop Sample", "Stock DAW Drums"
  ];

  const handleItemToggle = (item) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== item));
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
      {items.map((item) => (
        <div
          key={item}
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '5px',
            width: '150px',
            height: '50px',
            backgroundColor: checkedItems.includes(item) ? 'lightblue' : 'grey',
          }}
        >
          <input
            type="checkbox"
            checked={checkedItems.includes(item)}
            onChange={() => handleItemToggle(item)}
          />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default SoundsList;
