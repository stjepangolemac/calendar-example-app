import React from 'react'

import style from './style.module.css'
import { useCalendar } from '../../utils/hooks'
import Day from '../../components/Day'

const Calendar = () => {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const [startPad, daysDates] = useCalendar()

  return (
    <div>
      <h1>Calendar</h1>
      <div className={style.container}>
        {[...Array(7)].map((_, i) => (
          <div key={`name${i}`}>{dayNames[i]}</div>
        ))}
        {[...Array(startPad)].map((_, i) => (
          <div key={`pad${i}`} />
        ))}
        {daysDates.map((d, i) => (
          <Day key={`day${i}`} date={d} />
        ))}
      </div>
    </div>
  )
}

export default Calendar
