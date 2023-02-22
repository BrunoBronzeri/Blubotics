import NavLinks from "./NavLinks";

import styles from './NavBar.module.css'

function Navigation() {
    return (
        <nav className={styles.Navigation}>
            <NavLinks />
        </nav>
        
    );
}

export default Navigation