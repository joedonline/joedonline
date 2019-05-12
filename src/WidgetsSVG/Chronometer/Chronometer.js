import React from 'react'
import './Chronometer.scss'

import Time from './Time/Time'


export default (props) => {
  const dialFill = {
    fill: props.dialFill
  }

  const hourFill = {
    fill: props.hourFill
  }

  const secondsBorder = {
    fill: props.secondsBorder
  }

  const styles = {
    enableBackground: `new 0 0 162 161.9`
  }

  return <div className="Chronometer-wrapper">
    <Time />
    <svg version="1.1" id="wrist_watch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 161.9" className="Chronometer" style={ styles }>
      <g style={ dialFill }>
      	<circle cx="81" cy="81" r="81"/>
      </g>
      <g>
      	<path style={ hourFill } d="M81,1c6,0,10.9,4.9,10.9,10.9S87,22.8,81,22.8s-10.9-4.9-10.9-10.9S75,1,81,1 M81,0c-6.6,0-11.9,5.3-11.9,11.9S74.4,23.8,81,23.8s11.9-5.3,11.9-11.9S87.6,0,81,0L81,0z"/>
      </g>
      <circle style={ secondsBorder } cx="81" cy="11.9" r="7.4"/>
    </svg>
  </div>
} // END WristWatch js
