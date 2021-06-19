import React from 'react'
import styles from "../../styles/Parallelogram.module.css"
export default function Parallelogram({ children }) {
    return (
            <div className={styles.box}>
                <div className={styles.Parallelogram}>
                    <div className={styles.text}> {children}</div>
                </div>
            </div>
    )
}
