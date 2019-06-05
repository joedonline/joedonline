import React, { useState, useEffect } from 'react'
import './Chronometer.scss'

import DigitalTime from './DigitalTime/DigitalTime'
import { getTime, ClockRotator } from './assembly/timePassage'
import { getHourHands, seconds } from './assembly/dial.js'


export default (props) => {
  const [currentHour, setCurrentHour] = useState('')
  const [digitalTime, setDigitalTime] = useState('')

  useEffect( () => {
    const seconds = document.getElementById('seconds')
    const Sec = new ClockRotator(-6)

    setInterval(() => {
      setCurrentHour(getHourHands(getTime().hour))
      const secDeg = Sec.step(parseInt(getTime().second))
      const secondsRotationStyleAttr = `transform: rotate(${ secDeg }deg)`
      if (seconds) {
        seconds.setAttribute(`style`, secondsRotationStyleAttr)
      }

      setDigitalTime({
        dayOfWeek: getTime().dayOfWeek,
        hour: getTime().hour,
        minute: getTime().minute,
        second: getTime().second,
        meridian: getTime().meridian
      })
    }, 1000)
  }, [] )

  return <>
    <div className="Chronometer">
      <DigitalTime {...digitalTime} />
      { currentHour }
      { seconds }
    </div>
  </>
} // END Chronometer js
