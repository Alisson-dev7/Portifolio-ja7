import { imageLinks } from '../../assets/imageLinks';
import styles from './styles.module.css';

export function Home() {
    return (
        <section id="home" className={styles.home} style={{backgroundImage: `url(${imageLinks.home_background})`}}>
            <div className={`${styles.home__content} Container`}>
                <div className={styles.home_content_container}>
                    <div className={styles.home_content_text}>
                        <h1>Alisson, 18 anos</h1>
                        <p>Desenvolvedor Full Stack</p>
                        <p>Sou formado em Técnico em Informática para Internet pelo Instituto Federal de Alagoas (IFAL) e atualmente estou cursando Ciência da Computação pela UNIGRANDE.</p>
                    </div>
                    <div className={styles.home_content_image}>
                        <img src={imageLinks.foto_perfil} alt="Logo" />
                    </div>
                </div>
                <img src={imageLinks.divisor_preto} alt="divisor" className={styles.home_divisor} />
            </div>   
        </section>
    )
}