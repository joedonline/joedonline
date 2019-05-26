import React from 'react'
import './LandingPage.scss'

import ContentArea from './ContentArea/ContentArea'


export default (props) => {
  const styles = {
    position: 'absolute',
    zIndex: '0'
  }

  return <div style={styles}>
    <div className="LandingPage">
      <ContentArea />
    </div>
  </div>
}
