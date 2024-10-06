import line from "../images/line-coeur.png";
import massage from "../images/stay/massage.JPG";
import hydrotherapie from "../images/stay/hydrotherapie.jpg";
import stretching from "../images/stay/stretching.JPG";
import aromatherapie from "../images/stay/aromatherapie.jpg";
import detente from "../images/stay/moment_a_pied.jpg";
import algotherapie from "../images/stay/algotherapie.JPG";

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
      "*Soin pratiqué uniquement sur l'écurie",
      "L'accès à la rivière se trouve sur des terrains appartenant à l'écurie, ce qui permet de bénéficier du bien-être de l'hydrothérapie en toute sécurité et dans un cadre 100 % calme et naturel. Cette méthode consiste à faire marcher les chevaux dans l'eau pour les aider dans leur processus de récupération et de renforcement musculaire mais également en soulagement d'éventuelles blessures récentes ou plus anciennes.",
      "Adapté à votre cheval, ça peut être un simple bain de membres ou une balade dans la rivière, avec une profondeur choisie.",
  ],
}];

const stretchingContent = [{
  title: "Stretching",
  img: stretching,
  txt: [
      "Le stretching est l'étirement latéral et longitudinale des muscles. Plusieurs études ont prouvées que des séances régulières favorisent l'équilibre et la souplesse du cheval en limitant les installations de raideurs et en travaillant sur le centre de gravité du cheval pour assurer un confort dans une position équilibré.",
      "Le stretching permet aussi non seulement de reharmoniser l'ensemble du corps en effaçant les compensations musculaire et articulaire mais aussi de stimuler les neurorécepteurs pour permettre un élargissement des schémas moteurs et corporel.",
      "Formé auprès de plusieurs professionnels, nous vous proposons des séances avec des mouvements et les explications adaptés à votre cheval pour pouvoir le reproduire régulièrement et l'aider à se sentir aux mieux dans son corps au quotidien.",
  ],
}];

const aromatherapieContent = [{
  title: "Aromathérapie",
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

const algoContent = [{
  title: "Algothérapie",
  img: algotherapie,
  txt: [
    "L’algothérapie est l'utilisation des vertus des algues marines sous forme d'un cataplasme qu'on applique sur l'intégralité du corps ou uniquement sur les parties à traiter. Utilisés avec succès en thalassothérapie humaine, les algues et les sédiments marins sont de véritables concentrés d’oligo-éléments et de minéraux ce qui nourrit et tonifie l'organisme en lui procurant les besoins nécessaires à son bon fonctionnement, draine les toxines et joue un rôle anti-inflammatoire sur les zones ciblées.",
    "Formé en algothérapie et partenaire avec la gamme de produits Cavasso, nous vous proposons des soins confectionnés en Bretagne qui apportent confort et bien-être au quotidien et peuvent être utilisés de manière bénéfique en presque toutes circonstances.",
    "N'hésitez pas à nous contacter si vous souhaitez découvrir les soins Cavasso et/ou offrir un moment de relaxation à votre cheval pour qu'il fasse le plein d'energie et de vitalité grâce aux bienfaits de la mer d'Iroise.",
  ],
}];

// PriceTables data : 
const priceTablesArray = [
    // Pension annuelle :
    {
      title: "Pensions à l'année",
      item: ["Shetlands – Poneys A", "Poneys B et C", "Poneys D et chevaux", "Adhésion annuelle"],
      price: ["120€ par mois", "160€ par mois", "195€ par mois", "20€",],
      img: line,
    },
    {
      title: "Autres pensions",
      item: ["Pensions jeune cheval / débourrage", "Pensions réhabilitation - rééducation", "Pensions gardiennage / convalescence", "Accès aux installations et aux tarifs des pensions à l'année"],
      price: ["110€ / semaine", "130€ / semaine", "85€ / semaine", "60€"],
      img: line,
    },
    // Pension passagère : (Commenté le 13/5)
    {
      title: "Pensions",
      item: ["Pensions jeune cheval / débourrage", "Pensions réhabilitation - rééducation", "Pensions gardiennage / convalescence", "Pension 24 heures", "Pension 3 jours", "Pension 1 semaine",],
      price: ["Sur devis", "Sur devis", "Sur devis", "10€", "25€", "60€",],
      img: line,
    },
    {
      title: "Prestations",
      item: ["Cours (cavalier non adhérent) 1h", "Travail du cheval", "Location installation (hors pension)", "Adhésion annuelle extérieure (pour avoir accès aux installations et au tarif des pensions à l'année)",],
      price: ["20€", "25€", "5€ la séance", "60€"],
      img: line,
    },
    // Autres prestations : 
    {
      title: "Prestations à l'écurie ",
      item: ["Massage avec complément stretching et huile essentielle", "Soins algothérapie", "Consultation aromathérapie", "Stretching", "Forfait massage + 1 activité au choix"],
      price: ["45€", "40€", "35€", "30€", "75€"],
      img: line,
    },
    {
      title: "Prestations à domicile",
      item: ["Massage avec complément stretching adapté", "Algothérapie", "Présentation et explications sur les produits Cavasso", "Aromathérapie", "Stretching"],
      price: ["50€", "45€", "30€", "40€", "35€"],
      img: line,
    },
  ];

  export { infrastructureArray, massageContent, hydrotherapieContent, stretchingContent, aromatherapieContent, detenteContent, algoContent, priceTablesArray };