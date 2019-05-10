import { startOfMonth, getDaysInMonth, addDays, getDay } from 'date-fns'

// returns [startPad, days]
export const useCalendar = () => {
  const today = new Date()
  const start = startOfMonth(today)
  const startPad = getDay(start)
  const days = getDaysInMonth(today)

  const daysDates = [...Array(days)].map((_, i) => addDays(start, i))

  return [startPad, daysDates]
}
