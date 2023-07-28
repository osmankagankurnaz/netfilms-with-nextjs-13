import React from 'react'
import Link from 'next/link'

import styles from './styles.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <text>Made by </text>
                <Link href="https://www.linkedin.com/in/osmankagankurnaz/" target="_blank">
                    OsmanKagan
                </Link>
                <text> with </text>
                <Link href="https://www.youtube.com/@pekcanmehmet" target="_blank">
                    MehmetPekcan
                </Link>
            </div>
        </footer>
    )
}

export default Footer