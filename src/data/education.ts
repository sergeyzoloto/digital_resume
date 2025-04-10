export interface EducationItem {
  institution: string;
  year: string;
  degrees: {
    name: string;
    field: string;
    year: string;
  }[];
}

export interface ContinuousEducation {
  description: string;
}

export interface EducationData {
  title: string;
  description: string;
  education: EducationItem[];
  continuousEducation: ContinuousEducation;
}

export const educationData: EducationData = {
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
    description:
      'Currently reading "Web Scraping using Python" and studying regular expressions. Also learning JavaScript from "Eloquent JavaScript" for front-end development. Planning to study APIs, Git, distributed data storage and processing systems, and start using Linux.',
  },
};
