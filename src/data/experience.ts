export interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
  technologies?: string[];
}

export interface ExperienceData {
  title: string;
  description: string;
  items: ExperienceItem[];
}

export const experienceData: ExperienceData = {
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
    },
  ],
};
