import React from 'react'
import './Navigation.scss'

import { NavLink } from 'react-router-dom'


export default (props) => {
  const larrow = props.navto_left ? null : "no-arrow"
  const rarrow = props.navto_right ? null : "no-arrow"

  return <nav className="Navigation">
    <NavLink to={props.navto_left ? props.navto_left : "#!"} className={`Navigation__left-arrow ${larrow}`}></NavLink>
    <section className="Navigation__main">
      <NavLink to="/developer/expertise" className={`Navigation__main-link ${props.pagename === "expertise" ? "current" : ""}`}>{ `Expertise` }</NavLink>
      <NavLink to="/developer/skills" className={`Navigation__main-link ${props.pagename === "skills" ? "current" : ""}`}>{ `Skills` }</NavLink>
      <NavLink to="/developer/projects" className={`Navigation__main-link ${props.pagename === "projects" ? "current" : ""}`}>{ `Projects` }</NavLink>
    </section>
    <NavLink to={`/developer/${props.navto_right}`} className={`Navigation__right-arrow ${rarrow}`}></NavLink>
  </nav>
}
