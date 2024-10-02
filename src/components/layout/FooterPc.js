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
                        <a href='https://www.linkedin.com/in/blubotics-ufsc-351667250/'>
                            <FaLinkedin/>
                        </a>
                    </li>
                </ul>
            <h2>Entre em contato</h2>
            <ul className={styles.info}>
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
                <p className={styles.copy_right}>
                    <img className={styles.imagem} src={icon} alt='icon.png'/>
                    <span>Blubotics &copy;</span>
                </p>                
            </div>
            <div>
                <ul className={styles.info}>
                    <h1>Localização</h1>
                    <li>
                        <p>
                            <FaMapMarked />
                            <a href='https://maps.app.goo.gl/RinAGu8mt26UWpKA6'>
                                Rua Eng. Udo Deeke, 485 - 
                                Blumenau-SC
                            </a>
                        </p>
                    </li>
                    <li>
                        <iframe title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.9989932214776!2d-49.09764898933214!3d-26.87177307657423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1e58ef95d901%3A0x901dc80709c3d468!2sR.%20Eng.%20Udo%20Deeke%2C%20485%20-%20Salto%20Norte%2C%20Blumenau%20-%20SC%2C%2089065-100!5e0!3m2!1spt-BR!2sbr!4v1727877034869!5m2!1spt-BR!2sbr"
                            width="200" height="100"  allowfullscreen=""
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </li>
                </ul>
            </div>            
        </footer>
    );
}

export default FooterPc