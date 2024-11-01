import { LevelData, LEVELS } from "@/constants";
import { create } from "zustand";

const INITIAL_STATE = {
  playerName: null,
  currentScene: "start",
  gameState: "idle",
  level: 1,
  progress: 0,
  time: 0,
  levelData: null,
} satisfies State;

type Scene = "start" | "game" | "end" | "credits";
type Level = 1 | 2 | 3;
type GameState = "idle" | "running" | "paused";

type State = {
  playerName: string | null;

  currentScene: Scene;
  gameState: GameState;

  level: Level;
  levelData: LevelData;

  time: number;
  progress: number;
};

type Actions = {
  setPlayerName: (playerName: State["playerName"]) => void;

  setCurrentScene: (scene: State["currentScene"]) => void;
  goToStartScene: () => void;
  goToGameScene: () => void;
  goToEndScene: () => void;
  goToCreditsScene: () => void;

  setGameState: (gameState: State["gameState"]) => void;
  pauseGame: () => void;
  runGame: () => void;
  restartGame: () => void;

  setLevel: (level: State["level"]) => void;
  goToNextLevel: () => void;
  setLevelData: (levelData: State["levelData"]) => void;
  restartLevel: () => void;

  setTime: (timeInSeconds: number) => void;
  getTime: () => number;
  decreaseOneSecond: () => void;
  resetTime: () => void;

  setProgress: (progress: State["progress"]) => void;
  increaseProgress: (plus: number) => void;

  resetProgress: () => void;

  resetGameToInitialValues: () => void;
};

export const useGameStore = create<State & Actions>((set, get) => ({
  playerName: INITIAL_STATE.playerName,

  currentScene: INITIAL_STATE.currentScene,

  gameState: INITIAL_STATE.gameState,

  level: INITIAL_STATE.level,
  levelData: INITIAL_STATE.levelData,

  time: INITIAL_STATE.time,

  progress: INITIAL_STATE.progress,

  setPlayerName: (playerName) => set({ playerName }),

  setCurrentScene: (currentScene) => set({ currentScene }),
  goToStartScene: () => set({ currentScene: "start" }),
  goToGameScene: () => set({ currentScene: "game" }),
  goToEndScene: () => set({ currentScene: "end" }),
  goToCreditsScene: () => set({ currentScene: "credits" }),

  setGameState: (gameState) => set({ gameState }),
  pauseGame: () => set({ gameState: "paused" }),
  runGame: () => set({ gameState: "running" }),
  restartGame: () => set({ gameState: "idle" }),

  setLevel: (level) => set({ level }),
  goToNextLevel: () => {
    const currentLevel = get().level;

    if (currentLevel >= 3) {
      return set({ level: currentLevel });
    }

    const nextLevelData = LEVELS.find((l) => l.level === currentLevel + 1);
    if (!nextLevelData) return;

    set({
      level: (currentLevel + 1) as Level,
      levelData: nextLevelData,
    });
  },
  setLevelData: (levelData) => {
    set({ levelData });
    console.log(levelData);
  },
  restartLevel: () => {
    set({ time: get().levelData?.time, progress: INITIAL_STATE.progress });
  },

  setTime: (timeInSeconds) => set({ time: timeInSeconds }),
  getTime: () => get().time,
  decreaseOneSecond: () => set({ time: get().time - 1 }),
  resetTime: () => set({ time: get().levelData?.time }),

  setProgress: (progress) => set({ progress }),
  increaseProgress: (plus) => set({ progress: get().progress + plus }),
  resetProgress: () => set({ progress: 0 }),

  resetGameToInitialValues: () => {
    set(INITIAL_STATE);
  },
}));
