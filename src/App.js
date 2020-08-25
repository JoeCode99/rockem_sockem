import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Button from './Components/Button';
import Intro from './Components/Intro';
import Game from './Components/Game';
import ScenarioData from './Components/ScenarioData';

function App() {
  const scenarios = ScenarioData;
  const scenShuffler = () => {
    var currentIndex = scenarios.length,
      tempValue,
      randIndex;

    while (0 !== currentIndex) {
      randIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      tempValue = scenarios[currentIndex];
      scenarios[currentIndex] = scenarios[randIndex];
      scenarios[randIndex] = tempValue;
    }
    return scenarios;
  };
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <div className='description'>
            <Intro />
            <Link to='/game' className='link'>
              <div className='center_button'>
                <Button text='START' />
              </div>
            </Link>
          </div>
        </Route>
        <Route path='/game'>
          <Game ScenarioData={scenShuffler()} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
