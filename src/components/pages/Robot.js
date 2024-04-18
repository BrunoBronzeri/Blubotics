import styles from './Projects.module.css'

import LF from '../../images/robo/RobotSegLinha.png'

function Robot() {
    return (
        <div className={styles.display}>
            <div className={styles.card}>
                <img src={LF} alt='pic'/>
                <div>
                    <h2>Nome: Frank</h2>
                    <h3>Categoria: Seguidor de Linha</h3>
                </div>
            </div>
            <div>
                <h1>Como vai ser o layout desse filha da puta?</h1>
            </div>
        </div>
    )
}

export default Robot