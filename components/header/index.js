import Link from 'next/link';
import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';

import styles from './styles.module.css';

function Header() {
    return (
        <header className={`${styles.header} container fluid`}>
            <div className={styles.headerWrapper}>
                <Link href={"/"} className={styles.logo}>
                    <FaPlayCircle /> Netflims
                </Link>
                <nav className={styles.navigationMenu}>
                    <Link href={"/movies"}>Movies</Link>
                    <Link href={"/series"}>Series</Link>
                    <Link href={"/kids"}>Kids</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header