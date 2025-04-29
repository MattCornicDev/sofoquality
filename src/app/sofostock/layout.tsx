import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sofo Stock - Gestion de Stock',
}

export default function StockLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-gray-800 text-white p-4 mb-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Sofo Stock</h1>
            <div className="flex space-x-4">
              <a href="/sofostock/products" className="hover:text-gray-300">Produits</a>
              <a href="/sofostock/suppliers" className="hover:text-gray-300">Fournisseurs</a>
              <a href="/sofostock/orders" className="hover:text-gray-300">Commandes</a>
              <a href="/sofostock/inventory" className="hover:text-gray-300">Inventaire</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </main>
  )
}