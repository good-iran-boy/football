import React from 'react'
import styles from "../../styles/Layout.module.css";
import Parallelogram from "../Parallelogram";
import Select from "../Select";
export default function Layout({ children }) {
    return (
        <div className={styles.box}>
            <div className={styles.col}>
                <div className={styles.title}>
                    <Select />
                    <Parallelogram>بازی های لیگ برتر انگلیس</Parallelogram>
                </div>

                {children}
            </div>
        </div>
    )
}
