export default function Contact() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Contactez-nous</h1>
      <p className="mt-10 mb-10 text-gray-700">
        Une question ? Un projet ? N’hésitez pas à nous écrire via ce formulaire ou à utiliser nos coordonnées ci-dessous.
      </p>

      <form className="mt-10 mb-10 flex flex-col gap-4">
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
        >
          Envoyer
        </button>
      </form>

      <div className="text-gray-600">
        <p><strong>Email :</strong> <a href="mailto:contact@sofoquality.com" className="underline">contact@sofoquality.com</a></p>
        {/* Ajoute le téléphone ou l’adresse si besoin */}
        {/* <p><strong>Téléphone :</strong> 01 23 45 67 89</p> */}
      </div>
    </main>
  );
}