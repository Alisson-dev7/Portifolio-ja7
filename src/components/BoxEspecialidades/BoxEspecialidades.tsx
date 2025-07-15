import styles from './styles.module.css';

type BoxEspecialidadesProps = {
    title: string;
    porcentagem: number; 
}

export function BoxEspecialidades({title, porcentagem}: BoxEspecialidadesProps) {
    return (
        <>
        <div className={styles.boxEspecialidades}>
        <div className={styles.boxEspecialidades_title}>
            <h2>{title}</h2>
            <h2>{porcentagem}%</h2>
        </div>
        <div>
            <div className={styles.boxEspecialidades_progressBar}>
                <span style={{width: `${porcentagem}%`}} className={styles.boxEspecialidades_progressBar_span}></span>
            </div>
        </div>
        </div>
        </>
    )
}