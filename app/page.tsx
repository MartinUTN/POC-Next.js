/*
 * =============================================================================
 * ARCHIVO: app/page.tsx
 * POR FAVOR, COPIA Y PEGA ESTE CÓDIGO EN EL ARCHIVO `app/page.tsx`
 * =============================================================================
 */

import React from 'react';

// --- Componentes de la UI ---
// Para mantener el código organizado, definimos pequeños componentes reutilizables.

// Componente para el encabezado principal de la página.
const Header = () => (
  <header className="bg-white shadow-md">
    <div className="container mx-auto px-6 py-4">
      <h1 className="text-4xl font-bold text-center text-gray-900">
        Explorando Next.js
      </h1>
      <p className="text-center text-lg text-gray-600 mt-2">
        Una guía interactiva basada en el documento POC
      </p>
    </div>
  </header>
);

// Componente para una tarjeta de información.
// Recibe un título, un contenido (children) y un icono opcional.
const InfoCard = ({ title, children, icon }: { title: string; children: React.ReactNode; icon?: string }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 flex items-center">
        {icon && <span className="mr-3 text-2xl">{icon}</span>}
        {title}
      </h2>
      <div className="text-gray-700 space-y-3 leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

// Componente para el pie de página.
const Footer = () => (
    <footer className="text-center py-8 mt-12">
        <p className="text-gray-500">
            Página creada con Next.js y Tailwind CSS.
        </p>
        <p className="text-gray-500 mt-1">
            Información extraída del POC de la UTN F.R.RO - 2025.
        </p>
    </footer>
);


// --- Componente Principal de la Página ---
// Aquí se ensambla toda la página utilizando los componentes definidos arriba.
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Tarjeta de Introducción */}
          <div className="lg:col-span-3">
            <InfoCard title="Introducción a Next.js" icon="🚀">
              <p>
                Next.js es un framework open-source basado en React que permite construir aplicaciones web modernas. Su enfoque se centra en el <strong>rendimiento</strong>, la <strong>escalabilidad</strong> y una excelente <strong>experiencia de desarrollador</strong>. A diferencia de React puro, Next.js ofrece renderizado tanto del lado del servidor (SSR) como del cliente (CSR), además de generación de sitios estáticos (SSG).
              </p>
            </InfoCard>
          </div>

          {/* Tarjeta de Historia */}
          <InfoCard title="Historia y Evolución" icon="📜">
            <p>
              Lanzado en 2016 por Vercel (antes ZEIT), Next.js buscaba simplificar el renderizado del lado del servidor en React. Ha evolucionado enormemente, introduciendo características clave como:
            </p>
            <ul className="list-disc list-inside pl-2 space-y-1">
              <li><strong>Rutas basadas en archivos:</strong> Simple y automático.</li>
              <li><strong>API Routes:</strong> Crea endpoints de API dentro del mismo proyecto.</li>
              <li><strong>Static Site Generation (SSG):</strong> Para sitios ultra rápidos.</li>
              <li><strong>App Router:</strong> Un nuevo paradigma introducido en la versión 13.</li>
            </ul>
          </InfoCard>

          {/* Tarjeta de Arquitectura */}
          <InfoCard title="Arquitectura y Funcionamiento" icon="🏗️">
            <p>
              Next.js es flexible gracias a sus múltiples estrategias de renderizado:
            </p>
            <ul className="list-disc list-inside pl-2 space-y-1 font-mono text-sm">
                <li><strong>SSG (Static Site Generation):</strong> El HTML se genera en tiempo de construcción. Ideal para blogs o portfolios.</li>
                <li><strong>SSR (Server-side Rendering):</strong> El HTML se genera en cada petición. Perfecto para contenido dinámico y personalizado.</li>
                <li><strong>ISR (Incremental Static Regeneration):</strong> Actualiza páginas estáticas sin reconstruir todo el sitio.</li>
                <li><strong>CSR (Client-side Rendering):</strong> El renderizado tradicional de React, en el navegador.</li>
            </ul>
          </InfoCard>

          {/* Tarjeta de Comparativa */}
          <InfoCard title="Comparativa con otros Frameworks" icon="🆚">
            <p>
              Next.js destaca por su equilibrio entre simplicidad y potencia.
            </p>
            <ul className="list-disc list-inside pl-2 space-y-1">
              <li><strong>vs React:</strong> Next.js añade estructura, enrutamiento y optimizaciones sobre la librería de React.</li>
              <li><strong>vs Gatsby:</strong> Ofrece mayor flexibilidad con su renderizado híbrido, mientras que Gatsby se enfoca más en sitios estáticos.</li>
              <li><strong>vs Remix:</strong> Ambos son potentes, pero Next.js tiene una comunidad más grande y un ecosistema más maduro.</li>
            </ul>
          </InfoCard>

          {/* Tarjeta de Casos de Uso */}
          <div className="md:col-span-2 lg:col-span-3">
            <InfoCard title="Casos de Uso y Ejemplos Reales" icon="🏢">
              <p>
                Grandes empresas confían en Next.js para sus aplicaciones de alto tráfico, demostrando su escalabilidad y rendimiento en producción. Algunos ejemplos notables incluyen:
              </p>
              <div className="flex flex-wrap gap-4 mt-4 justify-center">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">Netflix</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-semibold">TikTok</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold">Twitch</span>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full font-semibold">GitHub</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">Hulu</span>
              </div>
            </InfoCard>
          </div>
          
          {/* Tarjeta de Buenas Prácticas */}
          <div className="lg:col-span-3">
            <InfoCard title="Buenas Prácticas" icon="✅">
                 <p>
                    Para sacar el máximo provecho de Next.js, es recomendable:
                </p>
                <ul className="list-disc list-inside pl-2 space-y-2 mt-2">
                    <li><strong>Elegir la estrategia de renderizado correcta</strong> para cada página (SSG, SSR, ISR).</li>
                    <li>Utilizar el componente <strong>{`<Image>`}</strong> para optimizar imágenes automáticamente.</li>
                    <li>Aprovechar los <strong>Server Components</strong> para reducir el JavaScript enviado al cliente.</li>
                    <li>Usar <strong>TypeScript</strong> desde el inicio para un código más robusto y mantenible.</li>
                </ul>
            </InfoCard>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
