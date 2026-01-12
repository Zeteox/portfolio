"use client";

import { useState } from 'react';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/xdaanokn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div>
            <h2 id="contact-heading" className="text-3xl md:text-5xl font-bold mb-6">Contact</h2>
            <p className="text-sm sm:text-lg md:text-2xl leading-relaxed border-purple-400 border rounded-lg p-2 pl-3 sm:p-4 md:p-6 shadow-gray-950 shadow-xl">
                Vous pouvez me contacter via email à l'adresse
                <a className="text-purple-400 hover:text-purple-300" href="mailto:loic.delprat01@gmail.com"> loic.delprat01@gmail.com </a>
                ou bien via ce formulaire :
            </p>

            {status === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded" role="alert" aria-live="polite">
                    Message envoyé avec succès !
                </div>
            )}

            {status === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded" role="alert" aria-live="assertive">
                    Une erreur est survenue. Veuillez réessayer.
                </div>
            )}

            <div
                className="mt-4  flex flex-col gap-4 text-sm sm:text-lg md:text-2xl leading-relaxed border-purple-400 border rounded-lg p-2 pl-3 sm:p-4 md:p-6 shadow-gray-950 shadow-xl"
                aria-labelledby="contact-heading"
            >
                <div>
                    <label htmlFor="name" className="sr-only">Votre nom</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className="w-full p-2 border border-purple-400 rounded placeholder-purple-200 text-gray-100"
                        required
                        aria-required="true"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="sr-only">Votre email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Votre email"
                        className="w-full p-2 border border-purple-400 rounded placeholder-purple-200 text-gray-100"
                        required
                        aria-required="true"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">Votre message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message"
                        className="w-full p-2 border border-purple-400 rounded h-32 placeholder-purple-200 text-gray-100"
                        required
                        aria-required="true"
                    />
                </div>
                <button
                    onClick={handleSubmit}
                    className="bg-purple-400 text-white p-2 rounded hover:bg-purple-300"
                >
                    Envoyer
                </button>
            </div>
        </div>
    );
}