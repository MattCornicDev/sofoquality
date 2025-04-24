'use client';
import { useState } from 'react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface User {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  role: string;
  dateCreation: Date;
  actif: boolean;
}

const initialUsers: User[] = [
  {
    id: 1,
    nom: 'Dupont',
    prenom: 'Jean',
    email: 'jean.dupont@example.com',
    role: 'Administrateur',
    dateCreation: new Date('2025-01-15'),
    actif: true
  },
  {
    id: 2,
    nom: 'Martin',
    prenom: 'Marie',
    email: 'marie.martin@example.com',
    role: 'Gestionnaire',
    dateCreation: new Date('2025-02-20'),
    actif: true
  }
];

export default function UtilisateursPage() {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [newUser, setNewUser] = useState<User>({
    id: Math.max(...initialUsers.map(u => u.id)) + 1,
    nom: '',
    prenom: '',
    email: '',
    role: 'Utilisateur',
    dateCreation: new Date(),
    actif: true
  });
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleAddUser = () => {
    setUsers([...users, newUser]);
    setNewUser({
      id: Math.max(...users.map(u => u.id)) + 1,
      nom: '',
      prenom: '',
      email: '',
      role: 'Utilisateur',
      dateCreation: new Date(),
      actif: true
    });
  };

  const handleDeleteUser = (userId: number) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleToggleStatus = (userId: number) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, actif: !user.actif } : user
    ));
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
  };

  const handleUpdateUser = (updatedUser: User) => {
    setUsers(users.map(user =>
      user.id === updatedUser.id ? updatedUser : user
    ));
    setEditingUser(null);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Gestion des utilisateurs</h1>

        {/* Formulaire d'ajout/modification */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{editingUser ? 'Modifier utilisateur' : 'Ajouter un utilisateur'}</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nom</label>
                <input
                  type="text"
                  value={editingUser ? editingUser.nom : newUser.nom}
                  onChange={(e) => {
                    if (editingUser) {
                      setEditingUser({ ...editingUser, nom: e.target.value });
                    } else {
                      setNewUser({ ...newUser, nom: e.target.value });
                    }
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Prénom</label>
                <input
                  type="text"
                  value={editingUser ? editingUser.prenom : newUser.prenom}
                  onChange={(e) => {
                    if (editingUser) {
                      setEditingUser({ ...editingUser, prenom: e.target.value });
                    } else {
                      setNewUser({ ...newUser, prenom: e.target.value });
                    }
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                value={editingUser ? editingUser.email : newUser.email}
                onChange={(e) => {
                  if (editingUser) {
                    setEditingUser({ ...editingUser, email: e.target.value });
                  } else {
                    setNewUser({ ...newUser, email: e.target.value });
                  }
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Rôle</label>
              <select
                value={editingUser ? editingUser.role : newUser.role}
                onChange={(e) => {
                  if (editingUser) {
                    setEditingUser({ ...editingUser, role: e.target.value });
                  } else {
                    setNewUser({ ...newUser, role: e.target.value });
                  }
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              >
                <option value="Administrateur">Administrateur</option>
                <option value="Gestionnaire">Gestionnaire</option>
                <option value="Utilisateur">Utilisateur</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              {editingUser ? (
                <button
                  type="button"
                  onClick={() => handleUpdateUser(editingUser)}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Sauvegarder
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleAddUser}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Ajouter
                </button>
              )}
              <button
                type="button"
                onClick={() => setEditingUser(null)}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>

        {/* Table des utilisateurs */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Nom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Prénom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Rôle</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date création</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.nom}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.prenom}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {format(user.dateCreation, 'dd/MM/yyyy', { locale: fr })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.actif ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {user.actif ? 'Actif' : 'Inactif'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEditUser(user)}
                      className="text-blue-600 hover:text-blue-900 mr-2"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleToggleStatus(user.id)}
                      className={`text-${user.actif ? 'red' : 'green'}-600 hover:text-${user.actif ? 'red' : 'green'}-900 mr-2`}
                    >
                      {user.actif ? 'Désactiver' : 'Activer'}
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
