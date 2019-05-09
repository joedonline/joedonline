import React from 'react'
import { NavLink } from 'react-router-dom'

import './Designer.scss'


export default (props) => {
  return <div className="Designer animated fadeIn">
           { `Coming soon.` }
           <NavLink to="/">{ `back home` }</NavLink>
         </div>
}
