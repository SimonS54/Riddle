import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const startGame = () => {
    navigate('/game');
  };

  return (
    <div className="home">
      <h1>Welcome to the Riddle Game!</h1>
      <button onClick={startGame}>Start Game</button>
    </div>
  );
};

export default Home;
