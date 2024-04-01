import styles from './MatesMobile.module.css'

import profile from '../../images/profilepic.png'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

import bruno from '../../images/profile/BrunoB.jpg'
import gabriel from '../../images/profile/GabrielM.png'
import maria from '../../images/profile/MariaC.jpeg'
import brunoY from '../../images/profile/BrunoY.jpeg'

function MatesMobile() {
    return(
        <div className={styles.container}>
            <div className={styles.profile}>
                <div className={styles.card}>
                    <img src={profile} alt='pic'/>
                    <div>
                        <h2>Marcos Matsuo</h2>
                        <h3>Prof. Oreintador</h3>
                        <ul>
                            <li><FaLinkedin /></li>
                            <li><FaInstagram /></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={bruno} alt='pic'/>
                    <div>
                        <h2>Bruno Bronzeri</h2>
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
                <div className={styles.card}>
                    <img src={gabriel} alt='pic'/>
                    <div>
                        <h2>Gabriel Mariano</h2>
                        <h3>Função na equipe</h3>
                        <ul>
                            <li>
                                <a href='https://www.linkedin.com/in/gabrielsnts/'>
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/gmgoncalvess/'>
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={brunoY} alt='pic'/>
                    <div>
                        <h2>Bruno Igarashi</h2>
                        <h3>Função na equipe</h3>
                        <ul>
                            <li>
                                <a href='https://www.linkedin.com/in/bruno-igarashi-5a8084227/'>
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/bruno_igarashi/'>
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={profile} alt='pic'/>
                    <div>
                        <h2>Leonardo Schmitt</h2>
                        <h3>Função na equipe</h3>
                        <ul>
                            <li>
                                <a href='https://www.linkedin.com/in/leonardo-schmitt-controle-automacao/'>
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com/spttleonardo/'>
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.card}>
                    <img src={maria} alt='pic'/>
                    <div>
                        <h2>Maria Clara</h2>
                        <h3>Função na equipe</h3>
                        <ul>
                            <li><FaLinkedin /></li>
                            <li>
                                <a href='https://www.instagram.com/mariaclaracmo/'>
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatesMobile