import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Section } from "../ui/section";
import { skillsData } from "@/data";

export function SkillsSection() {
  return (
    <Section
      id="skills"
      title={skillsData.title}
      description={skillsData.description}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12">
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {skillsData.technicalSkills.map((skill, index) => (
              <div key={`tech-skill-${index}`} className="space-y-2">
                <div className="flex justify-between">
                  <h4 className="font-medium">{skill.name}</h4>
                  <span>{skill.level}</span>
                </div>
                <Progress value={skill.proficiency} className="h-2" />
                {skill.description && (
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Soft Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
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

            <div className="mt-8">
              <h4 className="font-medium mb-4">Forecasting Process</h4>
              <ol className="space-y-2 list-decimal pl-5">
                {skillsData.forecastingProcess.steps.map((step, index) => (
                  <li key={`process-step-${index}`}>{step}</li>
                ))}
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
