import { CONTAINERS_TRASH } from "@/constants";

export default function ApoyoVisual() {
  return (
    <div className="grid w-full grid-cols-3 gap-2">
      {CONTAINERS_TRASH.map((item) => {
        const { containerName, spriteSrc, trash, label } = item;

        return (
          <div
            key={containerName}
            className="hover:filter-blur group flex flex-col items-center gap-1 p-2"
          >
            <img src={spriteSrc} alt={containerName} className="h-24" />
            <div className="flex w-full flex-wrap items-center justify-center gap-1 pt-1">
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
            <span className="mb-auto text-center text-sm text-neutral-200">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
