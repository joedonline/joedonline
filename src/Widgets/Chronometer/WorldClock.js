import React, { useState, useEffect } from 'react'
import './WorldClock.scss'

import { getTime, ClockRotator } from './assembly/timePassage'
import { getHourHands as hourPositions,
         getHourHands as hourHand,
         seconds as secondsTicker } from './assembly/dial.js'


export default (props) => {
  const [meridian, setMeridian] = useState('')
  const [dayOfWeek, setDayOfWeek] = useState('')
  const [secondDeg, setSecondDeg] = useState('')
  const [minuteDeg, setMinuteDeg] = useState('')
  const [hourDeg, setHourDeg] = useState('')

  useEffect(() => {
    const Sec = new ClockRotator(6)
    const Min = new ClockRotator(6)
    const Hour = new ClockRotator(30)

    setMeridian(getTime().meridian)
    setDayOfWeek(getTime().dayOfWeek)

    let hoursInBetween = (30/60) * getTime().minute
    setHourDeg(Hour.step(parseInt(getTime().hour)) + hoursInBetween)
    setMinuteDeg(Min.step(parseInt(getTime().minute)))

    setInterval(() => {
      setSecondDeg(Sec.step(parseInt(getTime().second)))

      if (parseInt(getTime().second) === 0) {
        hoursInBetween = (30/60) * getTime().minute
        setMinuteDeg(Min.step(parseInt(getTime().minute)))
        setHourDeg((Hour.step(parseInt(getTime().hour)) + hoursInBetween).toFixed(2))
        setMeridian(getTime().meridian)
        setDayOfWeek(getTime().dayOfWeek)
      }
    }, 1000)
  }, [])

  const prps = {
    meridian: meridian,
    dayOfWeek: dayOfWeek,
    secondDeg: secondDeg,
    minuteDeg: minuteDeg,
    hourDeg: hourDeg
  }

  return <Clock { ...prps } />
} // END WorldClock



/////////////////////////////////////////////////////////////////////////////////
const Clock = props => {
   const clockHandler = () => {
     return <>
       <div className="WorldClock__hour-positions--wrapper">{ hourPositions(11) }</div>
       <div className="WorldClock__seconds--wrapper" style={{ transform: `rotate(${props.secondDeg}deg)` }}>{ secondsTicker }</div>
       <div className="WorldClock__hour-hand--wrapper" style={{ transform: `rotate(${props.hourDeg}deg)` }}>{ hourHand(0) }</div>
       <div className="WorldClock__minute-hand--wrapper" style={{ transform: `rotate(${props.minuteDeg}deg)` }}>
         <div className="WorldClock__minute-hand--ticker"></div>
       </div>
       <div className="WorldClock__meridian-dayofweek"><p>{ props.meridian }</p><p>{ props.dayOfWeek }</p></div>
     </>
   }

   return <div className="WorldClock">{ clockHandler() }</div>
} // END Clock
