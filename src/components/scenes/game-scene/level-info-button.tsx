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

export default function LevelInfoButton() {
  return (
    <Dialog>
      <DialogTrigger>
        <Alert
          className={cn(
            "filter-blur size-6 transition-all",
            "text-blue-500 hover:text-blue-300 active:scale-95",
          )}
        />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle
            className={cn(
              "flex items-center justify-center gap-2 space-y-0",
              "filter-blur text-2xl text-blue-500",
            )}
          >
            <Alert className="size-6" />
            <span className="">Instrucciones</span>
            <Alert className="size-6" />
          </DialogTitle>
        </DialogHeader>

        <DialogDescription className="border-b-2 pb-2">
          El tiempo <strong>seguirá corriendo</strong>, consulta las
          instrucciones y ayuda bajo tu propio riesgo.
        </DialogDescription>

        {/* Incrusté el html con dangerouslySetInnerHTML para que pueda usar tags html */}
        <p dangerouslySetInnerHTML={{ __html: instructions }} />

        <ApoyoVisual />
      </DialogContent>
    </Dialog>
  );
}

const instructions =
  "Arrastra la basura con el <strong>mouse</strong> y llévala al <strong>contenedor correcto</strong> para ganar puntos. Debes llenar la barra de progreso antes de que se <strong>acabe el tiempo</strong>.";
