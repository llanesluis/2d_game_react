import { LEVELS } from "@/constants";
import { useGameStore } from "@/stores/game-store";
import { useEffect } from "react";
import BeforeStartGame from "./before-start-game";
import Level from "./level";

export default function GameScene() {
  const gameState = useGameStore((s) => s.gameState);
  const level = useGameStore((s) => s.level);

  const levelData = useGameStore((s) => s.levelData);
  const setLevelData = useGameStore((s) => s.setLevelData);
  const restartLevel = useGameStore((s) => s.restartLevel);

  const progress = useGameStore((s) => s.progress);
  const goToNextLevel = useGameStore((s) => s.goToNextLevel);
  const goToEndScene = useGameStore((s) => s.goToEndScene);

  useEffect(() => {
    // Controlar el nivel cuando se complete el progreso
    if (progress === levelData?.goal) {
      // Si es el último nivel, ir al final del juego
      if (levelData?.level === LEVELS.length) {
        goToEndScene();
        return;
      }

      goToNextLevel();
      restartLevel();
    }
  }, [
    goToEndScene,
    goToNextLevel,
    levelData?.goal,
    levelData?.level,
    progress,
    restartLevel,
  ]);

  useEffect(() => {
    const lvl = LEVELS.find((l) => l.level === level);
    if (!lvl) return;

    restartLevel();
    setLevelData(lvl);
  }, [level, restartLevel, setLevelData]);

  if (!levelData) return null;

  return (
    <section className="relative isolate">
      {gameState === "idle" && <BeforeStartGame />}
      {gameState === "running" && <Level key={levelData.level} />}
    </section>
  );
}
