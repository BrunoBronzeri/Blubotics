import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';

import styles from './NavBar.module.css'

function NavBar() {
    return (
        <div className={styles.navbar}>
            <Navigation />
            <MobileNavigation /> 
        </div>
    );
}

export default NavBar
