import { BoxContato } from '../../components/BoxContato';
import { FaWhatsapp, FaInstagram, FaLinkedin,FaGithub} from "react-icons/fa";
import styles from './styles.module.css';
import { Forms } from '../../components/Forms/Forms';
import divisor_branco from '../../assets/divisor-branco.svg';

export function Contato(){
    return(
        <section id="contato" className={`${styles.contato_container} container`}>
            <div className={styles.contato_content}>
                <h1>Contato</h1>
                <p>Entre em contato comigo para tirar suas ideias do papel.</p>
            </div>
            <div className={styles.contato_box}>
                <BoxContato icon={<FaWhatsapp size={70} />} title="Whatsapp" link="https://wa.me/5582993637156" />
                <BoxContato icon={<FaInstagram size={70} />} title="Instagram" link="https://www.instagram.com/alisson_dev7/?utm_source=ig_web_button_share_sheet"/>
                <BoxContato icon={<FaLinkedin size={70} />} title="Linkedin" link="https://www.linkedin.com/in/jose-alisson-9287a1318?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIi3IXOM6R1i9vMVySnDQFw%3D%3D"/>
                <BoxContato icon={<FaGithub size={70} />} title="Github" link="https://github.com/Alisson-dev7"/>
            </div>
            <div className={styles.contato_forms}>
                <Forms />
            </div>
            <img src={divisor_branco} alt="divisor" className={styles.divisor} />
        </section>
    )
}