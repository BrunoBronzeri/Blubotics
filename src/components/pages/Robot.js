import styles from './Projects.module.css'

import LF from '../../images/robo/RobotSegLinha.png'

function Robot() {
    return (
        <div className={styles.display}>
            <div className={styles.card}>
                <img src={LF} alt='pic'/>
                <div>
                    <h2>Frank</h2>
                    <h3>Categoria: Seguidor de Linha</h3>
                </div>
            </div>
            <div>
                <h1>Robô Seguidor de Linha</h1>
                <p>Primeiro desenvolvimento da equipe. O seguidor de linha conta
                    com um Arduino Mega e um Shield de circuito impresso desenvolvido
                    pela própria equipe.
                </p>
            </div>
        </div>
    )
}

export default Robot