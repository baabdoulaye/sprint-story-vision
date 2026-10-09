import hero from "@/assets/hero.jpg";
import finish from "@/assets/finish.jpg";
import spikes from "@/assets/spikes.jpg";
import mental from "@/assets/mental.jpg";

export type Category =
  | "Diamond League"
  | "Biomécanique"
  | "Matériel & Pointes"
  | "JO & Mondiaux"
  | "Science"
  | "Culture";
export type Discipline = "60m" | "100m" | "200m" | "400m" | "4x100m";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "box"; title: string; text: string }
  | { type: "stats"; items: { label: string; value: string }[] };

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: Block[];
  author: string;
  date: string; // ISO
  readTime: number;
  category: Category;
  disciplines: Discipline[];
  tags: string[];
  image: string;
  videoUrl: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  badge?: string;
  thumbnail: string;
  videoUrl: string;
}

const V1 = "https://videos.pexels.com/video-files/5319099/5319099-hd_1920_1080_25fps.mp4";
const V2 = "https://videos.pexels.com/video-files/4761738/4761738-hd_1920_1080_25fps.mp4";
const V3 = "https://videos.pexels.com/video-files/5319093/5319093-hd_1920_1080_25fps.mp4";

const hoursAgo = (h: number) => new Date(Date.now() - h * 3600_000).toISOString();

export const tickerItems = [
  "RECORDS DU MONDE",
  "60M SALLE : 6.34s",
  "100M : 9.58s",
  "200M : 19.19s",
  "BIOMÉCANIQUE DE POUSSÉE",
  "SPLIT 30M : 3.78s",
  "FRÉQUENCE DE FOULÉE : 4.8 Hz",
  "CONTACT AU SOL : 0.09s",
];

