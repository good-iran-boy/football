import React, { useState } from 'react'
import styles from "../../styles/select.module.css"
export default function Select() {
    const [state, setstate] = useState('')
    const change = (e) => {
        console.log(e.target.value);
    }
    return (
        <label htmlFor="select" className={styles.custom} >
            <select id="select" onChange={change} defaultValue="3">
                <option value="1">هفته1</option>
                <option value="2">هفته2</option>
                <option value="3">هفته3</option>
                <option value="4">هفته4</option>
                <option value="5">هفته5</option>
            </select>
        </label>
    )
}
