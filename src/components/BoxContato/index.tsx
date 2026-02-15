import styles from './styles.module.css';

type BoxContatoProps = {
    icon: React.ReactNode;
    title: string;
    link: string;
    contact: string;
}

export function BoxContato({icon, title, link, contact}: BoxContatoProps){
    return(
        <div className={styles.box_contato} onClick={() => window.location.href = link}>
            <div className={styles.div_icon}>{icon}</div>
            <p>{title}</p>
            <p>{contact}</p>
        </div>
    )
}