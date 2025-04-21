import Link from "next/link";

export default function Ressources() {
  return (
    <main className="mt-10 mb-10 max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Ressources et guides</h1>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Guides pratiques</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <Link href="/docs/guide-labellisation.pdf" className="text-blue-600 underline" target="_blank">
              Guide pour obtenir le label SofoQuality (PDF)
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 underline">
              Bonnes pratiques en hygiène alimentaire
            </Link>
          </li>
          <li>
            <Link href="#" className="text-blue-600 underline">
              Checklist de préparation à l’audit qualité
            </Link>
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Liens utiles</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <Link href="https://www.onssa.gov.ma/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              ONSSA – Office National de Sécurité Sanitaire des Produits Alimentaires
            </Link>
          </li>
          <li>
            <Link href="https://www.foodlabeling.org/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
              Food Labeling International
            </Link>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">FAQ</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Comment obtenir le label SofoQuality ?</li>
          <li>Quels sont les critères d’éligibilité ?</li>
          <li>Combien de temps dure la labellisation ?</li>
        </ul>
      </section>
    </main>
  );
}   
