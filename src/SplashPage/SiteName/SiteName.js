import React, { useState, useEffect } from 'react'
import './SiteName.scss'

import Icons from './Icons/Icons'
import { graphics } from '../../DataFetch/graphics'


export default (props) => {
  const [ profPic, setProfPic ] = useState('')

  useEffect( () => {
    graphics().imageSource.then(res => {
      const thepic = res[0].acf.profile_picture__lighter
      setProfPic(thepic)
    })
  }, [] )

  const sitename = document.getElementById(`${props.modalId}`)
  if (sitename) {
    sitename.addEventListener('mouseover', () => {
      const styles = `
        background-image: linear-gradient(135deg, rgba(16,16,16,0.16), rgba(16,16,16, 0.32)), url(${profPic});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      `
      sitename.style = profPic ? styles : 'background-image: none;'
    })
    sitename.addEventListener('mouseout', () => {
      sitename.style = `background-image: none;`
    })
  }

  return <>
    <section id={ props.modalId } className="SiteName animated bounceInUp">
      <Icons />
      <h1>{ `joe domingo` }</h1>
    </section>
  </>
}
