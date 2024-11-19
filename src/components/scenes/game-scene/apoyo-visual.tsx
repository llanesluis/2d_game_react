import { CONTAINERS_TRASH } from "@/constants";

export default function ApoyoVisual() {
  return (
    <div className="grid w-full grid-cols-3 gap-8">
      {CONTAINERS_TRASH.map((item) => {
        const { containerName, spriteSrc, trash, label } = item;

        return (
          <div
            key={containerName}
            className="group flex flex-col items-center gap-2 p-2 hover:bg-muted/50"
          >
            <img src={spriteSrc} alt={containerName} className="h-28" />
            <div className="group-hover:filter-blur flex w-full flex-wrap items-center justify-center gap-2 pt-2">
              {trash.map((trash) => {
                return (
                  <img
                    src={trash.spriteSrc}
                    key={trash.name}
                    className="max-h-6 max-w-6"
                  />
                );
              })}
            </div>
            <span className="mb-auto text-center text-sm">{label}</span>
          </div>
        );
      })}
    </div>
  );
}
