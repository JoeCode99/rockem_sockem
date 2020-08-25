import React, { useState } from 'react';
import ImageModal from './ImageModal';

const Card = ({ name, description, handleClick }) => {
  //public\Images\Dev_Cards\application_whitelisting.png
  const [modalShow, setModalShow] = useState(false);
  const [selected, setSelected] = useState(false);

  const modalDisplay = () => {
    setModalShow((prev) => !prev);
  };

  const handleSelection = () => {
    setSelected((prev) => !prev);
    handleClick();
  };
  return (
    <>
      <div className='container_card'>
        <img
          src={`../../Images/Dev_Cards/${name}.png`}
          alt={name}
          className='card'
          onClick={modalDisplay}
        />
        <div
          className='hover_text'
          onClick={() => handleSelection()}
          style={{
            color: selected ? 'green' : 'white',
            opacity: selected && 1,
            backgroundColor: selected && '#333333',
          }}
        >
          {selected ? (
            <span style={{ color: '#17BEBB' }}>SELECTED</span>
          ) : (
            'SELECT'
          )}
        </div>
      </div>

      <ImageModal
        modalShow={modalShow}
        setModalShow={modalDisplay}
        src={name}
        description={description}
        handleSelection={handleSelection}
        isSelected={selected}
      />
    </>
  );
};

export default Card;
