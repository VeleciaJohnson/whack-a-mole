import { useGame } from "./GameContext";

export default function Hole({ index }) {
  const { molePosition, whackMole } = useGame();

  const hasMole = molePosition === index;

  return (
    <button
      className="hole"
      type="button"
      aria-label={hasMole ? "Whack the mole" : "Empty hole"}
      onClick={hasMole ? whackMole : undefined}
    >
      {hasMole && <span className="mole" />}
    </button>
  );
}