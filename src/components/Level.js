import React, { useEffect, useState } from 'react';
import riddles from '../levels/riddles';
import '../styles/Level.css';

const Level = ({ level, onNextLevel, onGameOver }) => {
  const [input, setInput] = useState('');
  const [riddle, setRiddle] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setRiddle(riddles[level - 1]);
    setInput('');
    setMessage(''); // Clear message when level changes
  }, [level]);

  const normalizeString = (str) => {
    return str.trim().toLowerCase(); // Normalize to lowercase and trim spaces
  };

  const handleSolve = () => {
    if (normalizeString(input) === normalizeString(riddle.answer)) {
      if (level === riddles.length) {
        onGameOver('win'); // Player has won
      } else {
        setMessage('Correct! Proceeding to the next level...');
        setTimeout(() => {
          onNextLevel();
        }, 2000);
      }
    } else {
      setMessage('Incorrect answer, restarting...');
      setTimeout(() => {
        onGameOver('reset'); // Reset game
      }, 2000);
    }
  };

  return (
    riddle && (
      <div className="level">
        <p>{riddle.question}</p>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your answer"
        />
        <button onClick={handleSolve}>Solve</button>
        {message && <p>{message}</p>}
      </div>
    )
  );
};

export default Level;
