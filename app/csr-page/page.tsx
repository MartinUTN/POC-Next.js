// app/csr-page/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { DemoPageLayout } from '../components/DemoPageLayout';
import { InfoCard } from '../components/InfoCard';

interface Todo {
  id: number;
  title: string;
}

export default function CSRPage() {
  const [data, setData] = useState<Todo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
  }, []);

  return (
    <DemoPageLayout>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '2rem' }}>
        {/* Primera Card: Renderizado en Cliente (CSR) */}
        <InfoCard title="Renderizado en Cliente (CSR)" icon="🌐">
          <div style={{ padding: '1rem' }}>
            <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
              Esta página es un ejemplo de <strong style={{ color: '#2563eb' }}>Client-Side Rendering</strong>. 
              El navegador recibe un esqueleto de HTML casi vacío, y luego el JavaScript (React) se encarga 
              de solicitar los datos y construir la interfaz.
            </p>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Es el modelo tradicional de las Single-Page Applications (SPA). Aunque puede tener un tiempo 
              de carga inicial más lento y ser menos amigable para el SEO, es ideal para aplicaciones con 
              alta interactividad.
            </p>
            
            <div style={{ 
              backgroundColor: '#202e40ff', 
              padding: '1.5rem', 
              borderRadius: '0.5rem',
              borderLeft: '4px solid #2563eb'
            }}>
              <h3 style={{ marginTop: 0, color: '#1e40af' }}>Características principales:</h3>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <strong>Casos de uso:</strong> Aplicaciones web complejas con mucha interacción del usuario, 
                  como editores de fotos, herramientas de diseño o dashboards privados.
                </li>
                <li>
                  <strong>Ventaja principal:</strong> Experiencia de usuario fluida después de la carga inicial.
                </li>
              </ul>
            </div>
          </div>
        </InfoCard>

        {/* Segunda Card: Demostración Técnica */}
        <InfoCard title="Demostración Técnica" icon="🔧">
          <div style={{ padding: '1rem' }}>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              Los datos de la tarea se solicitan desde tu navegador. Verás un estado de "Cargando..." mientras se obtienen.
            </p>
            
            <div style={{ 
              backgroundColor: loading ? '#202e40ff' : '#f3f4f6',
              borderLeft: `4px solid ${loading ? '#f59e0b' : '#22c55e'}`,
              padding: '1.5rem', 
              borderRadius: '0.5rem',
              marginBottom: '1.5rem'
            }}>
              {loading && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ 
                    width: '20px', 
                    height: '20px', 
                    border: '2px solid #f59e0b',
                    borderTop: '2px solid transparent',
                    borderRadius: '50%', 
                    animation: 'spin 1s linear infinite'
                  }}></div>
                  <p style={{ margin: 0, color: '#b45309' }}>Cargando tarea...</p>
                </div>
              )}
              {error && (
                <div>
                  <p style={{ color: '#dc2626', fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>Error:</p>
                  <p style={{ color: '#dc2626', margin: 0 }}>{error}</p>
                </div>
              )}
              {data && (
                <blockquote style={{ margin: 0 }}>
                  <p style={{ 
                    fontStyle: 'italic', 
                    fontSize: '1.1rem', 
                    color: '#15803d',
                    margin: '0 0 0.5rem 0'
                  }}>
                    "{data.title}"
                  </p>
                  <footer style={{ fontSize: '0.9rem', color: '#16a34a' }}>
                    — Tarea ID: {data.id}
                  </footer>
                </blockquote>
              )}
            </div>
            
            <div style={{ 
              backgroundColor: '#202e40ff', 
              padding: '1rem', 
              borderRadius: '0.5rem',
              border: '1px dashed #3b82f6'
            }}>
              <p style={{ margin: 0, display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <span style={{ color: '#9eb4d7ff', fontWeight: 'bold' }}>💡 Prueba a recargar la página: 
                Cada vez que recargues, verás brevemente el mensaje de "Cargando..." y luego aparecerá una nueva tarea. 
                Esto demuestra que la obtención de datos ocurre en tu navegador, no en el servidor.</span> 

              </p>
            </div>
          </div>
        </InfoCard>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </DemoPageLayout>
  );
}

