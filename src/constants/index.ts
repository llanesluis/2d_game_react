type FirstLevelTrash =
  | "bolsaBasura"
  | "papel"
  | "avionPapel"
  | "botellaPlastico"
  | "platano"
  | "manzana"
  | "carton"
  | "lata"
  | "regla";

type SecondLevelTrash =
  | "lata"
  | "coco"
  | "platano"
  | "botellaVidrio"
  | "cerveza"
  | "botellaPlastico"
  | "vasoPlastico"
  | "bolsaBasura"
  | "cubetaArena"
  | "pescado"
  | "huesosPescado";

type ThirdLevelTrash =
  | "bolsaBasura"
  | "botellaPlastico"
  | "vasoPlastico"
  | "botellaVidrio"
  | "botellaVidrio2"
  | "bolsaBasura"
  | "papel"
  | "carton"
  | "lata"
  | "platano"
  | "manzana"
  | "foco"
  | "llanta"
  | "laptop"
  | "popo";

export type ContainerName =
  | "amarilloPlasticosMetal"
  | "azulPapelCarton"
  | "grisGeneral"
  | "naranjaOrganicos"
  | "rojoElectronicosPeligrosos"
  | "verdeVidrio";

export type Trash = {
  name: FirstLevelTrash | SecondLevelTrash | ThirdLevelTrash;
  spriteSrc: string;
  containerName: ContainerName;
};

export type Container = {
  name: ContainerName;
  spriteSrc: string;
};

type Level = 1 | 2 | 3;

export type LevelData = {
  level: Level;
  time: number;
  speed: number;
  imageSrc: string;
  text: string;
  goal: number;
  trash: Trash[];
  containers: Container[];
} | null;

