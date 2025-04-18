'use client'
import Link from 'next/link';

const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Labelisation', href: '/labelisation' },
    { name: 'Restaurants', href: '/restaurants' },
    { name: 'Produits', href: '/produits' },
    { name: 'Partenariats', href: '/partenariats' },
    { name: 'Ressources', href: '/ressources' },
    { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
    return (
        <nav className="bg-white dark:bg-gray-900 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}