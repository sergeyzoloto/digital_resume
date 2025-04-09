export interface ProfileTranslation {
  name: string;
  title: string;
  location: string;
  profileImage: string;
  contactButton: string;
  downloadButton: string;
}

export interface ExperienceItemTranslation {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
  technologies?: string[];
}

export interface ExperienceTranslation {
  title: string;
  description: string;
  items: ExperienceItemTranslation[];
  responsibilitiesLabel: string;
  achievementsLabel: string;
  technologiesLabel: string;
}

export interface EducationItemTranslation {
  institution: string;
  year: string;
  degrees: {
    name: string;
    field: string;
    year: string;
  }[];
}

export interface ContinuousEducationTranslation {
  title: string;
  description: string;
}

export interface EducationTranslation {
  title: string;
  description: string;
  education: EducationItemTranslation[];
  continuousEducation: ContinuousEducationTranslation;
}

export interface TechnicalSkillTranslation {
  name: string;
  level: string;
  proficiency: number;
  description: string;
}

export interface SoftSkillTranslation {
  name: string;
  description: string;
}

export interface ForecastingProcessTranslation {
  title: string;
  steps: string[];
}

export interface SkillsTranslation {
  title: string;
  description: string;
  technicalSkillsTitle: string;
  softSkillsTitle: string;
  technicalSkills: TechnicalSkillTranslation[];
  softSkills: SoftSkillTranslation[];
  forecastingProcess: ForecastingProcessTranslation;
}

export interface AboutCardTranslation {
  title: string;
  content: string | string[];
  isListContent?: boolean;
}

export interface InterestTranslation {
  tag: string;
}

export interface AboutTranslation {
  title: string;
  description: string;
  cards: AboutCardTranslation[];
  interests: InterestTranslation[];
}

export interface ContactInfoTranslation {
  icon: string;
  title: string;
  value: string;
}

export interface FormLabelsTranslation {
  name: string;
  email: string;
  subject: string;
  message: string;
  submit: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  subjectPlaceholder: string;
  messagePlaceholder: string;
}

export interface ContactTranslation {
  title: string;
  description: string;
  contactInfo: ContactInfoTranslation[];
  contactInfoTitle: string;
  contactInfoDescription: string;
  formTitle: string;
  formDescription: string;
  formLabels: FormLabelsTranslation;
}

export interface NavigationTranslation {
  experience: string;
  education: string;
  skills: string;
  about: string;
  contact: string;
  backToTop: string;
  linkedin: string;
  github: string;
}

export interface TranslationData {
  profile: ProfileTranslation;
  experience: ExperienceTranslation;
  education: EducationTranslation;
  skills: SkillsTranslation;
  about: AboutTranslation;
  contact: ContactTranslation;
  navigation: NavigationTranslation;
}
