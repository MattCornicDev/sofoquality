import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">

      
       {/* Hero Section */}
       <section className="py-66">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sofo Quality */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="title text-4xl font-bold mb-4">Sofo Quality</h1>
              <p className="text-lg mb-6">La référence pour la labellisation de la qualité dans la restauration et les produits alimentaires au Maroc.</p>
              <Link href="/labelisation" className="bouton inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">Découvrir la labellisation</Link>
            </div>

            {/* Sofo Stock */}
            <div className="flex-1 text-center md:text-right">
              <h1 className="title text-4xl font-bold mb-4">Sofo Stock</h1>
              <p className="text-lg mb-6">La solution complète pour la gestion de stock et la traçabilité des produits alimentaires.</p>
              <Link href="/sofostock" className="bouton inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Découvrir Sofo Stock</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ligne verticale */}
      <div className="hidden md:block absolute top-1/3 bottom-1/3 left-1/2 w-0.5 bg-gray-300" />


      {/* Présentation rapide */}
      <section className="py-12 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-2">Qu&apos; est-ce que SofoQuality ?</h2>
        <p className="">
          SofoQuality accompagne les restaurants et producteurs dans leur démarche qualité, valorise les bonnes pratiques et met en avant les établissements labellisés.
        </p>
      </section>

      {/* Mise en avant de la labellisation */}
      <section className="py-8 px-4 max-w-4xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-2">Pourquoi se faire labelliser ?</h3>
        <p className="">
          Obtenez une reconnaissance officielle, rassurez vos clients et rejoignez un réseau d’acteurs engagés pour la qualité.
        </p>
      </section>

      {/* Restaurants labellisés */}
      <section className="py-12 ">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-semibold mb-6 text-center">Quelques restaurants labellisés</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Exemple de restaurant */}
            <div className="rounded-lg p-4">
              <Image
                src="/images/restaurant-2.webp"
                alt="Restaurant 1"
                width={320}
                height={120}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h4 className="font-bold">Le Gourmet Bio</h4>
              <p className="text-sm text-gray-500">Marrakech</p>
            </div>
            <div className=" rounded-lg p-4">
              <Image
                src="/images/restaurant-marrakech-2.webp"
                alt="Restaurant 2"
                width={320}
                height={120}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h4 className="font-bold">Le Gourmet Bio</h4>
              <p className="text-sm">Marrakech</p>
            </div>
            <div className="rounded-lg p-4">
              <Image
                src="/images/restaurant-marrakech-3.webp"
                alt="Restaurant 3"
                width={320}
                height={120}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h4 className="font-bold">Le Gourmet Bio</h4>
              <p className="text-sm text-gray-500">Marrakech</p>
            </div>
            {/* Ajoute d'autres restaurants ici */}
          </div>
          <div className="text-center mt-6">
            <Link href="/restaurants" className="text-green-600 hover:underline">Voir tous les restaurants</Link>
          </div>
        </div>
      </section>

      {/* Produits labellisés */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-semibold mb-6 text-center">Produits labellisés</h3>
          <div className="flex flex-wrap gap-6 justify-center">
            {/* Exemple de produit */}
            <div className=" rounded-lg p-4 w-48">
              <Image
                src="/images/miel-marrakech.png"
                alt="Miel du pays"
                width={128}
                height={128}
                className="w-full h-24 object-cover rounded mb-2"
              />
              <h4 className="font-bold text-center">Miel du pays</h4>
            </div>
            <div className=" rounded-lg p-4 w-48">
              <Image
                src="/images/huile-olive.webp"
                alt="Huile d'olive"
                width={128}
                height={128}
                className="w-full h-24 object-cover rounded mb-2"
              />
              <h4 className="font-bold text-center">Huile d&apos; olive</h4>
            </div>
            {/* Ajoute d'autres produits ici */}
          </div>
          <div className="text-center mt-6">
            <Link href="/produits" className="text-green-600 hover:underline">Voir tous les produits</Link>
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="py-8 px-4 max-w-4xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-4">Nos partenaires</h3>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {/* Exemple de logo partenaire */}
          <Image
            src="/images/Armoiries-du-Maro.png"
            alt="Armoiries"
            width={128}
            height={128}
            className="h-22"
          />
          {/* Ajoute d'autres logos ici */}
        </div>
      </section>

      {/* Ressources */}
      <section className="py-8 px-4 max-w-4xl mx-auto text-center">
        <h3 className="text-xl font-semibold mb-2">Ressources</h3>
        <Link href="/ressources" className="text-green-600 hover:underline">Voir nos guides et ressources</Link>
      </section>

      {/* Contact / Appel à l’action */}
      <section className="py-12 text-center">
        <h3 className="text-xl font-semibold mb-2">Vous souhaitez en savoir plus ?</h3>
        <Link href="/contact" className="bouton inline-block text-white px-6 py-3 rounded-lg font-semibold transition">Contactez-nous</Link>
      </section>
    </main>
  );
}
