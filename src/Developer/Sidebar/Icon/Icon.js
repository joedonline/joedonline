import React from 'react'
import { NavLink } from 'react-router-dom'


export default (props) => {

  const styles = {
    background: `url(${props.bgimg}) center/contain no-repeat`
  }

  return <>
    <li className="Sidebar__icon-links-item">
      {
        props.isnavlink
        ? <NavLink to={ props.linkto } className={ props.classname } style={ styles } rel="nofollow"></NavLink>
        : <a href={ props.linkto } className={ props.classname } style={ styles } rel="nofollow noopener noreferrer" target={ props.___target }>&nbsp;</a>
      }
    </li>
  </>
}
