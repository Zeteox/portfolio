import Image from "next/image";
import { Linkedin, Github, ArrowBigDownDash, FileUser } from "lucide-react";

export function Profile() {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen relative -mt">
            <div className="relative w-70 h-70 md:w-110 md:h-110 lg:w-100 lg:h-100 xl:w-120 xl:h-120 rounded-full overflow-hidden
                shadow-[0_20px_50px_-15px_rgba(0,0,0,1)]">
                <Image
                    src="/profile.jpg"
                    alt="Profile picture"
                    fill
                    className="object-cover"
                    style={{
                        transform: "scale(1.5)",
                        objectPosition: "50% 0%",
                    }}
                />
            </div>

            <div className="relative ml-5 mt-15 lg:ml-24">
                <span className="absolute -top-5 -left-5 md:-top-5 md:-left-9 w-40 h-2 md:w-60 md:h-3 bg-gray-500" aria-hidden="true" />
                <span className="absolute -top-5 -left-5 md:-top-5 md:-left-9 w-2 h-20 md:w-3 md:h-30 bg-gray-500" aria-hidden="true" />

                <span className="absolute -top-5 right-10 md:-top-5 md:right-20 w-6 h-2 md:w-12 md:h-3 bg-gray-500" aria-hidden="true" />

                <span className="absolute bottom-21 -right-5 md:bottom-34 md:-right-10 w-2 h-20 md:w-3 md:h-30 bg-gray-500" aria-hidden="true" />
                <span className="absolute bottom-20 -right-5 md:bottom-34 md:-right-10 w-40 h-2 md:w-60 md:h-3 bg-gray-500" aria-hidden="true" />

                <span className="absolute bottom-20 left-10 md:bottom-34 md:left-23 w-6 h-2 md:w-12 md:h-3 bg-gray-500" aria-hidden="true" />
                <div className="relative flex flex-col items-center">

                    <h1 className="text-5xl md:text-8xl font-bold mb-2 leading-tight">
                        <span className="block">Loïc</span>
                        <span className="block">DELPRAT</span>
                    </h1>

                    <p className="text-xl md:text-4xl mt-3 md:mt-6 text-gray-800 text-center">
                        Étudiant en B2 informatique
                    </p>

                    <div className="flex gap-2 md:gap-5 mt-2 md:mt-8 justify-center lg:justify-start" >
                        <a
                            href="https://www.linkedin.com/in/loïc-delprat/"
                            target="_blank"
                            className="flex items-center focus:outline-purple-400 gap-1 md:gap-2 md:text-xl px-2 md:px-4 py-1 md:py-2 rounded-lg border-2 hover:border-purple-700">
                            <Linkedin aria-hidden="true" />
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/Zeteox"
                            target="_blank"
                            className="flex items-center focus:outline-purple-400 gap-1 md:gap-2 md:text-xl px-2 md:px-4 py-1 md:py-2 rounded-lg border-2 hover:border-purple-700">
                                <Github aria-hidden="true" />
                                GitHub
                        </a>

                        <a
                            href="/CV_Loic_DELPRAT_2526.pdf"
                            target="_blank"
                            className="flex items-center focus:outline-purple-400 gap-1 md:gap-2 md:text-xl px-2 md:px-4 py-1 md:py-2 rounded-lg border-2 hover:border-purple-700"
                            aria-label="Télécharger mon CV"
                            >
                                <FileUser aria-hidden="true" />
                                CV
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-3 animate-pulse" aria-label="Scroll down for more content">
                <ArrowBigDownDash aria-hidden="true" />
            </div>
        </div>
    );
}