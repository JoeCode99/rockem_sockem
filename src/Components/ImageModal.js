import React from 'react';

const ImageModal = ({
  modalShow,
  src,
  setModalShow,
  description,
  handleSelection,
  isSelected,
}) => {
  const clickOff = (event) => {
    if (event.target.id === 'myModal') {
      setModalShow();
    }
  };

  const handleClick = () => {
    setModalShow();
    handleSelection();
  };

  return (
    <div
      id='myModal'
      className='modal'
      style={{ display: modalShow ? 'block' : 'none' }}
      onClick={(e) => clickOff(e)}
    >
      <span className='close' onClick={setModalShow}>
        &times;
      </span>
      {src !== undefined && (
        <div className='modal-grid'>
          <div className='modal-grid-item'>
            <img
              className='modal-content'
              id='img01'
              src={`../../Images/Dev_Cards/${src}.png`}
              alt={src}
            />
          </div>
          <div className='modal-grid-item'>
            <p id='caption'>
              <span className='caption'>{src}</span>
              <br />
              {description}
              <br />
              <span className='modal_button' onClick={() => handleClick()}>
                {isSelected ? 'DESELECT' : 'SELECT'}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageModal;
