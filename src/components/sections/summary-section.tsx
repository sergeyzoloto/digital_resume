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

  // Render summary cards
  const renderExperienceCard = (
    experience: (typeof experienceData.items)[0],
    index: number
  ) => (
    <Card
      key={`summary-${index}`}
      className="sm:h-[calc(100vh-20rem)] h-[calc(100vh-17rem)] overflow-y-auto flex-[3_1_300px]" // Adjust height for mobile
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

  return (
    <Section
      id="summary"
      title={summaryData.title}
      description={""}
      useCarouselOnMobile={true}
      carouselChildrenFilter={() =>
        experienceData.items.map((summary, index) =>
          renderExperienceCard(summary, index)
        )
      }
    >
      <div className="flex flex-row lg:gap-4 xl:gap-8">
        {experienceData.items
          .slice(0, 2)
          .map((summary, index) => renderExperienceCard(summary, index))}
      </div>
    </Section>
  );
}
