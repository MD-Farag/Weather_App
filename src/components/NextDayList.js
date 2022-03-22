
import { GetImg } from '../GetImg'
import './NextDayList.css'

export function NextDayList({ nextDays }) {

    return (
        <ul className='nextDayList'>
            {nextDays.map((day) => (

                <li>
                    <div className='nextdayTemp'>
                        <span className='dayName'>{day.day}</span>
                        <img src={GetImg(day.comment).imgSm} alt="" />
                        <span className='maxFehrn'>{`${day.max_temp.f}°`}</span>
                    </div>
                </li>
            ))}
        </ul>
    )
}