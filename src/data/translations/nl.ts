import type { TranslationData } from "./types";

export const nl: TranslationData = {
  profile: {
    name: "Sergey\u00A0Zolotko",
    title: "Analist-Ontwikkelaar in\u00A0Nederland",
    profileImage: "/profile-pic.jpg",
    contactButton: "Neem contact op",
    downloadButton: "CV downloaden",
  },
  experience: {
    title: "Werkervaring",
    description: "Mijn professionele reis in analyse en ontwikkeling.",
    items: [
      {
        company: "Alfa Bank",
        position: "Hoofdanalist bij de Financiële Afdeling",
        period: "Aug 2018 - Aug 2019",
        responsibilities: [
          "Verantwoordelijk voor analyse en planning van de leningportefeuille van het zakelijke segment",
          "Plannen opgesteld per product, stad, segment en kanaal",
          "Deelgenomen aan het voorbereiden van dashboards voor het bedrijf, interactieve rapporten en presentatiemateriaal",
          "Resultaten gecoördineerd met zakelijke klanten",
        ],
        achievements: [
          "De vereiste huidige leningplannen voor 2019 opgesteld",
          "Budgetgoedkeuring verkregen van klanten en uitvoerders",
          "Voortdurend het transactie-per-transactie berekeningsmodel van de leningportefeuille verbeterd (SQL-model)",
        ],
        technologies: ["Excel", "SQL", "PowerPoint", "Oracle"],
      },
      {
        company: "MTS",
        position: "Senior Analist",
        period: "Mrt 2017 - Aug 2018",
        responsibilities: [
          "Regelmatige item-per-item voorspelling en seizoensgebonden budgettering van inkomsten en uitgaven in regionale vestigingen",
          "Interactie met functionele blokken over operationele voorspellingskwesties",
          "Plan-feit analyse per balans-eenheid, voorbereiding van commentaar en advisering van het bedrijf over prognose- en budgetuitvoeringskwesties",
          "Analyse van de verdeling van doeluitgaven, interactie met functionele blokken, aanpassingen aan doelplannen",
          "Consolidatie van het PL-plan per bedrijfstype en verantwoordelijkheidscentrum",
          "Coördinatie van doelen met regio's, onderhandelingen voeren, antwoorden voorbereiden op vragen, wijzigingen aanbrengen in doelen",
        ],
        achievements: [
          "Succesvol en tijdig de budgetcyclus 2017 afgerond, doelgoedkeuringen ontvangen van vestigingen",
          "Tientallen operationele prognosereleases voorbereid voor toegewezen regio's met naleving van doelnauwkeurigheid per KPI",
          "Financiële modellen in Excel gemaakt en onderhouden",
          "Macro's geschreven in VBA en gegevens verwerkt met Python",
        ],
        technologies: ["VBA", "Excel", "Python"],
      },
      {
        company: "Why Not Wine",
        position: "Hoofd Marketing Afdeling",
        period: "Aug 2014 - Aug 2016",
        responsibilities: [
          "Deelname aan de lancering van het project",
          "Marketing, PR, SMM, e-mailmarketing",
          "Financiële analyse",
          "Management accounting, deelname aan de voorbereiding van bedrijfsplannen",
        ],
        achievements: [
          "Ervaring opgedaan met het opstarten van een bedrijf vanaf nul",
          "Deelgenomen aan het verkrijgen van vergunningen van relevante autoriteiten",
          "Instructies en rapportageformulieren voorbereid voor medewerkers om werkprocessen op te zetten",
          "Marketingondersteuning voor het bedrijf georganiseerd, inclusief onderzoek en maatregelen om positionering, assortiment en prijsbeleid aan te passen",
          "Sociale netwerken, bedrijfsaccounts, e-mailmarketing, klantenenquêtes, klantendatabase beheerd",
          "De reputatie van het bedrijf op internet geanalyseerd, concurrenten en markttrends bestudeerd",
          "Management accounting in het bedrijf georganiseerd, belangrijkste financiële rapporten voorbereid voor management en externe gebruikers",
        ],
      },
    ],
    responsibilitiesLabel: "Verantwoordelijkheden:",
    achievementsLabel: "Prestaties:",
    technologiesLabel: "Technologieën:",
  },
  education: {
    title: "Opleiding",
    description: "Mijn academische achtergrond en kwalificaties.",
    education: [
      {
        institution: "Bauman Moskou Staatsuniversiteit voor Techniek",
        year: "2013",
        degrees: [
          {
            name: "Technische Graad",
            field: "Hef- en Transportsystemen",
            year: "2013",
          },
          {
            name: "Economie en Management Graad",
            field: "Organisatie van Ondernemersactiviteiten",
            year: "2013",
          },
        ],
      },
    ],
    continuousEducation: {
      title: "Voortdurende Educatie",
      description:
        'Momenteel lees ik "Web Scraping using Python" en bestudeer ik reguliere expressies. Ook leer ik JavaScript uit "Eloquent JavaScript" voor front-  en bestudeer ik reguliere expressies. Ook leer ik JavaScript uit "Eloquent JavaScript" voor front-end ontwikkeling. Ik ben van plan om API\'s, Git, gedistribueerde gegevensopslag- en verwerkingssystemen te bestuderen en te beginnen met het gebruik van Linux.',
    },
  },
  skills: {
    title: "Vaardigheden",
    description: "Mijn technische en soft skills.",
    technicalSkillsTitle: "Technische Vaardigheden",
    softSkillsTitle: "Soft Skills",
    technicalSkills: [
      {
        name: "Excel",
        level: "Gevorderd",
        proficiency: 90,
        description:
          "Complexe formules, draaitabellen, modellen, datavisualisatie, externe bronverbindingen, macro's.",
      },
      {
        name: "SQL",
        level: "Gemiddeld",
        proficiency: 75,
        description:
          "Maken en configureren van tabellen, schema's, weergaven. Ervaring met OLAP-kubussen, vensterfuncties. Complexe scripts en procedures.",
      },
      {
        name: "Python",
        level: "Gemiddeld",
        proficiency: 65,
        description:
          "Bekend met contextbeheer, uitzonderingsafhandeling, functiedecorateurs, parallelle threads, generators. Ervaring met NumPy, Pandas, Matplotlib.",
      },
      {
        name: "Analytics",
        level: "Gevorderd",
        proficiency: 85,
        description:
          "Voorspelling, statistische gegevensverzameling en -analyse, selectie van driverindicatoren, bedrijfsmiddelenonderzoek, budgetvoorbereiding.",
      },
      {
        name: "Engels",
        level: "B1 (Gemiddeld)",
        proficiency: 60,
        description: "",
      },
    ],
    softSkills: [
      {
        name: "Communicatie",
        description: "Geletterde mondelinge en schriftelijke taal",
      },
      {
        name: "Aanpassingsvermogen",
        description: "Snelle aanpassing aan nieuwe omgevingen",
      },
      {
        name: "Continu Leren",
        description: "Altijd vaardigheden verbeteren",
      },
      {
        name: "Kritisch Denken",
        description: "Systematische en analytische benadering",
      },
      {
        name: "Organisatie",
        description: "Gestructureerde aanpak van taken",
      },
      {
        name: "Samenwerking",
        description: "Teamgerichte mindset",
      },
    ],
    forecastingProcess: {
      title: "Voorspellingsproces",
      steps: [
        "Diagnostiek - Verzamelen en analyseren van statistische gegevens, bestuderen van bedrijfsmiddelen",
        "Doelen vormen (hypothese) - Selectie van driverindicatoren",
        "Coördinatie - Voorspellingen voorbereiden, interactieve rapporten, resultaten presenteren, bedrijf adviseren",
      ],
    },
  },
  about: {
    title: "Over Mij",
    description:
      "Ervaren analist-ontwikkelaar met een sterke achtergrond in financiën, gegevensanalyse en programmeren.",
    cards: [
      {
        title: "Carrièredoel",
        content:
          "Mijn carrière als analist voortzetten en in de nabije toekomst uitgroeien tot expertniveau.",
      },
      {
        title: "Wat Ik Bied",
        content: [
          "Kennis van SQL, Python en analytics",
          "Bedrijfsgerichte benadering van gegevensanalyse",
          "Georganiseerde, procesgerichte en resultaatgerichte mindset",
        ],
        isListContent: true,
      },
      {
        title: "Waar Ik Naar Zoek",
        content: [
          "Scripts schrijven in Python en SQL",
          "Communicatie met gegevenseigenaren en analytics-belanghebbenden",
          "Ad-hoc taken oplossen of langetermijnmodellen implementeren",
          "Gegevensvisualisatie via dashboards",
          "Standaardisatie en optimalisatie van routinetaken",
          "Mogelijkheid om diverse ervaring op te doen in analytics en ontwikkeling",
        ],
        isListContent: true,
      },
      {
        title: "Persoonlijke Interesses",
        content:
          "Ik houd gedetailleerde gezinsfinanciën bij, gebruik To Do en Trello voor persoonlijke organisatie en beoefen sinds 2016 gymnastiek. Ik geniet van fietsen, reizen, films, muziek, bordspellen en cocktailcultuur.",
      },
    ],
    interests: [
      { tag: "#workout" },
      { tag: "#fietsen" },
      { tag: "#reizen" },
      { tag: "#bordspellen" },
    ],
  },
  contact: {
    title: "Neem Contact Op",
    description: "Neem contact op om mogelijkheden te bespreken.",
    contactInfo: [
      {
        icon: "map-pin",
        title: "Locatie",
        value: "Nederland",
      },
      {
        icon: "mail",
        title: "Email",
        value: "s.@.com",
      },
      {
        icon: "phone",
        title: "Telefoon",
        value: "Beschikbaar op aanvraag",
      },
    ],
    contactInfoTitle: "Contactgegevens",
    contactInfoDescription:
      "Voel je vrij om contact op te nemen via een van deze kanalen.",
    formTitle: "Stuur Mij een Bericht",
    formDescription:
      "Vul het onderstaande formulier in en ik neem zo snel mogelijk contact met je op.",
    formLabels: {
      name: "Naam",
      email: "Email",
      subject: "Onderwerp",
      message: "Bericht",
      submit: "Bericht Versturen",
      namePlaceholder: "Jouw naam",
      emailPlaceholder: "Jouw email",
      subjectPlaceholder: "Onderwerp van je bericht",
      messagePlaceholder: "Jouw bericht",
    },
  },
  navigation: {
    experience: "Ervaring",
    education: "Opleiding",
    skills: "Vaardigheden",
    about: "Over\u00A0mij",
    contact: "Contact",
    backToTop: "Terug naar boven",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
};
