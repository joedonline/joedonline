import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import './Designer.scss'

import { graphics } from '../DataFetch/graphics'


export default (props) => {
  const [designerLogo, getDesignerLogo] = useState('')
  const [homeLogo, getHomeLogo] = useState('')

  useEffect(() => {
    graphics().imageSource.then(imgData => {
      if (imgData[2].acf) getDesignerLogo(imgData[2].acf.main_logo)
      if (imgData[1].acf) getHomeLogo(imgData[1].acf.icon_home)
    })
  }, [])

  const iconHomeStyles = {
    background: `url(${homeLogo ? homeLogo : "#!"}) center/contain no-repeat`,
  }

  const logoStyles = {
    display: 'block',
    background: `url(${designerLogo ? designerLogo : "#!"}) center/contain no-repeat`,
    width: '100%',
    height: '25%'
  }

  return <>
    <div className="Designer animated fadeIn">
      <NavLink to="/" className="homelink" style={iconHomeStyles}></NavLink>
      <div style={logoStyles} className="logoarea"></div>
      <ul className="taglines">
        <li>{ `graphic design` }</li>
        <li>{ `motion graphics` }</li>
        <li>{ `photography` }</li>
        <li>{ `ui/ux` }</li>
      </ul>
      <NavLink to="/" className="portfoliolink">{ `designer portfolio` }</NavLink>
      <div className="Designer-bgoverlay"></div>
    </div>
  </>
}
