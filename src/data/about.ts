export interface AboutCard {
  title: string;
  content: string | string[];
  isListContent?: boolean;
}

export interface Interest {
  tag: string;
}

export interface AboutData {
  title: string;
  description: string;
  cards: AboutCard[];
  interests: Interest[];
}

export const aboutData: AboutData = {
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
};
