import Alert from "@/components/icons/Alert";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import ApoyoVisual from "./apoyo-visual";
import { useGameStore } from "@/stores/game-store";
import { BUFF_COINS } from "@/constants";

export default function LevelInfoButton({ onClick }: { onClick: () => void }) {
  const coins = useGameStore((s) => s.coins);

  return (
    <Dialog>
      <DialogTrigger onClick={onClick}>
        <Alert
          className={cn(
            "filter-blur size-8 transition-all",
            "hover:stop-animation",
            coins < BUFF_COINS.clue && "text-muted-foreground",
            coins >= BUFF_COINS.clue &&
              "animate-pulse text-blue-500 hover:text-blue-300 active:scale-95",
          )}
        />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle
            className={cn(
              "flex items-center justify-center gap-2 space-y-0",
              "text-4xl text-blue-500",
            )}
          >
            <Alert className="size-6" />
            <span>AYUDA</span>
            <Alert className="size-6" />
          </DialogTitle>
        </DialogHeader>

        <DialogDescription className="border-b-2 pb-2">
          El tiempo <strong>seguirá corriendo</strong>, consulta las
          instrucciones y ayuda bajo tu propio riesgo.
        </DialogDescription>
        <ApoyoVisual />
      </DialogContent>
    </Dialog>
  );
}