export const articles: Article[] = [
  {
    id: "1",
    slug: "art-du-depart-starting-blocks",
    title: "L'art du départ en starting-blocks : comment gagner 0.15s sur la phase de poussée",
    excerpt:
      "Angles des tibias, pression sur les cales, premier appui : les 0,5 premières secondes décident d'une finale. Décryptage d'un geste millimétré.",
    author: "Ba Abdoulaye",
    date: hoursAgo(2),
    readTime: 9,
    category: "Biomécanique",
    disciplines: ["60m", "100m"],
    tags: ["Départ", "Puissance", "Technique"],
    image: hero,
    videoUrl: V1,
    content: [
      {
        type: "p",
        text: "Un sprint de 100m se gagne rarement dans les blocs, mais il se perd très souvent là. Entre le coup de pistolet et la sortie complète du corps, un athlète d'élite produit une impulsion horizontale qui dépasse 2,5 fois son poids de corps. Chaque degré, chaque centimètre compte.",
      },
      { type: "h2", text: "La géométrie de la position « prêts »" },
      {
        type: "p",
        text: "Les études biomécaniques convergent : un angle de genou avant proche de 90° et un genou arrière autour de 120° maximisent la force produite sur les cales. Les hanches se placent légèrement plus haut que les épaules, la projection du centre de masse se trouve juste derrière les mains.",
      },
      {
        type: "stats",
        items: [
          { label: "Angle genou avant", value: "90°" },
          { label: "Angle genou arrière", value: "120°" },
          { label: "Temps sur blocs", value: "0.34s" },
          { label: "Gain potentiel", value: "0.15s" },
        ],
      },
      {
        type: "quote",
        text: "Le départ, c'est une détonation contrôlée. Si tu penses, tu es déjà en retard.",
        cite: "Maurice Green",
      },
      {
        type: "box",
        title: "Le geste technique décrypté",
        text: "Pousser les deux cales simultanément, puis la jambe arrière quitte la première. Le bras opposé est lancé vers l'avant, coude fléchi, pour équilibrer la rotation. Le premier appui doit tomber derrière la verticale du centre de masse.",
      },
      { type: "h2", text: "Les trois premiers appuis" },
      {
        type: "p",
        text: "Le corps reste incliné d'environ 45° sur les premiers appuis. Se redresser trop tôt, c'est perdre la composante horizontale de la force : la faute la plus commune chez les jeunes sprinteurs. Les meilleurs « montent les marches » progressivement jusqu'à 30 mètres.",
      },
      {
        type: "p",
        text: "En pratique, les entraîneurs travaillent avec des départs résistés (traîneau, élastiques) et des départs en côte pour ancrer cette inclinaison. Résultat mesuré chez les athlètes suivis : jusqu'à 0,15s gagnées sur les 10 premiers mètres en une saison.",
      },
    ],
  },
  {
    id: "2",
    slug: "barriere-des-9-70",
    title: "Barrière des 9.70s : qui sont les prochains prétendants au trône du 100m ?",
    excerpt:
      "Une génération de sprinteurs flirte avec les 9.70s. Profils, chronos et forces en présence avant les prochains Mondiaux.",
    author: "Karim Benali",
    date: hoursAgo(5),
    readTime: 7,
    category: "JO & Mondiaux",
    disciplines: ["100m"],
    tags: ["Chrono", "Mondiaux", "Rivalités"],
    image: finish,
    videoUrl: V2,
    content: [
      {
        type: "p",
        text: "Depuis l'ère des 9.58s, la discipline reine semblait figée. Pourtant, jamais autant d'athlètes n'avaient couru sous les 9.85s en une seule saison. La barrière psychologique des 9.70s est de nouveau dans le viseur.",
      },
      { type: "h2", text: "Les profils qui dominent" },
      {
        type: "p",
        text: "Trois archétypes s'imposent : le démarreur explosif, capable de mener à 60m ; le « finisseur » à grande foulée qui maintient sa vitesse de pointe ; et l'hybride 100/200 au volume aérobie supérieur. C'est ce dernier profil que les analystes jugent le mieux armé pour les tours successifs d'un championnat.",
      },
      {
        type: "stats",
        items: [
          { label: "Athlètes < 9.85s", value: "11" },
          { label: "Meilleur chrono saison", value: "9.76s" },
          { label: "Vitesse de pointe", value: "43.2 km/h" },
        ],
      },
      {
        type: "quote",
        text: "Le 9.70, ce n'est pas un chrono. C'est une porte. Celui qui la franchit change l'histoire du sprint.",
        cite: "Ancien finaliste olympique",
      },
      { type: "h2", text: "Les conditions du record" },
      {
        type: "p",
        text: "Vent favorable proche de +2.0 m/s, piste rapide, finale serrée : les ingrédients sont connus. La concurrence directe est sans doute le facteur le plus sous-estimé. Les plus grands chronos sont nés de duels.",
      },
    ],
  },
  {
    id: "3",
    slug: "sprint-court-60m-puissance-brute",
    title: "Sprint court vs long : pourquoi le 60m en salle exige une puissance brute sans égal",
    excerpt:
      "Pas de temps pour se rattraper. Le 60m est un concentré d'accélération pure qui sollicite les fibres rapides à l'extrême.",
    author: "Dr. Inès Robert",
    date: hoursAgo(20),
    readTime: 8,
    category: "Science",
    disciplines: ["60m", "200m", "400m"],
    tags: ["Physiologie", "Indoor", "Fibres rapides"],
    image: hero,
    videoUrl: V3,
    content: [
      {
        type: "p",
        text: "Le 60m se court presque intégralement en phase d'accélération. Là où le 100m laisse une marge pour la vitesse maximale et sa conservation, le 60m ne pardonne aucune hésitation au départ.",
      },
      { type: "h2", text: "Une dépendance quasi totale au système ATP-PCr" },
      {
        type: "p",
        text: "En moins de 7 secondes, l'énergie provient majoritairement de la phosphocréatine. Le 400m, à l'inverse, puise lourdement dans la glycolyse anaérobie et produit des taux de lactate supérieurs à 20 mmol/L.",
      },
      {
        type: "stats",
        items: [
          { label: "Durée 60m élite", value: "6.4s" },
          { label: "Part ATP-PCr", value: "~80%" },
          { label: "Lactate 400m", value: "20+ mmol/L" },
        ],
      },
      {
        type: "box",
        title: "Le geste technique décrypté",
        text: "Sur 60m, la fréquence prime : des appuis courts et réactifs, un temps de contact au sol sous les 0.09s dès 30m. La musculation privilégie la force maximale et la pliométrie basse amplitude.",
      },
      {
        type: "p",
        text: "C'est pour cela que certains spécialistes du 60m peinent sur 200m : l'explosivité n'est pas l'endurance de vitesse. Deux qualités, deux préparations.",
      },
    ],
  },
  {
    id: "4",
    slug: "pointes-carbone-revolution",
    title: "L'évolution des pointes en carbone : révolution technologique ou dopage mécanique ?",
    excerpt:
      "Plaques rigides, mousses à haut retour d'énergie : les pointes nouvelle génération bouleversent les chronos. Où placer la limite ?",
    author: "Thomas Viel",
    date: hoursAgo(30),
    readTime: 6,
    category: "Matériel & Pointes",
    disciplines: ["100m", "200m", "400m"],
    tags: ["Carbone", "Innovation", "Réglementation"],
    image: spikes,
    videoUrl: V1,
    content: [
      {
        type: "p",
        text: "Depuis l'arrivée des plaques en carbone sur route, la piste a suivi. Les pointes de sprint intègrent désormais des mousses épaisses et des plaques rigides qui modifient la raideur de la cheville.",
      },
      { type: "h2", text: "Ce que dit la règle" },
      {
        type: "p",
        text: "World Athletics limite l'épaisseur des semelles à 20 mm pour les épreuves jusqu'au 400m. Les fabricants optimisent donc chaque millimètre : géométrie de la plaque, placement des clous, densité de la mousse.",
      },
      {
        type: "stats",
        items: [
          { label: "Épaisseur max", value: "20 mm" },
          { label: "Gain estimé 400m", value: "~1%" },
          { label: "Poids d'une pointe", value: "130 g" },
        ],
      },
      {
        type: "quote",
        text: "On ne court pas plus vite grâce à la chaussure. On court plus vite plus longtemps.",
        cite: "Ingénieur R&D chaussure",
      },
      {
        type: "p",
        text: "Le débat reste ouvert : progrès technologique comme celui des pistes synthétiques, ou avantage qui fausse la comparaison historique ? Une certitude : les tableaux des records n'ont jamais autant bougé.",
      },
    ],
  },
  {
    id: "5",
    slug: "alimentation-sprinteur-elite",
    title:
      "L'alimentation du sprinteur d'élite : explosivité, masse maigre et superaliments naturels",
    excerpt:
      "Protéines, créatine, glucides ciblés : comment l'assiette construit les 10 secondes les plus rapides du monde.",
    author: "Camille Dorval",
    date: hoursAgo(48),
    readTime: 7,
    category: "Science",
    disciplines: ["100m", "200m"],
    tags: ["Nutrition", "Récupération", "Masse maigre"],
    image: finish,
    videoUrl: V2,
    content: [
      {
        type: "p",
        text: "Le sprinteur est un athlète de puissance : son objectif est un rapport force/poids maximal. Chaque kilo superflu ralentit, chaque fibre manquante coûte de l'explosivité.",
      },
      { type: "h2", text: "Les fondamentaux" },
      {
        type: "p",
        text: "Un apport protéique de 1,6 à 2,2 g/kg/jour, réparti en 4 à 5 prises, soutient la synthèse musculaire. Les glucides sont modulés selon la charge : élevés les jours de séances lactiques, plus bas les jours de technique.",
      },
      {
        type: "stats",
        items: [
          { label: "Protéines", value: "1.6–2.2 g/kg" },
          { label: "Créatine", value: "3–5 g/j" },
          { label: "Sommeil cible", value: "9h" },
        ],
      },
      {
        type: "box",
        title: "Superaliments naturels",
        text: "Jus de betterave (nitrates), cerise acidulée (récupération), œufs, poissons gras et légumineuses : une base simple, sans artifices, plébiscitée par les staffs médicaux.",
      },
      {
        type: "p",
        text: "La récupération reste le chaînon le plus négligé. Hydratation, sommeil et gestion du stress valent autant que n'importe quel complément.",
      },
    ],
  },
  {
    id: "6",
    slug: "chambre-d-appel-guerre-psychologique",
    title:
      "Dans la chambre d'appel : la guerre psychologique avant les 10 secondes les plus intenses du sport",
    excerpt:
      "Regards, silences, rituels : avant d'entrer sur la piste, la course a déjà commencé dans la tête.",
    author: " Ba Abdoulaye",
    date: hoursAgo(72),
    readTime: 10,
    category: "Culture",
    disciplines: ["100m", "200m", "400m", "4x100m"],
    tags: ["Mental", "Focus", "Rituels"],
    image: mental,
    videoUrl: V3,
    content: [
      {
        type: "p",
        text: "Vingt minutes. C'est le temps moyen passé en chambre d'appel avant une finale majeure. Vingt minutes dans une pièce fermée avec les sept personnes que l'on veut battre.",
      },
      { type: "h2", text: "Le théâtre de l'intimidation" },
      {
        type: "p",
        text: "Certains s'enferment dans leur musique, d'autres dévisagent leurs adversaires. Les préparateurs mentaux parlent de « bulle attentionnelle » : réduire le champ de conscience à quelques indices clés pour économiser l'énergie nerveuse.",
      },
      {
        type: "quote",
        text: "En chambre d'appel, je ne regarde personne. Je vois déjà la ligne d'arrivée.",
        cite: "Médaillée mondiale du 200m",
      },
      {
        type: "stats",
        items: [
          { label: "Attente moyenne", value: "20 min" },
          { label: "Fréquence cardiaque", value: "120+ bpm" },
          { label: "Faux départ toléré", value: "0" },
        ],
      },
      {
        type: "box",
        title: "La routine type",
        text: "Respiration 4-7-8, visualisation du départ, mots-clés (« pousse », « relâche »), puis activation explosive juste avant la présentation.",
      },
      {
        type: "p",
        text: "Avec la règle du zéro faux départ, la gestion de l'excitation est devenue une compétence à part entière. Trop d'adrénaline, et c'est l'élimination. Pas assez, et c'est un départ manqué.",
      },
    ],
  },
];

