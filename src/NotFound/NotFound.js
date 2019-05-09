import React from 'react'
import { NavLink } from 'react-router-dom'
import './NotFound.scss'


export default (props) => {

  return <div className="NotFound">
           <p>{ `Page not found. `}</p>
           <NavLink to="/">{ `return home` }</NavLink>
         </div>
}
