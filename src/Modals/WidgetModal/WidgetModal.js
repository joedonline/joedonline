import React from 'react'
import './WidgetModal.scss'

import { NavLink } from 'react-router-dom'

import WorldClock from '../../Widgets/Chronometer/WorldClock'
import Weather from '../../Widgets/Weather/Weather'


export default (props) => {

  if (props.isWidgetModalOn) return <>
    <div id={ props.modalId } className="WidgetModal animated bounceInUp">
      <h3>Time and Weather App</h3>
      <NavLink to="/" id="returnhome" className="WidgetModal__return-home">{ `back to home page` }</NavLink>
      <div className="WidgetModal__widgets">
        <WorldClock />
        <Weather isWidgetModalOn={props.isWidgetModalOn} />
      </div>
    </div>
  </>

  return <div id={props.modalId}></div>
}
