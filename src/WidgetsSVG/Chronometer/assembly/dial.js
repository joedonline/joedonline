import React from 'react'
import './dial.scss'
import { hrdivs } from './dial-hrdivs'


export const dial = () => {
  const hourHands = []

  const getHourHands = (hour) => {
    switch(hour) {
      case 1  : return hrdivs.slice(0,2)
      case 2  : return hrdivs.slice(0,3)
      case 3  : return hrdivs.slice(0,4)
      case 4  : return hrdivs.slice(0,5)
      case 5  : return hrdivs.slice(0,6)
      case 6  : return hrdivs.slice(0,7)
      case 7  : return hrdivs.slice(0,8)
      case 8  : return hrdivs.slice(0,9)
      case 9  : return hrdivs.slice(0,10)
      case 10 : return hrdivs.slice(0,11)
      case 11 : return hrdivs.slice(0,12)
      default : return hrdivs[0]
    }
  }

  const secondsStyles = {
    background: 'red',
    height: '5rem !important',
    width: '5rem !important'
  }

  const seconds = (
    <div id="seconds" className="seconds" style={ secondsStyles }>
      <div className="seconds--ticker"></div>
    </div>
  )

  return {
    hourHands: hourHands,
    getHourHands: getHourHands,
    seconds: seconds
  }
}


export const { hourHands, getHourHands, seconds } = dial()
