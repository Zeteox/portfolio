import fs from "fs";
import path from "path";

type Languages = string[];
type Frameworks = string[];
type Tools = string[];
type OS = string[];

export function Skills() {
    const filePath = path.join(process.cwd(), "data", "skills.json");
    const languages: Languages = JSON.parse(
        fs.readFileSync(filePath, "utf-8")
    ).languages;
    const frameworks: Frameworks = JSON.parse(
        fs.readFileSync(filePath, "utf-8")
    ).frameworks;
    const tools: Tools = JSON.parse(
        fs.readFileSync(filePath, "utf-8")
    ).tools;
    const os: OS = JSON.parse(
        fs.readFileSync(filePath, "utf-8")
    ).os;

    return (
        <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Compétences</h2>
            <p className="text-sm sm:text-lg md:text-2xl leading-relaxed border-purple-400 border rounded-lg p-2 pl-3 sm:p-4 md:p-6 shadow-gray-950 shadow-xl">
                Voici un aperçu de mes compétences techniques dans le domaine de l'informatique.
            </p>
            <div className="mt-10 flex flex-col lg:flex-row justify-center gap-4">
                <div className="w-full text-center mb-4 border border-purple-400 rounded-lg p-4 shadow-gray-950 shadow-xl">
                    <h3 className="text-lg sm:text-xl lg:text-3xl font-semibold mb-2">Langages de Programmation</h3>
                    <div className="flex flex-wrap m-10 mt-5 pt-5 gap-2 justify-center border-t border-purple-400">
                        {languages.map((language, i) => (
                            <span key={i} className="text-sm md:text-lg bg-purple-400 text-foreground font-semibold rounded-full px-4 py-2">
                                {language}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="w-full text-center mb-4 border border-purple-400 rounded-lg p-4 shadow-gray-950 shadow-xl">
                    <h3 className="text-lg sm:text-xl lg:text-3xl font-semibold mb-2">Frameworks</h3>
                    <div className="flex flex-wrap m-10 mt-5 pt-5 gap-2 justify-center border-t border-purple-400">
                        {frameworks.map((framework, i) => (
                            <span key={i} className="text-sm md:text-lg bg-purple-400 text-foreground font-semibold rounded-full px-4 py-2">
                                {framework}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="w-full text-center mb-4 border border-purple-400 rounded-lg p-4 shadow-gray-950 shadow-xl">
                    <h3 className="text-lg sm:text-xl lg:text-3xl font-semibold mb-2">Outils</h3>
                    <div className="flex flex-wrap m-10 mt-5 pt-5 gap-2 justify-center border-t border-purple-400">
                        {tools.map((tool, i) => (
                            <span key={i} className="text-sm md:text-lg bg-purple-400 text-foreground font-semibold rounded-full px-4 py-2">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="w-full text-center mb-4 border border-purple-400 rounded-lg p-4 shadow-gray-950 shadow-xl">
                    <h3 className="text-lg sm:text-xl lg:text-3xl font-semibold mb-2">Systèmes d'exploitation</h3>
                    <div className="flex flex-wrap m-10 mt-5 pt-5 gap-2 justify-center border-t border-purple-400">
                        {os.map((o, i) => (
                            <span key={i} className="text-sm md:text-lg bg-purple-400 text-foreground font-semibold rounded-full px-4 py-2">
                                {o}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}