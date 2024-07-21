import React, { useState } from 'react';
import Level from './Level';
import '../styles/GameBoard.css';

const GameBoard = () => {
  const [level, setLevel] = useState(1);
  const [winning, setWinning] = useState(false);

  const handleNextLevel = () => {
    setLevel(level + 1);
  };

  const handleGameOver = (type) => {
    if (type === 'reset') {
      setLevel(1); // Reset to the first level
      setWinning(false); // Ensure winning state is cleared
    } else if (type === 'win') {
      setWinning(true); // Player has won
    }
  };

  return (
    <div className="game-board">
      {winning ? (
        <div className="game-over">
          <h1>Congratulations! You've completed the game!</h1>
          <p>Your winning key: <strong>D3J9HJ6PTF0JKL2</strong></p>
          <button onClick={() => window.location.reload()}>Play Again</button>
        </div>
      ) : (
        <Level level={level} onNextLevel={handleNextLevel} onGameOver={handleGameOver} />
      )}
    </div>
  );
};

export default GameBoard;
