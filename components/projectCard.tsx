import { Calendar } from "lucide-react";

type Project = {
    title: string,
    contexte: string,
    type: string,
    date: string,
    description: string,
    techno: string[],
    link: string,
}

export function ProjectCard({ project }: { project: Project }) {
    return (
        <article className="border border-purple-400 rounded-lg p-3 sm:p-6 shadow-gray-950 shadow-xl flex flex-col">
            <div className="relative h-full">
                <h3 className="text-2xl sm:text-3xl font-semibold mb-1 sm:mb-4 text-center">{project.title}</h3>
                <p className="text-sm italic mb-1 text-purple-400">Projet {project.contexte} - {project.type}</p>
                <p className="text-md sm:text-lg md:text-xl mb-4">
                    {project.description}
                </p>
                <p className="text-sm italic mb-4 flex items-center gap-1 ">
                    <Calendar width={20} aria-hidden="true" />
                    <span>{project.date}</span>
                </p>
                <div className="flex flex-wrap mb-4">
                    {project.techno.map((tech, j) => (
                        <span key={j} className="text-sm bg-purple-400 text-foreground font-semibold rounded-full px-3 py-1 m-1">{tech}</span>
                    ))}
                </div>
            </div>
            <a
                href={project.link}
                className="w-full border-2 rounded-xl p-2 border-purple-400 shadow-gray-950 shadow-lg hover:border-background hover:animate-pulse text-center self-center"
                target="_blank"
                aria-label={`Voir le projet ${project.title} (ouvre dans un nouvel onglet)`}
            >
                Voir le projet
            </a>
        </article>
    );
}