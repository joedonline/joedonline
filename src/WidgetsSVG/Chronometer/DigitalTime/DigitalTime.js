import React, { useEffect } from 'react'
import './DigitalTime.scss'
import { setTime } from './timePassage'


export default (props) => {
  useEffect( () => {
    const dayofweek = document.getElementById('dayofweek')
    const now = document.getElementById('now')
    const meridian = document.getElementById('meridian')

    setInterval(() => {
      dayofweek.innerHTML = `${setTime().dayOfWeek}`
      now.innerHTML = `${setTime().hour}:${setTime().minute}:${setTime().second}`
      meridian.innerHTML = `${setTime().meridian}`
    }, 1000)
  } )

  const passage = <>
    <i className="DigitalTime" style={{ color: 'white' }}>
      <div id="dayofweek"></div>
      <div id="now" className="DigitalTime-now"></div>
      <div id="meridian"></div>
    </i>
  </>

  return passage
}
