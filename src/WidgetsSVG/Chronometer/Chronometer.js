import React, { useState, useEffect } from 'react'
import './Chronometer.scss'

import DigitalTime from './DigitalTime/DigitalTime'
import { setTime } from './DigitalTime/timePassage'


export default (props) => {
  const [state, setState] = useState('')
  const hourHands = []
  const limit = 12 - setTime().hour + 1

  for (let i=0; i<limit; i++) {
    const h = i * 30
    hourHands.push(
     <svg id={`hour-${i}`} key={`hour-${i}`} viewBox="0 0 162 161.9" className="Chronometer" style={{position: `absolute`, zIndex: '2850', transform: `rotate(${h}deg)`}}>
       <g style={{ fill: props.dialFill }}>
        <circle cx="81" cy="81" r="81" />
       </g>
       <g>
        <path style={{ fill: 'transparent' }} d="M81,1c6,0,10.9,4.9,10.9,10.9S87,22.8,81,22.8s-10.9-4.9-10.9-10.9S75,1,81,1 M81,0c-6.6,0-11.9,5.3-11.9,11.9S74.4,23.8,81,23.8s11.9-5.3,11.9-11.9S87.6,0,81,0L81,0z"/>
       </g>
       <circle style={{ fill: props.secondsBorder }} cx="81" cy="11.9" r="7.4"/>
     </svg>
    )
  }

  useEffect( () => {
    const seconds = document.getElementById('seconds')
    setInterval(() => {
      seconds.setAttribute(`style`, `position absolute; z-index: 2800; enable-background: new 0 0 162 161.9; transform: rotate(${parseInt(setTime().second) === 0 ? '0deg' : setTime().second * parseInt(-6)}deg)`)
    }, 1000)
  } )

  const seconds = (
    <svg id="seconds" viewBox="0 0 162 161.9" className="Chronometer">
      <g style={{ fill: 'transparent' }}>
       <circle cx="81" cy="81" r="81"/>
      </g>
      <g>
       <path style={{ fill: props.hourFill }} d="M81,1c6,0,10.9,4.9,10.9,10.9S87,22.8,81,22.8s-10.9-4.9-10.9-10.9S75,1,81,1 M81,0c-6.6,0-11.9,5.3-11.9,11.9S74.4,23.8,81,23.8s11.9-5.3,11.9-11.9S87.6,0,81,0L81,0z"/>
      </g>
      <circle style={{ fill: '#3b3c40' }} cx="81" cy="11.9" r="7.4"/>
    </svg>
  )

  const setHourHands = (h) => {
    switch(h) {
      case 1  : return hourHands.slice(0,2)
      case 2  : return hourHands.slice(0,3)
      case 3  : return hourHands.slice(0,4)
      case 4  : return hourHands.slice(0,5)
      case 5  : return hourHands.slice(0,6)
      case 6  : return hourHands.slice(0,7)
      case 7  : return hourHands.slice(0,8)
      case 8  : return hourHands.slice(0,9)
      case 9  : return hourHands.slice(0,10)
      case 10 : return hourHands.slice(0,11)
      case 11 : return hourHands.slice(0,12)
      default : return hourHands[0]
    }
  }

  setInterval(() => {
    setState({
      currentHour: setHourHands(setTime().hour)
    })
  }, 1000)

  return <>
    <div className="Chronometer-wrapper">
      <DigitalTime />
      { state.currentHour }
      { seconds }
    </div>
  </>
} // END Chronometer js
