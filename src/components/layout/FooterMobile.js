import styles from './FooterMobile.module.css'

import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaMapMarked, FaEnvelopeOpenText } from 'react-icons/fa'

function FooterMobile() {
    return (
        <footer className={styles.footer}>
            <div>
                <ul className={styles.info}>
                    <h1 className={styles.header}>Entre em contato</h1>
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
            <div>
                <h2>Fique por dentro</h2>
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
        </footer>
    );
}

export default FooterMobile
