import Github from "@/components/icons/Github";
import Open from "@/components/icons/Open";
import { cn } from "@/lib/utils";

export default function CreditsScene() {
  return (
    <section className="relative isolate size-full overflow-hidden p-4 md:p-10">
      <div className={cn("flex flex-col gap-8", "animate-credits")}>
        <h1
          className={cn(
            "text-center uppercase",
            "text-4xl font-bold sm:text-6xl md:text-7xl",
          )}
        >
          creditos
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint neque
          explicabo veritatis eius necessitatibus minus est excepturi, eos
          recusandae et. Dolores vel rerum repudiandae nam, illum quidem quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint neque
          explicabo veritatis eius necessitatibus minus est excepturi, eos
          recusandae et. Dolores vel rerum repudiandae nam, illum quidem quos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint neque
          explicabo veritatis eius necessitatibus minus est excepturi, eos
          recusandae et. Dolores vel rerum repudiandae nam, illum quidem quos.
        </p>

        <p>Lorem ipsum dolor sit.</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          alias ex explicabo, laudantium optio suscipit? Eos.
        </p>

        <div className="mt-32 flex flex-col items-center gap-6 text-center">
          <p>Luis Fernando Llanes Bojorquez - 21021138</p>

          <a
            href="https://github.com/llanesluis"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 hover:underline"
          >
            <Github className="size-6" />{" "}
            <span className="flex items-center">
              Disponible en GitHub
              <Open className="size-4" />
            </span>
          </a>

          <p>{new Date().toLocaleString()}</p>
        </div>
      </div>
    </section>
  );
}
