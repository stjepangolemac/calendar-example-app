import React from 'react'
import { Link } from '@reach/router'

import style from './style.module.css'

const Layout = ({ children }) => (
  <div className={style.container}>
    <header>
      <Link to="/">Home</Link>
      <Link to="/new">Add reminder</Link>
    </header>
    <main>{children}</main>
    <footer />
  </div>
)

export default Layout
