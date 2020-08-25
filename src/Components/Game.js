import React, { useState, useEffect } from 'react';

import AttackCardData from './AttackCardData';
import DefenceCardData from './DefenceCardData';
import GameBody from './GameBody';
import Card from './Card';
import Button from './Button';
import ScorePage from './ScorePage';
import Clue from './Clue';
import EndGame from './EndGame';

const Game = ({ ScenarioData }) => {
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState(false);
  const [maxScore, setMaxScore] = useState(0);
  const [currPoints, setCurrPoints] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  const [selectedAttackCards, setSelectedAttackCards] = useState(new Set());
  const [selectedDefenceCards, setSelectedDefenceCards] = useState(new Set());
  const [attackCards, setAttackCards] = useState([]);
  const [defenceCards, setDefenceCards] = useState([]);
  const [scen, setScen] = useState(ScenarioData[round]);

  const desc = ScenarioData[round]['description'].split('\n').map((item, i) => {
    return <p key={i}>{item}</p>;
  });

  const handleAttackSelect = (name) => {
    setSelectedAttackCards((checkedItems) => {
      const newChecked = new Set(checkedItems);
      if (newChecked.has(name)) newChecked.delete(name);
      else newChecked.add(name);
      return newChecked;
    });
  };

  const handleDefenceSelect = (name) => {
    setSelectedDefenceCards((checkedItems) => {
      const newChecked = new Set(checkedItems);
      if (newChecked.has(name)) newChecked.delete(name);
      else newChecked.add(name);
      return newChecked;
    });
  };

  const handleSubmit = () => {
    let roundScore = 0;
    if (selectedAttackCards.size === 0) {
      window.alert('Please select at least one attack card');
      return;
    } else if (selectedDefenceCards.size === 0) {
      window.alert('Please select at least one defence card');
      return;
    }

    const cardFound = (attackCards, card) => {
      for (const i in attackCards) {
        if (attackCards[i] === card) return true;
      }
      return false;
    };

    selectedAttackCards.forEach((card) => {
      if (!cardFound(scen.attackCards, card)) roundScore -= 0.5;
      else roundScore += 1;
    });

    selectedDefenceCards.forEach((card) => {
      if (!cardFound(scen.defenceCards, card)) roundScore -= 0.5;
      else roundScore += 1;
    });
    setScore((prev) => prev + roundScore);
    setMaxScore(
      (prev) => prev + scen.attackCards.length + scen.defenceCards.length
    );

    setCurrPoints(roundScore);
    setIsWaiting(true);
  };

  const handleNext = () => {
    if (round !== 9) {
      setScen(ScenarioData[round + 1]);
      setRound((prev) => prev + 1);
      setSelectedAttackCards(new Set());
      setSelectedDefenceCards(new Set());
      setIsWaiting(false);
    } else {
      setEnd(true);
    }
  };

  useEffect(() => {
    setAttackCards(
      AttackCardData.map((item, i) => {
        return (
          <Card
            name={item.name}
            description={item.description}
            handleClick={() => handleAttackSelect(item.name)}
            key={i}
          />
        );
      })
    );

    setDefenceCards(
      DefenceCardData.map((item, i) => {
        return (
          <Card
            name={item.name}
            description={item.description}
            handleClick={() => handleDefenceSelect(item.name)}
            key={i}
          />
        );
      })
    );
  }, []);

  return (
    <>
      {end ? (
        <EndGame score={score} maxScore={maxScore} />
      ) : (
        <div className='description'>
          <div className='curr_score'>
            <p className='curr_score_text'>CURRENT SCORE</p>
            <p className='curr_score_number'>{score}</p>
          </div>
          <h3>SCENARIO {round + 1}:</h3>
          {desc}
          {!isWaiting ? (
            <>
              <Clue
                attackLength={scen.attackCards.length}
                defenceLength={scen.defenceCards.length}
              />
              <GameBody
                attackCards={attackCards}
                defenceCards={defenceCards}
                selectedAttackCards={selectedAttackCards}
                selectedDefenceCards={selectedDefenceCards}
              />
              <div onClick={() => handleSubmit()}>
                <Button text='SUBMIT' />
              </div>
            </>
          ) : (
            <>
              <ScorePage
                scen={scen}
                selectedAttacks={Array.from(selectedAttackCards)}
                selectedDefences={Array.from(selectedDefenceCards)}
                round={currPoints}
                score={score}
                maxScore={maxScore}
              />
              <div className='next_button' onClick={() => handleNext()}>
                <Button text={`NEXT`} />
              </div>
            </>
          )}
          <div className='footer' />
        </div>
      )}
    </>
  );
};

export default Game;
