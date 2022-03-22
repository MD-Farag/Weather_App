import React from 'react'
import './CityInfo.css'

export default function CityInfo({ data }) {

    let cityName, fullDate

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    cityName = data.region
    fullDate = `${monthNames[new Date().getMonth()]} ${new Date().getDate()}, ${new Date().getFullYear()}`


    const getLocalTime = () => {
        let d, amOrPm, hour, minutes
        d = new Date();
        amOrPm = (d.getHours() < 12) ? "AM" : "PM";
        hour = (d.getHours() < 12) ? d.getHours() : d.getHours() - 12;
        minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes();
        // return hour + ':' + minutes + ' ' + amOrPm;
        return [hour + ':' + minutes, amOrPm];
    }

    return (

        <div className="cityInfo">
            <p className="cityName">{cityName}<p className="fullDate">{fullDate}</p></p>
            <p className="dayTime">{getLocalTime()[0]} <span className='amSize'>{getLocalTime()[1]}</span></p>
        </div>
    )
}
