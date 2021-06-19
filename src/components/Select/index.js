import React from 'react'
import styles from "../../styles/select.module.css"
export default function Select({change}) {
    return (
        <label htmlFor="select" className={styles.custom} >
            <select id="select" onChange={change} defaultValue="dateFrom=2020-09-12&dateTo=2020-09-18">
                <option value="dateFrom=2020-09-12&dateTo=2020-09-18"> هفته 1 </option>
                <option value="dateFrom=2020-09-19&dateTo=2020-09-25"> هفته 2</option>
                <option value="dateFrom=2020-09-26&dateTo=2020-10-01"> هفته 3 </option>
                <option value="dateFrom=2020-10-02&dateTo=2020-10-08"> هفته 4 </option>
                <option value="dateFrom=2020-10-15&dateTo=2020-10-21"> هفته 5 </option>
                <option value="dateFrom=2020-10-22&dateTo=2020-10-28"> هفته 6 </option>
                <option value="dateFrom=2020-10-29&dateTo=2020-11-05"> هفته 7 </option>
                <option value="dateFrom=2020-11-06&dateTo=2020-11-12"> هفته 8 </option>
                <option value="dateFrom=2020-11-20&dateTo=2020-11-26"> 9 هفته </option>
                <option value="dateFrom=2020-11-27&dateTo=2020-12-04"> 10 هفته </option>
                <option value="dateFrom=2020-12-05&dateTo=2020-12-10"> 11 هفته </option>
                <option value="dateFrom=2020-12-11&dateTo=2020-12-14"> 12 هفته </option>
                <option value="dateFrom=2020-12-15&dateTo=2020-12-18"> 13 هفته </option>
                <option value="dateFrom=2020-12-19&dateTo=2020-12-22"> 14 هفته </option>
                <option value="dateFrom=2020-12-26&dateTo=2020-12-27"> 15 هفته </option>
                <option value="dateFrom=2020-12-28&dateTo=2020-12-30"> 16 هفته </option>


            </select>
        </label>
    )
}
