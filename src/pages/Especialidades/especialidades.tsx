import { BoxEspecialidades } from '../../components/BoxEspecialidades/BoxEspecialidades';
import styles from './styles.module.css';

export function Especialidades() {
    return (
            <section id="especialidades" className={`${styles.especialidades_content} Container`}>
                <h1>Especialidades</h1>
                <div className={styles.especialidades_content_cards}>
                   <div className={styles.especialidades_content_cards_card}>
                    <BoxEspecialidades title="HTML" porcentagem={80} />
                    <BoxEspecialidades title="CSS" porcentagem={80} />
                    <BoxEspecialidades title="JavaScript" porcentagem={70} /> 
                    <BoxEspecialidades title="Java" porcentagem={70} />
                    <BoxEspecialidades title="Python" porcentagem={40} />
                    <BoxEspecialidades title="React" porcentagem={30} />
                    <BoxEspecialidades title="Figma" porcentagem={75} />
                   </div>
                </div>
            </section>
        
    )
}