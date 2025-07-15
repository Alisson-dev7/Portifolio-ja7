import styles from './styles.module.css';

export function Forms(){
    return(
        <div>
            <form className={styles.form_container}> 
                <h2>Formulário de Contato</h2>
                <label htmlFor="name">Nome</label>
                <input type="text"/>
                <label htmlFor="email">Email</label>
                <input type="email"/>
                <textarea name="message" placeholder='Digite sua mensagem aqui'></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}