// src/app/utilisateurs/page.tsx

export default function UtilisateursPage() {
    return (
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-green-700 dark:text-green-400">Gestion des utilisateurs</h1>
        <p className="mb-6 text-gray-700 dark:text-gray-200">
          Cette page sera dédiée à la gestion des utilisateurs de votre application de gestion de stock.
        </p>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-8">
          <li>Créer, modifier ou supprimer un utilisateur</li>
          <li>Attribuer des rôles (admin, gestionnaire, etc.)</li>
          <li>Visualiser la liste des utilisateurs</li>
          <li>Accéder à l’historique des actions</li>
        </ul>
        <div className="p-6 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 rounded">
          <strong>À venir :</strong> L’interface complète de gestion et les fonctionnalités avancées.
        </div>
      </main>
    );
  }