import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen w-full flex items-center justify-center page-container"
    >
      <div className="w-full mt-2 bg-red-500/50">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skills
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              My technical and soft skills.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <h4 className="font-medium">Excel</h4>
                  <span>Advanced</span>
                </div>
                <Progress value={90} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  Complex formulas, pivot tables, models, data visualization,
                  external source connections, macros.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <h4 className="font-medium">SQL</h4>
                  <span>Intermediate</span>
                </div>
                <Progress value={75} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  Creating and configuring tables, schemas, views. Experience
                  with OLAP cubes, window functions. Complex scripts and
                  procedures.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <h4 className="font-medium">Python</h4>
                  <span>Intermediate</span>
                </div>
                <Progress value={65} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  Familiar with context management, exception handling, function
                  decorators, parallel threads, generators. Experience with
                  NumPy, Pandas, Matplotlib.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <h4 className="font-medium">Analytics</h4>
                  <span>Advanced</span>
                </div>
                <Progress value={85} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  Forecasting, statistical data collection and analysis,
                  selection of driver indicators, business resource study,
                  budget preparation.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <h4 className="font-medium">English</h4>
                  <span>B1 (Intermediate)</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Badge className="w-full justify-center py-1.5">
                    Communication
                  </Badge>
                  <p className="text-sm text-muted-foreground text-center">
                    Literate oral and written speech
                  </p>
                </div>

                <div className="space-y-2">
                  <Badge className="w-full justify-center py-1.5">
                    Adaptability
                  </Badge>
                  <p className="text-sm text-muted-foreground text-center">
                    Quick adjustment to new environments
                  </p>
                </div>

                <div className="space-y-2">
                  <Badge className="w-full justify-center py-1.5">
                    Continuous Learning
                  </Badge>
                  <p className="text-sm text-muted-foreground text-center">
                    Always improving skills
                  </p>
                </div>

                <div className="space-y-2">
                  <Badge className="w-full justify-center py-1.5">
                    Critical Thinking
                  </Badge>
                  <p className="text-sm text-muted-foreground text-center">
                    Systematic and analytical approach
                  </p>
                </div>

                <div className="space-y-2">
                  <Badge className="w-full justify-center py-1.5">
                    Organization
                  </Badge>
                  <p className="text-sm text-muted-foreground text-center">
                    Structured approach to tasks
                  </p>
                </div>

                <div className="space-y-2">
                  <Badge className="w-full justify-center py-1.5">
                    Collaboration
                  </Badge>
                  <p className="text-sm text-muted-foreground text-center">
                    Team-oriented mindset
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-4">Forecasting Process</h4>
                <ol className="space-y-2 list-decimal pl-5">
                  <li>
                    Diagnostics - Collecting and analyzing statistical data,
                    studying business resources
                  </li>
                  <li>
                    Forming goals (hypothesis) - Selection of driver indicators
                  </li>
                  <li>
                    Coordination - Preparing forecasts, interactive reports,
                    presenting results, consulting business
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
