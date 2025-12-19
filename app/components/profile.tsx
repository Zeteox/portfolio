import Image from "next/image";

export function Profile() {
    return (
        <div className="flex justify-center mt-50">
            <div className="relative w-120 h-120 rounded-full overflow-hidden">
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

            <div className="relative ml-24 mt-25">
                <span className="absolute -top-5 -left-10 w-60 h-3 bg-gray-500" />
                <span className="absolute -top-5 -left-10 w-3 h-30 bg-gray-500" />

                <span className="absolute -top-5 right-12 w-12 h-3 bg-gray-500" />

                <span className="absolute bottom-26 -right-10 w-3 h-30 bg-gray-500" />
                <span className="absolute bottom-26 -right-10 w-60 h-3 bg-gray-500" />

                <span className="absolute bottom-26 left-12 w-12 h-3 bg-gray-500" />


                <h1 className="text-8xl font-bold mb-2 leading-tight">
                    <span className="block">Loïc</span>
                    <span className="block">DELPRAT</span>
                </h1>
                <p className="text-2xl mt-13 text-center">Étudiant en B2 informatique</p>
            </div>
        </div>
    );
}