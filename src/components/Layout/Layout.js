import React from 'react'
import styles from "../../styles/Layout.module.css";
export default function Layout({ children }) {
    return (
        <div className={styles.box}>
            <div className={styles.col}>
            {children}
            </div>
        </div>
    )
}