export const LEVELS = [
  {
    level: 1,
    time: 90,
    speed: 1,
    imageSrc: "/src/assets/images/places/school_2.gif",
    text: "Tu tarea es ayudar al conserje de la <strong>escuela</strong> a recoger y acomodar los residuos en sus respectivos contenedores.",
    goal: 20,
    trash: [
      {
        name: "bolsaBasura",
        spriteSrc: "/src/assets/images/trash/bolsaBasura.png",
        containerName: "grisGeneral",
      },
      {
        name: "papel",
        spriteSrc: "/src/assets/images/trash/papel.png",
        containerName: "azulPapelCarton",
      },
      {
        name: "avionPapel",
        spriteSrc: "/src/assets/images/trash/avionPapel.png",
        containerName: "azulPapelCarton",
      },
      {
        name: "botellaPlastico",
        spriteSrc: "/src/assets/images/trash/botellaPlastico.png",
        containerName: "amarilloPlasticosMetal",
      },
      {
        name: "platano",
        spriteSrc: "/src/assets/images/trash/platano.png",
        containerName: "naranjaOrganicos",
      },
      {
        name: "manzana",
        spriteSrc: "/src/assets/images/trash/manzana.png",
        containerName: "naranjaOrganicos",
      },
      {
        name: "carton",
        spriteSrc: "/src/assets/images/trash/carton.png",
        containerName: "azulPapelCarton",
      },
      {
        name: "lata",
        spriteSrc: "/src/assets/images/trash/lata.png",
        containerName: "amarilloPlasticosMetal",
      },
      {
        name: "regla",
        spriteSrc: "/src/assets/images/trash/regla.png",
        containerName: "amarilloPlasticosMetal",
      },
    ],
    containers: [
      {
        name: "azulPapelCarton",
        spriteSrc: "/src/assets/images/containers/azulPapelCarton.png",
      },
      {
        name: "amarilloPlasticosMetal",
        spriteSrc: "/src/assets/images/containers/amarilloPlasticosMetal.png",
      },
      {
        name: "naranjaOrganicos",
        spriteSrc: "/src/assets/images/containers/naranjaOrganicos.png",
      },
      {
        name: "grisGeneral",
        spriteSrc: "/src/assets/images/containers/grisGeneral.png",
      },
    ],
  },
  {
    level: 2,
    time: 75,
    speed: 1.25,
    imageSrc: "/src/assets/images/places/beach.gif",
    text: "Necesitan de tu ayuda para limpiar la <strong>playa</strong>. !Fíjate bien! La <strong>basura y contenedores cambiaron</strong>. Y... !ahora hay más!",
    goal: 25,
    trash: [
      {
        name: "lata",
        spriteSrc: "/src/assets/images/trash/lata.png",
        containerName: "amarilloPlasticosMetal",
      },
      {
        name: "coco",
        spriteSrc: "/src/assets/images/trash/coco.png",
        containerName: "naranjaOrganicos",
      },
      {
        name: "platano",
        spriteSrc: "/src/assets/images/trash/platano.png",
        containerName: "naranjaOrganicos",
      },
      {
        name: "botellaVidrio",
        spriteSrc: "/src/assets/images/trash/botellaVidrio.png",
        containerName: "verdeVidrio",
      },
      {
        name: "cerveza",
        spriteSrc: "/src/assets/images/trash/cerveza.png",
        containerName: "verdeVidrio",
      },
      {
        name: "botellaPlastico",
        spriteSrc: "/src/assets/images/trash/botellaPlastico.png",
        containerName: "amarilloPlasticosMetal",
      },
      {
        name: "vasoPlastico",
        spriteSrc: "/src/assets/images/trash/vasoPlastico.png",
        containerName: "amarilloPlasticosMetal",
      },
      {
        name: "bolsaBasura",
        spriteSrc: "/src/assets/images/trash/bolsaBasura.png",
        containerName: "grisGeneral",
      },
      {
        name: "cubetaArena",
        spriteSrc: "/src/assets/images/trash/cubetaArena.png",
        containerName: "amarilloPlasticosMetal",
      },
      {
        name: "pescado",
        spriteSrc: "/src/assets/images/trash/pescado.png",
        containerName: "naranjaOrganicos",
      },
      {
        name: "huesosPescado",
        spriteSrc: "/src/assets/images/trash/huesosPescado.png",
        containerName: "naranjaOrganicos",
      },
    ],
    containers: [
      {
        name: "amarilloPlasticosMetal",
        spriteSrc: "/src/assets/images/containers/amarilloPlasticosMetal.png",
      },
      {
        name: "verdeVidrio",
        spriteSrc: "/src/assets/images/containers/verdeVidrio.png",
      },
      {
        name: "grisGeneral",
        spriteSrc: "/src/assets/images/containers/grisGeneral.png",
      },
      {
        name: "naranjaOrganicos",
        spriteSrc: "/src/assets/images/containers/naranjaOrganicos.png",
      },
    ],
  },
  {
    level: 3,
    time: 60,
    speed: 1.5,
    imageSrc: "/src/assets/images/places/city_4.gif",
    text: "La <strong>ciudad</strong> está llena de residuos de <strong>todo tipo</strong> y se ha vuelto complicado separarla. Ten cuidado... !la basura puede ser <strong>peligrosa</strong>!",
    goal: 30,
    trash: [
      {
        name: "papel",
        spriteSrc: "/src/assets/images/trash/papel.png",
        containerName: "azulPapelCarton",
      },
      {
        name: "carton",
        spriteSrc: "/src/assets/images/trash/carton.png",
        containerName: "azulPapelCarton",
      },
      {
        name: "botellaPlastico",
        spriteSrc: "/src/assets/images/trash/botellaPlastico.png",
        containerName: "amarilloPlasticosMetal",
      },
      {
        name: "lata",
        spriteSrc: "/src/assets/images/trash/lata.png",
        containerName: "amarilloPlasticosMetal",
      },
      {
        name: "llanta",
        spriteSrc: "/src/assets/images/trash/llanta.png",
        containerName: "amarilloPlasticosMetal",
      },
      {
        name: "vasoPlastico",
        spriteSrc: "/src/assets/images/trash/vasoPlastico.png",
        containerName: "amarilloPlasticosMetal",
      },
      {
        name: "botellaVidrio",
        spriteSrc: "/src/assets/images/trash/botellaVidrio.png",
        containerName: "verdeVidrio",
      },
      {
        name: "botellaVidrio2",
        spriteSrc: "/src/assets/images/trash/botellaVidrio2.png",
        containerName: "verdeVidrio",
      },
      {
        name: "platano",
        spriteSrc: "/src/assets/images/trash/platano.png",
        containerName: "naranjaOrganicos",
      },
      {
        name: "manzana",
        spriteSrc: "/src/assets/images/trash/manzana.png",
        containerName: "naranjaOrganicos",
      },
      {
        name: "popo",
        spriteSrc: "/src/assets/images/trash/popo.png",
        containerName: "naranjaOrganicos",
      },
      {
        name: "laptop",
        spriteSrc: "/src/assets/images/trash/laptop.png",
        containerName: "rojoElectronicosPeligrosos",
      },
      {
        name: "foco",
        spriteSrc: "/src/assets/images/trash/foco.png",
        containerName: "rojoElectronicosPeligrosos",
      },
    ],
    containers: [
      {
        name: "amarilloPlasticosMetal",
        spriteSrc: "/src/assets/images/containers/amarilloPlasticosMetal.png",
      },
      {
        name: "naranjaOrganicos",
        spriteSrc: "/src/assets/images/containers/naranjaOrganicos.png",
      },
      {
        name: "verdeVidrio",
        spriteSrc: "/src/assets/images/containers/verdeVidrio.png",
      },
      {
        name: "rojoElectronicosPeligrosos",
        spriteSrc:
          "/src/assets/images/containers/rojoElectronicosPeligrosos.png",
      },
      {
        name: "azulPapelCarton",
        spriteSrc: "/src/assets/images/containers/azulPapelCarton.png",
      },
    ],
  },
] satisfies LevelData[];
