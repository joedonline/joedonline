import React, { useEffect } from 'react'
import './Chronometer.scss'

import DigitalTime from './DigitalTime/DigitalTime'
import { setTime } from './DigitalTime/timePassage'


export default (props) => {
  console.log(setTime().hour * 5)
  useEffect( () => {
    const hours = document.getElementById('hours')
    const seconds = document.getElementById('seconds')
    setInterval(() => {
      hours.setAttribute(`style`, `position: absolute; transform: rotate(${parseInt(setTime().hour) === 0 ? '0deg' : -360/(setTime().hour)}deg)`)
      seconds.setAttribute(`style`, `enable-background: new 0 0 162 161.9; transform: rotate(${parseInt(setTime().second) === 0 ? '0deg' : setTime().second * parseInt(6)}deg)`)
    }, 1000)
  } )

  const hours = (
    <svg id="hours" viewBox="0 0 162 161.9" className="Chronometer">
      <g style={{ fill: props.dialFill }}>
       <circle cx="81" cy="81" r="81"/>
      </g>
      <g>
       <path style={{ fill: 'transparent' }} d="M81,1c6,0,10.9,4.9,10.9,10.9S87,22.8,81,22.8s-10.9-4.9-10.9-10.9S75,1,81,1 M81,0c-6.6,0-11.9,5.3-11.9,11.9S74.4,23.8,81,23.8s11.9-5.3,11.9-11.9S87.6,0,81,0L81,0z"/>
      </g>
      <circle style={{ fill: props.secondsBorder }} cx="81" cy="11.9" r="7.4"/>
    </svg>
  )

  const seconds = (
    <svg id="seconds" viewBox="0 0 162 161.9" className="Chronometer">
      <g style={{ fill: 'transparent' }}>
       <circle cx="81" cy="81" r="81"/>
      </g>
      <g>
       <path style={{ fill: props.hourFill }} d="M81,1c6,0,10.9,4.9,10.9,10.9S87,22.8,81,22.8s-10.9-4.9-10.9-10.9S75,1,81,1 M81,0c-6.6,0-11.9,5.3-11.9,11.9S74.4,23.8,81,23.8s11.9-5.3,11.9-11.9S87.6,0,81,0L81,0z"/>
      </g>
      <circle style={{ fill: 'transparent' }} cx="81" cy="11.9" r="7.4"/>
    </svg>
  )

  return <div className="Chronometer-wrapper">
    <DigitalTime />
    { hours }
    { seconds }
  </div>
} // END Chronometer js
