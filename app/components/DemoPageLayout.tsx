// app/components/DemoPageLayout.tsx
import Link from 'next/link';
import React from 'react';
import styles from '../page.module.css';

// Reutilizamos el Header y Footer de la página principal para consistencia
const Header = () => (
    <header className={styles.mainHeader}>
        <div className={styles.headerContent}>
            <h1 className={styles.headerTitle}>Explorando Next.js</h1>
            <p className={styles.headerSubtitle}>Demostración de Estrategias de Renderizado</p>
        </div>
    </header>
);

const Footer = () => (
    <footer className={styles.mainFooter}>
        <p className={styles.footerText}>Página creada con Next.js y CSS.</p>
    </footer>
);

// Este es el layout que envolverá cada página de demostración
export const DemoPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.pageContainer}>
            <Header />
            <main className={styles.mainContent}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {children}
                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <Link href="/" className={styles.backButton}>
                            &larr; Volver al Inicio
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