export interface VideoSection {
  id: string;
  kicker: string;
  title: string;
  text: string;
  bgVideoUrl: string;
  poster: string;
}

export const videoSections: Record<
  "hero" | "biomeca" | "finish" | "training" | "manifesto",
  VideoSection
> = {
  hero: {
    id: "hero",
    kicker: "Le dossier",
    title: "Libérer la vitesse",
    text: "Dans les 0,5 premières secondes d'un 100m, tout se décide. Enquête au cœur du départ parfait.",
    bgVideoUrl: V1,
    poster: hero,
  },
  biomeca: {
    id: "biomeca",
    kicker: "Décryptage biomécanique",
    title: "Les 30 premiers mètres",
    text: "De 0 à 40 km/h en moins de 4 secondes : inclinaison du buste, temps de contact au sol, puissance horizontale. Le sprinteur monte les marches, appui après appui, jusqu'à se redresser.",
    bgVideoUrl: V3,
    poster: hero,
  },
  finish: {
    id: "finish",
    kicker: "L'instant photo-finish",
    title: "La quête du millième",
    text: "À 12 m/s, un millième de seconde représente 1,2 centimètre. C'est l'épaisseur d'un torse penché qui sépare l'or de l'oubli.",
    bgVideoUrl: V2,
    poster: finish,
  },
  training: {
    id: "training",
    kicker: "Entraînement & puissance brute",
    title: "Forger l'explosivité",
    text: "Force maximale, pliométrie, charges d'impact : la vitesse se construit d'abord loin de la piste, sous la barre et sur les haies basses.",
    bgVideoUrl: V1,
    poster: spikes,
  },
  manifesto: {
    id: "manifesto",
    kicker: "Manifeste",
    title: "Dix secondes. Une vie entière.",
    text: "Le sprint ne pardonne rien et ne promet rien. Il exige tout, tout de suite. C'est pour ça qu'on l'aime.",
    bgVideoUrl: V2,
    poster: mental,
  },
};

