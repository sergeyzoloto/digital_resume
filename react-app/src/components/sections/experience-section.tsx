import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen w-full flex items-center justify-center bg-red-500/50 page-container"
    >
      <div className="w-full mt-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Work Experience
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              My professional journey in analytics and development.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 lg:gap-12">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Alfa Bank</CardTitle>
                  <CardDescription>
                    Leading Analyst in Finance Department
                  </CardDescription>
                </div>
                <Badge variant="outline" className="w-fit">
                  Aug 2018 - Aug 2019
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Responsibilities:</h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      Responsible for analysis and planning of the loan
                      portfolio of the corporate business segment
                    </li>
                    <li>
                      Formed plans by products, cities, segments, and channels
                    </li>
                    <li>
                      Participated in preparing dashboards for business,
                      interactive reports, and presentation materials
                    </li>
                    <li>Coordinated results with business customers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Achievements:</h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Formed the required current lending plans for 2019</li>
                    <li>
                      Achieved budget approval from customers and executors
                    </li>
                    <li>
                      Continuously improved the transaction-by-transaction
                      calculation model of the loan portfolio (SQL model)
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Technologies:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">Excel</Badge>
                    <Badge variant="secondary">SQL</Badge>
                    <Badge variant="secondary">PowerPoint</Badge>
                    <Badge variant="secondary">Oracle</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>MTS</CardTitle>
                  <CardDescription>Senior Analyst</CardDescription>
                </div>
                <Badge variant="outline" className="w-fit">
                  Mar 2017 - Aug 2018
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Responsibilities:</h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      Regular item-by-item forecasting and seasonal budgeting of
                      income and expenses in regional branches
                    </li>
                    <li>
                      Interaction with functional blocks on operational
                      forecasting issues
                    </li>
                    <li>
                      Plan-fact analysis by balance units, preparation of
                      comments and consulting business on forecast and budget
                      execution issues
                    </li>
                    <li>
                      Analysis of the distribution of target expenses,
                      interaction with functional blocks, making adjustments to
                      target plans
                    </li>
                    <li>
                      Consolidation of the PL plan by types of business and
                      responsibility centers
                    </li>
                    <li>
                      Coordination of targets with regions, conducting
                      negotiations, preparing answers to questions, making
                      changes to targets
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Achievements:</h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      Successfully and timely completed the 2017 budget cycle,
                      received target approvals from branches
                    </li>
                    <li>
                      Prepared dozens of operational forecast releases for
                      assigned regions with compliance with target accuracy by
                      KPI
                    </li>
                    <li>Created and maintained financial models in Excel</li>
                    <li>Wrote macros in VBA and processed data using Python</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Technologies:</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary">VBA</Badge>
                    <Badge variant="secondary">Excel</Badge>
                    <Badge variant="secondary">Python</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Why Not Wine</CardTitle>
                  <CardDescription>Marketing Department Head</CardDescription>
                </div>
                <Badge variant="outline" className="w-fit">
                  Aug 2014 - Aug 2016
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Responsibilities:</h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Participation in the launch of the project</li>
                    <li>Marketing, PR, SMM, email marketing</li>
                    <li>Financial analytics</li>
                    <li>
                      Management accounting, participation in the preparation of
                      business plans
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Achievements:</h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>
                      Gained experience in launching a business from scratch
                    </li>
                    <li>
                      Participated in obtaining permits from relevant
                      authorities
                    </li>
                    <li>
                      Prepared instructions and report forms for employees to
                      establish work processes
                    </li>
                    <li>
                      Organized marketing support for the business, including
                      research and measures to adjust positioning, assortment
                      and pricing policies
                    </li>
                    <li>
                      Managed social networks, corporate accounts, email
                      marketing, customer surveys, customer database
                    </li>
                    <li>
                      Analyzed the company's reputation on the Internet, studied
                      competitors and market trends
                    </li>
                    <li>
                      Organized management accounting at the enterprise,
                      prepared main financial reports for management and
                      external users
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
