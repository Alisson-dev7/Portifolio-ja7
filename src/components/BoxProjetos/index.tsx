import styles from './styles.module.css';

interface BoxProjetosProps {
    img: string;
    title: string;
    description: string;
    link: string;
}

export function BoxProjetos({img, title, description, link}: BoxProjetosProps) {
    return (
        <div className={styles.box_projetos} onClick={() => window.location.href = link}>
            <img src={img}/>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}