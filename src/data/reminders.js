import React from 'react'

import { useReminders } from '../utils/hooks'

const { Provider, Consumer } = React.createContext()

const RemindersProvider = ({ children }) => {
  const [reminders, methods] = useReminders()

  return <Provider value={{ data: reminders, ...methods }}>{children}</Provider>
}

export default RemindersProvider

export const GetAllReminders = ({ render }) => (
  <Consumer>{value => render(value.data)}</Consumer>
)

export const CreateReminder = ({ render }) => (
  <Consumer>{value => render(value.create)}</Consumer>
)

export const GetOneReminder = ({ render }) => (
  <Consumer>{value => render(value.read)}</Consumer>
)

export const UpdateReminder = ({ render }) => (
  <Consumer>{value => render(value.update)}</Consumer>
)

export const DeleteReminder = ({ render }) => (
  <Consumer>{value => render(value.delete)}</Consumer>
)
