import { DemoPageLayout } from '../components/DemoPageLayout';
import { InfoCard } from '../components/InfoCard';

// Esta función se ejecuta SOLO una vez durante la construcción del proyecto.
async function getStaticData() {
  const staticData = {
    timestamp: new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' }),
  };
  return staticData;
}

export default async function SSGPage() {
  const data = await getStaticData();

  return (
    <DemoPageLayout>
      <InfoCard title="Generación Estática (SSG)" icon="⚡️">
        <p>
          Esta página es un ejemplo de <strong>Static Site Generation</strong>. El contenido que ves fue generado una sola vez, durante el proceso de "build" (compilación) del sitio.
        </p>
        <p>
          Funciona como un archivo HTML simple y pre-renderizado, lo que la hace increíblemente rápida y excelente para el SEO. Es la estrategia ideal para contenido que no cambia con frecuencia.
        </p>
        <ul>
          <li><strong>Casos de uso:</strong> Páginas de marketing, posts de un blog, documentación, portfolios.</li>
          <li><strong>Ventaja principal:</strong> Máximo rendimiento y seguridad.</li>
        </ul>
      </InfoCard>

      <InfoCard title="Demostración Técnica" icon="🔧">
        <p>
          La siguiente fecha y hora indican cuándo se construyó esta página en el servidor.
        </p>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center', margin: '1rem 0', color: '#0070f3' }}>
          Fecha de construcción: {data.timestamp}
        </p>
        <p>
          <strong>Prueba a recargar la página:</strong> notarás que este valor <strong>no cambia</strong>. Esto demuestra que estás viendo una versión estática, servida directamente desde un CDN sin necesidad de que un servidor la genere de nuevo.
        </p>
      </InfoCard>
    </DemoPageLayout>
  );
}
