import React, { useEffect, useState } from 'react'
import styles from "../../styles/game.module.css"
import { fetcher } from '../lib/fetcher';
import { teams } from "../lib/teams"
export default function Game({ data }) {
    const homeId = data.homeTeam.id;
    const awayId = data.awayTeam.id;
    return (
        <>
            <div className={styles.box}>
                <div className={styles.date}>
                    پنج شنبه 22 خرداد
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
