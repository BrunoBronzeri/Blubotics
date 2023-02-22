import NavLinks from "./NavLinks";
import styles from './NavBar.module.css'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from "react";

function MobileNavigation() {

    const [open, setOpen] = useState(false)

    const hbgrmenu = 
    <AiOutlineMenu className={styles.Hamburger}
        size='30px' color='whitesmoke'
        onClick={() => setOpen(!open)}
    />

    const hbgrclose = 
    <AiOutlineClose className={styles.Hamburger}
        size='30px' color='whitesmoke'
        onClick={() => setOpen(!open)}
    />

    const closeMobileMenu = () => setOpen(false)

    return (
        <nav className={styles.MobileNavigation}>
            {open ? hbgrclose : hbgrmenu }
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
        </nav>
    );
}

export default MobileNavigation