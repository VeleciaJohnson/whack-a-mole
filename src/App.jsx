import { GameProvider, useGame } from "./GameContext";
import GameBoard from "./GameBoard";
import Header from "./Header";
import WelcomeScreen from "./WelcomeScreen";

function Game() {
  const { isPlaying } = useGame();

  if (!isPlaying) {
    return <WelcomeScreen />;
  }

  return (
    <div className="app">
      <Header />
      <GameBoard />
    </div>
  );
}

export default function App() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
}