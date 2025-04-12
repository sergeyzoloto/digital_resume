"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Section } from "../ui/section";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/data/translations";

export function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const aboutData = t.about;

  const aboutCards = aboutData.cards.map((card, index) => (
    <Card
      key={`about-card-${index}`}
      className="sm:h-[calc(100vh-22rem)] h-[calc(100vh-19rem)] overflow-y-auto flex-[1_1_300px]" // Adjust height for mobile
    >
      <CardHeader>
        <CardTitle>{card.title}</CardTitle>
      </CardHeader>
      <CardContent>
        {card.isListContent ? (
          <ul className="list-disc pl-5 space-y-2">
            {(card.content as string[]).map((item, itemIndex) => (
              <li key={`list-item-${index}-${itemIndex}`}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{card.content as string}</p>
        )}

        {card.title === "Personal Interests" && (
          <div className="flex flex-wrap gap-2 mt-4">
            {aboutData.interests.map((interest, interestIndex) => (
              <span
                key={`interest-${interestIndex}`}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
              >
                {interest.tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  ));

  return (
    <Section
      id="about"
      title={aboutData.title}
      description={aboutData.description}
      useCarouselOnMobile={true}
      carouselChildrenFilter={() => aboutCards}
    >
      <div className="flex lg:gap-4 xl:gap-8">{aboutCards}</div>
    </Section>
  );
}
