import fs from "fs";
import path from "path";
import { ProjectCard } from "./projectCard";

type Project = {
    title: string,
    contexte: string,
    type: string,
    date: string,
    description: string,
    techno: string[],
    link: string,
}

export function Projects() {
    const filePath = path.join(process.cwd(), "data", "projects.json");
    const projects: Project[] = JSON.parse(
        fs.readFileSync(filePath, "utf-8")
    ).projects;

    return (
        <div>
            <h2 id="projects-heading" className="text-3xl md:text-5xl font-bold mb-6">Projets</h2>
            <p className="text-sm sm:text-lg md:text-2xl leading-relaxed border-purple-400 border rounded-lg p-2 pl-3 sm:p-4 md:p-6 shadow-gray-950 shadow-xl">
                Voici quelques-uns de mes projets récents où j'ai appliqué mes compétences en développement web et en programmation.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-10" role="list" >
                {projects.map((project, i) => (
                    <div role="listitem" key={i}>
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
}