import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion'
//por algum fodendo motivo o motion faz o site desaparecer :(

import styles from './NavBar.module.css'

function NavLinks(props) {

    return (
        <ul className={styles.list}>
            <li className={styles.item}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to=''>Home</Link>
            </li>
            <li className={styles.item}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to='/team'>Equipe</Link>
            </li>
            <li className={styles.item}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to='/projects'>Projetos</Link>
            </li>
            <li className={styles.item}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to='/donation'>Doações</Link>
            </li>
            <li className={styles.item}
                onClick={() => props.isMobile && props.closeMobileMenu()}>
                <Link to='/competition'>Competições</Link>
            </li>
        </ul>
    );
}

export default NavLinks
