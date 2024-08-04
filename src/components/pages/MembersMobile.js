import styles from './MembersMobile.module.css'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

import profile from '../../images/profilepic.png'
import bruno from '../../images/profile/BrunoB.jpg'

function MatesMobile({ members }) {
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

                {members.map((card, idx) => (
                    <div className={styles.card} key={`${idx}-${card.title}`}>
                        <img src={card.src} alt={card.name} />
                        <div>
                            <h2>{card.name}</h2>
                            <h3>{card.fnc}</h3>
                            <ul>
                                <li>
                                    <a href={card.linkedin}>
                                        <FaLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a href={card.insta}>
                                        <FaInstagram />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MatesMobile