import { createContext, useContext, useState } from "react";

const GameContext = createContext();

const NUMBER_OF_HOLES = 9;

function getRandomHole() {
  return Math.floor(Math.random() * NUMBER_OF_HOLES);
}

export function GameProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState(null);
  const [highScore, setHighScore] = useState(0);

  function startGame() {
    setScore(0);
    setMolePosition(getRandomHole());
    setIsPlaying(true);
  }

  function whackMole() {
    setScore((currentScore) => currentScore + 1);

    let nextPosition = getRandomHole();

    while (nextPosition === molePosition) {
      nextPosition = getRandomHole();
    }

    setMolePosition(nextPosition);
  }

  function restartGame() {
    setHighScore((currentHighScore) => Math.max(currentHighScore, score));
    setScore(0);
    setMolePosition(null);
    setIsPlaying(false);
  }

  const value = {
    isPlaying,
    score,
    molePosition,
    highScore,
    startGame,
    whackMole,
    restartGame,
    numberOfHoles: NUMBER_OF_HOLES,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGame() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("useGame must be used inside a GameProvider.");
  }

  return context;
}