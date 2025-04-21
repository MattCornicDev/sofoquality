export default function Partenariats() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Nos partenaires</h1>
      <p className="mb-8 text-center">
        SofoQuality s’appuie sur un réseau de partenaires engagés pour la qualité et la valorisation des produits alimentaires au Maroc.<br />
        Retrouvez bientôt ici les logos de nos partenaires institutionnels, associatifs et professionnels !
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-items-center my-12">
        {/* Placeholders pour les logos */}
        <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
          Logo partenaire
        </div>
        <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
          Logo partenaire
        </div>
        <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
          Logo partenaire
        </div>
        {/* Ajoute d'autres blocs ici au besoin */}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-items-center my-12">
        {/* Placeholders pour les logos */}
        <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
          Logo partenaire
        </div>
        <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
          Logo partenaire
        </div>
        <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
          Logo partenaire
        </div>
        {/* Ajoute d'autres blocs ici au besoin */}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-items-center my-12">
        {/* Placeholders pour les logos */}
        <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
          Logo partenaire
        </div>
        <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
          Logo partenaire
        </div>
        <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm">
          Logo partenaire
        </div>
        {/* Ajoute d'autres blocs ici au besoin */}
      </div>
      <p className="text-center text-gray-500 text-sm">
        Tu es une organisation ou une marque et tu souhaites devenir partenaire ? <a href="/contact" className="text-blue-600 underline">Contacte-nous</a>
      </p>
    </main>
  );
}