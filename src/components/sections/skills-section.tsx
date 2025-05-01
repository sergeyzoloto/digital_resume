"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Section } from "../ui/section";
import { useLanguage } from "@/context/language-context";
import { translations } from "@/data/translations";

export function SkillsSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const skillsData = t.skills;

  const technicalSkillsCard = (
    <Card
      key="technical-skills"
      className="overflow-y-auto h-full flex-[3_1_300px] max-h-[calc(100vh-15rem)]"
    >
      <CardHeader>
        <CardTitle>{skillsData.technicalSkillsTitle}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {skillsData.technicalSkills.map((skill, index) => (
          <div key={`tech-skill-${index}`} className="space-y-2">
            <div className="flex justify-between">
              <h4 className="font-medium">{skill.name}</h4>
              <span>{skill.level}</span>
            </div>
            <Progress value={skill.proficiency || 50} />
            {skill.description && (
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );

  const softSkillsCard = (
    <Card
      key="soft-skills"
      className="overflow-y-auto h-full flex-[3_1_300px] max-h-[calc(100vh-15rem)]" // Adjust height for mobile
    >
      <CardHeader>
        <CardTitle>{skillsData.softSkillsTitle}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {skillsData.introduction}
        </p>
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
          {skillsData.softSkills.map((skill, index) => (
            <div key={`soft-skill-${index}`} className="space-y-2">
              <Badge className="w-full justify-center py-1.5">
                {skill.name}
              </Badge>
              <p className="text-sm text-muted-foreground text-center">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Section
      id="skills"
      title={skillsData.title}
      description={skillsData.description}
      useCarouselOnMobile={true}
      carouselChildrenFilter={() => [technicalSkillsCard, softSkillsCard]}
    >
      <div className="flex flex-row lg:gap-4 xl:gap-8">
        {technicalSkillsCard}
        {softSkillsCard}
      </div>
    </Section>
  );
}
