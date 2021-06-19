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
                <option value="dateFrom=2020-12-31&dateTo=2021-01-04"> 17 هفته </option>
                <option value="dateFrom=2021-01-11&dateTo=2021-01-14"> 18 هفته </option>
                <option value="dateFrom=2021-01-15&dateTo=2021-01-18"> 19 هفته </option>
                <option value="dateFrom=2021-01-19&dateTo=2021-01-29"> 20 هفته </option>
                <option value="dateFrom=2021-01-30&dateTo=2021-02-01"> 21 هفته </option>
                <option value="dateFrom=2021-02-02&dateTo=2021-02-05"> 22 هفته </option>
                <option value="dateFrom=2021-02-06&dateTo=2021-02-09"> 23 هفته </option>
                <option value="dateFrom=2021-02-10&dateTo=2021-02-16"> 24 هفته </option>
                <option value="dateFrom=2021-02-17&dateTo=2021-02-22"> 25 هفته </option>
                <option value="dateFrom=2021-02-23&dateTo=2021-02-29"> 26 هفته </option>
                <option value="dateFrom=2021-02-30&dateTo=2021-03-08"> 27 هفته </option>
                <option value="dateFrom=2021-03-09&dateTo=2021-03-17"> 28 هفته </option>
                <option value="dateFrom=2021-03-18&dateTo=2021-03-24"> 29 هفته </option>
                <option value="dateFrom=2021-03-25&dateTo=2021-04-05"> 30 هفته </option>
                <option value="dateFrom=2021-04-06&dateTo=2021-04-14"> 31 هفته </option>
                <option value="dateFrom=2021-04-15&dateTo=2021-04-22"> 32 هفته </option>
                <option value="dateFrom=2021-04-23&dateTo=2021-04-27"> 33 هفته </option>
                <option value="dateFrom=2021-04-27&dateTo=2021-05-03"> 34 هفته </option>
                <option value="dateFrom=2021-05-04&dateTo=2021-05-10"> 35 هفته </option>
                <option value="dateFrom=2021-05-11&dateTo=2021-05-16"> 36 هفته </option>
                <option value="dateFrom=2021-05-17&dateTo=2021-05-19"> 37 هفته </option>
                <option value="dateFrom=2021-05-20&dateTo=2021-05-25"> 38 هفته </option>
            </select>
        </label>
    )
}
