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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Contact</h2>
            <p className="text-sm sm:text-lg md:text-2xl leading-relaxed border-purple-400 border rounded-lg p-2 pl-3 sm:p-4 md:p-6 shadow-gray-950 shadow-xl">
                Vous pouvez me contacter via email à l'adresse
                <a className="text-purple-400 hover:text-purple-300" href="mailto:loic.delprat@ynov.com"> loic.delprat@ynov.com </a>
                ou bien via ce formulaire :
            </p>

            {status === 'success' && (
                <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                    Message envoyé avec succès !
                </div>
            )}

            {status === 'error' && (
                <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                    Une erreur est survenue. Veuillez réessayer.
                </div>
            )}

            <div className="mt-4  flex flex-col gap-4 text-sm sm:text-lg md:text-2xl leading-relaxed border-purple-400 border rounded-lg p-2 pl-3 sm:p-4 md:p-6 shadow-gray-950 shadow-xl">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Votre nom"
                    className="p-2 border border-purple-400 rounded placeholder-purple-200 text-gray-100"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Votre email"
                    className="p-2 border border-purple-400 rounded placeholder-purple-200 text-gray-100"
                    required
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message"
                    className="p-2 border border-purple-400 rounded h-32 placeholder-purple-200 text-gray-100"
                    required
                ></textarea>
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