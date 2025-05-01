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
    <Card key={`summary-${index}`}>
      <CardHeader>
        <div className="flex flex-row w-full items-start md:justify-between gap-4">
          <div className="flex flex-col gap-2 w-full">
            <CardTitle>{experience.company}</CardTitle>
            <CardDescription>{experience.position}</CardDescription>
          </div>
          <div className="flex gap-2 flex-col sm:flex-row md:flex-col lg:flex-row">
            <Badge variant="outline" className="w-fit h-fit">
              {experience.period.split(" - ")[0]}
            </Badge>
            <p className="hidden sm:block md:hidden lg:block">-</p>
            <Badge variant="outline" className="w-fit h-fit">
              {experience.period.split(" - ")[1]}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent className="overflow-y-auto max-h-full px-4">
        {/* Scrollable content */}
        <div className="space-y-4">
          <p className="text-sm mb-0">{experience.shortResponsibilities}</p>
          <p className="text-sm">{experience.shortAchievements}</p>
        </div>
      </CardContent>
    </Card>
  );

  // Render brief intro card
  const renderBriefIntroCard = () => (
    <Card className="flex-[2_0_16rem]">
      <CardContent>
        <p className="text-base xl:text-xl">{summaryData.briefIntro}</p>
      </CardContent>
    </Card>
  );

  // Render skills card
  const renderSkillsCard = () => (
    <Card className="flex-[1_0_16rem]">
      <CardHeader>
        <CardTitle>{skillsData.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {skillsData.skillSet.map((skill, index) => (
          <Badge
            key={`summary-skill-${index}`}
            variant="outline"
            className="w-fit h-fit mb-2 mr-2 last:mb-0 last:mr-0"
          >
            {skill}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );

  // Render education card
  const renderEducationCard = () => (
    <Card className="flex-[2_0_16rem]">
      <CardHeader>
        <CardTitle>{educationData.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1">
          {educationData.education.map((edu, index) => (
            <li
              key={`summary-edu-${index}`}
              className="text-sm flex flex-col gap-2 mb-8 last:mb-0"
            >
              <div className="flex flex-row justify-between gap-2">
                <p className="font-bold">{edu.degree}</p>
                <div className="flex gap-2 flex-col ">
                  <Badge variant="outline" className="w-fit h-fit">
                    {edu.period.split(" - ")[0]}
                  </Badge>
                  <Badge variant="outline" className="w-fit h-fit">
                    {edu.period.split(" - ")[1]}
                  </Badge>
                </div>
              </div>
              <p>{edu.shortDescription}</p>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  return (
    <Section id="summary" title={summaryData.title}>
      <div className="flex flex-col justify-center overflow-x-hidden mb-12 lg:mb-4">
        {/* Top row with Brief Intro, Skills, and Education cards */}
        <div className="flex flex-row flex-wrap gap-4 mb-4">
          {renderBriefIntroCard()}
          {renderEducationCard()}
          {renderSkillsCard()}
        </div>
        {/* Render the first three experience cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {experienceData.items
            .slice(0, 3)
            .map((summary, index) => renderExperienceCard(summary, index))}
        </div>
      </div>
    </Section>
  );
}
