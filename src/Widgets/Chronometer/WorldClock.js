import React, { useState, useEffect } from 'react'
import './WorldClock.scss'

import { getTime } from './assembly/timePassage'
import { getHourHands as hourPositions,
         getHourHands as hourHand,
         seconds as secondsTicker } from './assembly/dial.js'


export default (props) => {
  const [secondDeg, setSecondDeg] = useState('')
  const [minuteDeg, setMinuteDeg] = useState('')
  const [hourDeg, setHourDeg] = useState('')

  useEffect(() => {
    const Sec = new ClockRotator(6)
    const Min = new ClockRotator(6)
    const Hour = new ClockRotator(30)

    let hoursInBetween = (30/60) * getTime().minute
    setHourDeg(Hour.step(parseInt(getTime().hour)) + hoursInBetween)
    setMinuteDeg(Min.step(parseInt(getTime().minute)))

    setInterval(() => {
      setSecondDeg(Sec.step(parseInt(getTime().second)))

      if (parseInt(getTime().second) === 0) {
        hoursInBetween = (30/60) * getTime().minute
        setMinuteDeg(Min.step(parseInt(getTime().minute)))
        setHourDeg((Hour.step(parseInt(getTime().hour)) + hoursInBetween).toFixed(2))
      }
    }, 1000)
  }, [])

  const clockHandler = () => {
    return <>
      <div className="WorldClock__hour-positions--wrapper">{ hourPositions(11) }</div>
      <div className="WorldClock__seconds--wrapper" style={{ transform: `rotate(${secondDeg}deg)` }}>{ secondsTicker }</div>
      <div className="WorldClock__hour-hand--wrapper" style={{ transform: `rotate(${hourDeg}deg)` }}>{ hourHand(0) }</div>
      <div className="WorldClock__minute-hand--wrapper" style={{ transform: `rotate(${minuteDeg}deg)` }}>
        <div className="WorldClock__minute-hand--ticker"></div>
      </div>
    </>
  }

  return <div className="WorldClock">{ clockHandler() }</div>
}


class ClockRotator {
  constructor(degrees = 0) {
    this.degrees = degrees
  }

  step(next) {
    if (next === 0) {
      return 0
    }

    return next * this.degrees
  }
}
