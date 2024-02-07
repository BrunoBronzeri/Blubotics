import styles from './Mates.module.css'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

import profile from '../../images/profilepic.png'

function Mates() {
    return (
        <div className={styles.container}>
            <div className={styles.profile}>
                <div className={styles.card}>
                    <img src={profile} alt='pic'/>
                    <div>
                        <h2>Marcos V. Matsuo</h2>
                        <h3>Prof. Oreintador</h3>
                        <ul>
                            <li><FaLinkedin /></li>
                            <li><FaInstagram /></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.card}>
                <img src={profile} alt='pic'/>
                    <div>
                        <h2>Bruno B. Bronzeri</h2>
                        <h3>Representante</h3>
                        <ul>
                            <li>
                                <a href='https://www.linkedin.com/in/bruno-bueno-bronzeri-261b51219/'>
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/bruno.bronzeri/'>
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.profile}>
                <div className={styles.card_below}>
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
                <div className={styles.card_below}>
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
                <div className={styles.card_below}>
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
                <div className={styles.card_below}>
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
                <div className={styles.card_below}>
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
                <div className={styles.card_below}>
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

export default Mates