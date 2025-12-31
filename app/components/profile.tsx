import Image from "next/image";

export function Profile() {
    return (
        <div className="flex flex-col xl:flex-row items-center justify-center mt-5">
            <div className="relative w-70 h-70 md:w-110 md:h-110 lg:w-120 lg:h-120 rounded-full overflow-hidden
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
            
            <div className="relative ml-5 mt-15 xl:ml-24 xl:mt-25">
                <span className="absolute -top-5 -left-8 md:-top-6 md:-left-10 w-40 h-2 md:w-60 md:h-3 bg-gray-500" />
                <span className="absolute -top-5 -left-8 md:-top-6 md:-left-10 w-2 h-20 md:w-3 md:h-30 bg-gray-500" />

                <span className="absolute -top-5 right-15 md:-top-6 md:right-20 w-6 h-2 md:w-12 md:h-3 bg-gray-500" />

                <span className="absolute bottom-18 -right-3 md:bottom-17 md:-right-12 w-2 h-20 md:w-3 md:h-30 bg-gray-500" />
                <span className="absolute bottom-17 -right-3 md:bottom-17 md:-right-12 w-40 h-2 md:w-60 md:h-3 bg-gray-500" />

                <span className="absolute bottom-17 left-10 md:bottom-17 md:left-23 w-6 h-2 md:w-12 md:h-3 bg-gray-500" />


                <h1 className="text-6xl md:text-8xl font-bold mb-2 leading-tight">
                    <span className="block">Loïc</span>
                    <span className="block">DELPRAT</span>
                </h1>
                <p className="text-2xl md:text-4xl mt-13 text-center text-gray-800">Étudiant en B2 informatique</p>
            </div>
        </div>
    );
}