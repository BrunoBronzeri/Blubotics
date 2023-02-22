import styles from './Container.module.css'

/*Container engloba todas as routes*/
function Container(props) {
    return <div className={`${styles.Container} ${styles[props.customClass]}`}>{props.children}</div>
     /*.js para css dinâmico*/
} /*o uso de customClass é para o caso de a página n ter conteúdo o suficiente e o footer colar no header*/

export default Container 
