import { HeroSection } from "../components/sections/hero-section";
import { AboutSection } from "../components/sections/about-section";
import { ExperienceSection } from "../components/sections/experience-section";
import { SkillsSection } from "../components/sections/skills-section";
import { EducationSection } from "../components/sections/education-section";
import { ContactSection } from "../components/sections/contact-section";

function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <main>
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default HomePage;
