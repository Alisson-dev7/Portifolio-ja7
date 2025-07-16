import { MdMarkEmailRead, MdOutlineLocalPhone } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import styles from './styles.module.css';
import logo_preto from '../../assets/logo-preto.svg';

export function Footer(){
    return(
        <footer className="Container">
            <div className={styles.footer_content}>
                <div className={styles.footer_content_logo}>
                    <img src={logo_preto} alt="logo" />
                    <p>Desenvolvedor Full Stack</p>
                </div>
                <div className={styles.footer_content_link_contato}>
                <div className={styles.footer_content_link}>
                        <p>Link Úteis</p>
                        <a href="#home">Home</a>
                        <a href="#especialidades">Especialidades</a>
                        <a href="#experiencia">Experiência</a>
                        <a href="#projetos">Projetos</a>
                        <a href="#contato">Contato</a>
                </div>
                <div className={styles.footer_contato}>
                    <p>Contato</p>
                    <a><MdMarkEmailRead className={styles.footer_icon}/> josealisson977.dev@gmail.com</a>
                    <a><MdOutlineLocalPhone className={styles.footer_icon}/> (82) 999910-4986</a>
                    <a><SiGooglemaps className={styles.footer_icon}/> Paulo Jacinto, AL</a>
                </div>
                </div>
            </div>
            <div className={styles.footer_content_copyright}>
                <p>© 2025 Alisson. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}