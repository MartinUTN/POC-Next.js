// app/components/InfoCard.tsx
import React from 'react';
import styles from '../page.module.css';

// Creacion del InfoCard para poder reutilizarlo
export const InfoCard = ({ title, children, icon }: { title: string; children: React.ReactNode; icon?: string }) => (
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

