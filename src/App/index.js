import React from 'react'
import { Router } from '@reach/router'

import RemindersProvider from '../data/reminders'
import Layout from '../components/Layout'
import Calendar from '../views/Calendar'

const App = () => (
  <RemindersProvider>
    <Layout>
      <Router>
        <Calendar path="/" />
      </Router>
    </Layout>
  </RemindersProvider>
)

export default App
