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
    imageSrc: "/assets/images/places/school_2.gif",
    text: "Tu tarea es ayudar al conserje de la <strong>escuela</strong> a recoger y acomodar los residuos en sus respectivos contenedores.",
    goal: 20,
    trash: [
      {
        name: "bolsaBasura",
        spriteSrc: "/assets/images/trash/bolsaBasura.png",
        containerName: "grisGeneral",
      },
      {
        name: "papel",
        spriteSrc: "/assets/images/trash/papel.png",
        containerName: "azulPapelCarton",
      },
      {
        name: "avionPapel",
        spriteSrc: "/assets/images/trash/avionPapel.png",
        containerName: "azulPapelCarton",
      },
      {
        name: "botellaPlastico",
        spriteSrc: "/assets/images/trash/botellaPlastico.png",
        containerName: "amarilloPlasticosMetal",
      },
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
        name: "carton",
        spriteSrc: "/assets/images/trash/carton.png",
        containerName: "azulPapelCarton",
      },
      {
        name: "lata",
        spriteSrc: "/assets/images/trash/lata.png",
        containerName: "amarilloPlasticosMetal",
      },
      {
        name: "regla",
        spriteSrc: "/assets/images/trash/regla.png",
        containerName: "amarilloPlasticosMetal",
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
    text: "Necesitan de tu ayuda para limpiar la <strong>playa</strong>. !Fíjate bien! La <strong>basura y contenedores cambiaron</strong>. Y... !ahora hay más!",
    goal: 25,
    trash: [
      {
        name: "lata",
        spriteSrc: "/assets/images/trash/lata.png",
        containerName: "amarilloPlasticosMetal",
      },
      {
        name: "coco",
        spriteSrc: "/assets/images/trash/coco.png",
        containerName: "naranjaOrganicos",
      },
      {
        name: "platano",
        spriteSrc: "/assets/images/trash/platano.png",
        containerName: "naranjaOrganicos",
      },
      {
        name: "botellaVidrio",
        spriteSrc: "/assets/images/trash/botellaVidrio.png",
        containerName: "verdeVidrio",
      },
      {
        name: "cerveza",
        spriteSrc: "/assets/images/trash/cerveza.png",
        containerName: "verdeVidrio",
      },
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
        name: "bolsaBasura",
        spriteSrc: "/assets/images/trash/bolsaBasura.png",
        containerName: "grisGeneral",
      },
      {
        name: "cubetaArena",
        spriteSrc: "/assets/images/trash/cubetaArena.png",
        containerName: "amarilloPlasticosMetal",
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
    text: "La <strong>ciudad</strong> está llena de residuos de <strong>todo tipo</strong> y se ha vuelto complicado separarla. Ten cuidado... !la basura puede ser <strong>peligrosa</strong>!",
    goal: 30,
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
        name: "botellaPlastico",
        spriteSrc: "/assets/images/trash/botellaPlastico.png",
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
        name: "vasoPlastico",
        spriteSrc: "/assets/images/trash/vasoPlastico.png",
        containerName: "amarilloPlasticosMetal",
      },
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
        name: "popo",
        spriteSrc: "/assets/images/trash/popo.png",
        containerName: "naranjaOrganicos",
      },
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
        name: "rojoElectronicosPeligrosos",
        spriteSrc: "/assets/images/containers/rojoElectronicosPeligrosos.png",
      },
      {
        name: "azulPapelCarton",
        spriteSrc: "/assets/images/containers/azulPapelCarton.png",
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
      },
      {
        name: "vasoPlastico",
        spriteSrc: "/assets/images/trash/vasoPlastico.png",
      },
      {
        name: "lata",
        spriteSrc: "/assets/images/trash/lata.png",
      },
      {
        name: "llanta",
        spriteSrc: "/assets/images/trash/llanta.png",
      },
      {
        name: "cubetaArena",
        spriteSrc: "/assets/images/trash/cubetaArena.png",
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
      },
      {
        name: "carton",
        spriteSrc: "/assets/images/trash/carton.png",
      },
      {
        name: "avionPapel",
        spriteSrc: "/assets/images/trash/avionPapel.png",
      },
    ],
  },
  {
    containerName: "grisGeneral",
    label: "Desechos Generales",
    spriteSrc: "/assets/images/containers/grisGeneral.png",
    trash: [
      {
        name: "bolsaBasura",
        spriteSrc: "/assets/images/trash/bolsaBasura.png",
      },
    ],
  },
  {
    containerName: "naranjaOrganicos",
    label: "Desechos Orgánicos",
    spriteSrc: "/assets/images/containers/naranjaOrganicos.png",
    trash: [
      {
        name: "platano",
        spriteSrc: "/assets/images/trash/platano.png",
      },
      {
        name: "manzana",
        spriteSrc: "/assets/images/trash/manzana.png",
      },
      {
        name: "coco",
        spriteSrc: "/assets/images/trash/coco.png",
      },
      {
        name: "pescado",
        spriteSrc: "/assets/images/trash/pescado.png",
      },
      {
        name: "huesosPescado",
        spriteSrc: "/assets/images/trash/huesosPescado.png",
      },
      {
        name: "popo",
        spriteSrc: "/assets/images/trash/popo.png",
      },
    ],
  },
  {
    containerName: "verdeVidrio",
    label: "Vidrios",
    spriteSrc: "/assets/images/containers/verdeVidrio.png",
    trash: [
      {
        name: "botellaVidrio",
        spriteSrc: "/assets/images/trash/botellaVidrio.png",
      },
      {
        name: "botellaVidrio2",
        spriteSrc: "/assets/images/trash/botellaVidrio2.png",
      },
      {
        name: "cerveza",
        spriteSrc: "/assets/images/trash/cerveza.png",
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
      },
      {
        name: "foco",
        spriteSrc: "/assets/images/trash/foco.png",
      },
    ],
  },
];

export const BUFF_COINS = {
  clue: 3,
  aura: 5,
};
