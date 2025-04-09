import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Section } from "../ui/section";
import { experienceData } from "../../data/experience";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      title={experienceData.title}
      description={experienceData.description}
    >
      <div className="grid gap-6 lg:gap-12">
        {experienceData.items.map((experience, index) => (
          <Card key={`experience-${index}`}>
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
                    {experience.responsibilities.map(
                      (responsibility, respIndex) => (
                        <li key={`resp-${index}-${respIndex}`}>
                          {responsibility}
                        </li>
                      )
                    )}
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
                        <Badge
                          key={`tech-${index}-${techIndex}`}
                          variant="secondary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
