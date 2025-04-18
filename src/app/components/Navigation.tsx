'use client'
import Link from 'next/link';

const navigation = [
    { name: 'Home', href: '/' },
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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-4 justify-center mt-2 mb-2">
                {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                        {item.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}