'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function StockManagement() {
  // États pour la gestion des produits
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Produit 1',
      category: 'Catégorie 1',
      stock: 100,
      minStock: 20,
      price: 19.99,
      supplier: 'Fournisseur 1',
      expiration: '2024-12-31',
    },
    // ... autres produits
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    stock: 0,
    minStock: 0,
    price: 0,
    supplier: '',
    expiration: '',
  });

  // États pour la gestion des fournisseurs
const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      name: 'Fournisseur 1',
      contact: 'contact@fournisseur1.com',
      phone: '+33 1 23 45 67 89',
      email: 'contact@fournisseur1.com',
      address: '123 Rue du Commerce',
      notes: 'Fournisseur fiable depuis 2015'
    },
    {
      id: 2,
      name: 'Fournisseur 2',
      contact: 'contact@fournisseur2.com',
      phone: '+33 1 23 45 67 90',
      email: 'contact@fournisseur2.com',
      address: '456 Avenue des Produits',
      notes: 'Livraison rapide'
    }
    // ... autres fournisseurs
  ]);

  // États pour les commandes
  const [orders, setOrders] = useState([
    {
      id: 1,
      supplier: 'Fournisseur 1',
      date: '2024-04-29',
      status: 'En attente',
      items: [
        { product: 'Produit 1', quantity: 50, price: 19.99 },
        // ... autres items
      ],
    },
    // ... autres commandes
  ]);

  // Fonction pour ajouter un nouveau produit
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const newProd = { ...newProduct, id: Date.now() };
    setProducts([...products, newProd]);
    setNewProduct({
      name: '',
      category: '',
      stock: 0,
      minStock: 0,
      price: 0,
      supplier: '',
      expiration: '',
    });
  };

  // Fonction pour mettre à jour le stock
  const handleUpdateStock = (productId: number, newStock: number) => {
    setProducts(products.map(product =>
      product.id === productId ? { ...product, stock: newStock } : product
    ));
  };
  // État pour le nouveau fournisseur
