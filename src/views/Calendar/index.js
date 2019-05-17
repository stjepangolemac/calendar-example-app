import React, { useState } from 'react'
import { format, addMonths } from 'date-fns'

import style from './style.module.css'
import { useCalendar } from '../../utils/hooks'
import Day from '../../components/Day'

const Calendar = () => {
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const [date, setDate] = useState(Date.now())
  const [startPad, daysDates] = useCalendar(date)

  return (
    <>
      <h1>Calendar</h1>
      <div className={style.switcher}>
        <h3>{format(date, 'YYYY, MMMM')}</h3>
        <span>
          <button onClick={() => setDate(addMonths(date, -1))}>Prev</button>
          <button onClick={() => setDate(addMonths(date, 1))}>Next</button>
        </span>
      </div>
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
    </>
  )
}

export default Calendar
