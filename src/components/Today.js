import React from 'react'
import { GetImg } from '../GetImg'
import './Today.css'

export function Today({ currentDay }) {

    let dayTempC, dayTempF, dayCurrImg, dayName

    dayTempC = currentDay.temp.c
    dayTempF = currentDay.temp.f
    dayCurrImg = currentDay.comment
    dayName = currentDay.dayhour.substring(0, currentDay.dayhour.indexOf(' '))

    return (
        <div className='todayTemp'>
            <img src={GetImg(dayCurrImg).imgLg} alt="" />
            <div className="data">
                <span className='dayName'>{dayName}</span>
                <span className='fehrn'>{`${dayTempF}°`}</span>
            </div>
        </div>
    )
}