const [newSupplier, setNewSupplier] = useState({
    name: '',
    contact: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
  });
  
  // Fonction pour ajouter un nouveau fournisseur
  const handleAddSupplier = (e: React.FormEvent) => {
    e.preventDefault();
    const newSupp = { ...newSupplier, id: Date.now() };
    setSuppliers([...suppliers, newSupp]);
    setNewSupplier({
      name: '',
      contact: '',
      phone: '',
      email: '',
      address: '',
      notes: '',
    });
  };
  
  // Fonction pour mettre à jour un fournisseur
  const handleUpdateSupplier = (supplierId: number, updatedSupplier: any) => {
    setSuppliers(suppliers.map(supplier =>
      supplier.id === supplierId ? { ...supplier, ...updatedSupplier } : supplier
    ));
  };
  
  // Fonction pour supprimer un fournisseur
  const handleDeleteSupplier = (supplierId: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce fournisseur ?')) {
      setSuppliers(suppliers.filter(supplier => supplier.id !== supplierId));
    }
  };

  return (
    <main className="p-6">
      {/* Barre de navigation */}
      <nav className="bg-gray-800 text-white p-4 mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl">Sofo Stock - Gestion de Stock</h1>
          <div className="flex space-x-4">
            <Link href="/sofostock/products" className="hover:text-gray-300">Produits</Link>
            <Link href="/sofostock/suppliers" className="hover:text-gray-300">Fournisseurs</Link>
            <Link href="/sofostock/orders" className="hover:text-gray-300">Commandes</Link>
            <Link href="/sofostock/inventory" className="hover:text-gray-300">Inventaire</Link>
          </div>
        </div>
      </nav>

      {/* Section Produits */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Gestion des Produits</h2>
        
        {/* Formulaire d'ajout de produit */}
        <form onSubmit={handleAddProduct} className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nom du produit"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="p-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Catégorie"
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              className="p-2 border rounded"
              required
            />
            <input
              type="number"
              placeholder="Stock"
              value={newProduct.stock}
              onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })}
              className="p-2 border rounded"
              required
            />
            <input
              type="number"
              placeholder="Stock minimum"
              value={newProduct.minStock}
              onChange={(e) => setNewProduct({ ...newProduct, minStock: parseInt(e.target.value) })}
              className="p-2 border rounded"
              required
            />
            <input
              type="number"
              placeholder="Prix"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
              className="p-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Fournisseur"
              value={newProduct.supplier}
              onChange={(e) => setNewProduct({ ...newProduct, supplier: e.target.value })}
              className="p-2 border rounded"
              required
            />
            <input
              type="date"
              placeholder="Date d'expiration"
              value={newProduct.expiration}
              onChange={(e) => setNewProduct({ ...newProduct, expiration: e.target.value })}
              className="p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Ajouter le produit
          </button>
        </form>

        {/* Tableau des produits */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 border-b">Nom</th>
                <th className="p-4 border-b">Catégorie</th>
                <th className="p-4 border-b">Stock</th>
                <th className="p-4 border-b">Stock Min</th>
                <th className="p-4 border-b">Prix</th>
                <th className="p-4 border-b">Fournisseur</th>
                <th className="p-4 border-b">Expiration</th>
                <th className="p-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className={product.stock < product.minStock ? 'bg-red-50' : ''}>
                  <td className="p-4 border-b">{product.name}</td>
                  <td className="p-4 border-b">{product.category}</td>
                  <td className="p-4 border-b">{product.stock}</td>
                  <td className="p-4 border-b">{product.minStock}</td>
                  <td className="p-4 border-b">{product.price}€</td>
                  <td className="p-4 border-b">{product.supplier}</td>
                  <td className="p-4 border-b">{product.expiration}</td>
                  <td className="p-4 border-b">
                    <button
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => handleUpdateStock(product.id, product.stock + 10)}
                    >
                      +
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800 ml-2"
                      onClick={() => handleUpdateStock(product.id, product.stock - 10)}
                    >
                      -
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section Fournisseurs */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Gestion des Fournisseurs</h2>
        
        {/* Tableau des fournisseurs */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 border-b">Nom</th>
                <th className="p-4 border-b">Contact</th>
                <th className="p-4 border-b">Téléphone</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((supplier) => (
                <tr key={supplier.id}>
                  <td className="p-4 border-b">{supplier.name}</td>
                  <td className="p-4 border-b">{supplier.contact}</td>
                  <td className="p-4 border-b">{supplier.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section Commandes */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Gestion des Commandes</h2>
        
        {/* Tableau des commandes */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 border-b">Fournisseur</th>
                <th className="p-4 border-b">Date</th>
                <th className="p-4 border-b">Statut</th>
                <th className="p-4 border-b">Items</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="p-4 border-b">{order.supplier}</td>
                  <td className="p-4 border-b">{order.date}</td>
                  <td className="p-4 border-b">{order.status}</td>
                  <td className="p-4 border-b">
                    {order.items.map((item) => (
                      <div key={item.product}>
                        {item.product} - {item.quantity} - {item.price}€
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Section Inventaire */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Gestion de l&apos;Inventaire</h2>
        
        {/* Tableau de l&apos;inventaire */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-4 border-b">Nom</th>
                <th className="p-4 border-b">Catégorie</th>
                <th className="p-4 border-b">Stock</th>
                <th className="p-4 border-b">Stock Min</th>
                <th className="p-4 border-b">Prix</th>
                <th className="p-4 border-b">Fournisseur</th>
                <th className="p-4 border-b">Expiration</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className={product.stock < product.minStock ? 'bg-red-50' : ''}>
                  <td className="p-4 border-b">{product.name}</td>
                  <td className="p-4 border-b">{product.category}</td>
                  <td className="p-4 border-b">{product.stock}</td>
                  <td className="p-4 border-b">{product.minStock}</td>
                  <td className="p-4 border-b">{product.price}€</td>
                  <td className="p-4 border-b">{product.supplier}</td>
                  <td className="p-4 border-b">{product.expiration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* Section Fournisseurs */}
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Gestion des Fournisseurs</h2>
      
      {/* Formulaire d'ajout de fournisseur */}
      <form onSubmit={handleAddSupplier} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Nom du fournisseur"
            value={newSupplier.name}
            onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Contact"
            value={newSupplier.contact}
            onChange={(e) => setNewSupplier({ ...newSupplier, contact: e.target.value })}
            className="p-2 border rounded"
            required
          />
          <input
            type="tel"
            placeholder="Téléphone"
            value={newSupplier.phone}
            onChange={(e) => setNewSupplier({ ...newSupplier, phone: e.target.value })}
            className="p-2 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newSupplier.email}
            onChange={(e) => setNewSupplier({ ...newSupplier, email: e.target.value })}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Adresse"
            value={newSupplier.address}
            onChange={(e) => setNewSupplier({ ...newSupplier, address: e.target.value })}
            className="p-2 border rounded"
            required
          />
          <textarea
            placeholder="Notes"
            value={newSupplier.notes}
            onChange={(e) => setNewSupplier({ ...newSupplier, notes: e.target.value })}
            className="p-2 border rounded h-20"
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Ajouter le fournisseur
        </button>
      </form>

      {/* Tableau des fournisseurs */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 border-b">Nom</th>
              <th className="p-4 border-b">Contact</th>
              <th className="p-4 border-b">Téléphone</th>
              <th className="p-4 border-b">Email</th>
              <th className="p-4 border-b">Adresse</th>
              <th className="p-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier.id} className="hover:bg-gray-50">
                <td className="p-4 border-b">{supplier.name}</td>
                <td className="p-4 border-b">{supplier.contact}</td>
                <td className="p-4 border-b">{supplier.phone}</td>
                <td className="p-4 border-b">{supplier.email}</td>
                <td className="p-4 border-b">{supplier.address}</td>
                <td className="p-4 border-b">
                  <button
                    className="text-blue-600 hover:text-blue-800 mr-2"
                    onClick={() => handleUpdateSupplier(supplier.id, { ...supplier })}
                    title="Modifier"
                  >
                    📝
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDeleteSupplier(supplier.id)}
                    title="Supprimer"
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

    {/* Section Commandes */}
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Gestion des Commandes</h2>
      
      {/* Formulaire de commande */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Nouvelle commande</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            className="p-2 border rounded"
            required
          >
            <option value="">Sélectionner un fournisseur</option>
            {suppliers.map(supplier => (
              <option key={supplier.id} value={supplier.id}>{supplier.name}</option>
            ))}
          </select>
          <input
            type="date"
            className="p-2 border rounded"
            required
          />
        </div>
      </div>

      {/* Tableau des commandes */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 border-b">Fournisseur</th>
              <th className="p-4 border-b">Date</th>
              <th className="p-4 border-b">Statut</th>
              <th className="p-4 border-b">Produits</th>
              <th className="p-4 border-b">Montant</th>
              <th className="p-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="p-4 border-b">{order.supplier}</td>
                <td className="p-4 border-b">{order.date}</td>
                <td className="p-4 border-b">{order.status}</td>
                <td className="p-4 border-b">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="mr-2">{item.product}</span>
                      <span className="text-sm">x{item.quantity}</span>
                    </div>
                  ))}
                </td>
                <td className="p-4 border-b">
                  {order.items.reduce((total, item) => total + (item.quantity * item.price), 0).toFixed(2)}€
                </td>
                <td className="p-4 border-b">
                  <button
                    className="text-blue-600 hover:text-blue-800 mr-2"
                    title="Détails"
                  ></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    </main>
  );
}
