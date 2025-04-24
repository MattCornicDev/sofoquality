import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
      <footer className={styles.footer}>
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo et nom */}
          <div className="flex items-center gap-2">
            <span className="logo">sofō</span>
            <span className="text-lg font-bold text-red-400 dark:text-red-600">SofoQuality</span>
          </div>
  
          {/* Liens rapides */}
          <nav className="flex gap-6 flex-wrap text-sm">
            <Link href="/" className="hover:underline">Accueil</Link>
            <Link href="/labelisation" className="hover:underline">Labelisation</Link>
            <Link href="/restaurants" className="hover:underline">Restaurants</Link>
            <Link href="/produits" className="hover:underline">Produits</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
  
          {/* Coordonnées */}
          <div className="text-xs text-gray-100 dark:text-gray-300 text-center md:text-right">
            <div>Email : <a href="mailto:contact@sofoquality.com" className="underline">contact@sofoquality.com</a></div>
            <div>Siège social : Hay el Fath immeuble 24 10150 Rabat</div>
            <div>Tel : +33(0)6 43 43 98 28</div>
          </div>
        </div>
  
        {/* Réseaux sociaux et mentions */}
        <div className="border-t border-gray-200 dark:border-gray-700 py-4 text-center flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 gap-4">
          <div className="flex gap-4 justify-center">
            {/* Exemples d'icônes SVG, à remplacer par tes liens */}
            <Link href="[https://facebook.com](https://facebook.com)" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg className="w-5 h-5 fill-current text-gray-500 hover:text-blue-600" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.7-1.3 1.3V12h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12"/></svg>
            </Link>
            <Link href="[https://instagram.com](https://instagram.com)" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="w-5 h-5 fill-current text-gray-500 hover:text-pink-500" viewBox="0 0 24 24"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3zm5 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm6.5 1a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
            </Link>
            {/* Ajoute d'autres réseaux si besoin */}
          </div>
          <div className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Sofō. Tous droits réservés. | <Link href="/mentions-legales" className="hover:underline">Mentions légales</Link>
          </div>
        </div>
      </footer>
    );
  }