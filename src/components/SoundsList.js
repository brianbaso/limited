import React, { useState } from 'react';

const SoundsList = () => {
  const [checkedItems, setCheckedItems] = useState([
    "Piano", "Electric Piano", "Bells", "Organ", "Synth Keys", "Guitar", "Sample",
    "Brass", "Sub Bass", "Plucked Bass", "Lead Synth", "Pad Synth", "Choir",
    "Bass Guitar", "808 Bass", "Violin", "Cello", "Flute", "Drum Loop", "Bongos"
  ]);

  const items = [
    "Piano", "Electric Piano", "Bells", "Organ", "Synth Keys", "Guitar", "Sample",
    "Brass", "Sub Bass", "Plucked Bass", "Lead Synth", "Pad Synth", "Choir",
    "Bass Guitar", "808 Bass", "Violin", "Cello", "Flute", "Drum Loop", "Bongos"
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
      justifyContent: 'center',
      paddingTop: '10px',
      paddingBottom: '25px',
      width: '850px'
    }}>
      {items.map((item) => (
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
  );
};

export default SoundsList;
