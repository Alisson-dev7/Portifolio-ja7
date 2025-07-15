import styles from './styles.module.css';
import type { LucideIcon } from 'lucide-react';

interface BoxEsperienciaProps {
    title: string;
    date: string;
    description: string;
    icon: LucideIcon;
    className?: string;
}

export function BoxEsperiencia({ title, date, description, icon: Icon, className }: BoxEsperienciaProps) {
    return (
        <div className={`${styles.boxEsperiencia} ${className}`}>
            <div className={styles.icon_title}>
            <Icon className={styles.icon} />
            <h3>{title}</h3>
            </div>
            <p className={styles.date}>{date}</p>
            <p>{description}</p>
        </div>
    )
}