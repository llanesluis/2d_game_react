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
  containerColor: string;
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
    imageSrc: "/assets/images/places/school_2.gif",
    text: "Tu tarea es ayudar al conserje de la <strong>escuela</strong> a recoger y acomodar los residuos en sus respectivos contenedores.",
    goal: 20,
    trash: [
      {
        name: "bolsaBasura",
        spriteSrc: "/assets/images/trash/bolsaBasura.png",
        containerName: "grisGeneral",
        containerColor: "#A9A9A9",
      },
      {
        name: "papel",
        spriteSrc: "/assets/images/trash/papel.png",
        containerName: "azulPapelCarton",
        containerColor: "#4169E1",
      },
      {
        name: "avionPapel",
        spriteSrc: "/assets/images/trash/avionPapel.png",
        containerName: "azulPapelCarton",
        containerColor: "#4169E1",
      },
      {
        name: "botellaPlastico",
        spriteSrc: "/assets/images/trash/botellaPlastico.png",
        containerName: "amarilloPlasticosMetal",
        containerColor: "#FFEE00",
      },
      {
        name: "platano",
        spriteSrc: "/assets/images/trash/platano.png",
        containerName: "naranjaOrganicos",
        containerColor: "#FF7B00",
      },
      {
        name: "manzana",
        spriteSrc: "/assets/images/trash/manzana.png",
        containerName: "naranjaOrganicos",
        containerColor: "#FF7B00",
      },
      {
        name: "carton",
        spriteSrc: "/assets/images/trash/carton.png",
        containerName: "azulPapelCarton",
        containerColor: "#4169E1",
      },
      {
        name: "lata",
        spriteSrc: "/assets/images/trash/lata.png",
        containerName: "amarilloPlasticosMetal",
        containerColor: "#FFEE00",
      },
      {
        name: "regla",
        spriteSrc: "/assets/images/trash/regla.png",
        containerName: "amarilloPlasticosMetal",
        containerColor: "#FFEE00",
      },
    ],
    containers: [
      {
        name: "azulPapelCarton",
        spriteSrc: "/assets/images/containers/azulPapelCarton.png",
      },
      {
        name: "amarilloPlasticosMetal",
        spriteSrc: "/assets/images/containers/amarilloPlasticosMetal.png",
      },
      {
        name: "naranjaOrganicos",
        spriteSrc: "/assets/images/containers/naranjaOrganicos.png",
      },
      {
        name: "grisGeneral",
        spriteSrc: "/assets/images/containers/grisGeneral.png",
      },
    ],
  },
  {
    level: 2,
    time: 75,
    speed: 1.25,
    imageSrc: "/assets/images/places/beach.gif",
    text: "Necesitan de tu ayuda para limpiar la <strong>playa</strong>. ¡Fíjate bien! La <strong>basura y contenedores cambiaron</strong>. Y... ¡ahora hay más!",
    goal: 25,
    trash: [
      {
        name: "lata",
        spriteSrc: "/assets/images/trash/lata.png",
        containerName: "amarilloPlasticosMetal",
        containerColor: "#FFEE00",
      },
      {
        name: "coco",
        spriteSrc: "/assets/images/trash/coco.png",
        containerName: "naranjaOrganicos",
        containerColor: "#FF7B00",
      },
      {
        name: "platano",
        spriteSrc: "/assets/images/trash/platano.png",
        containerName: "naranjaOrganicos",
        containerColor: "#FF7B00",
      },
      {
        name: "botellaVidrio",
        spriteSrc: "/assets/images/trash/botellaVidrio.png",
        containerName: "verdeVidrio",
        containerColor: "#27C200",
      },
      {
        name: "cerveza",
        spriteSrc: "/assets/images/trash/cerveza.png",
        containerName: "verdeVidrio",
        containerColor: "#27C200",
      },
      {
        name: "botellaPlastico",
        spriteSrc: "/assets/images/trash/botellaPlastico.png",
        containerName: "amarilloPlasticosMetal",
        containerColor: "#FFEE00",
      },
      {
        name: "vasoPlastico",
        spriteSrc: "/assets/images/trash/vasoPlastico.png",
        containerName: "amarilloPlasticosMetal",
        containerColor: "#FFEE00",
      },
      {
        name: "bolsaBasura",
        spriteSrc: "/assets/images/trash/bolsaBasura.png",
        containerName: "grisGeneral",
        containerColor: "#A9A9A9",
      },
      {
        name: "cubetaArena",
        spriteSrc: "/assets/images/trash/cubetaArena.png",
        containerName: "amarilloPlasticosMetal",
        containerColor: "#FFEE00",
      },
      {
        name: "pescado",
        spriteSrc: "/assets/images/trash/pescado.png",
        containerName: "naranjaOrganicos",
        containerColor: "#FF7B00",
      },
      {
        name: "huesosPescado",
        spriteSrc: "/assets/images/trash/huesosPescado.png",
        containerName: "naranjaOrganicos",
        containerColor: "#FF7B00",
      },
    ],
    containers: [
      {
        name: "amarilloPlasticosMetal",
        spriteSrc: "/assets/images/containers/amarilloPlasticosMetal.png",
      },
      {
        name: "verdeVidrio",
        spriteSrc: "/assets/images/containers/verdeVidrio.png",
      },
      {
        name: "grisGeneral",
        spriteSrc: "/assets/images/containers/grisGeneral.png",
      },
      {
        name: "naranjaOrganicos",
        spriteSrc: "/assets/images/containers/naranjaOrganicos.png",
      },
    ],
  },
  {
    level: 3,
    time: 60,
    speed: 1.5,
    imageSrc: "/assets/images/places/city_4.gif",
    text: "La <strong>ciudad</strong> está llena de residuos de <strong>todo tipo</strong> y se ha vuelto complicado separarla. ¡Ten cuidado... la basura puede ser <strong>peligrosa</strong>!",
    goal: 30,
    trash: [
      {
        name: "bolsaBasura",
        spriteSrc: "/assets/images/trash/bolsaBasura.png",
        containerName: "grisGeneral",
        containerColor: "#A9A9A9",
      },
      {
        name: "botellaPlastico",
        spriteSrc: "/assets/images/trash/botellaPlastico.png",
        containerName: "amarilloPlasticosMetal",
        containerColor: "#FFEE00",
      },
      {
        name: "vasoPlastico",
        spriteSrc: "/assets/images/trash/vasoPlastico.png",
        containerName: "amarilloPlasticosMetal",
        containerColor: "#FFEE00",
      },
      {
        name: "botellaVidrio",
        spriteSrc: "/assets/images/trash/botellaVidrio.png",
        containerName: "verdeVidrio",
        containerColor: "#27C200",
      },
      {
        name: "botellaVidrio2",
        spriteSrc: "/assets/images/trash/botellaVidrio2.png",
        containerName: "verdeVidrio",
        containerColor: "#27C200",
      },
      {
        name: "papel",
        spriteSrc: "/assets/images/trash/papel.png",
        containerName: "azulPapelCarton",
        containerColor: "#4169E1",
      },
      {
        name: "carton",
        spriteSrc: "/assets/images/trash/carton.png",
        containerName: "azulPapelCarton",
        containerColor: "#4169E1",
      },
      {
        name: "lata",
        spriteSrc: "/assets/images/trash/lata.png",
        containerName: "amarilloPlasticosMetal",
        containerColor: "#FFEE00",
      },
      {
        name: "platano",
        spriteSrc: "/assets/images/trash/platano.png",
        containerName: "naranjaOrganicos",
        containerColor: "#FF7B00",
      },
      {
        name: "manzana",
        spriteSrc: "/assets/images/trash/manzana.png",
        containerName: "naranjaOrganicos",
        containerColor: "#FF7B00",
      },
      {
        name: "foco",
        spriteSrc: "/assets/images/trash/foco.png",
        containerName: "rojoElectronicosPeligrosos",
        containerColor: "#FF0000",
      },
      {
        name: "llanta",
        spriteSrc: "/assets/images/trash/llanta.png",
        containerName: "amarilloPlasticosMetal",
        containerColor: "#FFEE00",
      },
      {
        name: "laptop",
        spriteSrc: "/assets/images/trash/laptop.png",
        containerName: "rojoElectronicosPeligrosos",
        containerColor: "#FF0000",
      },
      {
        name: "popo",
        spriteSrc: "/assets/images/trash/popo.png",
        containerName: "naranjaOrganicos",
        containerColor: "#FF7B00",
      },
    ],
    containers: [
      {
        name: "amarilloPlasticosMetal",
        spriteSrc: "/assets/images/containers/amarilloPlasticosMetal.png",
      },
      {
        name: "naranjaOrganicos",
        spriteSrc: "/assets/images/containers/naranjaOrganicos.png",
      },
      {
        name: "verdeVidrio",
        spriteSrc: "/assets/images/containers/verdeVidrio.png",
      },
      {
        name: "azulPapelCarton",
        spriteSrc: "/assets/images/containers/azulPapelCarton.png",
      },
      {
        name: "rojoElectronicosPeligrosos",
        spriteSrc: "/assets/images/containers/rojoElectronicosPeligrosos.png",
      },
      {
        name: "grisGeneral",
        spriteSrc: "/assets/images/containers/grisGeneral.png",
      },
    ],
  },
] satisfies LevelData[];

