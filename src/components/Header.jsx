import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import styles from '../styles/Header.module.css'
import LogoSvg from '../assets/logo-svg-black-green.svg'

import { FiMenu, FiX } from 'react-icons/fi'

export function Header() {
    const [ sideMenuVisible, setMenuVisible ] = useState(false)
    const toogleSideMenu = () => {
        setMenuVisible((prev) => !prev)
    }

    return (
        <header className={styles.header}>
            <div  className={styles.desktopHeaderContainer}>
                <div className={styles.desktopLogoContainer}>
                    <img src={LogoSvg}  className={styles.desktopLogo} />
                </div>
                <nav className={styles.desktopMenuContainer}>
                    <ul>
                        <li>
                            <NavLink className={({ isActive, isPending }) => isActive ? styles.navLinkActiveRoute : isPending ? styles.navLinkPendingRoute : ""} to="/" >
                                Página inicial
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive, isPending }) => isActive ? styles.navLinkActiveRoute : isPending ? styles.navLinkPendingRoute : ""} to="/sobre" >
                                Sobre
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive, isPending }) => isActive ? styles.navLinkActiveRoute : isPending ? styles.navLinkPendingRoute : ""} to="/contato" >
                                Contato
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive, isPending }) => isActive ? styles.navLinkActiveRoute : isPending ? styles.navLinkPendingRoute : ""} to="https://www.vagas.com.br" >
                                Trabalhe conosco
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.mobileHeaderContainer}>
                <button onClick={toogleSideMenu} >
                    <FiMenu size="1.75rem"  color="#747474" />
                </button>
                <img src={LogoSvg} className={styles.mobileLogo} />
            </div>
            {sideMenuVisible &&
                <div className={styles.mobileMenuWrapper}>
                    <button onClick={toogleSideMenu} >
                        <FiX size="1.75rem" color="#747474" />
                    </button>
                    <nav>
                        <ul>
                            <li>
                                <NavLink className={({ isActive, isPending }) => isActive ? styles.navLinkActiveRoute : isPending ? styles.navLinkPendingRoute : ""} to="/" >
                                    Página inicial
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive, isPending }) => isActive ? styles.navLinkActiveRoute : isPending ? styles.navLinkPendingRoute : ""} to="/sobre" >
                                    Sobre
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive, isPending }) => isActive ? styles.navLinkActiveRoute : isPending ? styles.navLinkPendingRoute : ""} to="/contato" >
                                    Contato
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive, isPending }) => isActive ? styles.navLinkActiveRoute : isPending ? styles.navLinkPendingRoute : ""} to="https://www.vagas.com.br" >
                                    Trabalhe conosco
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>}
        </header>
    )
}