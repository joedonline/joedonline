import React, { useState, useEffect } from 'react'
import './Weather.scss'
import Spinner from '../../LoadingSpinners/HeartBeating/HeartBeating'

import { conditionalContent } from './conditionalContent'
import { geoLoc } from '../../DataFetch/geoLoc'
import { weather } from '../../DataFetch/weather'


export default (props) => {
  const [geo, getGeo] = useState('')
  useEffect(() => {
    geoLoc.then(data => {
      getGeo(data)
    })
  })

  const lat = geo.latitude
  const lon = geo.longitude
  const city = geo.city
  const state = geo.state_prov
  const countryCode = geo.country_code3
  const country = geo.country_name
  const flag = geo.country_flag

  useEffect(() => {
    const w = weather(lat, lon, countryCode).weaLoc
    if (props.isWidgetModalOn) {
      conditionalContent(city, state, countryCode, flag, w)
    } 
  })

  const weatherModalOnHandler = () => {
    return <>
      <div className="Weather__modal-on">
        {
          !props.isWidgetModalOn
          ? <Spinner />
          : <>
            <p>{`Current conditions in:`}</p>
            <p id="localcity"></p>
            <p id="countrycode"></p>
            <img id="countryflag" alt={`${country}'s national flag.`} />
            <p id="tempicon"><i id="weathertemperature"></i><img id="weathericon" src={'default-icon'} alt={'#default-icon'} /></p>
            <p id="weatherdescription"></p>
          </>
        }
      </div>
    </>
  }

  const weatherModalOffHandler = () => {
    return <>
      <div className="Weather__modal-off">
        click me
      </div>
    </>
  }

  const setWeather = () => {
    return <>
      { props.isWidgetModalOn  ? weatherModalOnHandler() : weatherModalOffHandler() }
    </>
  }

  return setWeather()
}
