import { createContext, useContext, useState } from "react";

type PlayerContextType = {
  playerName: string | null;
  setPlayerName: (playerName: string | null) => void;
};

const initialState: PlayerContextType = {
  playerName: null,
  setPlayerName: () => null,
};

export const PlayerContext = createContext<PlayerContextType | undefined>(
  undefined,
);

function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [playerName, setPlayerName] = useState<string | null>(null);

  return (
    <PlayerContext.Provider value={{ playerName, setPlayerName }}>
      {children}
    </PlayerContext.Provider>
  );
}

function usePlayerName() {
  const context = useContext(PlayerContext);

  if (context === undefined) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }

  return context;
}

export { PlayerProvider, usePlayerName };
