import React from 'react'
import './LandingPage.scss'

import ContentArea from './ContentArea/ContentArea'
import Backgrounds from '../Backgrounds/Backgrounds'


export default (props) => {
  const styles = {
    position: 'absolute',
    zIndex: '0'
  }

  const landingPageHandler = () => <>
    <div style={styles} className="animated fadeIn">
      <div className="LandingPage">
        <ContentArea />
      </div>
    </div>
  </>

  return <>
    { landingPageHandler() }
    <Backgrounds />
  </>
}
