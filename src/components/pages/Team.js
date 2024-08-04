import Members from "./Members";
// import Mates from "./Mates";
import MembersMobile from "./MembersMobile";
import data from './DataMembers'

import styles from './Members.module.css'

function Team() {
    return (
        <div className={styles.doc}>
            <h1>A Equipe</h1>
            <p>
                A Equipe de Robótica da <a href='https://blumenau.ufsc.br'>Universidade Federal de Santa Catarina - Campus Blumenau</a>, Blubotics, foi fundada no dia 30 
                de Agosto de 2022. Sob orientação do <a href='add'> Prof. Dr. Marcos Vinícius Matsuo</a>, a equipe surgiu como iniciativa de dicentes da graduação 
                de Engenharia de Controle e Automação. 
            </p>
            <p>
                Os integrantes da equipe ao desenvolverem os projetos, têm a possibilidade de adquirir maior experiência de trabalho em grupo, 
                tal como colocar em prática diversos conhecimentos de engenharia adquiridos ao longo da graduação, possibilitando que os mesmos se formem mais preparados
                para a vida profissional. Além disso, os mecanismos robóticos elaborados e construídos pela equipe são acirradamente colocados à prova em 
                competições de robótica nacionais e internacionais, podendo proporcionar grande reconhecimento da instituição e seus integrantes.
            </p>           
            <h1>Membros</h1>
            <div>
                {/* <Mates /> */}
                <Members members={data}/>
                <MembersMobile members={data}/>
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
