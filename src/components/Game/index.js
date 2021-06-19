import React, { useEffect, useState } from 'react'
import styles from "../../styles/game.module.css"
import { teams } from "../lib/teams"
import moment from 'jalali-moment'
export default function Game({ data }) {
    const date = data.utcDate
    moment.locale('fa');
    const fullDate = moment.from(date, 'en', 'YYYY-MM-DD')
    const month=fullDate.format("MMMM")
    const year=fullDate.format("YYYY")
    const day=fullDate.format("DD")
    const homeId = data.homeTeam.id;
    const awayId = data.awayTeam.id;
    return (
        <>
            <div className={styles.box}>
                <div className={styles.date}>
                    {` ${day} / ${month} / ${year} `}
                </div>
                <div className={styles.info}>
                    <div className={styles.away}>
                        <p className={styles.name}> {teams[homeId].faName} </p>
                        <img src={teams[homeId].crestUrl} className={styles.img} />
                    </div>
                    <div className={styles.result}>
                        <div>
                            {data.score.extraTime.homeTeam || data.score.fullTime.homeTeam}
                            {"  -  "}
                            {data.score.extraTime.awayTeam || data.score.fullTime.awayTeam}
                        </div>
                        پایان
                    </div>
                    <div className={styles.home}>
                        <img src={teams[awayId].crestUrl} className={styles.img} />
                        <p className={styles.name}> {teams[awayId].faName} </p>
                    </div>
                </div>
            </div>
            <hr className={styles.hr} />
        </>
    )
}
