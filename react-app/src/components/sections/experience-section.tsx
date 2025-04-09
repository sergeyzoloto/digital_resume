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
import { experienceData } from "@/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import type { CarouselApi } from "../ui/carousel";

export function ExperienceSection() {
  const isMobile = useMobile();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Update current slide when carousel changes
  const onSelect = () => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  };

  // Set up the carousel API
  useState(() => {
    if (!api) return;
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  });

  // Render experience cards
  const renderExperienceCard = (
    experience: (typeof experienceData.items)[0],
    index: number
  ) => (
    <Card key={`experience-${index}`} className="h-full">
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
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Responsibilities:</h4>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {experience.responsibilities.map((responsibility, respIndex) => (
                <li key={`resp-${index}-${respIndex}`}>{responsibility}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Achievements:</h4>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              {experience.achievements.map((achievement, achIndex) => (
                <li key={`ach-${index}-${achIndex}`}>{achievement}</li>
              ))}
            </ul>
          </div>
          {experience.technologies && (
            <div>
              <h4 className="font-medium">Technologies:</h4>
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
    >
      {isMobile ? (
        <div className="w-full">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {experienceData.items.map((experience, index) => (
                <CarouselItem key={`carousel-experience-${index}`}>
                  {renderExperienceCard(experience, index)}
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-2">
              <CarouselPrevious className="static translate-y-0 translate-x-0" />
              <CarouselNext className="static translate-y-0 translate-x-0" />
            </div>
          </Carousel>
          <div className="flex justify-center mt-4">
            <div className="flex gap-1">
              {experienceData.items.map((_, index) => (
                <div
                  key={`indicator-${index}`}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    current === index ? "bg-primary" : "bg-primary/30"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 lg:gap-12">
          {experienceData.items.map((experience, index) =>
            renderExperienceCard(experience, index)
          )}
        </div>
      )}
    </Section>
  );
}
