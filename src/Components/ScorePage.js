import React from 'react';
import ScoreCard from './ScoreCard';
import AttackCardData from './AttackCardData';
import DefenceCardData from './DefenceCardData';

const ScorePage = ({
  scen,
  selectedAttacks,
  selectedDefences,
  round,
  score,
  maxScore,
}) => {
  const getAttackDesc = (name) => {
    for (const i in AttackCardData) {
      if (AttackCardData[i].name === name) return AttackCardData[i].description;
    }
  };
  const getDefenceDesc = (name) => {
    for (const i in DefenceCardData) {
      if (DefenceCardData[i].name === name)
        return DefenceCardData[i].description;
    }
  };
  return (
    <>
      <div className='parent_grid'>
        <div className='ad'>
          <h4 className='h4_attack'>YOUR ATTACKS</h4>
          <div className='child_grid_submit'>
            {selectedAttacks.map((card) => (
              <ScoreCard
                name={card}
                description={getAttackDesc(card)}
                key={card}
              />
            ))}
          </div>
        </div>
        <div className='ad'>
          <h4 className='h4_defence'>YOUR DEFENCES</h4>
          <div className='child_grid_submit'>
            {selectedDefences.map((card) => (
              <ScoreCard
                name={card}
                description={getDefenceDesc(card)}
                key={card}
              />
            ))}
          </div>
        </div>
        <div className='ad top_reduce'>
          <h4 className='h4_defence' style={{ backgroundColor: '#00A878' }}>
            CORRECT ATTACKS
          </h4>
          <div className='child_grid_submit'>
            {scen.attackCards.map((card) => (
              <ScoreCard
                name={card}
                description={getAttackDesc(card)}
                key={card}
              />
            ))}
          </div>
        </div>
        <div className='ad top_reduce'>
          <h4 className='h4_defence' style={{ backgroundColor: '#00A878' }}>
            CORRECT DEFENCES
          </h4>
          <div className='child_grid_submit'>
            {scen.defenceCards.map((card) => (
              <ScoreCard
                name={card}
                description={getDefenceDesc(card)}
                key={card}
              />
            ))}
          </div>
        </div>
        <p className='points_text points_text_right'>
          Points This Round:{' '}
          <span className='numbers'>
            <span style={{ color: round > 0 ? 'green' : 'red' }}>{round}</span>
          </span>
        </p>
        <p className='points_text'>
          Total Points:{' '}
          <span className='numbers'>
            <span
              style={{
                color:
                  score > maxScore / 2
                    ? 'green'
                    : score <= 0
                    ? 'red'
                    : 'orange',
              }}
            >
              {score}
            </span>
          </span>
          /{maxScore}
        </p>
      </div>
    </>
  );
};

export default ScorePage;
