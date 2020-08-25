import React from 'react';

const SelectCard = ({ name }) => {
  return (
    <>
      <img
        src={`../../Images/Dev_Cards/${name}.png`}
        alt={name}
        className='card_select'
      />
    </>
  );
};

export default SelectCard;
