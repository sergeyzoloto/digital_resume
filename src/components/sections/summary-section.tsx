"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Section } from "../ui/section";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/data/translations";

export function SummarySection() {
  const { language } = useLanguage();
  const t = translations[language];
  const summaryData = t.summary;
  const experienceData = t.experience;
  const educationData = t.education;
  const skillsData = t.skills;

  // Render summary cards
  const renderExperienceCard = (
    experience: (typeof experienceData.items)[0],
    index: number
  ) => (
    <Card
      key={`summary-${index}`}
      className="sm:h-[calc(100vh-30rem)] h-[calc(100vh-27rem)] overflow-y-auto flex-[1_1_0%]" // Adjust height for mobile
    >
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle>{experience.company}</CardTitle>
            <CardDescription>{experience.position}</CardDescription>
          </div>
          <Badge variant="outline" className="w-fit">
            {experience.period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="overflow-y-auto max-h-full px-4">
        {/* Scrollable content */}
        <div className="px-2 space-y-4">
          <div>
            <h4 className="font-medium">
              {experienceData.responsibilitiesLabel}
            </h4>
            <p>{experience.shortResponsibilities}</p>
          </div>
          <div>
            <h4 className="font-medium">{experienceData.achievementsLabel}</h4>
            <p>{experience.shortAchievements}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Render brief intro card
  const renderBriefIntroCard = () => (
    <Card className="flex-[1_1_0]">
      <CardHeader>
        <CardTitle>{summaryData.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{summaryData.briefIntro}</p>
      </CardContent>
    </Card>
  );

  // Render skills card
  const renderSkillsCard = () => (
    <Card className="flex-[1_1_0]">
      <CardHeader>
        <CardTitle>{skillsData.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-4 space-y-1">
          {skillsData.skillSet.slice(0, 5).map((skill, index) => (
            <li key={`summary-skill-${index}`} className="text-sm">
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  // Render education card
  const renderEducationCard = () => (
    <Card className="flex-[1_1_0]">
      <CardHeader>
        <CardTitle>{educationData.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-4 space-y-1">
          {educationData.education.map((edu, index) => (
            <li key={`summary-edu-${index}`} className="text-sm">
              {edu.shortDescription}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  return (
    <Section
      id="summary"
      title={summaryData.title}
      description={""}
      useCarouselOnMobile={true}
    >
      {/* Top row with Brief Intro, Skills, and Education cards */}
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        {renderBriefIntroCard()}
        {renderSkillsCard()}
        {renderEducationCard()}
      </div>

      {/* Render the first three experience cards in a row */}
      <div className="flex flex-col lg:flex-row gap-4">
        {experienceData.items
          .slice(0, 3)
          .map((summary, index) => renderExperienceCard(summary, index))}
      </div>
    </Section>
  );
}
