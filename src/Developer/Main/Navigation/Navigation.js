import React from 'react'
import './Navigation.scss'

import { NavLink } from 'react-router-dom'


export default (props) => {
  return <>
    <nav className="Navigation">
      <NavLink id="larrow" to={`/developer/${props.navto_left}`} className={`Navigation__left-arrow`}></NavLink>
      <section className="Navigation__main">
        <NavLink id="mainlink_expertise" to="/developer/expertise" className={`Navigation__main-link ${props.pagename === "expertise" ? "current" : ""}`}>{ `Expertise` }</NavLink>
        <NavLink id="mainlink_skills" to="/developer/skills" className={`Navigation__main-link ${props.pagename === "skills" ? "current" : ""}`}>{ `Skills` }</NavLink>
        <NavLink id="mainlink_projects" to="/developer/projects" className={`Navigation__main-link ${props.pagename === "projects" ? "current" : ""}`}>{ `Projects` }</NavLink>
      </section>
      <NavLink id="rarrow" to={`/developer/${props.navto_right}`} className={`Navigation__right-arrow`}></NavLink>
    </nav>
  </>
}
