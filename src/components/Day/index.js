import React from 'react'
import PropTypes from 'prop-types'
import { getDate } from 'date-fns'

import style from './style.module.css'
import { GetRemindersForDate } from '../../data/reminders'

const Day = ({ date }) => (
  <div className={style.container}>
    <span className={style.date}>{getDate(date)}</span>
    <div className={style.reminders}>
      <GetRemindersForDate>
        {get =>
          get(date).map(r => (
            <span key={`${r.text}${r.date}`} style={{ background: r.color }}>
              {r.text}
            </span>
          ))
        }
      </GetRemindersForDate>
    </div>
  </div>
)

Day.propTypes = {
  date: PropTypes.instanceOf(Date),
}

export default Day
