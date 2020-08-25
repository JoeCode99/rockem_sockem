import React from 'react';
import SelectCard from './SelectCard';

const GameBody = ({
  attackCards,
  defenceCards,
  selectedAttackCards,
  selectedDefenceCards,
}) => {
  return (
    <div className='parent_grid'>
      <div className='ad'>
        <h4 className='h4_attack'>ATTACKS</h4>
        <div className='child_grid'>{attackCards}</div>
      </div>
      <div className='ad'>
        <h4 className='h4_defence'>DEFENCES</h4>
        <div className='child_grid'>{defenceCards}</div>
      </div>
      <div className='ad'>
        <div className='child_grid_select'>
          {selectedAttackCards.size === 0 ? (
            <span className='placeholder'>No Cards Selected</span>
          ) : (
            Array.from(selectedAttackCards).map((i) => (
              <SelectCard name={i} key={i} />
            ))
          )}
        </div>
      </div>
      <div className='ad'>
        <div className='child_grid_select'>
          {selectedDefenceCards.size === 0 ? (
            <span className='placeholder'>No Cards Selected</span>
          ) : (
            Array.from(selectedDefenceCards).map((i) => (
              <SelectCard name={i} key={i} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default GameBody;
