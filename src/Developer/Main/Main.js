import React from 'react'
import { NavLink } from 'react-router-dom'
import './Main.scss'


export default (props) => {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: '2rem',
  }

  const homeLink = {
    padding: '.5rem 3rem',
    backgroundColor: 'ivory',
    color: 'Teal',
    borderRadius: '.5rem',
    marginTop: '1rem'
  }

  return <main className="Main" style={ styles }>
    { `Coming soon.` }
    <NavLink to="/" style={ homeLink }>{ `back home` }</NavLink>
  </main>
}
