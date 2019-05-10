import React from 'react'
import { NavLink } from 'react-router-dom'
import './SplashPart.scss'
import './sitename.scss'


export default (props) => {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const siteName = (
    <section className={ props.classname } style={styles}>
      <h1>{ `joe domingo` }</h1>
      <div className="solid-bg">&nbsp;</div>
      <div className="border-outside">
        <div className="border-inside"></div>
      </div>
    </section>
  )

  const skillSet = (
    <section className={ props.classname }>
      <NavLink to={ `/${ props.navTo }` } rel="nofollow"><h2>{ props.skillSetTitle }</h2></NavLink>
    </section>
  )

  return props.isSiteName ? siteName : skillSet
}