export interface RankingRow {
  rank: number;
  athlete: string;
  country: string;
  time: string;
  splits: string;
  year: number;
}
export const rankings: Record<"60m" | "100m" | "200m", RankingRow[]> = {
  "60m": [
    {
      rank: 1,
      athlete: "Christian Coleman",
      country: "USA",
      time: "6.34",
      splits: "10m 1.70 · 30m 3.78",
      year: 2018,
    },
    {
      rank: 2,
      athlete: "Maurice Greene",
      country: "USA",
      time: "6.39",
      splits: "10m 1.73 · 30m 3.82",
      year: 2001,
    },
    {
      rank: 3,
      athlete: "Ronnie Baker",
      country: "USA",
      time: "6.40",
      splits: "10m 1.72 · 30m 3.83",
      year: 2018,
    },
    {
      rank: 4,
      athlete: "Marcell Jacobs",
      country: "ITA",
      time: "6.41",
      splits: "10m 1.74 · 30m 3.84",
      year: 2022,
    },
  ],
  "100m": [
    {
      rank: 1,
      athlete: "Usain Bolt",
      country: "JAM",
      time: "9.58",
      splits: "50m 5.47 · 80m 7.92",
      year: 2009,
    },
    {
      rank: 2,
      athlete: "Tyson Gay",
      country: "USA",
      time: "9.69",
      splits: "50m 5.50 · 80m 7.99",
      year: 2009,
    },
    {
      rank: 3,
      athlete: "Yohan Blake",
      country: "JAM",
      time: "9.69",
      splits: "50m 5.52 · 80m 8.00",
      year: 2012,
    },
    {
      rank: 4,
      athlete: "Asafa Powell",
      country: "JAM",
      time: "9.72",
      splits: "50m 5.53 · 80m 8.02",
      year: 2008,
    },
  ],
  "200m": [
    {
      rank: 1,
      athlete: "Usain Bolt",
      country: "JAM",
      time: "19.19",
      splits: "100m 9.92 · 150m 14.40",
      year: 2009,
    },
    {
      rank: 2,
      athlete: "Yohan Blake",
      country: "JAM",
      time: "19.26",
      splits: "100m 10.08 · 150m 14.52",
      year: 2011,
    },
    {
      rank: 3,
      athlete: "Noah Lyles",
      country: "USA",
      time: "19.31",
      splits: "100m 10.06 · 150m 14.55",
      year: 2022,
    },
    {
      rank: 4,
      athlete: "Michael Johnson",
      country: "USA",
      time: "19.32",
      splits: "100m 10.12 · 150m 14.60",
      year: 1996,
    },
  ],
};

