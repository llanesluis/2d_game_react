import Repeat from "./components/icons/Repeat";
import Close from "./components/icons/Close";
import Settings from "./components/settings";
import SVGEffectBlur from "./components/svg-effect-blur";

import StartScene from "./components/scenes/start-scene/start-scene";
import GameScene from "./components/scenes/game-scene/game-scene";
import EndScene from "./components/scenes/end-scene/end-scene";
import CreditsScene from "./components/scenes/credits/credits-scene";
import { useGameStore } from "./stores/game-store";
import Next from "./components/icons/Next";
import Boost from "./components/icons/Boost";
import useSound from "use-sound";
import { useEffect, useState } from "react";
import ButtonWithSound from "./components/ui/button-with-sound";

function App() {
  const currentScene = useGameStore((s) => s.currentScene);
  const goToStartScene = useGameStore((s) => s.goToStartScene);
  const goToGameScene = useGameStore((s) => s.goToGameScene);
  const goToEndScene = useGameStore((s) => s.goToEndScene);
  const goToCreditsScene = useGameStore((s) => s.goToCreditsScene);

  const playerName = useGameStore((s) => s.playerName);

  const [soundtrackVolume, setSoundtrackVolume] = useState(0.1);

  const [playSoundtrack, { stop }] = useSound("/assets/sounds/soundtrack.mp3", {
    volume: soundtrackVolume,
    loop: true,
  });

  useEffect(() => {
    playSoundtrack();

    return () => stop();
  }, [playSoundtrack, stop]);

  const handleVolumeUp = () => {
    setSoundtrackVolume((prev) => {
      if (soundtrackVolume >= 2) return 2;
      return prev + 0.05;
    });
  };

  const handleVolumeDown = () => {
    setSoundtrackVolume((prev) => {
      if (soundtrackVolume <= 0) return 0;
      return prev - 0.05;
    });
  };

  const handleVolumeOff = () => setSoundtrackVolume(0);

  return (
    <div className="app-wrapper">
      <header className="app-header bg-muted">
        <div className="bg-muted-foreground/20 p-1 transition hover:bg-muted-foreground/40">
          <Settings
            volumeUp={handleVolumeUp}
            volumeDown={handleVolumeDown}
            volumeOff={handleVolumeOff}
          />
        </div>

        <span className="mr-auto text-2xl">RECICLAFT</span>

        {/* todo: remover esto */}
        {playerName === "admin" && (
          <div className="mr-auto flex gap-4 pl-12">
            <ButtonWithSound onClick={goToStartScene}>Start</ButtonWithSound>
            <ButtonWithSound onClick={goToGameScene}>Game</ButtonWithSound>
            <ButtonWithSound onClick={goToEndScene}>End</ButtonWithSound>
            <ButtonWithSound onClick={goToCreditsScene}>
              Credits
            </ButtonWithSound>
          </div>
        )}

        {/* todo: remover esto */}
        {currentScene === "game" && <Controls />}
      </header>

      <main className="grid">
        {currentScene === "start" && <StartScene />}
        {currentScene === "game" && <GameScene />}
        {currentScene === "end" && <EndScene />}
        {currentScene === "credits" && <CreditsScene />}
      </main>

      <footer className="app-footer bg-muted">
        <span>Luis Fernando Llanes Bojorquez - 21021138</span>
        <span>ISOFT02 Videojuegos 2D - 2024</span>
      </footer>

      <SVGEffectBlur />
    </div>
  );
}

export default App;

export function Controls() {
  const gameState = useGameStore((s) => s.gameState);
  const restartLevel = useGameStore((s) => s.restartLevel);
  const resetGameToInitialValues = useGameStore(
    (s) => s.resetGameToInitialValues,
  );

  // todo: quitar esto
  const goToNextLevel = useGameStore((s) => s.goToNextLevel);
  const increaseProgress = useGameStore((s) => s.increaseProgress);
  const playerName = useGameStore((s) => s.playerName);

  if (gameState !== "running") return null;

  return (
    <div className="flex items-center gap-3">
      {/* todo: remover esto */}
      {playerName === "admin" && (
        <ButtonWithSound
          className="bg-yellow-500/10 p-1 transition hover:bg-yellow-500/20 hover:bg-opacity-100"
          onClick={() => increaseProgress(1)}
        >
          <Boost className="size-6 text-green-500" />
        </ButtonWithSound>
      )}
      {/* todo: remover esto */}

      {playerName === "admin" && (
        <ButtonWithSound
          className="bg-yellow-500/10 p-1 transition hover:bg-yellow-500/20 hover:bg-opacity-100"
          onClick={() => goToNextLevel()}
        >
          <Next className="size-6 text-blue-500" />
        </ButtonWithSound>
      )}

      <ButtonWithSound
        className="bg-yellow-500/10 p-1 transition hover:bg-yellow-500/20 hover:bg-opacity-100"
        onClick={() => restartLevel()}
      >
        <Repeat className="size-6 text-yellow-500" />
      </ButtonWithSound>

      <ButtonWithSound
        className="bg-red-500/10 p-1 transition hover:bg-red-500/20 hover:bg-opacity-100"
        onClick={() => resetGameToInitialValues()}
      >
        <Close className="size-6 text-red-500" />
      </ButtonWithSound>
    </div>
  );
}
