import React from 'react'
import PropTypes from 'prop-types'
import { getDate } from 'date-fns'

import style from './style.module.css'

const Day = ({ date }) => (
  <div className={style.container}>
    <span className={style.date}>{getDate(date)}</span>
    <div className={style.reminders}>
      <span>Buy groceries</span>
      <span>Running</span>
    </div>
  </div>
)

Day.propTypes = {
  date: PropTypes.instanceOf(Date),
}

export default Day
