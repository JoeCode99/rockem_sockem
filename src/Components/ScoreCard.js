import React, { useState } from 'react';
import ImageModal from './ImageModal';

const ScoreCard = ({ name, description }) => {
  const [modalShow, setModalShow] = useState(false);

  const modalDisplay = () => {
    setModalShow((prev) => !prev);
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
      </div>

      <ImageModal
        modalShow={modalShow}
        setModalShow={modalDisplay}
        src={name}
        description={description}
      />
    </>
  );
};

export default ScoreCard;
