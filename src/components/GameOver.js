import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/GameOver.css';

const GameOver = () => (
  <div className="game-over">
    <h1>Game Over</h1>
    <Link to="/">
      <button>Go Home</button>
    </Link>
  </div>
);

export default GameOver;
