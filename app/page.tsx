// app/page.tsx
import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';


const Header = () => (
  <header className={styles.mainHeader}>
    <div className={styles.headerContent}>
      <h1 className={styles.headerTitle}>
        Explorando Next.js
      </h1>
      <p className={styles.headerSubtitle}>
        Una guía interactiva sobre Next.js
      </p>
    </div>
  </header>
);

const InfoCard = ({ title, children, icon }: { title: string; children: React.ReactNode; icon?: string }) => (
  <div className={styles.infoCard}>
    <div className={styles.infoCardContent}>
      <h2 className={styles.infoCardTitle}>
        {icon && <span>{icon}</span>}
        {title}
      </h2>
      <div className={styles.infoCardBody}>
        {children}
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className={styles.mainFooter}>
    <p className={styles.footerText}>
      Página creada con Next.js y CSS.
    </p>
  </footer>
);

export default function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <Header />

      <main className={styles.mainContent}>
        <div className={styles.cardGrid}>
          {/* Tarjeta de Introducción */}
          <div className={styles.lgColSpan3}>
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
            <ul>
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
            <ul>
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
            <ul>
              <li><strong>vs React:</strong> Next.js añade estructura, enrutamiento y optimizaciones sobre la librería de React.</li>
              <li><strong>vs Gatsby:</strong> Ofrece mayor flexibilidad con su renderizado híbrido, mientras que Gatsby se enfoca más en sitios estáticos.</li>
              <li><strong>vs Remix:</strong> Ambos son potentes, pero Next.js tiene una comunidad más grande y un ecosistema más maduro.</li>
            </ul>
          </InfoCard>
          {/* Tarjeta de Demostración Práctica (NUEVA) */}
          <div className={styles.lgColSpan3}>
            <InfoCard title="Demostración Práctica" icon="🧪">
              <p>
                Explora las diferentes estrategias de renderizado en acción. Cada enlace te llevará a una página que demuestra un concepto clave de Next.js.
              </p>
              <div className={styles.demoGrid}>
                <Link href="/ssg-page" className={styles.demoLink}>
                  <div>
                    <h3>Estático (SSG)</h3>
                    <p>Generado una vez. El más rápido.</p>
                  </div>
                  <span>&rarr;</span>
                </Link>
                <Link href="/ssr-page" className={styles.demoLink}>
                  <div>
                    <h3>Servidor (SSR)</h3>
                    <p>Generado en cada solicitud.</p>
                  </div>
                  <span>&rarr;</span>
                </Link>
                <Link href="/isr-page" className={styles.demoLink}>
                  <div>
                    <h3>Incremental (ISR)</h3>
                    <p>Estático que se revalida.</p>
                  </div>
                  <span>&rarr;</span>
                </Link>
                <Link href="/csr-page" className={styles.demoLink}>
                  <div>
                    <h3>Cliente (CSR)</h3>
                    <p>Renderizado en el navegador.</p>
                  </div>
                  <span>&rarr;</span>
                </Link>
              </div>
            </InfoCard>
          </div>

          


          {/* Tarjeta de Casos de Uso */}
          <div className={styles.mdColSpan2LgColSpan3}>
            <InfoCard title="Casos de Uso y Ejemplos Reales" icon="🏢">
              <p>
                Grandes empresas confían en Next.js para sus aplicaciones de alto tráfico, demostrando su escalabilidad y rendimiento en producción. Algunos ejemplos notables incluyen:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem', justifyContent: 'center' }}>
                <span className={styles.companyBadge}>Netflix</span>
                <span className={styles.companyBadge}>TikTok</span>
                <span className={styles.companyBadge}>Twitch</span>
                <span className={styles.companyBadge}>GitHub</span>
                <span className={styles.companyBadge}>Hulu</span>
              </div>
            </InfoCard>
          </div>
          
          {/* Tarjeta de Buenas Prácticas */}
          <div className={styles.lgColSpan3}>
            <InfoCard title="Buenas Prácticas" icon="✅">
              <p>
                Para sacar el máximo provecho de Next.js, es recomendable:
              </p>
              <ul>
                <li><strong>Elegir la estrategia de renderizado correcta</strong> para cada página (SSG, SSR, ISR, CSR).</li>
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
