import React, { useState, useEffect } from 'react'
import './Weather.scss'
import Spinner from '../../LoadingSpinners/HeartBeating/HeartBeating'

import axios from 'axios'


export default (props) => {
  const [geo, getGeo] = useState('');
  const [weather, getWeather] = useState('');

  useEffect(() => {
    const endpoint = `${process.env.REACT_APP_IPGEOLOC_EP}${process.env.REACT_APP_IPGEOLOC_SEC}`
    axios.get(endpoint).then(res => {
    // axios.get('local.json').then(res => {
      getGeo({...res.data})
    }).catch(error => {
      console.log('\n', '@[data]', error)
    })
  }, [])

  useEffect(() => {
    const zipcode = 10001
    const country = 'us'
    const endpoint = `${process.env.REACT_APP_OPENWEA_EPZCC2U}zip=${zipcode},${country}&units=${country === 'us' ? 'imperial' : 'metric'}&appid=${process.env.REACT_APP_OPENWEA_SEC}`

    if (geo.length !== 0) {
      axios.get(endpoint).then(res => {
         getWeather({
           wunit: country === 'us' ? 'F' : 'C',
           temp: res.data.main.temp,
           icon: res.data.weather[0].icon
         })
      }).catch(error => {
        console.log('\n', '@[endpoint]', error)
      })
    }
  }, [geo])

  const weatherHandler = () => {
    return <>
      <div className="Weather">
        { weather.temp === undefined
          ? <div style={{ transform: 'scale(0.24)' }}><Spinner /></div>
          : <div className="Weather-temp"><>{weather.temp.toFixed(0)}&deg;<i>{weather.wunit}</i></></div> }
        { weather.icon === undefined
          ? '...'
          : <img className="Weather-icon" src={`${process.env.REACT_APP_OPENWEA_ICEP}${weather.icon}.png`}
                 alt={`It's ${weather.temp.toFixed(0)} degrees fahrenheit right now.`} /> }
      </div>
    </>
  }

  return weatherHandler()
}
