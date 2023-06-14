import line from "../images/line.png";

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

// PriceTables data : 
const priceTablesArray = [
    // Pension annuelle :
    {
      title: "Pensions",
      item: ["Shetlands – Poneys A", "Poneys B et C", "Poneys D et chevaux", "Adhésion annuelle",],
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
      item: ["Pension débourrage / rééducation", "24 heures", "3 jours", "1 semaine",],
      price: ["Sur devis", "10€", "25€", "60€",],
      img: line,
    },
    {
      title: "Prestations",
      item: ["Cours (cavalier non adhérent) 1h", "Location installation (hors pension)", "Adhésion annuelle (pour avoir accès au tarif des pensions à l’année)",],
      price: ["20€", "5€ la séance", "60€"],
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
      item: ["Cours particulier", "Massage avec complément stretching adapté", "Supplément massage huile essentielle", "Aromathérapie / Stretching / séance à pied",],
      price: ["30€", "50€", "5€", "35€",],
      img: line,
    },
  ];

  export { infrastructureArray, priceTablesArray };