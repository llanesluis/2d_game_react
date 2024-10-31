import { useState } from "react";
import Repeat from "./components/icons/Repeat";
import Close from "./components/icons/Close";
import Settings from "./components/settings";
import SVGEffectBlur from "./components/svg-effect-blur";

import StartScene from "./components/scenes/start-scene/start-scene";
import GameScene from "./components/scenes/game-scene/game-scene";
import EndScene from "./components/scenes/end-scene/end-scene";
import CreditsScene from "./components/scenes/credits/credits-scene";

type Scene = "start" | "game" | "end" | "credits";

function App() {
  // TODO: Manejar el estado con Zustand
  const [scene, setScene] = useState<Scene>("start");

  return (
    <div className="app-wrapper">
      <header className="app-header bg-muted">
        <div className="bg-muted-foreground/20 p-1 transition hover:bg-muted-foreground/40">
          <Settings />
        </div>

        <span className="text-2xl">RECICLAFT</span>

        {/* TODO: REMOVER ESTO*/}
        <div className="mr-auto flex gap-4 pl-12">
          <button onClick={() => setScene("start")}>Start</button>
          <button onClick={() => setScene("game")}>Game</button>
          <button onClick={() => setScene("end")}>End</button>
          <button onClick={() => setScene("credits")}>Credits</button>
        </div>

        {scene === "game" && <Controls />}
      </header>

      <main className="grid">
        {scene === "start" && <StartScene nextScene={() => setScene("game")} />}
        {scene === "game" && <GameScene />}
        {scene === "end" && <EndScene />}
        {scene === "credits" && <CreditsScene />}
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
  return (
    <div className="flex items-center gap-3">
      <button className="bg-yellow-500/10 p-1 transition hover:bg-yellow-500/20 hover:bg-opacity-100">
        <Repeat className="size-6 text-yellow-500" />
      </button>
      <button className="bg-red-500/10 p-1 transition hover:bg-red-500/20 hover:bg-opacity-100">
        <Close className="size-6 text-red-500" />
      </button>
    </div>
  );
}
