import React from 'react'
import { Router } from '@reach/router'

import Layout from '../components/Layout'
import Calendar from '../views/Calendar'

const App = () => (
  <Layout>
    <Router>
      <Calendar path="/" />
    </Router>
  </Layout>
)

export default App
