import { useGame } from "./GameContext";

export default function Header() {
  const { score, restartGame } = useGame();

  return (
    <header className="game-header">
      <div>
        <h1>Whack-a-Mole!</h1>
        <p className="score">Current score: {score}</p>
      </div>

      <button className="restart-button" onClick={restartGame}>
        Restart Game
      </button>
    </header>
  );
}