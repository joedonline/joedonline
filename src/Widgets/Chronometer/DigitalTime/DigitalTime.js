import React, { useState, useEffect } from 'react'
import './DigitalTime.scss'


export default (props) => {
  const [dayofweek, setdayofweek] = useState('')
  const [now, setnow] = useState('')
  const [meridian, setmeridian] = useState('')

  useEffect( () => {
    setdayofweek(document.getElementById('dayofweek'))
    setnow(document.getElementById('now'))
    setmeridian(document.getElementById('meridian'))

    if (dayofweek && now && meridian) {
      dayofweek.innerHTML = `${props.dayOfWeek ? props.dayOfWeek : 'nn'}`
      now.innerHTML = `${props.hour ? props.hour : 'nn'}:${props.minute ? props.minute : 'nn'}:${props.second ? props.second : 'nn'}`
      meridian.innerHTML = `${props.meridian ? props.meridian : 'nn'}`
    }
  },
  [ dayofweek,
    now,
    meridian,
    props.dayOfWeek,
    props.hour,
    props.minute,
    props.second,
    props.meridian ] )

  const passage = <>
    <i className="DigitalTime" style={{ color: 'white' }}>
      <div id="dayofweek"></div>
      <div id="now" className="DigitalTime-now"></div>
      <div id="meridian"></div>
    </i>
  </>

  return passage
}
