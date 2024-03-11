import logo from '../../images/logo_blub.png'
import styles from './Logo.module.css'

import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'

function Logo() {
    return (
        <div className={styles.logo}>
            <Link to='/Blubotics'>
                <img src={logo} alt='Blubotics' />
            </Link>
            <div>
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
            </div>
        </div>
        
    );
}

export default Logo
