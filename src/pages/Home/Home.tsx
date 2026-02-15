import foto_perfil from '../../assets/foto-perfil.png';
import styles from './styles.module.css';

export function Home() {
    return (
        <section className='Container'>
            <div className={`${styles.home__content}`}>
                <div className={styles.home_content_text}>
                    <div>
                        <h1>Olá, eu sou o <br/><span>Alisson</span></h1>
                        <p>Desenvolvedor Full Stack</p>
                        <p>Sou formado em Técnico em Informática para Internet pelo Instituto Federal de Alagoas (IFAL) e atualmente estou cursando Ciência da Computação pela UNIGRANDE.</p>
                    </div>   
                    <div className={styles.div_btn}>
                        <button>Download CV</button>
                        <button>Entrar em contato</button>
                    </div>
                </div>
                <div className={styles.home_content_image}>
                    <img src={foto_perfil} alt="Logo" />
                </div>
            </div>   
        </section>
    )
}