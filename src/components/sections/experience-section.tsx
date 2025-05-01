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

export function ExperienceSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const experienceData = t.experience;

  // Render experience cards
  const renderExperienceCard = (
    experience: (typeof experienceData.items)[0],
    index: number
  ) => (
    <Card
      key={`experience-${index}`}
      className="overflow-y-auto h-full lg:h-auto flex-[3_1_300px] max-h-[calc(100vh-15rem)]"
    >
      <CardHeader>
        <div className="flex flex-row justify-between gap-4">
          <div className="flex flex-col gap-4">
            <CardTitle>{experience.company}</CardTitle>
            <CardDescription>{experience.position}</CardDescription>
          </div>
          <Badge variant="outline" className="w-fit h-fit">
            {experience.period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="overflow-y-auto px-4 text-sm xl:text-base">
        {/* Scrollable content */}
        <div className="px-2 space-y-4">
          <div>
            <h4 className="font-medium">
              {experienceData.responsibilitiesLabel}
            </h4>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {experience.responsibilities.map((responsibility, respIndex) => (
                <li key={`resp-${index}-${respIndex}`}>{responsibility}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium">{experienceData.achievementsLabel}</h4>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {experience.achievements.map((achievement, achIndex) => (
                <li key={`ach-${index}-${achIndex}`}>{achievement}</li>
              ))}
            </ul>
          </div>
          {experience.technologies && (
            <div>
              <h4 className="font-medium">
                {experienceData.technologiesLabel}
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {experience.technologies.map((tech, techIndex) => (
                  <Badge key={`tech-${index}-${techIndex}`} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Section
      id="experience"
      title={experienceData.title}
      description={experienceData.description}
      useCarouselOnMobile={true}
      carouselChildrenFilter={() =>
        experienceData.items.map((experience, index) =>
          renderExperienceCard(experience, index)
        )
      }
    >
      <div className="flex flex-row lg:gap-4 xl:gap-8">
        {experienceData.items
          .slice(0, 3)
          .map((experience, index) => renderExperienceCard(experience, index))}
      </div>
    </Section>
  );
}
