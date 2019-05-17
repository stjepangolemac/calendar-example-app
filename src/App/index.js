import React from 'react'
import { Router } from '@reach/router'

import RemindersProvider from '../data/reminders'
import Layout from '../components/Layout'
import Calendar from '../views/Calendar'
import AddReminder from '../views/AddReminder'

const App = () => (
  <RemindersProvider>
    <Layout>
      <Router>
        <Calendar path="/" />
        <AddReminder path="/new" />
      </Router>
    </Layout>
  </RemindersProvider>
)

export default App
