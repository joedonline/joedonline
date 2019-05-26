import React, { useState, useEffect } from 'react'
import './Backgrounds.scss'

import { graphics } from '../DataFetch/graphics'


export default (props) => {
  const [mediaLeft, setMediaLeft] = useState('')
  const [mediaRight, setMediaRight] = useState('')

  useEffect(() => {
    graphics().imageSource.then(src => {
      if (src) {
        setMediaLeft(src[1].acf.gif_background ? src[1].acf.gif_background : "#!")
        setMediaRight(src[2].acf.gif_background ? src[2].acf.gif_background : "#!")
      }
    })
  }, [])

  return <>
    <div id="LP-Backgrounds">
      <div className="BG-Left">
        <div className="BG-Left__mediabg" style={{ backgroundImage: `url(${mediaLeft})` }}></div>
      </div>
      <div className="BG-Right">
        <div className="BG-Right__mediabg" style={{ backgroundImage: `url(${mediaRight})` }}></div>
      </div>
    </div>
  </>
}
