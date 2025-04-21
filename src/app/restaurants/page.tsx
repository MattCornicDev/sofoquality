export default function Restaurants() {
  return (
    <main className="mt-10 mb-10 max-w-5xl mx-auto px-4 py-12">
      <h1 className="mt-6 text-3xl font-bold mb-6 text-center">Restaurants labellisés</h1>
      <p className="mb-8 text-center">
        Découvrez ici une sélection de restaurants ayant obtenu le label SofoQuality, engagés pour la qualité et la sécurité alimentaire.<br />
        Cette page sera prochainement enrichie avec les photos, descriptions et coordonnées des établissements partenaires.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 my-12">
        {/* Placeholders pour les restaurants */}
        <div className="rounded-lg bg-gray-100 flex flex-col items-center justify-center p-6 shadow">
          <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400 text-lg">
            Image
          </div>
          <h2 className="font-semibold mb-1">Nom du restaurant</h2>
          <p className="text-gray-500 text-sm text-center">
            Description courte du restaurant labellisé.
          </p>
        </div>
        <div className="rounded-lg bg-gray-100 flex flex-col items-center justify-center p-6 shadow">
          <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400 text-lg">
            Image
          </div>
          <h2 className="font-semibold mb-1">Nom du restaurant</h2>
          <p className="text-gray-500 text-sm text-center">
            Description courte du restaurant labellisé.
          </p>
        </div>
        <div className="rounded-lg bg-gray-100 flex flex-col items-center justify-center p-6 shadow">
          <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-400 text-lg">
            Image
          </div>
          <h2 className="font-semibold mb-1">Nom du restaurant</h2>
          <p className="text-gray-500 text-sm text-center">
            Description courte du restaurant labellisé.
          </p>
        </div>
        {/* Ajoute d'autres blocs ici au besoin */}
      </div>
      <p className="text-center text-gray-500 text-sm">
        Vous êtes restaurateur et souhaitez faire labelliser votre établissement ? <a href="/contact" className="text-blue-600 underline">Contactez-nous</a>
      </p>
    </main>
  );
}
