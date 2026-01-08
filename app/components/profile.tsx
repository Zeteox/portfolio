import Image from "next/image";

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
                <span className="absolute -top-5 -left-5 md:-top-5 md:-left-9 w-40 h-2 md:w-60 md:h-3 bg-gray-500" />
                <span className="absolute -top-5 -left-5 md:-top-5 md:-left-9 w-2 h-20 md:w-3 md:h-30 bg-gray-500" />

                <span className="absolute -top-5 right-15 md:-top-5 md:right-20 w-6 h-2 md:w-12 md:h-3 bg-gray-500" />

                <span className="absolute bottom-33 -right-5 md:bottom-34 md:-right-10 w-2 h-20 md:w-3 md:h-30 bg-gray-500" />
                <span className="absolute bottom-32 -right-5 md:bottom-34 md:-right-10 w-40 h-2 md:w-60 md:h-3 bg-gray-500" />

                <span className="absolute bottom-32 left-10 md:bottom-34 md:left-23 w-6 h-2 md:w-12 md:h-3 bg-gray-500" />


                <div className="relative flex flex-col items-center">

                    <h1 className="text-6xl md:text-8xl font-bold mb-2 leading-tight">
                        <span className="block">Loïc</span>
                        <span className="block">DELPRAT</span>
                    </h1>

                    <p className="text-2xl md:text-4xl mt-6 text-gray-800 text-center">
                        Étudiant en B2 informatique
                    </p>

                    <div className="flex gap-5 mt-8 justify-center lg:justify-start">
                        <a
                        href="https://www.linkedin.com/in/loïc-delprat/"
                        target="_blank"
                        className="flex items-center gap-2 text-xl px-4 rounded-lg border-2 hover:border-purple-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                            LinkedIn
                        </a>

                        <a
                        href="https://github.com/Zeteox"
                        target="_blank"
                        className="flex items-center gap-2 text-xl px-4 py-2 rounded-lg border-2 hover:border-purple-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-3 animate-pulse">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="0.875" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-big-down-dash-icon lucide-arrow-big-down-dash"><path d="M15 11a1 1 0 0 0 1 1h2.939a1 1 0 0 1 .75 1.811l-6.835 6.836a1.207 1.207 0 0 1-1.707 0L4.31 13.81a1 1 0 0 1 .75-1.811H8a1 1 0 0 0 1-1V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1z"/><path d="M9 4h6"/></svg>
            </div>
        </div>
    );
}