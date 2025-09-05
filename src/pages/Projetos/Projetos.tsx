import { BoxProjetos } from '../../components/BoxProjetos';
import vangogh from '../../assets/vangogh.png';
import recanto_peixe from '../../assets/RecantoPeixe.png';
import styles from './styles.module.css';
import catolicos from './../../assets/catolicos.png'

export function Projetos() {
    return (
         <section id="projetos" className={`${styles.projetos_container} Container`}>
            <div className={styles.projetos_title}>
                <h1>Projetos</h1>
            </div>
            <div className={styles.projetos_content}>
                <BoxProjetos img={vangogh} title="Vangogh" description="Site dedicado ao pintor Vicent Van Gogh, nesse site mostra as suas famosas obras, frases, poemas com referência a ele e as suas pinturas, e um cátalago de produtos para quem é fã." link="https://vangogh7.netlify.app" />
                <BoxProjetos img={recanto_peixe} title="Recanto do Peixe" description="Site de restaurante especializado em peixes, com cardápio, informações de contato e localização." link="https://recanto-do-peixe.netlify.app"/>
                <BoxProjetos img={catolicos} title='Site Católico' description='Um espaço de evangelização e partilha da fé católica, com conteúdos de oração, liturgia e espiritualidade para fortalecer sua caminhada com Cristo.' link='https://catolicos.vercel.app'/>
           </div>
        </section>
    )
}