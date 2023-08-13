import Mates from "./Mates";
import MatesMobile from "./MatesMobile";

import styles from './Mates.module.css'

function Team() {
    return (
        <div className={styles.doc}>
            <h1>História da Equipe</h1>
            <p>
                Equipe de Robótica da <a href=''>Universidade Federal de Santa Catarina - Campus Blumenau</a>, Blubotics, foi fundada no dia 30 
                de Agosto de 2022, sob orientação do <a href=''> Prof. Dr. Marcos Vinícius Matsuo</a>, como iniciativa de dicentes da graduação 
                de Engenharia de Controle e Automação. Intuito.......
            </p>            
            <h1>Membros</h1>
            <div>
                <Mates />
                <MatesMobile />
            </div>
            <h1>Quer fazer parte da equipe?</h1>
            <p>
                Fique atento às atualizações na página do Instagram da equipe clicando no botão abaixo. Por lá é possível saber
                 não só quando ocorrerão processos seletivos, mas também ficar por dentro das novidades, novos projetos e datas de competições. 
                 Aguardamos você lá!
            </p>
            <div className={styles.btn}>
                <button>
                    <a
                        href='https://instagram.com/blubotics?igshid=ZDg1NjBiNjg='
                    >
                        Saiba mais
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Team
