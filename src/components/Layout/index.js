import React from 'react'
import style from './style.module.css'

const Layout = ({ children }) => (
  <div className={style.container}>
    <header />
    <main>{children}</main>
    <footer />
  </div>
)

export default Layout
