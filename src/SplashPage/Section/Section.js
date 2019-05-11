import React from 'react'
import { NavLink } from 'react-router-dom'
import './Section.scss'


export default (props) => <>
  <section className={ `Section ${ props.classname }` }>
    <NavLink to={ `/${ props.linkTo }` }><h2>{ props.sectionTitle }</h2></NavLink>
  </section>
</>
