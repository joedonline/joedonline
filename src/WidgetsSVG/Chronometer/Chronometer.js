import React, { useState, useEffect } from 'react'
import './Chronometer.scss'

import DigitalTime from './DigitalTime/DigitalTime'
import { getTime } from './assembly/timePassage'
import { getHourHands, seconds } from './assembly/dial.js'


export default (props) => {
  const [state, setState] = useState('')

  useEffect( () => {
    const seconds = document.getElementById('seconds')
    setInterval(() => {
      setState({
        currentHour: getHourHands(getTime().hour)
      })

      const secondsRotation = parseInt(getTime().second) === 0 ? '0deg' : getTime().second * parseInt(-6)
      const secondsRotationStyleAttr = `transform: rotate(${ secondsRotation }deg)`
      seconds.setAttribute(`style`, secondsRotationStyleAttr)
    }, 1000)
  } )



  return <>
    <div className="Chronometer">
      <DigitalTime />
      { state.currentHour }
      { seconds }
    </div>
  </>
} // END Chronometer js
