import styles from './Footer.module.css'
import icon from '../../images/icon.png'

import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaMapMarked, FaEnvelopeOpenText } from 'react-icons/fa'

function FooterPc() {
    return (
        <footer className={styles.footer}>
            <div>
            <h1>Fique por dentro</h1>
                <ul className={styles.social_list}>
                    <li>
                        <a href='https://www.facebook.com/profile.php?id=100085881307239'>
                            <FaFacebook/>
                        </a>
                    </li>
                    <li>
                        <a href='https://instagram.com/blubotics?igshid=ZDg1NjBiNjg='>
                            <FaInstagram/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.youtube.com/channel/UCyD1su6klj-CQiamXdcwKUw'>
                            <FaYoutube/>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/bruno-bueno-bronzeri-261b51219/'>
                            <FaLinkedin/>
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <p className={styles.copy_right}>
                    <img className={styles.imagem} src={icon} alt='icon.png'/>
                    <span>Blubotics &copy;</span>
                </p>                
            </div>
            <div>
                <ul className={styles.info}>
                    <h1>Entre em contato</h1>
                    <li>
                        <p>
                            <FaMapMarked />
                            <a href='https://goo.gl/maps/65iC7vnZtxhU6Zpk7'>
                                Rua João Pessoa, 2514
                                Blumenau-SC
                            </a>
                        </p>
                    </li>
                    <li>
                        <p>
                            <FaEnvelopeOpenText/>
                            <a href='mailto:blubotics@gmail.com'>
                                blubotics@gmail.com
                            </a>
                        </p>
                    </li>
                </ul>
            </div>            
        </footer>
    );
}

export default FooterPc