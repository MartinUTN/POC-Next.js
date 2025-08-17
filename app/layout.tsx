/*
 * =============================================================================
 * ARCHIVO: app/layout.tsx
 * POR FAVOR, COPIA Y PEGA ESTE CÓDIGO EN EL ARCHIVO `app/layout.tsx`
 * =============================================================================
 */

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Importamos la fuente 'Inter' de Google Fonts.
// Next.js la optimizará automáticamente.
const inter = Inter({ subsets: ['latin'] });

// La metadata se usa para el SEO de la página.
// Aquí definimos el título y la descripción.
export const metadata: Metadata = {
  title: 'Todo sobre Next.js',
  description: 'Una página explicativa sobre el framework Next.js, creada con Next.js.',
};

// Este es el Layout principal. Envuelve todas las páginas de la aplicación.
// El prop 'children' será el contenido de la página actual (en este caso, page.tsx).
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        {children}
      </body>
    </html>
  );
}
