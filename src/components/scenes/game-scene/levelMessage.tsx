import { useGameStore } from "@/stores/game-store";
import { useAnimatedText } from "./hooks/useAnimatedText";

export default function LevelMessage() {
  const levelData = useGameStore((s) => s.levelData);
  const playerName = useGameStore((s) => s.playerName);

  const getIntroMessage = () => {
    if (levelData?.level === 1)
      return `Hola, qué bueno que estás aquí, <strong>${playerName}</strong>.`;
    if (levelData?.level === 2)
      return `!Lo hiciste bien! Gracias por venir, <strong>${playerName}</strong>.`;
    if (levelData?.level === 3)
      return `¡Es un desastre! Qué bueno que llegaste, <strong>${playerName}</strong>.`;
  };

  const text = `${getIntroMessage()} ${levelData?.text}`;
  const animatedText = useAnimatedText({
    text,
    delimiter: " ",
    duration: 2,
  });

  return (
    <div>
      <p
        className="text-sm text-foreground"
        dangerouslySetInnerHTML={{
          __html: animatedText,
        }}
      />
    </div>
  );
}
