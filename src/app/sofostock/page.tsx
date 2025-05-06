'use client';
import { useState } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  category: string;
  stock: number;
  minStock: number;
  price: number;
  supplier: string;
  expiration: string;
}

interface Supplier {
  id: number;
  name: string;
  contact: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
}

interface OrderItem {
  product: string;
  quantity: number;
  price: number;
}

interface Order {
  id: number;
  supplier: string;
  date: string;
  status: 'En attente' | 'En cours' | 'Livré' | 'Annulé';
  items: OrderItem[];
}

export default function StockManagement() {
  // États pour la gestion des produits
  const [products, setProducts] = useState<Product[]>([
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

  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    category: '',
    stock: 0,
    minStock: 0,
    price: 0,
    supplier: '',
    expiration: '',
  });

  // États pour la gestion des fournisseurs
  const [suppliers, setSuppliers] = useState<Supplier[]>([
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
  ]);

  // États pour les commandes
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 1,
      supplier: 'Fournisseur 1',
      date: '2024-04-29',
      status: 'En attente',
      items: [
        { product: 'Produit 1', quantity: 50, price: 19.99 },
      ],
    },
  ]);

  // État pour la nouvelle commande
  const [newOrder, setNewOrder] = useState<Partial<Order>>({
    supplier: '',
    date: new Date().toISOString().split('T')[0],
    status: 'En attente',
    items: [] as OrderItem[]
  });

  // État pour la commande en cours de modification
  const [editingOrder, setEditingOrder] = useState<number | null>(null);

  // Fonction pour ajouter une nouvelle commande
  const handleAddOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrd = { ...newOrder, id: Date.now() } as Order;
    setOrders([...orders, newOrd]);
    setNewOrder({
      supplier: '',
      date: new Date().toISOString().split('T')[0],
      status: 'En attente',
      items: []
    });
  };

  // Fonction pour mettre à jour une commande
  const handleUpdateOrder = (orderId: number, updatedOrder: Partial<Order>) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, ...updatedOrder } : order
    ));
    if (editingOrder === orderId) {
      setEditingOrder(null);
    }
  };

  // Fonction pour annuler la modification
  const handleCancelEdit = () => {
    setEditingOrder(null);
  };

  // Fonction pour supprimer une commande
  const handleDeleteOrder = (orderId: number) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette commande ?')) {
      setOrders(orders.filter(order => order.id !== orderId));
    }
  };

  // Fonction pour ajouter un nouveau produit
  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const newProd = { ...newProduct, id: Date.now() } as Product;
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
  const [newSupplier, setNewSupplier] = useState<Partial<Supplier>>({
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
    const newSupp = { ...newSupplier, id: Date.now() } as Supplier;
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
  const handleUpdateSupplier = (supplierId: number, updatedSupplier: Partial<Supplier>) => {
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
        
        {/* Formulaire d'ajout de commande */}
        <form onSubmit={handleAddOrder} className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              value={newOrder.supplier}
              onChange={(e) => setNewOrder({ ...newOrder, supplier: e.target.value })}
              className="p-2 border rounded"
              required
            >
              <option value="">Sélectionnez un fournisseur</option>
              {suppliers.map((supplier) => (
                <option key={supplier.id} value={supplier.name}>
                  {supplier.name}
                </option>
              ))}
            </select>
            <input
              type="date"
              value={newOrder.date}
              onChange={(e) => setNewOrder({ ...newOrder, date: e.target.value })}
              className="p-2 border rounded"
              required
            />
            <div className="col-span-2">
              <div className="flex flex-col gap-2">
                {newOrder.items && newOrder.items.map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <select
                      value={item.product}
                      onChange={(e) => {
                        const newItems = [...newOrder.items || []];
                        newItems[index] = { ...item, product: e.target.value };
                        setNewOrder({ ...newOrder, items: newItems });
                      }}
                      className="p-2 border rounded"
                    >
                      <option value="">Sélectionnez un produit</option>
                      {products.map((product) => (
                        <option key={product.id} value={product.name}>
                          {product.name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => {
                        const newItems = [...newOrder.items || []];
                        newItems[index] = { ...item, quantity: parseInt(e.target.value) };
                        setNewOrder({ ...newOrder, items: newItems });
                      }}
                      className="p-2 border rounded w-24"
                      min="1"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const newItems = [...newOrder.items || []];
                        newItems.splice(index, 1);
                        setNewOrder({ ...newOrder, items: newItems });
                      }}
                      className="text-red-600 hover:text-red-800"
                    >
                      Supprimer
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setNewOrder({
                      ...newOrder,
                      items: [...newOrder.items || [], { product: '', quantity: 1, price: 0 }]
                    });
                  }}
                  className="text-blue-600 hover:text-blue-800"
                >
                  Ajouter un produit
                </button>
              </div>
            </div>
          </div>
          <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Ajouter la commande
          </button>
        </form>

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
                  <td className="p-4 border-b">
                    {editingOrder === order.id ? (
                      <select
                        value={order.status}
                        onChange={(e) => {
                          const newStatus = e.target.value as 'En attente' | 'En cours' | 'Livré' | 'Annulé';
                          handleUpdateOrder(order.id, { status: newStatus });
                        }}
                        className="p-2 border rounded"
                      >
                        <option value="En attente">En attente</option>
                        <option value="En cours">En cours</option>
                        <option value="Livré">Livré</option>
                        <option value="Annulé">Annulé</option>
                      </select>
                    ) : (
                      order.status
                    )}
                  </td>
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
                    {editingOrder === order.id ? (
                      <button
                        type="button"
                        onClick={handleCancelEdit}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Annuler
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setEditingOrder(order.id)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Modifier
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleDeleteOrder(order.id)}
                      className="ml-2 text-red-600 hover:text-red-800"
                    >
                      Supprimer
                    </button>
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
