import styles from './MatesMobile.module.css'

import profile from '../../images/profilepic.png'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

function MatesMobile() {
    return(
        <div className={styles.container}>
            <div className={styles.profile}>
                <div className={styles.card}>
                    <img src={profile} alt='pic'/>
                    <div>
                        <h2>Nome Sobrenome</h2>
                        <h3>Função na equipe</h3>
                        <ul>
                            <li><FaLinkedin /></li>
                            <li><FaInstagram /></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={profile} alt='pic'/>
                    <div>
                        <h2>Nome Sobrenome</h2>
                        <h3>Função na equipe</h3>
                        <ul>
                            <li><FaLinkedin /></li>
                            <li><FaInstagram /></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={profile} alt='pic'/>
                    <div>
                        <h2>Nome Sobrenome</h2>
                        <h3>Função na equipe</h3>
                        <ul>
                            <li><FaLinkedin /></li>
                            <li><FaInstagram /></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={profile} alt='pic'/>
                    <div>
                        <h2>Nome Sobrenome</h2>
                        <h3>Função na equipe</h3>
                        <ul>
                            <li><FaLinkedin /></li>
                            <li><FaInstagram /></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={profile} alt='pic'/>
                    <div>
                        <h2>Nome Sobrenome</h2>
                        <h3>Função na equipe</h3>
                        <ul>
                            <li><FaLinkedin /></li>
                            <li><FaInstagram /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatesMobile