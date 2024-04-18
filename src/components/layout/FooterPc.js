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
                            <a href='https://goo.gl/maps/65iC7vnZtxhU6Zpk7'>
                                Rua João Pessoa, 2514
                                Blumenau-SC
                            </a>
                        </p>
                    </li>
                    <li>
                        <iframe title='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.4507044761813!2d-49.10106838920194!3d-26.92092269344905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1936e20a59d9%3A0x75a7afa5aef7bb6!2sUFSC%20-%20Universidade%20Federal%20de%20Santa%20Catarina%20-%20Campus%20Blumenau!5e0!3m2!1spt-BR!2sbr!4v1713450081374!5m2!1spt-BR!2sbr"
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