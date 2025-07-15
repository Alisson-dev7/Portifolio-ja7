import { useState } from 'react';
import styles from './styles.module.css';
import { AlignRight, X } from 'lucide-react';

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='Container'>
            <div className={styles.navbar__container}>
                <a className={styles.navbar__logo}><img src="/src/assets/Group 1 (12).png" alt="Logo" /></a>
                <ul className={styles.navbar__list}> 
                    <li><a href="#home">Home</a></li>
                    <li><a href="#especialidades">Especialidades</a></li>
                    <li><a href="#experiencia">Experiência</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                </ul>
                <button className={styles.navbar_contato} onClick={() => window.location.href = '#contato'}>Contato</button>
                <button className={styles.navbar__icon} onClick={() => setIsOpen(!isOpen)}><AlignRight ></AlignRight></button>
            </div>
            <div className={`${styles.navbar_list_mobile_container} ${isOpen ? styles.open : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <button className={styles.navbar_close} onClick={() => setIsOpen(!isOpen)}><X size={34}></X></button>
                <ul className={styles.navbar_list_mobile}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#especialidades">Especialidades</a></li>
                        <li><a href="#experiencia">Experiência</a></li>
                        <li><a href="#projetos">Projetos</a></li>
                        <li><a href="#contato">Contato</a></li>
                </ul>
            </div>
        </nav>
    )
}