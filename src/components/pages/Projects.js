import styles from './Projects.module.css'

import dev from '../../images/webDev.png'

function Projects() {
    return (
        <div className={styles.doc}>
            <h1>Projetos da Equipe</h1>
            <p>
                Os projetos da equipe são desenvolvidos a partir de regulamentos de competições, dos quais os mesmos, afim de comptetir nesses eventos, 
                buscam extrair o máximo de seu desenvolimento, almejando alcançar os melhores resultados possíveis.
            </p>
            <h2>Em desenvolvimento...</h2>
            <div className={styles.inDev}>
                <img src={dev} alt='pic'/>
            </div>
            
            {/* <h1>Robô Seguidor de Linha - Ziegler</h1>
            <div>
                <h2>No lugar de h2 importar outra file com 
                    as infos e imagem talvez
                    </h2>
            </div> */}
        </div>
    );
}

export default Projects