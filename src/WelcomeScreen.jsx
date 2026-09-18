import { useGame } from "./GameContext";

export default function WelcomeScreen() {
  const { startGame, highScore } = useGame();

  return (
    <main className="welcome-screen">
      <section className="welcome-card">
        <h1>Whack-a-Mole!</h1>

        <p>
          A mole is hiding in one of the holes. Click the mole as fast as you
          can to earn points!
        </p>

        <p className="instructions">
          Every time you whack the mole, it moves to a different hole.
        </p>

        <button className="play-button" onClick={startGame}>
          Play Game
        </button>

        {highScore > 0 && (
          <p className="high-score">High score: {highScore}</p>
        )}
      </section>
    </main>
  );
}