import React from 'react'
import { NavLink } from 'react-router-dom'
import './Section.scss'


export default (props) => {

  const bgstyles = {
    backgroundImage: `${props.colorOverlay}, url(${props.bgImgUrl})`,
    backgroundSize: 'cover'
  }

  return <>
   <section className={ `Section ${ props.classname }` }  style={ bgstyles }>
     <NavLink to={ `/${ props.linkTo }` } rel="nofollow"><h2>{ props.sectionTitle }</h2></NavLink>
   </section>
  </>
}
