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

export function EducationSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const educationData = t.education;

  const educationCards = educationData.education.map((edu, index) => (
    <Card
      key={`education-${index}`}
      className="overflow-y-auto flex-[1_1_300px] h-full lg:h-auto max-h-[calc(100vh-15rem)]"
    >
      <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-4">
        <div className="flex flex-row items-center gap-4 mb-2">
          <div className="flex min-h-12 min-w-12 items-center justify-center rounded-full bg-primary/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <CardTitle>{edu.degree}</CardTitle>
            <CardDescription>{edu.institution}</CardDescription>
          </div>
        </div>
        <Badge variant="outline" className="text-sm">
          {edu.period}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="ml-auto"></div>
        {edu.description.map((desc, descIndex) => (
          <p
            key={`edu-desc-${index}-${descIndex}`}
            className="text-sm md:text-base"
          >
            {desc}
          </p>
        ))}
      </CardContent>
    </Card>
  ));

  return (
    <Section
      id="education"
      title={educationData.title}
      description={educationData.description}
      useCarouselOnMobile={true}
      carouselChildrenFilter={() => educationCards}
    >
      <div className="flex lg:gap-4 xl:gap-8">{educationCards}</div>
    </Section>
  );
}
