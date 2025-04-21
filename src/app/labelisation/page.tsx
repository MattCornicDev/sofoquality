import Link from "next/link";

export default function Labelisation() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">La labellisation SofoQuality</h1>
      <p className="mb-8 text-gray-700">
        Le label SofoQuality valorise les établissements et produits respectant des critères stricts de qualité et d’engagement.
      </p>

      <h2 className="text-xl font-semibold mb-2">Les avantages du label</h2>
      <ul className="mb-8 list-disc list-inside text-gray-600">
        <li>Reconnaissance officielle et visibilité accrue</li>
        <li>Confiance renforcée auprès de la clientèle</li>
        <li>Accompagnement personnalisé</li>
        <li>Accès à un réseau d’acteurs engagés</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Le processus de labellisation</h2>
      <ol className="mb-8 list-decimal list-inside text-gray-600">
        <li>Prise de contact et dépôt de candidature</li>
        <li>Audit et évaluation des critères</li>
        <li>Remise du label et communication</li>
        <li>Suivi régulier et renouvellement</li>
      </ol>

      <h2 className="text-xl font-semibold mb-2">Critères d’obtention</h2>
      <p className="mb-8 text-gray-700">
        Les critères portent sur la qualité des produits, l’hygiène, la traçabilité, l’engagement environnemental, etc.
      </p>

      <Link href="/contact" className="bouton inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
        Demander la labellisation
      </Link>
    </main>
  );
}