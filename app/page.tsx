import { Glitch } from "./components/glitch";
import { Header } from "./components/header";
import { Profile } from "./components/profile";

export default function Home() {
  return (
    <div className="bg-background-2 text-foreground-2">
      <div className="bg-background text-foreground min-h-screen z-10 fixed w-full">
        <Header />
        <Profile />
        <Glitch />
      </div>
      <div className="hidden">
        <div id="about" className="p-20 z-0 ">
          <h2 className="text-5xl font-bold mb-6">A Propos</h2>
          <p className="text-2xl leading-relaxed border rounded-lg p-6">
            Bonjour! Je m'appelle Loïc DELPRAT, un étudiant passionné en deuxième année d'informatique.
            J'adore explorer le monde de la programmation et créer des projets innovants.
          </p>
        </div>
        <div id="projects" className="p-20 min-h-screen">
          <h2 className="text-5xl font-bold mb-6">Projets</h2>
          <p className="text-2xl leading-relaxed border rounded-lg p-6">
            Voici quelques-uns de mes projets récents où j'ai appliqué mes compétences en développement web et en programmation.
          </p>
        </div>
        <div id="contact" className="p-20">
          <h2 className="text-5xl font-bold mb-6">Contact</h2>
          <p className="text-2xl leading-relaxed border rounded-lg p-6">
            Vous pouvez me contacter via email à loic.delprat@example.com
          </p>
        </div>
      </div>
    </div>
  );
}
