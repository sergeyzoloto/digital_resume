import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-12 md:py-16 page-container">
      <div className="w-full mt-2 bg-green-500/50">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Experienced analyst-developer with a strong background in finance,
              data analysis, and programming.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
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
                <li>
                  Communication with data owners and analytics stakeholders
                </li>
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
                2016. I enjoy cycling, traveling, movies, music, board games,
                and cocktail culture.
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
      </div>
    </section>
  );
}
