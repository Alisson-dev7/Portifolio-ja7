import styles from './styles.module.css';

interface BoxProjetosProps {
    img: string;
    title: string;
    description: string;
    link: string;
    icon: React.ReactNode;
}

export function BoxProjetos({img, link, title, icon, description}: BoxProjetosProps) {
    return (
        <div className={styles.box_projetos}>
            <img src={img}/>
            <div className={styles.div_title}>
                <p>{title}</p>
                <div>{icon}</div>
            </div>
            <div className={styles.div_description}>
                <p>{description}</p>
                <button onClick={() => window.location.href = link}>Acessar Site</button>
            </div>
        </div>
    )
}