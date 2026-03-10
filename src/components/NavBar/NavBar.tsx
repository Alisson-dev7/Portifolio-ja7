import { useState } from 'react';
import styles from './styles.module.css';
import { AlignRight, X } from 'lucide-react';
import logo from "../../assets/Group 1 (12).png";

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='Container'>
            <div className={styles.navbar_desktop}>
                <div className={styles.navbar__logo}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className={styles.navbar__container}>
                    <ul className={styles.navbar__list}> 
                        <li><a href="#home">Home</a></li>
                        <li><a href="#habilidades">Habilidades</a></li>
                        <li><a href="#experiencia">Experiência</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                    </ul>
                </div>
                <div className={styles.navbar_contato}>
                    <button onClick={() => window.location.href = '#contato'}>Contato</button>
                </div>
            </div>
            
            <div className={styles.navbar_mobile}>
                <div className={styles.navbar_mobile_container}>
                    <img src={logo} alt="Logo" />
                    <button className={styles.navbar__icon} onClick={() => setIsOpen(!isOpen)}><AlignRight ></AlignRight></button>
                </div>
                {isOpen && 
                <div>
                    <div className={`${styles.navbar_list_mobile_container}`}>
                        <button className={styles.navbar_close} onClick={() => setIsOpen(!isOpen)}><X size={34}></X></button>
                        <ul className={styles.navbar_list_mobile}>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#habilidades">Especialidades</a></li>
                                <li><a href="#experiencia">Experiência</a></li>
                                <li><a href="#projetos">Projetos</a></li>
                                <li><a href="#contato">Contato</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.fundo}`} onClick={() => setIsOpen(!isOpen)}></div>
                </div>}
                
            </div>
            
        </nav>
    )
}