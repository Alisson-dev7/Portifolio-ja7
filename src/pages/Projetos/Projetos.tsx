import { BoxProjetos } from '../../components/BoxProjetos';
import styles from './styles.module.css';
import vangoghImg from '../../assets/img-projetos/vangogh.png';
import recantoPeixeImg from '../../assets/img-projetos/RecantoPeixe.png';

export function Projetos() {
    return (
         <section className={`${styles.projetos_container} Container`}>
            <div className={styles.projetos_title}>
                <h1>Projetos</h1>
            </div>
            <div className={styles.projetos_content}>
                <BoxProjetos img={vangoghImg} title="Vangogh" description="Site dedicado ao pintor Vicent Van Gogh, nesse site mostra as suas famosas obras, frases, poemas com referência a ele e as suas pinturas, e um cátalago de produtos para quem é fã." link="https://vangogh7.netlify.app" />
                <BoxProjetos img={recantoPeixeImg} title="Recanto do Peixe" description="Site de restaurante especializado em peixes, com cardápio, informações de contato e localização." link="https://recanto-do-peixe.netlify.app"/>
            </div>
        </section>
    )
}