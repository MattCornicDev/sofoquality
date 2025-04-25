'use client';

import { useState } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };
  
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setSuccess(true);
      // Réinitialiser le formulaire
      (e.currentTarget as HTMLFormElement).reset();
    } catch (error) {
      console.error('Erreur:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Contactez-nous</h1>
      <p className="mt-10 mb-10 text-gray-700">
        Une question ? Un projet ? N'hésitez pas à nous écrire via ce formulaire ou à utiliser nos coordonnées ci-dessous.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 mb-10 flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          className="border rounded px-4 py-2"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          className="border rounded px-4 py-2"
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          rows={5}
          className="border rounded px-4 py-2"
          required
        />
        <button
          type="submit"
          className="bouton text-white px-6 py-3 rounded-lg font-semibold transition"
          disabled={loading}
        >
          {loading ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </form>

      {success && (
        <div className="text-green-500 mt-4">
          Votre message a été envoyé avec succès !
        </div>
      )}

      <div className="text-gray-600">
        <p><strong>Email :</strong> <a href="mailto:contact@sofogreen.com" className="underline">contact@sofogreen.com</a></p>
      </div>
    </main>
  );
}
