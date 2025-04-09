import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Section } from "../ui/section";

export function AboutSection() {
  return (
    <Section
      id="about"
      title="About Me"
      description="Experienced analyst-developer with a strong background in finance, data analysis, and programming."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12">
        <Card>
          <CardHeader>
            <CardTitle>Career Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Continue my career as an analyst and grow to an expert level in
              the foreseeable future.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>What I Offer</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Knowledge of SQL, Python, and analytics</li>
              <li>Business-oriented approach to data analysis</li>
              <li>Organized, process-oriented, and results-driven mindset</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>What I'm Looking For</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Writing scripts in Python and SQL</li>
              <li>Communication with data owners and analytics stakeholders</li>
              <li>Solving ad hoc tasks or implementing long-term models</li>
              <li>Data visualization through dashboards</li>
              <li>Standardization and optimization of routine tasks</li>
              <li>
                Opportunity to gain diverse experience in analytics and
                development
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Personal Interests</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              I maintain detailed family finances, use To Do and Trello for
              personal organization, and have been practicing gymnastics since
              2016. I enjoy cycling, traveling, movies, music, board games, and
              cocktail culture.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                #workout
              </span>
              <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                #cycling
              </span>
              <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                #travel
              </span>
              <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                #boardgames
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
