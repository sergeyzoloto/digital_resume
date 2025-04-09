import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Section } from "../ui/section";

export function EducationSection() {
  return (
    <Section
      id="education"
      title="Education"
      description="My academic background and qualifications."
    >
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
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
          <div>
            <CardTitle>Bauman Moscow State Technical University</CardTitle>
            <CardDescription>2013</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-medium">Engineering Degree</h4>
              <p className="text-sm text-muted-foreground">
                Lifting and Transport Systems
              </p>
              <Badge variant="outline">2013</Badge>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Economics and Management Degree</h4>
              <p className="text-sm text-muted-foreground">
                Organization of Entrepreneurial Activity
              </p>
              <Badge variant="outline">2013</Badge>
            </div>
          </div>

          <div className="pt-4">
            <h4 className="font-medium mb-2">Continuous Education</h4>
            <p className="text-sm text-muted-foreground">
              Currently reading "Web Scraping using Python" and studying regular
              expressions. Also learning JavaScript from "Eloquent JavaScript"
              for front-end development. Planning to study APIs, Git,
              distributed data storage and processing systems, and start using
              Linux.
            </p>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
