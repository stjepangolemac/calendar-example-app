import { useState } from 'react'
import {
  startOfMonth,
  getDaysInMonth,
  addDays,
  getDay,
  isSameDay,
} from 'date-fns'

export const useCalendar = date => {
  const start = startOfMonth(date)
  const startPad = getDay(start)
  const days = getDaysInMonth(date)

  const daysDates = [...Array(days)].map((_, i) => addDays(start, i))

  return [startPad, daysDates]
}

export const useReminders = () => {
  const storageKey = 'reminders'
  const initialReminders = JSON.parse(localStorage.getItem(storageKey)) || []
  const [reminders, actualSetReminders] = useState(initialReminders)

  const setReminders = rs => {
    localStorage.setItem(storageKey, JSON.stringify(rs))
    actualSetReminders(rs)
  }
  const findNextId = () => {
    const max = Math.max(...reminders.map(r => r.id))
    return max < 0 ? 0 : max + 1
  }

  return [
    reminders,
    {
      create: (text, date, color) =>
        setReminders([
          ...reminders,
          { id: findNextId(reminders), text, date, color },
        ]),
      get: id => reminders.find(r => r.id === id),
      update: (id, data) =>
        setReminders(reminders.map(r => (r.id === id ? { ...r, ...data } : r))),
      delete: id =>
        setReminders(
          reminders.map(r => (r.id === id ? null : r)).filter(r => !!r)
        ),
      getForDate: date => reminders.filter(r => isSameDay(date, r.date)),
    },
  ]
}
