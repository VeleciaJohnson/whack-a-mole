import { useGame } from "./GameContext";
import Hole from "./Hole";

export default function GameBoard() {
  const { numberOfHoles } = useGame();

  const holes = Array.from({ length: numberOfHoles }, (_, index) => index);

  return (
    <main className="game-board">
      <section className="holes" aria-label="Whack-a-Mole game board">
        {holes.map((holeIndex) => (
          <Hole key={holeIndex} index={holeIndex} />
        ))}
      </section>
    </main>
  );
}