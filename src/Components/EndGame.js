import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const EndGame = ({ score, maxScore }) => {
  var feedback = '';
  var bgColor = '';

  if (score === maxScore && score !== 0) {
    feedback =
      'Wow, you have some serious cyber skills! Or did you just exploit the website ;)';
    bgColor = 'green';
  } else if (score < maxScore && score > maxScore / 2) {
    feedback = 'Well done, you have a knack for analysing cyber threats!';
    bgColor = 'green';
  } else if (score > 0 && score < maxScore / 2) {
    feedback = 'A solid attempt! Give it another shot!';
    bgColor = 'orange';
  } else if (score <= 0) {
    feedback = 'Spend some time reading the cards for a better score!';
    bgColor = 'red';
  } else if (score > maxScore) {
    feedback = 'When in doubt, exploit!';
    bgColor = 'green';
  }

  return (
    <div className='end_game'>
      <div className='center_maker'>
        <h2>GAME OVER</h2>
        <br></br>
        <p className='final_score'>FINAL SCORE</p>
        <p>
          <span
            className='end_game_numbers'
            style={{ backgroundColor: bgColor }}
          >
            {score}
          </span>
          <span className='smaller_numbers'> out of {maxScore}</span>
        </p>
        <p className='feedback'>{feedback}</p>
        <Link to='/' className='restart_button'>
          <Button text='PLAY AGAIN' />
        </Link>
      </div>
    </div>
  );
};

export default EndGame;
