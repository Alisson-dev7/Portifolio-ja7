import { BoxProjetos } from '../../components/BoxProjetos';
import styles from './styles.module.css';

export function Projetos() {
    return (
         <section className={`${styles.projetos_container} Container`}>
            <div className={styles.projetos_title}>
                <h1>Projetos</h1>
            </div>
            <div className={styles.projetos_content}>
                <BoxProjetos img="./src/assets/img-projetos/vangogh.png" title="Vangogh" description="Site dedicado ao pintor Vicent Van Gogh, nesse site mostra as suas famosas obras, frases, poemas com referência a ele e as suas pinturas, e um cátalago de produtos para quem é fã." />
                <BoxProjetos img="./src/assets/img-projetos/recantopeixe.png" title="Vangogh" description="Site dedicado ao pintor Vicent Van Gogh, nesse site mostra as suas famosas obras, frases, poemas com referência a ele e as suas pinturas, e um cátalago de produtos para quem é fã." />
            </div>
        </section>
    )
}