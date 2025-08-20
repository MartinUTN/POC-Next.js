// app/csr-page/page.tsx
"use client"; // ¡Esta directiva es ESENCIAL para el renderizado en el cliente!

import React, { useState, useEffect } from 'react';
import { DemoPageLayout } from '../components/DemoPageLayout';
import { InfoCard } from '../components/InfoCard';

// Definimos un tipo para los datos que vamos a recibir
interface Todo {
  id: number;
  title: string;
}

export default function CSRPage() {
  // Estados para manejar los datos, el estado de carga y los errores
  const [data, setData] = useState<Todo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect se ejecuta en el navegador DESPUÉS de que la página se ha cargado
  useEffect(() => {
    // Función para obtener los datos desde el cliente
    const fetchData = async () => {
      try {
        const randomId = Math.floor(Math.random() * 100) + 1;
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomId}`);
        if (!res.ok) {
          throw new Error('Error al obtener los datos');
        }
        const todo = await res.json();
        setData(todo);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Un error desconocido ocurrió');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // El array vacío asegura que se ejecute solo una vez

  return (
    <DemoPageLayout>
      <InfoCard title="Renderizado en Cliente (CSR)" icon="�">
        <p>
          Esta página es un ejemplo de <strong>Client-Side Rendering</strong>. El navegador recibe un esqueleto de HTML casi vacío, y luego el JavaScript (React) se encarga de solicitar los datos y construir la interfaz.
        </p>
        <p>
          Es el modelo tradicional de las Single-Page Applications (SPA). Aunque puede tener un tiempo de carga inicial más lento y ser menos amigable para el SEO, es ideal para aplicaciones con alta interactividad.
        </p>
        <ul>
          <li><strong>Casos de uso:</strong> Aplicaciones web complejas con mucha interacción del usuario, como editores de fotos, herramientas de diseño o dashboards privados.</li>
          <li><strong>Ventaja principal:</strong> Experiencia de usuario fluida y rica después de la carga inicial.</li>
        </ul>
      </InfoCard>

      <InfoCard title="Demostración Técnica" icon="🔧">
        <p>
          Los datos de la tarea se solicitan desde tu navegador. Verás un estado de "Cargando..." mientras se obtienen.
        </p>
        <div style={{ borderLeft: '4px solid #ccc', paddingLeft: '1rem', margin: '1rem 0', minHeight: '60px' }}>
          {loading && <p>Cargando tarea...</p>}
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          {data && (
            <blockquote>
              <p>"{data.title}"</p>
              <footer>— Tarea ID: {data.id}</footer>
            </blockquote>
          )}
        </div>
        <p>
          <strong>Prueba a recargar la página:</strong> cada vez que recargues, verás brevemente el mensaje de "Cargando..." y luego aparecerá una nueva tarea. Esto demuestra que la obtención de datos ocurre en tu navegador, no en el servidor.
        </p>
      </InfoCard>
    </DemoPageLayout>
  );
}
