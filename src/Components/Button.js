import React from 'react';

const Button = ({ text }) => {
  return (
    <p className={text !== 'START' ? 'submit_button' : 'button'}>{text}</p>
  );
};

export default Button;
