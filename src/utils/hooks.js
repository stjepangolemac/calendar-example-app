import { useState } from 'react'
import { startOfMonth, getDaysInMonth, addDays, getDay } from 'date-fns'

export const useCalendar = () => {
  const today = new Date()
  const start = startOfMonth(today)
  const startPad = getDay(start)
  const days = getDaysInMonth(today)

  const daysDates = [...Array(days)].map((_, i) => addDays(start, i))

  return [startPad, daysDates]
}

export const useReminders = () => {
  const storageKey = 'reminders'
  const initialReminders = localStorage.getItem(storageKey) || []
  const [reminders, actualSetReminders] = useState(initialReminders)

  const setReminders = rs => {
    localStorage.setItem(storageKey, rs)
    actualSetReminders(rs)
  }
  const findNextId = () => Math.max(reminders.map(r => r.id)) + 1

  return [
    reminders,
    {
      create: (text, date, color) =>
        setReminders([
          ...reminders,
          { id: findNextId(reminders), text, date, color },
        ]),
      read: id => reminders.find(r => r.id === id),
      update: (id, data) =>
        setReminders(reminders.map(r => (r.id === id ? { ...r, ...data } : r))),
      delete: id =>
        setReminders(
          reminders.map(r => (r.id === id ? null : r)).filter(r => !!r)
        ),

      // TODO
      getByDate: () => null,
    },
  ]
}
