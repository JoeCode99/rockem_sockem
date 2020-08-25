import React, { useState } from 'react';

const Clue = ({ attackLength, defenceLength }) => {
  const [show, isShow] = useState(false);
  const displayString = show ? 'inline-block' : 'none';
  return (
    <div>
      <div className='clue' onClick={() => isShow((prev) => !prev)}>
        <p>CLUE</p>
      </div>
      <span style={{ position: 'relative' }}>
        <p style={{ display: displayString }}>
          Number of Attacks: <b>{attackLength}</b>
        </p>
        <p style={{ display: displayString }}>
          Number of Defences: <b>{defenceLength}</b>
        </p>
      </span>
    </div>
  );
};

export default Clue;