export const CONTAINERS_TRASH = [
  {
    containerName: "amarilloPlasticosMetal",
    label: "Metal y Plásticos",
    spriteSrc: "/assets/images/containers/amarilloPlasticosMetal.png",
    trash: [
      {
        name: "botellaPlastico",
        spriteSrc: "/assets/images/trash/botellaPlastico.png",
        containerName: "amarilloPlasticosMetal",
      },
      {
        name: "vasoPlastico",
        spriteSrc: "/assets/images/trash/vasoPlastico.png",
        containerName: "amarilloPlasticosMetal",
      },
      {
        name: "lata",
        spriteSrc: "/assets/images/trash/lata.png",
        containerName: "amarilloPlasticosMetal",
      },
      {
        name: "llanta",
        spriteSrc: "/assets/images/trash/llanta.png",
        containerName: "amarilloPlasticosMetal",
      },
      {
        name: "cubetaArena",
        spriteSrc: "/assets/images/trash/cubetaArena.png",
        containerName: "amarilloPlasticosMetal",
      },
    ],
  },
  {
    containerName: "azulPapelCarton",
    label: "Papel y Cartón",
    spriteSrc: "/assets/images/containers/azulPapelCarton.png",
    trash: [
      {
        name: "papel",
        spriteSrc: "/assets/images/trash/papel.png",
        containerName: "azulPapelCarton",
      },
      {
        name: "carton",
        spriteSrc: "/assets/images/trash/carton.png",
        containerName: "azulPapelCarton",
      },
      {
        name: "avionPapel",
        spriteSrc: "/assets/images/trash/avionPapel.png",
        containerName: "azulPapelCarton",
      },
    ],
  },
  {
    containerName: "grisGeneral",
    label: "Generales",
    spriteSrc: "/assets/images/containers/grisGeneral.png",
    trash: [
      {
        name: "bolsaBasura",
        spriteSrc: "/assets/images/trash/bolsaBasura.png",
        containerName: "grisGeneral",
      },
    ],
  },
  {
    containerName: "naranjaOrganicos",
    label: "Orgánicos",
    spriteSrc: "/assets/images/containers/naranjaOrganicos.png",
    trash: [
      {
        name: "platano",
        spriteSrc: "/assets/images/trash/platano.png",
        containerName: "naranjaOrganicos",
      },
      {
        name: "manzana",
        spriteSrc: "/assets/images/trash/manzana.png",
        containerName: "naranjaOrganicos",
      },
      {
        name: "coco",
        spriteSrc: "/assets/images/trash/coco.png",
        containerName: "naranjaOrganicos",
      },
      {
        name: "pescado",
        spriteSrc: "/assets/images/trash/pescado.png",
        containerName: "naranjaOrganicos",
      },
      {
        name: "huesosPescado",
        spriteSrc: "/assets/images/trash/huesosPescado.png",
        containerName: "naranjaOrganicos",
      },
      {
        name: "popo",
        spriteSrc: "/assets/images/trash/popo.png",
        containerName: "naranjaOrganicos",
      },
    ],
  },
  {
    containerName: "verdeVidrio",
    label: "Vidrio",
    spriteSrc: "/assets/images/containers/verdeVidrio.png",
    trash: [
      {
        name: "botellaVidrio",
        spriteSrc: "/assets/images/trash/botellaVidrio.png",
        containerName: "verdeVidrio",
      },
      {
        name: "botellaVidrio2",
        spriteSrc: "/assets/images/trash/botellaVidrio2.png",
        containerName: "verdeVidrio",
      },
      {
        name: "cerveza",
        spriteSrc: "/assets/images/trash/cerveza.png",
        containerName: "verdeVidrio",
      },
    ],
  },
  {
    containerName: "rojoElectronicosPeligrosos",
    label: "Electrónicos y Peligrosos",
    spriteSrc: "/assets/images/containers/rojoElectronicosPeligrosos.png",
    trash: [
      {
        name: "laptop",
        spriteSrc: "/assets/images/trash/laptop.png",
        containerName: "rojoElectronicosPeligrosos",
      },
      {
        name: "foco",
        spriteSrc: "/assets/images/trash/foco.png",
        containerName: "rojoElectronicosPeligrosos",
      },
    ],
  },
];

export const BUFF_COINS = {
  clue: 3,
  colorHint: 10,
};
