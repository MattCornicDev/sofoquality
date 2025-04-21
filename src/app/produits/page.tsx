export default function Produits() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Produits labellisés</h1>
      <p className="mb-8 text-center">
        Découvrez ici une sélection de produits alimentaires labellisés SofoQuality, gages de qualité et de savoir-faire marocain.<br />
        Cette page sera prochainement enrichie avec les photos, descriptions et coordonnées des producteurs partenaires.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-12">
        {/* Placeholders pour les produits */}
        <div className="rounded-lg bg-gray-100 flex flex-col items-center justify-center p-6 shadow">
          <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400 text-lg">
            Image
          </div>
          <h2 className="font-semibold mb-1">Nom du produit</h2>
          <p className="text-gray-500 text-sm text-center">
            Description courte du produit labellisé.
          </p>
        </div>
        <div className="rounded-lg bg-gray-100 flex flex-col items-center justify-center p-6 shadow">
          <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400 text-lg">
            Image
          </div>
          <h2 className="font-semibold mb-1">Nom du produit</h2>
          <p className="text-gray-500 text-sm text-center">
            Description courte du produit labellisé.
          </p>
        </div>
        <div className="rounded-lg bg-gray-100 flex flex-col items-center justify-center p-6 shadow">
          <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400 text-lg">
            Image
          </div>
          <h2 className="font-semibold mb-1">Nom du produit</h2>
          <p className="text-gray-500 text-sm text-center">
            Description courte du produit labellisé.
          </p>
        </div>
        <div className="rounded-lg bg-gray-100 flex flex-col items-center justify-center p-6 shadow">
          <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400 text-lg">
            Image
          </div>
          <h2 className="font-semibold mb-1">Nom du produit</h2>
          <p className="text-gray-500 text-sm text-center">
            Description courte du produit labellisé.
          </p>
        </div>
        <div className="rounded-lg bg-gray-100 flex flex-col items-center justify-center p-6 shadow">
          <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400 text-lg">
            Image
          </div>
          <h2 className="font-semibold mb-1">Nom du produit</h2>
          <p className="text-gray-500 text-sm text-center">
            Description courte du produit labellisé.
          </p>
        </div>
        <div className="rounded-lg bg-gray-100 flex flex-col items-center justify-center p-6 shadow">
          <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400 text-lg">
            Image
          </div>
          <h2 className="font-semibold mb-1">Nom du produit</h2>
          <p className="text-gray-500 text-sm text-center">
            Description courte du produit labellisé.
          </p>
        </div>
        {/* Ajoute d'autres blocs ici au besoin */}
      </div>
      <p className="text-center text-gray-500 text-sm">
        Vous êtes producteur et souhaitez faire labelliser vos produits ? <a href="/contact" className="text-blue-600 underline">Contactez-nous</a>
      </p>
    </main>
  );
}