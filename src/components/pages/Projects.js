import Robots from './Robot';

import styles from './Projects.module.css'

function Projects() {
    return (
        <div className={styles.doc}>
            <h1>Projetos da Equipe</h1>
            <p>
                Os projetos da equipe são desenvolvidos a partir de regulamentos de competições, dos quais os mesmos, afim de comptetir nesses eventos, 
                buscam extrair o máximo de seu desenvolimento, almejando alcançar os melhores resultados possíveis.
            </p>
            <div>
                <Robots />
            </div>
        </div>
    );
}

export default Projects