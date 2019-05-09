import React from 'react'
import { NavLink } from 'react-router-dom'
import './Des.scss'


export default (props) => {
  return <section className="Des">
           <NavLink to="/designer" rel="nofollow"><h2>{ `Designer` }</h2></NavLink>
         </section>
}
