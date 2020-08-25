import React from 'react';

const Intro = () => {
  return (
    <>
      <h3>HOW TO PLAY:</h3>
      <img
        src='../Images/Dev_Cards/denial_of_service.png'
        alt='Attack card'
        className='intro_img'
      />
      <img
        src='../Images/Dev_Cards/application_hardening.png'
        alt='Defence card'
        className='intro_img'
      />
      <p>Attack and defence themed cards will be shown in front of you.</p>
      <p>
        You will be presented with <b>10</b> randomly selected security
        scenarios which are described using symptoms in the system.
      </p>
      <p>
        Each additional symptom is designed to narrow down the correct cards.
      </p>
      <p>
        Select <b>ALL</b> cards which apply to the given scenario.
      </p>
      <p>If a symptom is not stated in the scenario then it did not happen.</p>
      <p>
        <b>NOTE:</b> Refresh the browser for a new random question set or to
        restart the game.
      </p>

      <p>Scoring is as follows:</p>
      <ul>
        <li>
          Each correct card earns you <b>1 point</b>.
        </li>
        <li>
          Each incorrect card results in a <b>0.5 point</b> deduction.
        </li>
      </ul>
    </>
  );
};

export default Intro;
