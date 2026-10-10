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
    readTime: 5,
    category: "Biomécanique",
    disciplines: ["60m", "100m"],
    tags: ["Départ", "Puissance", "Technique"],
    image: "/src/assets/coleman_start.jpg",
    videoUrl: V1,
    content: [
      {
        type: "p",
        text: "Un sprint de haut niveau ne se gagne pas obligatoirement dans les starting-blocks, mais il s'y perd quasi systématiquement. Entre la détonation du pistolet électronique et le franchissement du cap fatidique des dix mètres, l'athlète produit la plus forte contrainte d'accélération horizontale de toute sa course. À ce niveau d'intensité, la moindre approximation d'alignement articulaire se paie au centième de seconde.",
      },
      {
        type: "p",
        text: "Les capteurs de pression piezoélectriques installés sur les compétitions internationales révèlent que les meilleurs démarreurs mondiaux appliquent une force combinée dépassant 2,5 à 3 fois leur masse corporelle en l'espace de 300 millisecondes. Une telle décharge d'énergie exige une architecture posturale rigoureuse dès le commandement « Prêts ».",
      },
      { type: "h2", text: "La géométrie optimale de la position « Prêts »" },
      {
        type: "p",
        text: "L'erreur classique consiste à chercher une position de confort. En réalité, la position « Prêts » est un état de tension élastique pré-activée. La projection verticale du centre de masse doit se trouver immédiatement derrière l'aplomb des poignets, transférant une part du poids sur la ceinture scapulaire.",
      },
      {
        type: "p",
        text: "Sur le plan articulaire, le consensus issu de la modélisation cinématique moderne fixe l'angle du genou avant entre 85° et 95°, tandis que le genou arrière s'ouvre entre 115° et 125°. Cet écartement garantit que le quadriceps et les fessiers de la jambe avant travaillent dans leur plage de tension idéale au moment où la jambe arrière quitte la cale.",
      },
      {
        type: "stats",
        items: [
          { label: "Angle genou avant", value: "90°" },
          { label: "Angle genou arrière", value: "120°" },
          { label: "Temps de contact bloc", value: "0.32s" },
          { label: "Gain potentiel cumulé", value: "0.15s" },
        ],
      },
      {
        type: "quote",
        text: "Le départ n'est pas une réaction, c'est une détonation calculée. Si ton cerveau prend le temps d'analyser le bruit du starter, tes adversaires ont déjà un demi-mètre d'avance.",
        cite: "Maurice Greene, ancien recordman du monde du 100m",
      },
      { type: "h2", text: "Pression simultanée et dissociation des cales" },
      {
        type: "p",
        text: "Pendant longtemps, la théorie voulait que la jambe arrière s'arrache du bloc instantanément. L'analyse des plateformes de force modernes a tordu le cou à ce mythe : les deux pieds doivent initier une pression simultanée vers l'arrière lors des premières millisecondes. Cette poussée bilatérale stabilise le bassin dans le plan sagittal et évite tout déhanchement parasite.",
      },
      {
        type: "box",
        title: "Le concept du « Triple alignement »",
        text: "À l'instant où le pied avant quitte la cale, la cheville, le genou et la hanche doivent former une ligne droite oblique quasi parfaite à 42-45° par rapport au sol. Si la hanche reste « cassée » en flexion, la force produite part verticalement au lieu de propulser le coureur vers l'avant.",
      },
      { type: "h2", text: "Les trois premiers appuis : ne pas se relever" },
      {
        type: "p",
        text: "La tentation naturelle du système nerveux sous haute adrénaline est de redresser immédiatement le buste pour respirer et allonger la foulée. C'est l'erreur fatale. Les premiers appuis doivent fonctionner comme des pistons à pistonner derrière le centre de gravité, avec un griffé agressif et une trajectoire dite « de projection en côte ».",
      },
      {
        type: "p",
        text: "En intégrant des départs tractés avec surcharge contrôlée (10 à 15% de réduction de vitesse) et un travail de rétro-poussée sur bandes élastiques, le sprinteur apprend à ancrer cette inclinaison positive sans s'écraser au sol. C'est là que se construisent les 0.15 seconde d'écart qui séparent une place en demi-finale d'une médaille olympique.",
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
    readTime: 4,
    category: "JO & Mondiaux",
    disciplines: ["100m"],
    tags: ["Chrono", "Mondiaux", "Rivalités"],
    image: "/src/assets/9.70.avif",
    videoUrl: V4,
    content: [
      {
        type: "p",
        text: "Depuis la retraite d'Usain Bolt et les mythiques 9.69 de Tyson Gay et Yohan Blake à l'époque dorée du sprint caribéen, le mur des 9.70 secondes ressemblait à une forteresse imprenable. Une frontière physique réservée aux légendes du début des années 2010. Mais le paysage de la ligne droite est en train de muter radicalement.",
      },
      {
        type: "p",
        text: "Jamais dans l'histoire moderne de l'athlétisme autant d'athlètes n'ont été capables de courir sous les 9.85 secondes de manière régulière sur un seul circuit estival. La densité mondiale a atteint un sommet, et la question n'est plus de savoir si la barrière des 9.70 va céder, mais lors de quelle confrontation directe.",
      },
      { type: "h2", text: "Trois écoles biomécaniques à l'affrontement" },
      {
        type: "p",
        text: "Pour descendre sous les 9.70s, plusieurs chemins techniques s'opposent aujourd'hui. D'un côté, les purs météores de la première moitié de course, capables d'allumer le 60m en 6.35s et de tenir tête à la décélération par une cadence de foulée stratosphérique dépassant les 4.8 Hz.",
      },
      {
        type: "p",
        text: "De l'autre côté, les sprinteurs hybrides 100/200m misent sur une amplitude démesurée et une vitesse de pointe décalée vers le 65-75e mètre. Ces profils atteignent des pointes mesurées à plus de 43,5 km/h, compensant un départ parfois perfectible par un retour fulgurant dans le dernier tiers.",
      },
      {
        type: "stats",
        items: [
          { label: "Athlètes actifs < 9.80s", value: "5" },
          { label: "Vitesse de pointe requise", value: "43.6 km/h" },
          { label: "Temps passage 60m cible", value: "6.36s" },
          { label: "Fréquence moyenne", value: "4.75 Hz" },
        ],
      },
      {
        type: "quote",
        text: "Le 9.70 n'est pas un chrono que l'on va chercher en solitaire lors d'un meeting mineur. C'est le produit d'un coude-à-coude brutal où l'adrénaline de la rivalité te pousse au-delà de ta propre physiologie.",
        cite: "Ato Boldon, quadruple médaillé olympique",
      },
      { type: "h2", text: "L'équation parfaite : météo, piste et tension nerveuse" },
      {
        type: "p",
        text: "Un tel exploit requiert l'alignement de facteurs environnementaux précis : une température idéale autour de 26-28°C pour optimiser la viscosité musculaire, une altitude modérée mais légale, un vent favorable proche de la limite maximale autorisée (+2.0 m/s), et surtout une piste à haut coefficient de restitution d'énergie.",
      },
      {
        type: "p",
        text: "À l'approche des grands rendez-vous mondiaux, la tension en chambre d'appel sera irrespirable. Avec des écarts désormais calculés au millième de seconde, le premier à maîtriser son relâchement facial et sa rigidité de cheville sous haute pression s'ouvrira les portes du panthéon.",
      },
    ],
  },
  {
    id: "3",
    slug: "sprint-court-60m-puissance-brute",
    title: "Sprint court vs long : pourquoi le 60m en salle exige une puissance brute sans égal",
    excerpt:
      "Pas de temps pour se rattraper. Le 60m est un concentré d'accélération pure qui sollicite les fibres rapides à l'extrême.",
    author: "Camille Dorval",
    date: hoursAgo(20),
    readTime: 4,
    category: "Science",
    disciplines: ["60m", "200m", "400m"],
    tags: ["Physiologie", "Indoor", "Fibres rapides"],
    image: "/src/assets/60m_wallpaper.jpg",
    videoUrl: V5,
    content: [
      {
        type: "p",
        text: "Courir un 60 mètres en salle n'est en rien une version tronquée ou abrégée d'un 100 mètres extérieur. Physiologiquement et neuromusculairement, il s'agit d'une épreuve à part entière, où la tolérance à l'erreur est littéralement réduite à zéro. Sur 100 mètres, un coureur mal sorti des cales peut encore espérer remonter grâce à sa vitesse maximale. Sur 60 mètres, tout est déjà consommé.",
      },
      {
        type: "p",
        text: "L'intégralité des 6.30 à 6.50 secondes de l'épreuve se déroule en phase d'accélération ou à la transition immédiate vers la vitesse de pointe. Le sprinteur indoor n'a pas le loisir de s'installer dans une phase d'entretien économique.",
      },
      { type: "h2", text: "L'hégémonie absolue du système ATP-PCr" },
      {
        type: "p",
        text: "Sur une durée d'effort aussi brève, le métabolisme anaérobie alactique fournit plus de 80 à 85 % de l'énergie nécessaire à la contraction musculaire. Les réserves intramusculaires d'adénosine triphosphate (ATP) et de phosphocréatine (PCr) sont mobilisées à un débit maximal par la créatine kinase.",
      },
      {
        type: "p",
        text: "Contrairement au 400 mètres qui baigne dans une acidose lactique extrême avec des concentrations sanguines de lactate dépassant régulièrement les 20 mmol/L, le 60 mètres ne génère quasiment aucune fatigue métabolique périphérique pendant la course. L'épuisement est purement nerveux et central : le système nerveux central décharge des potentiels d'action à sa fréquence maximale possible.",
      },
      {
        type: "stats",
        items: [
          { label: "Durée 60m élite", value: "6.34 - 6.45s" },
          { label: "Part anaérobie alactique", value: "> 80%" },
          { label: "Temps d'appui au sol", value: "0.085s" },
          { label: "Production de force max", value: "4× poids" },
        ],
      },
      {
        type: "box",
        title: "Le profilage des fibres rapides de type IIx",
        text: "Le spécialiste du 60 mètres possède une proportion exceptionnellement haute de fibres musculaires glycolytiques rapides (type IIx/IIb). Ces fibres développent une vitesse de contraction jusqu'à 4 fois plus rapide que les fibres lentes, mais se fatiguent en quelques secondes. C'est l'essence même du sprint en salle : brûler tout le carburant disponible en une fraction de souffle.",
      },
      { type: "h2", text: "La rigidité de cheville : transformer l'énergie sans fuite" },
      {
        type: "p",
        text: "À 40 km/h en virage ou sur ligne droite couverte, le pied n'a que 85 à 90 millisecondes pour toucher le tartan et renvoyer la charge. Si l'articulation de la cheville s'écrase ou fléchit sous l'impact, l'énergie élastique s'évapore sous forme de chaleur.",
      },
      {
        type: "p",
        text: "Le travail hivernal du sprinteur court repose donc sur un triptyque impitoyable : développement de la force maximale sur mouvements polyarticulaires lourds, travail pliométrique à temps de couplage court, et répétition de départs à bloc pour habituer le cortex cérébral à une activation instantanée.",
      },
    ],
  },
  {
    id: "4",
    slug: "pointes-carbone-revolution",
    title: "L'évolution des pointes en carbone : révolution technologique ou dopage mécanique ?",
    excerpt:
      "Plaques rigides, mousses à haut retour d'énergie : les pointes nouvelle génération bouleversent les chronos. Où placer la limite ?",
    author: "Karim Benali",
    date: hoursAgo(30),
    readTime: 6,
    category: "Matériel & Pointes",
    disciplines: ["100m", "200m", "400m"],
    tags: ["Carbone", "Innovation", "Réglementation"],
    image: "/src/assets/50-best-track-spikes-21282144-1440.jpg",
    videoUrl: V3,
    content: [
      {
        type: "p",
        text: "Depuis l'irruption fracassante des mousses supercritiques et des plaques composites dans le monde du marathon, la piste d'athlétisme semblait faire de la résistance. Mais depuis 2020, les pointes de sprint ont opéré une mutation radicale qui bouleverse les repères chronométriques et soulève des débats passionnés au sein des fédérations.",
      },
      {
        type: "p",
        text: "Fini l'époque des semelles ultra-plates en plastique rigide où la pointe n'était qu'une fine enveloppe munie de six clous en acier. Les modèles contemporains intègrent des plaques intégrales en fibre de carbone à rigidité variable et des mousses polymères (PEBA) capables de restituer plus de 80 % de l'énergie mécanique emmagasinée lors du choc.",
      },
      { type: "h2", text: "L'effet bras de levier et la cheville artificielle" },
      {
        type: "p",
        text: "La plaque en carbone ne se contente pas d'agir comme un simple ressort élastique. Sa véritable fonction biomécanique réside dans la modification du bras de levier de la cheville et de l'articulation métatarso-phalangienne. En limitant la dorsiflexion excessive des orteils au moment du contact sol, la plaque évite les pertes d'énergie inutiles au niveau de l'arche plantaire.",
      },
      {
        type: "stats",
        items: [
          { label: "Restitution d'énergie PEBA", value: "81%" },
          { label: "Épaisseur max World Athletics", value: "20 mm" },
          { label: "Poids moyen de la pointe", value: "135 g" },
          { label: "Gain estimé sur 400m", value: "0.3 à 0.5s" },
        ],
      },
      {
        type: "quote",
        text: "La chaussure ne court pas à votre place, mais elle vous empêche de gaspiller vos watts. Elle prolonge votre vitesse maximale de quelques foulées supplémentaires.",
        cite: "Chercheur en biomécanique du sport, Institut fédéral",
      },
      { type: "h2", text: "Où se situe la frontière réglementaire ?" },
      {
        type: "p",
        text: "World Athletics a fixé une limite stricte d'épaisseur de semelle à 20 millimètres pour les épreuves de sprint jusqu'au 400m. Si cette barrière évite les dérives spectaculaires constatées sur la route (où les talons dépassent 40 mm), les équipementiers se livrent une guerre au micron pour maximiser la réactivité de leurs géométries.",
      },
      {
        type: "p",
        text: "Certains puristes dénoncent une rupture dans la continuité historique des records mondiaux, comparant cette ère aux combinaisons en polyuréthane de la natation en 2009. Pour d'autres, il ne s'agit que de l'évolution logique du sport moderne, au même titre que l'apparition du tartan synthétique à Mexico en 1968 ou des starting-blocks en aluminium.",
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
    readTime: 3,
    category: "Science",
    disciplines: ["100m", "200m"],
    tags: ["Nutrition", "Récupération", "Masse maigre"],
    image: "/src/assets/assiette-healthy-food.jpg",
    videoUrl: V2,
    content: [
      {
        type: "p",
        text: "Le sprinteur professionnel incarne le paradoxe parfait de la physiologie sportive : il doit afficher une masse musculaire dense, puissante et hautement contractile, tout en conservant un pourcentage de masse grasse extrêmement bas (souvent entre 6 et 9 % chez les hommes, 12 à 15 % chez les femmes). Chaque gramme superflu agit comme un frein gravitationnel à l'accélération.",
      },
      {
        type: "p",
        text: "Pour alimenter une machine capable de délivrer des pics de puissance instantanés de plus de 2 000 watts, l'approche diététique moderne a abandonné les dogmes simplistes pour une périodisation nutritionnelle calquée sur la charge d'entraînement.",
      },
      { type: "h2", text: "Le timing protéique et la densité nutritionnelle" },
      {
        type: "p",
        text: "L'apport protidique quotidien tourne autour de 1,8 à 2,2 grammes par kilo de poids corporel. Mais plus que la quantité brute, c'est la cinétique d'assimilation qui compte : un apport fragmenté toutes les 3 à 4 heures, enrichi en acides aminés branchés et particulièrement en leucine, optimise la voie de signalisation mTOR responsable de l'hypertrophie des fibres rapides.",
      },
      {
        type: "box",
        title: "Les superaliments et antioxydants fonctionnels",
        text: "Loin des poudres ultra-transformées, les nutritionnistes de haut niveau réintègrent des ingrédients bruts ciblés : concentré de jus de betterave (source de nitrates inorganiques améliorant l'oxygénation et la vasodilatation musculaire), tart cherry pour neutraliser les cascades inflammatoires post-pliométrie lourde, et apports d'acides gras oméga-3 pour préserver la conduction nerveuse.",
      },
      {
        type: "stats",
        items: [
          { label: "Apport protéique cible", value: "2.0 g/kg/j" },
          { label: "Masse grasse sprinteur élite", value: "7 - 9%" },
          { label: "Sommeil anabolique requis", value: "8h30 - 9h30" },
          { label: "Hydratation quotidienne", value: "3.5 à 4.5 L" },
        ],
      },
      { type: "h2", text: "La gestion des glucides : le mythe de la restriction" },
      {
        type: "p",
        text: "Bien qu'un sprint de 100m dure moins de 10 secondes, une séance d'entraînement de vitesse pure avec 6 x 60m à 100 % d'intensité vide les réserves de glycogène musculaire à une vitesse foudroyante en raison de la puissance des contractions. Les glucides ne sont pas éliminés : ils sont consommés sous forme de glucides complexes à index glycémique modéré en amont, puis rapides lors de la fenêtre de resynthèse.",
      },
      {
        type: "p",
        text: "Le sommeil profond reste le complément nutritionnel le plus puissant. C'est durant les phases de sommeil lent profond que la sécrétion d'hormone de croissance culmine, permettant au système neuromusculaire de réparer les micro-lésions provoquées par les impacts au sol.",
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
    author: "Ba Abdoulaye",
    date: hoursAgo(72),
    readTime: 4,
    category: "Culture",
    disciplines: ["100m", "200m", "400m", "4x100m"],
    tags: ["Mental", "Focus", "Rituels"],
    image: "/src/assets/Call-room-more.jpg",
    videoUrl: V1,
    content: [
      {
        type: "p",
        text: "C'est une pièce aveugle, souvent située dans les entrailles de béton d'un stade olympique, où règne une odeur âcre d'huile camphrée, de caoutchouc neuf et de sueur froide. La chambre d'appel (*call room*) est le huis clos le plus oppressant de toute la scène sportive mondiale. Pendant 15 à 25 minutes interminables, les huit finalistes sont coupés du reste du monde, assis sur de simples bancs en plastique, sans entraîneurs ni téléphones.",
      },
      {
        type: "p",
        text: "À cet instant précis, la préparation physique est terminée. Le gainage, les squats à 200 kg et les milliers de gammes athlétiques ne peuvent plus être modifiés. Ce qui se joue dans ce cube silencieux est une guerre d'intimidation mentale où chaque micro-comportement est scruté.",
      },
      { type: "h2", text: "Les profils de l'arène : du fauve au moine zen" },
      {
        type: "p",
        text: "Dans la chambre d'appel, les personnalités se polarisent. Il y a l'athlète démonstratif, qui arpente la pièce de long en large, tape sur ses quadriceps avec fracas, bondit sur place et cherche activement à croiser le regard de ses adversaires pour y déceler une trace de doute. Cette posture agressive sert autant à intimider le rival qu'à masquer sa propre anxiété.",
      },
      {
        type: "p",
        text: "À l'opposé se trouve le maître du contrôle attentionnel : casquette vissée sur le crâne, capuche rabattue, casque antibruit sur les oreilles. Les yeux fermés, il ne bouge pas. Sa fréquence cardiaque est maintenue volontairement basse par des cycles respiratoires réguliers, économisant chaque influx nerveux avant l'explosion.",
      },
      {
        type: "stats",
        items: [
          { label: "Temps d'attente moyen", value: "20 min" },
          { label: "Rythme cardiaque pré-course", value: "125 - 145 bpm" },
          { label: "Tolérance faux départ", value: "0 (Disqualification)" },
          { label: "Durée d'attention maximale", value: "9.8s" },
        ],
      },
      {
        type: "quote",
        text: "Quand tu entres dans la chambre d'appel, tu ne regardes pas à gauche, tu ne regardes pas à droite. Tu te visualises déjà en train de casser le torse sur la ligne d'arrivée. Le reste n'existe pas.",
        cite: "Shelly-Ann Fraser-Pryce, multiple championne olympique et du monde",
      },
      {
        type: "box",
        title: "La menace du zéro faux départ",
        text: "Depuis l'instauration de la règle couperet disqualifiant tout athlète dès la première fausse impulsion, la gestion du système nerveux autonome en chambre d'appel est devenue une discipline scientifique. Un excès d'adrénaline se traduit par des tressautements involontaires sur les starting-blocks, synonymes de carton rouge direct.",
      },
      { type: "h2", text: "Le tunnel vers la lumière" },
      {
        type: "p",
        text: "Quand les officiels ouvrent enfin la porte coulissante et que le bruit assourdissant des 80 000 spectateurs s'abat d'un coup sur les sprinteurs dans le couloir menant à la piste, la transition sensorielle est monumentale. Ceux qui n'ont pas su verrouiller leur bulle hermétique dans la chambre d'appel sont immédiatement déstabilisés par l'ampleur de l'arène.",
      },
      {
        type: "p",
        text: "Les plus grands, eux, avancent sans cligner des yeux. Ils savent que les dés sont déjà jetés et qu'il ne leur reste que dix secondes pour concrétiser des années de sacrifice dans l'ombre.",
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
    image: "/src/assets/spikes_1968.webp",
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
  youtubeId: string;
  stats: { label: string; value: string }[];
}

export const videoAnalyses: VideoAnalysis[] = [
  {
    id: "va1",
    title: "Départ décortiqué en 240fps : Christian Coleman",
    kicker: "Biomécanique du départ",
    description:
      "Chaque appui des 10 premiers mètres au ralenti : angles de poussée, trajectoires du centre de masse, synchronisation des bras.",
    detailedAnalysis:
      "Capturé à 240 images par seconde, ce ralenti révèle ce que l'œil nu ne peut percevoir. La séquence débute au coup de pistolet : les deux cales sont poussées simultanément, avec une force horizontale dépassant 2,5 fois le poids du corps. Le genou avant, fléchi à 90°, se propulse en premier. La jambe arrière quitte le bloc 0.04s plus tard. Les bras s'opposent pour équilibrer la rotation du tronc, qui reste incliné à 45° sur les trois premiers appuis. L'analyse frame par frame montre un temps de contact au sol de 0.09s dès le quatrième appui, signe d'une raideur tendineuse exceptionnelle. La projection du centre de masse avance progressivement : de 25 cm derrière le premier appui à 10 cm au cinquième. Cette géométrie « en montée » est la signature des élites : on ne se redresse pas, on monte les marches.",
    duration: "03:59",
    badge: "Slow-Mo 240fps",
    youtubeId: "gyRrNJRBSw8",
    thumbnail: "https://img.youtube.com/vi/gyRrNJRBSw8/hqdefault.jpg",
    stats: [
      { label: "Temps de réaction", value: "0.128s" },
      { label: "Angle genou avant", value: "90°" },
      { label: "Contact au sol", value: "0.09s" },
      { label: "Force horizontale", value: "2.5× poids" },
    ],
  },
  {
    id: "va2",
    title: "Finale 100m : Le duel au millième (Lyles vs Thompson)",
    kicker: "Photo-finish & tactique",
    description:
      "La photo-finish la plus serrée de l'histoire moderne : deux athlètes séparés par 5 millièmes de seconde sur la ligne d'arrivée.",
    detailedAnalysis:
      "À plus de 43 km/h en vitesse de pointe, 5 millièmes de seconde représentent environ 6 centimètres — l'épaisseur d'un buste projeté vers l'avant. Cette confrontation illustre l'importance capitale du cassé final : l'athlète intérieur avance le thorax et coupe le faisceau optique avant son rival, qui affichait une vitesse linéaire légèrement supérieure mais une posture plus verticale. L'analyse des 20 derniers mètres révèle deux gestions de l'effort différentes : une fréquence de foulée maintenue à 4.7 Hz avec une baisse minimale de décélération terminale.",
    duration: "09:40",
    badge: "Photo-Finish",
    youtubeId: "afmAc8r7gZY",
    thumbnail: "https://img.youtube.com/vi/afmAc8r7gZY/hqdefault.jpg",
    stats: [
      { label: "Vitesse de pointe", value: "43.4 km/h" },
      { label: "Écart final", value: "0.005s" },
      { label: "Fréquence foulée", value: "4.72 Hz" },
      { label: "Décélération", value: "1.4%" },
    ],
  },
  {
    id: "va3",
    title: "Foulée latérale et restitution élastique (Vue Profil)",
    kicker: "Biomécanique de pointe",
    description:
      "Analyse profil de la phase lancée : cycle de jambe avant, griffé dynamique et temps de contact au sol minimal.",
    detailedAnalysis:
      "Sur cette vue latérale, la cinématique du cycle de jambe apparaît avec netteté. Le genou monte haut sans bascule arrière du bassin, préparant une phase de fouetté rapide vers le sol. Au moment de l'impact, le pied attaque directement sous la projection du centre de gravité, limitant la force de freinage antérieure. La cheville reste verrouillée en dorsiflexion active pour restituer l'énergie emmagasinée par le tendon d'Achille lors de la phase excentrique.",
    duration: "04:15",
    badge: "Analyse Latérale",
    youtubeId: "8IpbBOTYBBg",
    thumbnail: "https://img.youtube.com/vi/8IpbBOTYBBg/hqdefault.jpg",
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
      "Gestion de l'accélération et maintien métronomique de la cadence sous la pression d'une finale mondiale.",
    detailedAnalysis:
      "Cette séquence met en lumière la régularité métronomique de la fréquence gestuelle sous pression maximale. Même lorsque la fatigue neuro-musculaire commence à se faire sentir dans les derniers mètres, le buste demeure compact et les bras conservent leur amplitude complète, évitant toute crispation des trapèzes qui perturberait l'oscillation des hanches.",
    duration: "03:30",
    badge: "Record & Cadence",
    youtubeId: "7Xnr805bm4E",
    thumbnail: "https://img.youtube.com/vi/7Xnr805bm4E/hqdefault.jpg",
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
