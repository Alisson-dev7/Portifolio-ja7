import { BoxEspecialidades } from '../../components/BoxEspecialidades/BoxEspecialidades';
import styles from './styles.module.css';
import { FaCss3Alt, FaJsSquare, FaHtml5, FaJava, FaPython, FaReact, FaFigma, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";

export function Especialidades() {
    return (
            <section id='habilidades' className="Container">
                <div className={styles.especialidades_content}>
                    <h1>Especialidades</h1>
                    <div className={styles.especialidades_content_cards}>
                        <div className={styles.especialidades_content_cards_card}>
                            <BoxEspecialidades title="HTML" icon={<FaHtml5/>}/>
                            <BoxEspecialidades title="CSS" icon={<FaCss3Alt/>}/>
                            <BoxEspecialidades title="JavaScript" icon={<FaJsSquare/>}/> 
                            <BoxEspecialidades title="Java" icon={<FaJava/>}/>
                            <BoxEspecialidades title="Python" icon={<FaPython/>}/>
                            <BoxEspecialidades title="React" icon={<FaReact/>}/>
                            <BoxEspecialidades title="Figma" icon={<FaFigma/>}/>
                            <BoxEspecialidades title="NodeJS" icon={<FaNodeJs/>}/>
                            <BoxEspecialidades title="TypeScrip" icon={<BiLogoTypescript/>}/>
                            <BoxEspecialidades title='MongoDB' icon={<BiLogoMongodb/>}/>
                            <BoxEspecialidades title='Git' icon={<FaGitAlt/>}/>
                        </div>
                    </div>
                </div>
            </section>
        
    )
}