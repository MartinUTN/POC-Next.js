// app/ssr-page/page.tsx
import { DemoPageLayout } from '../components/DemoPageLayout';
import { InfoCard } from '../components/InfoCard';

// Esta línea es clave. Le dice a Next.js que esta página debe ser
// generada en el servidor en cada petición.
export const dynamic = 'force-dynamic';

// Esta función se ejecuta EN EL SERVIDOR cada vez que alguien visita la página.
async function getServerSideData() {
  const dynamicData = {
    timestamp: new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' }),
  };
  return dynamicData;
}

export default async function SSRPage() {
  const data = await getServerSideData();

  return (
    <DemoPageLayout>
      <InfoCard title="Renderizado en Servidor (SSR)" icon="🔄">
        <p>
          Esta página es un ejemplo de <strong>Server-Side Rendering</strong>. A diferencia de SSG, esta página se genera en el servidor <strong>cada vez que un usuario la solicita</strong>.
        </p>
        <p>
          Esto garantiza que los datos mostrados sean siempre los más recientes. Es la estrategia perfecta para contenido altamente dinámico o personalizado para cada usuario.
        </p>
        <ul>
          <li><strong>Casos de uso:</strong> Paneles de control (dashboards), feeds de redes sociales, resultados de búsqueda, e-commerce con precios dinámicos.</li>
          <li><strong>Ventaja principal:</strong> Contenido siempre actualizado y bueno para el SEO.</li>
        </ul>
      </InfoCard>

      <InfoCard title="Demostración Técnica" icon="🔧">
        <p>
          La siguiente fecha y hora indican cuándo se generó esta página en el servidor.
        </p>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center', margin: '1rem 0', color: '#e63946' }}>
          Hora de la solicitud: {data.timestamp}
        </p>
        <p>
          <strong>Prueba a recargar la página:</strong> notarás que la hora <strong>se actualiza en cada recarga</strong>. Esto demuestra que el servidor está generando una nueva versión de la página para cada visita.
        </p>
      </InfoCard>
    </DemoPageLayout>
  );
}
