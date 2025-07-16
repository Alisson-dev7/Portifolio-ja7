import { BoxEsperiencia } from '../../components/BoxEsperiencia';
import { GraduationCap, Earth, ContactRound } from 'lucide-react';
import styles from './styles.module.css';
import vector_1 from '../../assets/vector 1.svg';

export function Experiencia() {
    return (
        <section id="experiencia" className={`${styles.experiencia} Container`}>
            <div className={styles.experiencia_content}>
                    <h2>Experiências</h2>
            </div>
            <div className={styles.experiencia__container}>
                <span className={styles.right_border}>
                    <BoxEsperiencia 
                        className={styles.left_container}
                        icon={GraduationCap}
                        title="Instituto Federal de Alagoas - IFAL" 
                        date="2022 - 2025" 
                        description="Me formei em Técnico em Informática para Internet no ano de 2025, com conhecimentos em HTML, CSS, JavaScript, Java, Python, entre outras tecnologias." 
                    />
                </span>
                <span className={styles.left_border}>
                <BoxEsperiencia
                    className={styles.right_container}
                    icon={Earth}
                    title="Projeto Geovic" 
                    date="2023 - 2024" 
                    description="Foi um projeto de Pesquisa e Desenvolvimento junto com a Fapeal, onde eles disponibilizavam bolsas para os alunos participipante do projeto, como deveriamos entregar um produto final, entregamos um site com as informações sobre o projeto e o que cada aluno fez." 
                />
                </span>
                <span className={styles.right_border}>
                <BoxEsperiencia
                    className={styles.left_container}
                    icon={ContactRound}
                    title="Projeto Desplugando" 
                    date="2024" 
                    description="Foi um projeto de extensão desenvolvido em uma escola particular de Viçosa, onde eu e alguns colegas se tornamos professores voluntários para lecionar aulas de informática para os alunos." 
                />
                </span>
                <span className={styles.left_border}>
                <BoxEsperiencia 
                    className={styles.right_container}
                    icon={ContactRound}
                    title="Projeto Futuro em Código" 
                    date="2024" 
                    description="Foi um projeto de extensão desenvolvido no IFAL, onde eu e alguns colegas se tornamos professores voluntários para administrar aulas sobre realidade aumentada e virtual." 
                />
                </span>
            </div>
            <img src={vector_1} alt="divisor" className={styles.experiencia_divisor} />
        </section>
    )
}