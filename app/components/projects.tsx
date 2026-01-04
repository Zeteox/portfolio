import fs from "fs";
import path from "path";

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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Projets</h2>
            <p className="text-sm sm:text-lg md:text-2xl leading-relaxed border-purple-400 border rounded-lg p-2 pl-3 sm:p-4 md:p-6 shadow-gray-950 shadow-xl">
                Voici quelques-uns de mes projets récents où j'ai appliqué mes compétences en développement web et en programmation.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-10">
                {projects.map((project, i) => (
                    <div key={i} className="border border-purple-400 rounded-lg p-3 sm:p-6 shadow-gray-950 shadow-xl flex flex-col">
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-1 sm:mb-4 text-center">{project.title}</h3>
                        <p className="text-sm italic mb-1 text-purple-400">Projet {project.contexte} - {project.type}</p>
                        <p className="text-md sm:text-lg md:text-xl mb-4">
                            {project.description}
                        </p>
                        <p className="text-sm italic mb-4 flex items-center gap-1 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                            </svg>
                            <span>{project.date}</span>
                        </p>
                        <div className="flex flex-wrap mb-4">
                            {project.techno.map((tech, j) => (
                                <span key={j} className="text-sm bg-purple-400 text-foreground font-semibold rounded-full px-3 py-1 m-1">{tech}</span>
                            ))}
                        </div>
                        <a href={project.link} className="border-2 rounded-xl p-2 border-purple-400 shadow-gray-950 shadow-lg hover:border-background hover:animate-pulse text-center self-center" target="_blank">Voir le projet</a>
                    </div>
                ))}
            </div>
            <div className="mt-10 flex justify-center hidden">
                <a href="/projects" className={`border-2 rounded-xl p-2 border-purple-400 shadow-gray-950 shadow-lg hover:border-purple-300 hover:animate-pulse`}>Voir tout</a>
            </div>
        </div>
    );
}