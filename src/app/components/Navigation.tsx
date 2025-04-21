'use client'
import Link from 'next/link';
import { useState } from 'react';
import { UserIcon } from '@heroicons/react/24/outline';


const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Labelisation', href: '/labelisation' },
    { name: 'Restaurants', href: '/restaurants' },
    { name: 'Produits', href: '/produits' },
    { name: 'Partenariats', href: '/partenariats' },
    { name: 'Ressources', href: '/ressources' },
    { name: 'Contact', href: '/contact' },
    { name: (
        <>
            <UserIcon className="w-5 h-5" />
            <span className="sr-only">Utilisateurs</span>
        </>
    ), href: '/utilisateurs' },
];

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="menu">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center mt-2 mb-2">
                <Link href="/" className="flex items-center">
                <span className="logo">sofō</span>
                </Link>
                {/* Burger menu button (visible sur mobile) */}
                <button
                    className="sm:hidden flex flex-col justify-center items-center w-10 h-10"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Ouvrir le menu"
                >
                    <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-800 dark:bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
                {/* Liens de navigation (desktop) */}
                <div className="hidden sm:flex gap-4 justify-center text-xs">
                {navigation.map((item) => (
  <Link key={item.href} href={item.href} className="inline-block px-4 py-4">
    {item.name}
  </Link>
))}
                </div>
            </div>
            {/* Menu mobile déroulant */}
            {menuOpen && (
                <div className="sm:hidden flex flex-col items-center bg-white dark:bg-gray-900 shadow-md pb-4">
                    {navigation.map((item) => (
  <Link key={item.href} href={item.href} className="inline-block px-4 py-4">
    {item.name}
  </Link>
))}
                </div>
            )}
        </nav>
    );
}
