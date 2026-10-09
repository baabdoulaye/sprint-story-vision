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

const V1 = "src/assets/video_intro.mp4";
const V2 = "src/assets/carmelita_jeter_training.mp4";
const V3 = "src/assets/afafa_powell_side_view.mp4";
const V4 = "src/assets/carmelita_jeter_vs_fraser_pryce.mp4";
const V5 = "src/assets/100mhurdles_wr.mp4";

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
    image: "src/assets/coleman_start.jpg",
    videoUrl: V1, // intro / départ
    content: [/* ... contenu inchangé ... */],
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
    image: "/src/assets/9.70.avif",
    videoUrl: V4, // Jeter vs Fraser-Pryce (duel au sommet)
    content: [/* ... contenu inchangé ... */],
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
    image: "/src/assets/60m_wallpaper.jpg",
    videoUrl: V5, // Course record haies/sprint explosif
    content: [/* ... contenu inchangé ... */],
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
    image: "/src/assets/50-best-track-spikes-21282144-1440.jpg",
    videoUrl: V3, // Asafa Powell vue latérale (zoom sur appuis)
    content: [/* ... contenu inchangé ... */],
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
    image: "/src/assets/assiette-healthy-food.jpg",
    videoUrl: V2, // Entraînement Jeter
    content: [/* ... contenu inchangé ... */],
  },
  {
    id: "6",
    slug: "chambre-d-appel-guerre-psychologique",
    title:
      "Dans la chambre d'appel : la guerre psychologique avant les 10 secondes les plus intenses du sport",
    excerpt:
      "Regards, silences, rituels : avant d'entrer sur la piste, la course a déjà commencé dans la tête.",
    author: "Ba Abdoulaye",
    date: hoursAgo(72),
    readTime: 10,
    category: "Culture",
    disciplines: ["100m", "200m", "400m", "4x100m"],
    tags: ["Mental", "Focus", "Rituels"],
    image: "/src/assets/Call-room-more.jpg",
    videoUrl: V1,
    content: [/* ... contenu inchangé ... */],
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
    bgVideoUrl: V1, // video_intro.mp4 (Introduction explosive en plein écran)
    poster: hero,
  },
  biomeca: {
    id: "biomeca",
    kicker: "Décryptage biomécanique",
    title: "Les 30 premiers mètres",
    text: "De 0 à 40 km/h en moins de 4 secondes : inclinaison du buste, temps de contact au sol, puissance horizontale. Le sprinteur monte les marches, appui après appui, jusqu'à se redresser.",
    bgVideoUrl: V3, // afafa_powell_side_view.mp4 (Parfait pour analyser la foulée latérale)
    poster: hero,
  },
  finish: {
    id: "finish",
    kicker: "L'instant photo-finish",
    title: "La quête du millième",
    text: "À 12 m/s, un millième de seconde représente 1,2 centimètre. C'est l'épaisseur d'un torse penché qui sépare l'or de l'oubli.",
    bgVideoUrl: V4, // carmelita_jeter_vs_fraser_pryce.mp4 (Le duel serré sur la ligne)
    poster: finish,
  },
  training: {
    id: "training",
    kicker: "Entraînement & puissance brute",
    title: "Forger l'explosivité",
    text: "Force maximale, pliométrie, charges d'impact : la vitesse se construit d'abord loin de la piste, sous la barre et sur les haies basses.",
    bgVideoUrl: V2, // carmelita_jeter_training.mp4 (Séance et travail de puissance)
    poster: spikes,
  },
  manifesto: {
    id: "manifesto",
    kicker: "Manifeste",
    title: "Dix secondes. Une vie entière.",
    text: "Le sprint ne pardonne rien et ne promet rien. Il exige tout, tout de suite. C'est pour ça qu'on l'aime.",
    bgVideoUrl: V5, // 100mhurdles_wr.mp4 (Course record d'intensité avant le footer)
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
    image: "/src/assets/spikes_1936.jpg",
  },
  {
    id: "s2",
    name: "L'ère synthétique",
    era: "1968",
    weight: "~220 g",
    story: "Arrivée du tartan à Mexico et des semelles à clous vissés.",
    image: "/src/assets/spikes_1968.jpg",
  },
  {
    id: "s3",
    name: "La pointe or",
    era: "1996",
    weight: "~110 g",
    story: "Une pointe dorée ultra-légère pour un 19.32 historique à Atlanta.",
    image: "/src/assets/spikes_1996.jpg",
  },
  {
    id: "s4",
    name: "Plaque carbone",
    era: "2020+",
    weight: "~130 g",
    story: "Mousse haute restitution et plaque rigide : la révolution actuelle.",
    image: "/src/assets/nike-super-spikes_s.avif",
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
    videoUrl: V4, // Jeter vs Fraser-Pryce
  },
  {
    id: "v3",
    title: "Biomécanique : la foulée de référence",
    description: "Vue latérale de phase de pointe et pose du pied.",
    duration: "04:15",
    badge: "Analyse",
    thumbnail: spikes,
    videoUrl: V3, // Asafa Powell
  },
  {
    id: "v4",
    title: "Franchissement & record du monde",
    description: "Rythme entre les intervalles et vélocité pure.",
    duration: "01:50",
    badge: "Record",
    thumbnail: mental,
    videoUrl: V5, // 100m hurdles WR
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
    badge: "",
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
    badge: "",
    thumbnail: finish,
    videoUrl: V4,
    stats: [
      { label: "Vitesse de pointe", value: "43.2 km/h" },
      { label: "Écart final", value: "0.001s" },
      { label: "Fréquence foulée", value: "4.6 Hz" },
      { label: "Décélération", value: "1.8%" },
    ],
  },
  {
    id: "va3",
    title: "Foulée latérale et restitution élastique",
    kicker: "Biomécanique de pointe",
    description:
      "Analyse profil de la phase lancée : cycle de jambe avant, griffé et temps de contact minimal.",
    detailedAnalysis:
      "Sur cette vue latérale, la dynamique du cycle de jambe apparaît avec netteté. Le genou remonte haut sans antéversion excessive du bassin, préparant une phase de fouetté vers le bas et l'arrière. Au moment de l'impact, le pied attaque directement sous le centre de gravité, limitant la force de freinage à l'avant. La cheville reste verrouillée en dorsiflexion active pour restituer l'énergie emmagasinée par le tendon d'Achille.",
    duration: "04:15",
    badge: "",
    thumbnail: spikes,
    videoUrl: V3,
    stats: [
      { label: "Angle d'attaque", value: "85°" },
      { label: "Temps d'appui", value: "0.088s" },
      { label: "Fréquence foulée", value: "4.7 Hz" },
      { label: "Amplitude moyenne", value: "2.45 m" },
    ],
  },
  {
    id: "va4",
    title: "Rythme et cadence sur record mondial",
    kicker: "Vitesse & Fréquence",
    description:
      "Gestion de l'accélération et maintien de cadence en condition de record du monde.",
    detailedAnalysis:
      "Cette séquence met en lumière la régularité métronomique de la fréquence gestuelle sous pression maximale. Même lorsque la fatigue neuro-musculaire commence à se faire sentir dans les derniers mètres, le buste demeure compact et les bras conservent leur amplitude complète, évitant toute crispation trapézoïdale.",
    duration: "01:50",
    badge: "",
    thumbnail: mental,
    videoUrl: V5,
    stats: [
      { label: "Cadence max", value: "4.9 Hz" },
      { label: "Vitesse moyenne", value: "39.8 km/h" },
      { label: "Stabilité buste", value: "98%" },
      { label: "Perte terminale", value: "< 1.2%" },
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
