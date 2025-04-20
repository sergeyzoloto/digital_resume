import type { TranslationData } from "./types";

export const en: TranslationData = {
  profile: {
    name: "Sergey\u00A0Zolotko",
    title: "Analyst-Developer based in\u00A0The\u00A0Netherlands",
    profileImage: "/profile-pic.jpg",
    contactButton: "Contact Me",
    downloadButton: "Download CV",
  },
  summary: {
    title: "Summary",
    briefIntro:
      "I am an analyst-developer with a strong background in finance, data analysis, and programming. I have experience in various industries, including banking and telecommunications.",
  },
  experience: {
    title: "Work Experience",
    description: "My professional journey in analytics and development.",
    items: [
      {
        company: "Alfa Bank",
        position: "Leading Analyst in Finance Department",
        period: "Aug 2018 - Aug 2019",
        responsibilities: [
          "Responsible for analysis and planning of the loan portfolio of the corporate business segment",
          "Formed plans by products, cities, segments, and channels",
          "Participated in preparing dashboards for business, interactive reports, and presentation materials",
          "Coordinated results with business customers",
        ],
        achievements: [
          "Formed the required current lending plans for 2019",
          "Achieved budget approval from customers and executors",
          "Continuously improved the transaction-by-transaction calculation model of the loan portfolio (SQL model)",
        ],
        technologies: ["Excel", "SQL", "PowerPoint", "Oracle"],
        shortResponsibilities: "Analysis and planning of the loan portfolio",
        shortAchievements: "Achieved budget approval from customers",
      },
      {
        company: "MTS",
        position: "Senior Analyst",
        period: "Mar 2017 - Aug 2018",
        responsibilities: [
          "Regular item-by-item forecasting and seasonal budgeting of income and expenses in regional branches",
          "Interaction with functional blocks on operational forecasting issues",
          "Plan-fact analysis by balance units, preparation of comments and consulting business on forecast and budget execution issues",
          "Analysis of the distribution of target expenses, interaction with functional blocks, making adjustments to target plans",
          "Consolidation of the PL plan by types of business and responsibility centers",
          "Coordination of targets with regions, conducting negotiations, preparing answers to questions, making changes to targets",
        ],
        achievements: [
          "Successfully and timely completed the 2017 budget cycle, received target approvals from branches",
          "Prepared dozens of operational forecast releases for assigned regions with compliance with target accuracy by KPI",
          "Created and maintained financial models in Excel",
          "Wrote macros in VBA and processed data using Python",
        ],
        technologies: ["VBA", "Excel", "Python"],
        shortResponsibilities:
          "Forecasting and budgeting of income and expenses",
        shortAchievements: "Successfully completed the 2017 budget cycle",
      },
      {
        company: "Why Not Wine",
        position: "Marketing Department Head",
        period: "Aug 2014 - Aug 2016",
        responsibilities: [
          "Participation in the launch of the project",
          "Marketing, PR, SMM, email marketing",
          "Financial analytics",
          "Management accounting, participation in the preparation of business plans",
        ],
        achievements: [
          "Gained experience in launching a business from scratch",
          "Participated in obtaining permits from relevant authorities",
          "Prepared instructions and report forms for employees to establish work processes",
          "Organized marketing support for the business, including research and measures to adjust positioning, assortment and pricing policies",
          "Managed social networks, corporate accounts, email marketing, customer surveys, customer database",
          "Analyzed the company's reputation on the Internet, studied competitors and market trends",
          "Organized management accounting at the enterprise, prepared main financial reports for management and external users",
        ],
        shortAchievements:
          "Gained experience in launching a business from scratch",
        shortResponsibilities: "Marketing, PR, SMM, email marketing",
      },
    ],
    responsibilitiesLabel: "Responsibilities:",
    achievementsLabel: "Achievements:",
    technologiesLabel: "Technologies:",
  },
  education: {
    title: "Education",
    description: "My academic background and qualifications.",
    education: [
      {
        institution: "Bauman Moscow State Technical University",
        year: "2013",
        degrees: [
          {
            name: "Engineering Degree",
            field: "Lifting and Transport Systems",
            year: "2013",
          },
          {
            name: "Economics and Management Degree",
            field: "Organization of Entrepreneurial Activity",
            year: "2013",
          },
        ],
      },
    ],
    continuousEducation: {
      title: "Continuous Education",
      description:
        'Currently reading "Web Scraping using Python" and studying regular expressions. Also learning JavaScript from "Eloquent JavaScript" for front-end development. Planning to study APIs, Git, distributed data storage and processing systems, and start using Linux.',
    },
  },
  skills: {
    title: "Skills",
    description: "My technical and soft skills.",
    technicalSkillsTitle: "Technical Skills",
    softSkillsTitle: "Soft Skills",
    technicalSkills: [
      {
        name: "Excel",
        level: "Advanced",
        proficiency: 90,
        description:
          "Complex formulas, pivot tables, models, data visualization, external source connections, macros.",
      },
      {
        name: "SQL",
        level: "Intermediate",
        proficiency: 75,
        description:
          "Creating and configuring tables, schemas, views. Experience with OLAP cubes, window functions. Complex scripts and procedures.",
      },
      {
        name: "Python",
        level: "Intermediate",
        proficiency: 65,
        description:
          "Familiar with context management, exception handling, function decorators, parallel threads, generators. Experience with NumPy, Pandas, Matplotlib.",
      },
      {
        name: "Analytics",
        level: "Advanced",
        proficiency: 85,
        description:
          "Forecasting, statistical data collection and analysis, selection of driver indicators, business resource study, budget preparation.",
      },
      {
        name: "English",
        level: "B1 (Intermediate)",
        proficiency: 60,
        description: "",
      },
    ],
    softSkills: [
      {
        name: "Communication",
        description: "Literate oral and written speech",
      },
      {
        name: "Adaptability",
        description: "Quick adjustment to new environments",
      },
      {
        name: "Continuous Learning",
        description: "Always improving skills",
      },
      {
        name: "Critical Thinking",
        description: "Systematic and analytical approach",
      },
      {
        name: "Organization",
        description: "Structured approach to tasks",
      },
      {
        name: "Collaboration",
        description: "Team-oriented mindset",
      },
    ],
    forecastingProcess: {
      title: "Forecasting Process",
      steps: [
        "Diagnostics - Collecting and analyzing statistical data, studying business resources",
        "Forming goals (hypothesis) - Selection of driver indicators",
        "Coordination - Preparing forecasts, interactive reports, presenting results, consulting business",
      ],
    },
  },
  about: {
    title: "About Me",
    description:
      "Experienced analyst-developer with a strong background in finance, data analysis, and programming.",
    cards: [
      {
        title: "Career Goal",
        content:
          "Continue my career as an analyst and grow to an expert level in the foreseeable future.",
      },
      {
        title: "What I Offer",
        content: [
          "Knowledge of SQL, Python, and analytics",
          "Business-oriented approach to data analysis",
          "Organized, process-oriented, and results-driven mindset",
        ],
        isListContent: true,
      },
      {
        title: "What I'm Looking For",
        content: [
          "Writing scripts in Python and SQL",
          "Communication with data owners and analytics stakeholders",
          "Solving ad hoc tasks or implementing long-term models",
          "Data visualization through dashboards",
          "Standardization and optimization of routine tasks",
          "Opportunity to gain diverse experience in analytics and development",
        ],
        isListContent: true,
      },
      {
        title: "Personal Interests",
        content:
          "I maintain detailed family finances, use To Do and Trello for personal organization, and have been practicing gymnastics since 2016. I enjoy cycling, traveling, movies, music, board games, and cocktail culture.",
      },
    ],
    interests: [
      { tag: "#workout" },
      { tag: "#cycling" },
      { tag: "#travel" },
      { tag: "#boardgames" },
    ],
  },
  contact: {
    title: "Contact Me",
    description: "Get in touch to discuss opportunities.",
    contactInfo: [
      {
        icon: "map-pin",
        title: "Location",
        value: "The Netherlands",
      },
      {
        icon: "mail",
        title: "Email",
        value: "s.@.com",
      },
      {
        icon: "phone",
        title: "Phone",
        value: "Available upon request",
      },
    ],
    contactInfoTitle: "Contact Information",
    contactInfoDescription:
      "Feel free to reach out through any of these channels.",
    formTitle: "Send Me a Message",
    formDescription:
      "Fill out the form below and I'll get back to you as soon as possible.",
    formLabels: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      subjectPlaceholder: "Subject of your message",
      messagePlaceholder: "Your message",
    },
  },
  navigation: {
    summary: "Summary",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    about: "About",
    contact: "Contact",
    backToTop: "Back to top",
  },
};