export interface SpikeModel {
  id: string;
  name: string;
  era: string;
  weight: string;
  story: string;
  image: string;
}
export const spikeModels: SpikeModel[] = [
  {
    id: "s1",
    name: "La pointe cuir",
    era: "1936",
    weight: "~350 g",
    story: "Cuir cousu main, clous fixes : la chaussure de Jesse Owens à Berlin.",
    image: spikes,
  },
  {
    id: "s2",
    name: "L'ère synthétique",
    era: "1968",
    weight: "~220 g",
    story: "Arrivée du tartan à Mexico et des semelles à clous vissés.",
    image: hero,
  },
  {
    id: "s3",
    name: "La pointe or",
    era: "1996",
    weight: "~110 g",
    story: "Une pointe dorée ultra-légère pour un 19.32 historique à Atlanta.",
    image: finish,
  },
  {
    id: "s4",
    name: "Plaque carbone",
    era: "2020+",
    weight: "~130 g",
    story: "Mousse haute restitution et plaque rigide : la révolution actuelle.",
    image: spikes,
  },
];

export interface VideoAnalysis {
  id: string;
  title: string;
  kicker: string;
  description: string;
  detailedAnalysis: string;
  duration: string;
  badge: string;
  thumbnail: string;
  videoUrl: string;
  stats: { label: string; value: string }[];
}

