export interface TechnicalSkill {
  name: string;
  level: string;
  proficiency: number;
  description: string;
}

export interface SoftSkill {
  name: string;
  description: string;
}

export interface ForecastingProcess {
  steps: string[];
}

export interface SkillsData {
  title: string;
  description: string;
  technicalSkills: TechnicalSkill[];
  softSkills: SoftSkill[];
  forecastingProcess: ForecastingProcess;
}

export const skillsData: SkillsData = {
  title: "Skills",
  description: "My technical and soft skills.",
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
    steps: [
      "Diagnostics - Collecting and analyzing statistical data, studying business resources",
      "Forming goals (hypothesis) - Selection of driver indicators",
      "Coordination - Preparing forecasts, interactive reports, presenting results, consulting business",
    ],
  },
};
