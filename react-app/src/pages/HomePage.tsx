import { ThemeProvider } from "../components/sections/theme-provider";
import { Header } from "../components/sections/header";
import { HeroSection } from "../components/sections/hero-section";
import { AboutSection } from "../components/sections/about-section";
import { ExperienceSection } from "../components/sections/experience-section";
import { SkillsSection } from "../components/sections/skills-section";
import { EducationSection } from "../components/sections/education-section";
import { ContactSection } from "../components/sections/contact-section";
import { Footer } from "../components/sections/footer";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background font-sans antialiased">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
