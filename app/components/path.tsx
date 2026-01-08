"use client";

import { useState } from 'react';
import Image from "next/image";

export function Path() {
    const [selectedPath, setSelectedPath] = useState<string | null>(null);

    return (
        <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Formations</h2>
            <p className="text-sm sm:text-lg md:text-2xl leading-relaxed border-purple-400 border rounded-lg p-2 pl-3 sm:p-4 md:p-6 shadow-gray-950 shadow-xl">
                Voici un aperçu de mon parcours dans le domaine de l'informatique.
            </p>
            <div className="mt-5 sm:mt-10 flex flex-col gap-6 xl:w-4/9">
                <div className="border border-purple-400 rounded-lg p-6 shadow-gray-950 shadow-xl relative">
                    <div className="absolute ml-4 top-6 bottom-6 w-1 bg-purple-50 rounded-full" />

                    <div className="relative pl-12 mt-2">
                        <div className="absolute -ml-10 w-5 h-5 bg-purple-400 border border-purple-700 rounded-full shrink-0" />
                        <div
                            onClick={() => setSelectedPath(selectedPath === 'ynov' ? null : 'ynov')}
                            className="border-purple-400 border rounded-lg p-3 sm:p-6 shadow-gray-950 shadow-lg hover:shadow-purple-100 hover:border-purple-700 hover:shadow-md transition-shadow duration-500 cursor-pointer"
                        >
                            <p className="text-md sm:text-lg font-semibold">2024 - Présent : Bachelor Informatique</p>
                            <p className="text-sm sm:text-lg md:text-lg lg:text-md mt-2 text-gray-300">
                                Étudiant en deuxième année de Bachelor Informatique à YNOV sur le campus de Toulouse.
                            </p>
                        </div>
                    </div>

                    {selectedPath === 'ynov' && (
                            <div className="mt-5 ml-12 border border-purple-500 rounded-lg p-6 z-10">
                                <h3 className="text-lg sm:text-2xl font-semibold text-purple-300 mb-3">Détails supplémentaires</h3>
                                <p className="text-gray-300 text-sm sm:text-lg">
                                    <b>Ynov</b> est une école d'informatique reconnue qui offre une formation axée sur les technologies modernes et les compétences pratiques.
                                    Son programme de Bachelor en Informatique couvre divers technologies et méthodologies, préparant les étudiants à leur future carrière dans le secteur informatique.
                                    Nous y apprenons des langages de programmation, le développement web, la gestion de bases de données, et bien plus encore.
                                </p>
                                <a href="https://www.ynov.com/" target="_blank" className="text-purple-400 hover:underline flex gap-2 items-center mt-4">
                                    Ynov Campus
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
                                </a>
                            </div>
                        )}

                    <div className="relative pl-12 mt-6">
                        <div className="absolute -ml-10 w-5 h-5 bg-purple-400 border border-purple-700 rounded-full shrink-0" />
                        <div
                            onClick={() => setSelectedPath(selectedPath === 'bac' ? null : 'bac')}
                            className="border-purple-400 border rounded-lg p-3 sm:p-6 shadow-gray-950 shadow-lg hover:shadow-purple-100 hover:border-purple-700 hover:shadow-md transition-shadow duration-500 cursor-pointer"
                        >
                            <p className="text-md sm:text-lg font-semibold">2024 : BAC général</p>
                            <p className="text-sm sm:text-lg md:text-lg lg:text-md mt-2 text-gray-300">
                                Obtention du BAC série générale au lycée Borde Basse avec pour spécialités :
                            </p>
                            <ul className="mt-1 text-gray-300 list-disc list-inside ml-4">
                                <li>Mathématiques</li>
                                <li>NSI (Numérique et Science de l'Informatique)</li>
                            </ul>
                        </div>
                    </div>

                    {selectedPath === 'bac' && (
                            <div className="mt-5 ml-12 border border-purple-500 rounded-lg p-6 z-10">
                                <h3 className="text-lg sm:text-2xl font-semibold text-purple-300 mb-3">Détails supplémentaires</h3>
                                <p className="text-gray-300 text-sm sm:text-lg">
                                    Le lycée <b>Borde Basse</b> est un lycée situé à Castres qui offre un enseignement général, technologique et professionnel.
                                    Dans ce lycée, j'ai pu approfondir mes connaissances en informatique grâce à la spécialité NSI où j'ai appris le langage Python ainsi que la logique de programmation.
                                    De plus j'y ai aussi vu du SQL, de l'algorithmie, des bases en développement web, d'assembly, de binaire, et de réseaux qui m'ont servi pour la suite de mes études.
                                </p>
                                <a href="https://borde-basse.mon-ent-occitanie.fr/" target="_blank" className="text-purple-400 hover:underline flex gap-2 items-center mt-4">
                                    Lycée Borde Basse
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"><path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/><path d="m21 3-9 9"/><path d="M15 3h6v6"/></svg>
                                </a>
                            </div>
                        )}
                </div>
            </div>
            <div className="hidden xl:flex items-center justify-center absolute left-4/9 right-0 top-1/3 bottom-1/9">
                <div className="border border-purple-400/40 rounded-lg p-6 font-mono text-purple-300/80 text-sm">
                    <p className="text-purple-400">// academic path</p>
                    <p>class Student {'{'}</p>
                    <p className="ml-4">degree: "Bachelor 2",</p>
                    <p className="ml-4">school: "YNOV",</p>
                    <p className="ml-4">focus: ["OOP", "Software", "Systems"]</p>
                    <p>{'}'}</p>
                </div>
            </div>
        </div>
    );
}