export const videos: Video[] = [
  {
    id: "v1",
    title: "Départ décortiqué en 240fps",
    description: "Chaque appui des 10 premiers mètres au ralenti.",
    duration: "03:45",
    badge: "Slow-Mo 240fps",
    thumbnail: hero,
    videoUrl: V1,
  },
  {
    id: "v2",
    title: "Finale 100m : le coude-à-coude",
    description: "La photo-finish la plus serrée de la saison.",
    duration: "02:12",
    badge: "4K",
    thumbnail: finish,
    videoUrl: V2,
  },
  {
    id: "v3",
    title: "Test des pointes carbone",
    description: "Laboratoire : mesure du retour d'énergie.",
    duration: "06:30",
    badge: "Analyse",
    thumbnail: spikes,
    videoUrl: V3,
  },
  {
    id: "v4",
    title: "Chambre d'appel : 20 minutes",
    description: "Immersion dans la tête d'une finaliste.",
    duration: "08:04",
    badge: "Docu",
    thumbnail: mental,
    videoUrl: V1,
  },
];

export const videoAnalyses: VideoAnalysis[] = [
  {
    id: "va1",
    title: "Départ décortiqué en 240fps",
    kicker: "Biomécanique du départ",
    description:
      "Chaque appui des 10 premiers mètres au ralenti : angles de poussée, trajectoires du centre de masse, synchronisation des bras.",
    detailedAnalysis:
      "Capturé à 240 images par seconde, ce ralenti révèle ce que l'œil nu ne peut percevoir. La séquence débute au coup de pistolet : les deux cales sont poussées simultanément, avec une force horizontale dépassant 2,5 fois le poids du corps. Le genou avant, fléchi à 90°, se propulse en premier. La jambe arrière quitte le bloc 0.04s plus tard. Les bras s'opposent pour équilibrer la rotation du tronc, qui reste incliné à 45° sur les trois premiers appuis. L'analyse frame par frame montre un temps de contact au sol de 0.09s dès le quatrième appui, signe d'une raideur tendineuse exceptionnelle. La projection du centre de masse avance progressivement : de 25 cm derrière le premier appui à 10 cm au cinquième. Cette géométrie « en montée » est la signature des élites : on ne se redresse pas, on monte les marches.",
    duration: "03:45",
    badge: "Slow-Mo 240fps",
    thumbnail: hero,
    videoUrl: V1,
    stats: [
      { label: "Temps de réaction", value: "0.128s" },
      { label: "Angle genou avant", value: "90°" },
      { label: "Contact au sol", value: "0.09s" },
      { label: "Force horizontale", value: "2.5× poids" },
    ],
  },
  {
    id: "va2",
    title: "Finale 100m : le coude-à-coude",
    kicker: "Photo-finish & tactique",
    description:
      "La photo-finish la plus serrée de la saison : deux athlètes séparés par un millième de seconde sur la ligne.",
    detailedAnalysis:
      "À 12 m/s en vitesse de pointe, un millième de seconde représente 1,2 centimètre — l'épaisseur d'un torse penché. Cette finale illustre l'importance du penché final : l'athlète à droite bombe le torse et franchit la ligne 0.001s avant son rival, qui a une vitesse linéaire légèrement supérieure mais un buste plus droit. L'analyse des 20 derniers mètres révèle deux stratégies opposées : le couloir 4 maintient sa fréquence de foulée (4.6 Hz) et réduit l'amplitude, tandis que le couloir 5 conserve son amplitude mais perd 0.2 Hz de fréquence. Le premier subit moins de décélération aérodynamique car son centre de masse reste plus bas. Les données GPS montrent un pic de vitesse à 43.2 km/h au 70e mètre, puis une décroissance de 1.8% sur les 30 derniers mètres — un profil typique des finales de haut niveau.",
    duration: "02:12",
    badge: "4K",
    thumbnail: finish,
    videoUrl: V2,
    stats: [
      { label: "Vitesse de pointe", value: "43.2 km/h" },
      { label: "Écart final", value: "0.001s" },
      { label: "Fréquence foulée", value: "4.6 Hz" },
      { label: "Décélération", value: "1.8%" },
    ],
  },
  {
    id: "va3",
    title: "Test des pointes carbone en laboratoire",
    kicker: "Matériel & innovation",
    description:
      "Mesure du retour d'énergie des plaques carbone : comparaison entre trois générations de pointes de sprint.",
    detailedAnalysis:
      "Sur un banc d'essai instrumenté, trois pointes sont testées sous une charge de 1 800 N — équivalent à la force d'impact d'un sprinteur élite au premier appui. La pointe traditionnelle (cuir, 1996) restitue 62% de l'énergie. La première génération à plaque carbone (2018) atteint 74%. Le modèle actuel (2020+) affiche 81%, grâce à une mousse PEBA à haut retour et une plaque en nid d'abeille qui raide la cheville sans bloquer la flexion naturelle. La différence se traduit sur la piste : sur 400m, le gain estimé est de l'ordre de 1%, soit environ 0.4s — non négligeable au plus haut niveau. Le débat éthique reste ouvert : ces chaussures rapprochent-elles artificiellement les chronos, ou s'inscrivent-elles dans la continuité naturelle du progrès matériel, comme les pistes synthétiques dans les années 1960 ?",
    duration: "06:30",
    badge: "Analyse labo",
    thumbnail: spikes,
    videoUrl: V3,
    stats: [
      { label: "Retour d'énergie", value: "81%" },
      { label: "Épaisseur semelle", value: "20 mm" },
      { label: "Poids pointe", value: "130 g" },
      { label: "Gain estimé 400m", value: "~0.4s" },
    ],
  },
  {
    id: "va4",
    title: "Chambre d'appel : 20 minutes",
    kicker: "Psychologie & mental",
    description:
      "Immersion dans la tête d'une finaliste : la préparation mentale avant le départ le plus intense du sport.",
    detailedAnalysis:
      "Vingt minutes. C'est le temps moyen passé en chambre d'appel avant une finale majeure. La caméra suit une finaliste de 200m, de l'entrée en chambre à la présentation sur la piste. Première phase : isolation sensorielle, casque sur les oreilles, respiration 4-7-8 pour abaisser la fréquence cardiaque sous les 100 bpm. À T-10 minutes, la fréquence remonte naturellement à 120+ bpm — l'organisme se prépare à l'effort explosif. La routine comprend trois visualisations du départ, une activation musculaire progressive (ischios, quadriceps, mollets) et des mots-clés internes : « pousse », « relâche », « ton torse ». La dernière minute est la plus critique : la règle du zéro faux départ transforme toute fausse sortie en élimination immédiate. Le préparateur mental insiste sur la bulle attentionnelle : réduire le champ de conscience aux seuls indices pertinents — le son du pistolet, la position des cales, le premier appui — et ignorer le reste. Les sept autres athlètes ne sont plus des adversaires, mais du décor.",
    duration: "08:04",
    badge: "Documentaire",
    thumbnail: mental,
    videoUrl: V1,
    stats: [
      { label: "Durée chambre d'appel", value: "20 min" },
      { label: "FC au repos", value: "95 bpm" },
      { label: "FC avant départ", value: "120+ bpm" },
      { label: "Faux départ toléré", value: "0" },
    ],
  },
];

export const categories = [
  "Tous",
  "Diamond League",
  "Biomécanique",
  "Matériel & Pointes",
  "JO & Mondiaux",
] as const;
export const disciplines: Discipline[] = ["60m", "100m", "200m", "400m", "4x100m"];

export function relativeTime(iso: string) {
  const h = Math.round((Date.now() - new Date(iso).getTime()) / 3600_000);
  if (h < 1) return "À l'instant";
  if (h < 24) return `Il y a ${h}h`;
  return `Il y a ${Math.round(h / 24)}j`;
}
