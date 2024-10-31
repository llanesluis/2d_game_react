import { PlayerProvider } from "./context/player-provider";
import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <PlayerProvider>{children}</PlayerProvider>
    </ThemeProvider>
  );
}
