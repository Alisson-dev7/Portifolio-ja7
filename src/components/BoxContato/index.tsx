import styles from './styles.module.css';

type BoxContatoProps = {
    icon: React.ReactNode;
    title: string;
    link: string;
}

export function BoxContato({icon, title, link}: BoxContatoProps){
    return(
        <div className={styles.box_contato} onClick={() => window.location.href = link}>
            {icon}
            <p>{title}</p>
        </div>
    )
}