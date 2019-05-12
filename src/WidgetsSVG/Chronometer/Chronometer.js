import React from 'react'
import './Chronometer.scss'

import DigitalTime from './DigitalTime/DigitalTime'


export default (props) => {

  const hoursStyles = {
    position: 'absolute',
    transform: 'rotate(90deg)'
  }

  const secondsStyles = {
    enableBackground: `new 0 0 162 161.9`,
    transform: 'rotate(72deg)'
  }

  const hours = (
    <svg viewBox="0 0 162 161.9" className="Chronometer" style={ hoursStyles }>
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
    <svg viewBox="0 0 162 161.9" className="Chronometer" style={ secondsStyles }>
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
} // END WristWatch js
