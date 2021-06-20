import React from 'react'
import styles from "../../styles/game.module.css"
import { teams } from "../lib/teams"
import moment from 'jalali-moment'
import { addTimes } from '../lib/Time'
export default function Game({ data }) {
    const dates = data.utcDate
    const{referees}=data;
    moment.locale('fa');
    const time=dates.slice(11,16)
    const fullDate = moment.from(dates, 'en', 'YYYY-MM-DD')
    const month=fullDate.format("MMMM")
    const year=fullDate.format("YYYY")
    const day=fullDate.format("DD")
    const homeId = data.homeTeam.id;
    const awayId = data.awayTeam.id;

   
   const matchTime=addTimes(time, '04:30')
    return (
        <>
            <div className={styles.box}>
                <div className={styles.date}>
                    {` ${day} / ${month} / ${year} , ساعت برگزاری : ${matchTime}`}
                </div>
                <div className={styles.info}>
                    <div className={styles.away}>
                        <p className={styles.name}> {teams[homeId].faName} </p>
                        <img src={teams[homeId].crestUrl} className={styles.img} alt={teams[homeId].faName}/>
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
                        <img src={teams[awayId].crestUrl} className={styles.img} alt={teams[awayId].faName}/>
                        <p className={styles.name}> {teams[awayId].faName} </p>
                    </div>
                </div>
                <div className={styles.referees}>
                اسامی داور ها :
                {referees.map((ref,i)=>{
                    return <span key={i} className={styles.ref}>  {ref.name} {' , '}</span>
                })}
                </div>
            </div>
            <hr className={styles.hr} />
        </>
    )
}
