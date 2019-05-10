import React, { useState } from 'react'

const { Provider, Consumer } = React.createContext([])

const RemindersProvider = ({ children }) => {
  const [reminders, setReminders] = useState([])

  const findNextId = () => Math.max(reminders.map(r => r.id)) + 1

  const value = {
    data: reminders,
    create: (text, date, color) =>
      setReminders([
        ...reminders,
        { id: findNextId(reminders), text, date, color },
      ]),
    read: id => reminders.find(r => r.id === id),
    update: (id, data) =>
      reminders.map(r => (r.id === id ? { ...r, ...data } : r)),
    delete: id => reminders.map(r => (r.id === id ? null : r)).filter(r => !!r),
  }

  return <Provider value={value}>{children}</Provider>
}

const GetReminders = ({ render }) => (
  <Consumer>{value => render(value.data)}</Consumer>
)

const CreateReminder = ({ render }) => (
  <Consumer>{value => render(value.data)}</Consumer>
)
