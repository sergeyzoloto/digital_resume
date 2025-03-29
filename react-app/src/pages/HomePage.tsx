import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 bg-blue-500 text-white">
        <h1 className="text-4xl font-bold">Sergey Zolotko</h1>
        <p className="text-xl mt-2">Full Stack Developer</p>
        <p className="mt-4 max-w-2xl">
          I'm a motivated business analyst making a shift into web development.
          I love solving problems creatively and working with different teams to
          turn ideas into reality.
        </p>
      </section>

      {/* CV Section */}
      <section className="container mx-auto py-10 px-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Experience */}
        <Card>
          <CardHeader>
            <CardTitle>Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Full Stack Web Developer Trainee</strong> - HackYourFuture
            </p>
            <p>09/2022 - Ongoing | Amsterdam, Netherlands</p>
            <p>
              Developed a single-page application for cocktail recipes and
              worked on a social networking site.
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Full Stack Web Development</strong> - HackYourFuture
              (2022)
            </p>
            <p>
              <strong>Specialist Diploma</strong> - Bauman Moscow State
              Technical University (2013)
            </p>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              HTML, CSS, JavaScript, SQL, MongoDB, Express, React, Node.js,
              Python, Java, Spring
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>Contact: s.z____@_____m | +3_________5</p>
        <div className="flex justify-center gap-4 mt-2">
          <Button asChild variant="outline">
            <a
              href="https://www.linkedin.com/in/sergey-zolotko/"
              target="_blank"
              className="flex items-center gap-2"
            >
              LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://github.com/sergeyzoloto"
              target="_blank"
              className="flex items-center gap-2"
            >
              GitHub
            </a>
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
