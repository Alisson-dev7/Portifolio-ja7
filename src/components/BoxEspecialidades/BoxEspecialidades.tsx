import styles from './styles.module.css';

type BoxEspecialidadesProps = {
    title: string;
    icon: React.ReactNode
}

export function BoxEspecialidades({title, icon}: BoxEspecialidadesProps) {
    return (
        <>
        <div className={styles.boxEspecialidades}>
            <p className={styles.title}>{title}</p>
            <p className={styles.icon}>{icon}</p>
        </div>
        </>
    )
}