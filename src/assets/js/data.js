import line from "../images/line.png";
import massage from "../images/stay/massage.JPG";
import hydrotherapie from "../images/stay/hydrotherapie.jpg";
import stretching from "../images/stay/stretching.JPG";
import aromatherapie from "../images/stay/aromatherapie.jpg";
import detente from "../images/stay/moment_a_pied.jpg";

// Home Data : 
const infrastructureArray = [
    "Box de 5*3 avec un paddock individuel de 7*3.",
    "Box intérieurs de 9*3m30.",
    "Carrière en sable de 25*35",
    "Manège de 40*20",
    "8 hectares de pâtures",
    "Douche avec eau chaude",
    "Casiers individuels avec anneaux d'attache à côté.",
    "Club House",
    "Pièce sellerie",
    "Casier individuel",
];

// stay Data : 
const massageContent = [{
  title: "Massage",
  img: massage,
  txt: [
      "Les séances sont assurées par Amélie, diplômée en physiothérapie manuel équin. Le massage libère le corps des tensions musculaires et stimule la circulation sanguine et lymphatique. Il élimine ainsi les toxines, et améliore l’état général du cheval, tant sur le plan physique que sur le plan psychique. Il a également pour fonction la prévention des lésions, en traitant en amont et avant l’apparition des symptômes, l’ensemble du corps du cheval, en lui redonnant sa liberté de mouvement et en supprimant raideurs et contraintes physiques.",
      "La palpation des mains est réalisée de façon subtile, afin de détecter le problème à la base. Il soulage le cheval en cas d’arthrose, car il redonne de la souplesse aux muscles sujets aux spasmes, autour de l’articulation douloureuse. Le cheval récupère également mieux et plus vite des blessures ligamentaires et tendineuses car l’accélération du flux sanguin permet une revascularisation des tissus lésés.",
      "Les huiles essentielles peuvent soutenir et renforcer cette symbiose. Le cheval se libère physiquement et mentalement en retrouvant son équilibre énergétique.",
  ],
}];

const hydrotherapieContent = [{
  title: "Hydrothérapie dans la Saulx",
  img: hydrotherapie,
  txt: [
      "L'accès à la rivière se trouve sur des terrains appartenant à l'écurie, ce qui permet de bénéficier du bien-être de l'hydrothérapie en toute sécurité et dans un cadre 100 % calme et naturel. Cette méthode consiste à faire marcher les chevaux dans l'eau pour les aider dans leur processus de récupération et de renforcement musculaire mais également en soulagement d'éventuelles blessures récentes ou plus anciennes.",
      "Adapté à votre cheval, ça peut être un simple bain de membres ou une balade dans la rivière, avec une profondeur choisie.",
  ],
}];

const stretchingContent = [{
  title: "Stretching",
  img: stretching,
  txt: [
      "Le stretching est l'étirement latéral et longitudinal des muscles. Des étirements lents et progressifs préparent à l’effort et ont également un intérêt thérapeutique :",
      " ils éveillent les neurorécepteurs présents dans les muscles et les articulations du cheval et favorisent ainsi l’équilibre et la souplesse du geste, en limitant les risques dus à l’effort et en luttant contre l’installation de raideurs.",
  ],
}];

const aromatherapieContent = [{
  title: "Séance huile essentielle",
  img: aromatherapie,
  txt: [
      "L’aromathérapie est l'utilisation des composés aromatiques des plantes, dans une optique de prévention et de soulagement de certaines blessures, ainsi que de bien-être et d'apaisement.",
      "Dans la nature lorsqu'un cheval ressent un déséquilibre, il rectifie en allant se servir lui-même en plantes médicinales. Les chevaux n'ayant plus la possibilité de le faire, nous leur proposons ces plantes médicinales sous forme concentrée : l'huile essentielle.",
      "Nous vous proposons une séance de 'consultation' pour pouvoir définir et vous conseiller sur une ou plusieurs huiles essentielles susceptibles d’aider au mieux votre cheval, au quotidien ou pendant sa convalescence.",
  ],
}];

const detenteContent = [{
  title: "Moment détente à pied",
  img: detente,
  txt: [
      "Nous vous proposons une séance avec diverses activités en main, ainsi qu’une partie théorique pour vous aider à mieux comprendre votre cheval et à perfectionner votre relation. Exercices à pied, base et découverte de l’éthologie ou son perfectionnement.",
      "Cette séance sera adaptée à votre niveau et celui de votre cheval.",
  ], 
}];

// PriceTables data : 
const priceTablesArray = [
    // Pension annuelle :
    {
      title: "Pensions",
      item: ["Shetlands – Poneys A", "Poneys B et C", "Poneys D et chevaux", "Adhésion annuelle", "Licence FFE (obligatoire)"],
      price: ["120€ par mois", "155€ par mois", "190€ par mois", "20€",],
      img: line,
    },
    {
      title: "Prestations",
      item: ["Cours particulier 45min / cours collectif 1h", "Travail du cheval à pied", "Travail du cheval monté", "Sortie cheval (liberté, pansage, brouting..)", "Accès aux prestations bien-être à un tarif réduit",],
      price: ["10€", "10€", "15€", "5€"],
      img: line,
    },
    // Pension passagère :
    {
      title: "Pensions",
      item: ["Pension débourrage / rééducation", "Pension 24 heures", "Pension 3 jours", "Pension 1 semaine",],
      price: ["Sur devis", "10€", "25€", "60€",],
      img: line,
    },
    {
      title: "Prestations",
      item: ["Cours (cavalier non adhérent) 1h", "Travail du cheval", "Location installation (hors pension)", "Adhésion annuelle (pour avoir accès au tarif des pensions à l’année)",],
      price: ["20€", "25€", "5€ la séance", "60€"],
      img: line,
    },
    // Autres prestations : 
    {
      title: "Prestations bien-être",
      item: ["Journée (massage + 1 activité au choix)", "Journée (massage + 2 activités au choix)", "Massage avec complément stretching adapté", "Supplément massage huile essentielle", "Hydrothérapie / Aromathérapie / Stretching / Séance à pied",],
      price: ["70€", "95€", "45€", "5€", "30€"],
      img: line,
    },
    {
      title: "Prestations à domicile",
      item: ["Cours particulier", "Massage avec complément stretching adapté", "Supplément massage huile essentielle", "Aromathérapie / Stretching / séance à pied", "Travail du cheval"],
      price: ["30€", "50€", "5€", "35€", "40€"],
      img: line,
    },
  ];

  export { infrastructureArray, massageContent, hydrotherapieContent, stretchingContent, aromatherapieContent, detenteContent, priceTablesArray };