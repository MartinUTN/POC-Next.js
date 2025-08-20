// app/isr-page/page.tsx
import { DemoPageLayout } from '../components/DemoPageLayout';
import { InfoCard } from '../components/InfoCard';

// Esta función obtiene datos y le dice a Next.js que los guarde en caché,
// pero que los revalide (vuelva a obtener) como máximo cada 10 segundos.
async function getRevalidatedData() {
  try {
    // CORRECCIÓN: Usamos un ID estático (siempre el mismo) para que Next.js pueda usar el caché.
    const staticId = 1; 
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${staticId}`, {
      next: {
        revalidate: 10, // La magia del ISR: re-genera la página cada 10 segundos.
      },
    });
    
    if (!res.ok) {
      // Maneja errores HTTP como 404 o 500.
      return { title: 'No se pudo cargar la tarea en este momento (Error de respuesta).', id: 'Error de API', fetchTime: new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' }) };
    }
  
    const todo = await res.json();
    return {
      ...todo,
      fetchTime: new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' })
    };
  } catch (error) {
    // Captura errores de red (como 'fetch failed') u otras excepciones.
    console.error("Fetch error:", error);
    return { title: 'No se pudo conectar con el servicio (Error de red).', id: 'Error de Conexión', fetchTime: new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' }) };
  }
}

export default async function ISRPage() {
  const data = await getRevalidatedData();

  return (
    <DemoPageLayout>
      <InfoCard title="Regeneración Estática Incremental (ISR)" icon="⏳">
        <p>
          Esta página demuestra la <strong>Incremental Static Regeneration</strong>, una poderosa estrategia híbrida. La página se genera estáticamente, pero se reconstruye en segundo plano después de un intervalo de tiempo (en este caso, 10 segundos).
        </p>
        <p>
          Esto ofrece lo mejor de ambos mundos: la velocidad de una página estática con la capacidad de actualizarse sin necesidad de reconstruir todo el sitio.
        </p>
        <ul>
          <li><strong>Casos de uso:</strong> Comentarios de un blog, precios de acciones, noticias populares, inventario de productos.</li>
          <li><strong>Ventaja principal:</strong> Excelente rendimiento con datos semi-recientes.</li>
        </ul>
      </InfoCard>

      <InfoCard title="Demostración Técnica" icon="🔧">
        <p>
          La siguiente tarea se obtiene de una API externa de prueba.
        </p>
        <blockquote style={{ borderLeft: '4px solid #ccc', paddingLeft: '1rem', margin: '1rem 0' }}>
          <p>"{data.title}"</p>
          <footer>— Tarea ID: {data.id}</footer>
        </blockquote>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center', margin: '1rem 0', color: '#2a9d8f' }}>
          Tarea obtenida a las: {data.fetchTime}
        </p>
        <p>
          <strong>Prueba a recargar la página:</strong> durante 10 segundos, verás la misma tarea y la misma hora (versión en caché). Después de ese tiempo, al recargar verás que la <strong>hora de obtención se ha actualizado</strong>, demostrando que Next.js ha regenerado la página.
        </p>
      </InfoCard>
    </DemoPageLayout>
  );
}
