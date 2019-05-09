import React from 'react'
import { NavLink } from 'react-router-dom'
import './Dev.scss'


export default (props) => {
  return <section className="Dev">
           <NavLink to="/developer" rel="nofollow"><h2>{ `<Developer>` }</h2></NavLink>
         </section>
}
