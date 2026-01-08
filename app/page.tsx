import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Path } from "./components/path";
import { Profile } from "./components/profile";
import { Projects } from "./components/projects";
import { SectionReveal } from "./components/sectionReveal";
import { Skills } from "./components/skills";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="bg-background text-foreground min-h-screen fixed top-0 left-0 w-full z-40">
        <Profile />
      </div>
      <div className="mt-[100vh] relative z-50">
        <div className="min-h-screen bg-gradient-to-b from-transparent to-background-2"></div>
      </div>
      <div className="relative z-50 bg-background-2 text-foreground-2 min-h-screen">
        <SectionReveal id="about" delay={0}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">A Propos</h2>
          <p className="text-sm sm:text-lg md:text-2xl leading-relaxed border-purple-400 border rounded-lg p-2 pl-3 sm:p-4 md:p-6 shadow-gray-950 shadow-xl">
            Bonjour ! Je m'appelle Loïc DELPRAT, un étudiant passionné en deuxième année d'informatique, actuellement à Toulouse YNOV Campus.
            J'adore explorer le monde de la programmation et créer des projets innovants.
          </p>
        </SectionReveal>

        <SectionReveal delay={200}>
          <Path />
        </SectionReveal>

        <SectionReveal delay={400}>
          <Skills />
        </SectionReveal>

        <SectionReveal id="projects" delay={700}>
          <Projects />
        </SectionReveal>

        <SectionReveal id="contact" delay={900}>
          <Contact />
        </SectionReveal>

        <SectionReveal delay={1100}>
          <Footer />
        </SectionReveal>
      </div>
    </div>
  );
}
