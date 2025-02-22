import React from 'react';
import GameContext from '../../GameContext';
import './Button.css';

const Button = () => {
  return (
    <GameContext.Consumer>
      {({ playing, startGame }) => (
        <button onClick={startGame}>
          {playing ? 'reset' : 'start'}
        </button>
      )}
    </GameContext.Consumer>
  );
};

export default Button
