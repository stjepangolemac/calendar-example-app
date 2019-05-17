import React from 'react'

import { useReminders } from '../utils/hooks'

const { Provider, Consumer } = React.createContext()

const RemindersProvider = ({ children }) => {
  const [reminders, methods] = useReminders()

  return <Provider value={{ data: reminders, ...methods }}>{children}</Provider>
}

export default RemindersProvider

export const GetAllReminders = ({ children }) => (
  <Consumer>{value => children(value.data)}</Consumer>
)

export const CreateReminder = ({ children }) => (
  <Consumer>{value => children(value.create)}</Consumer>
)

export const GetOneReminder = ({ children }) => (
  <Consumer>{value => children(value.get)}</Consumer>
)

export const GetRemindersForDate = ({ children }) => (
  <Consumer>{value => children(value.getForDate)}</Consumer>
)

export const UpdateReminder = ({ children }) => (
  <Consumer>{value => children(value.update)}</Consumer>
)

export const DeleteReminder = ({ children }) => (
  <Consumer>{value => children(value.delete)}</Consumer>
)
