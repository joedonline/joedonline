import React from 'react'
import "./SplashPage.scss"

import Section from './Section/Section'

export default (props) => {
   return <div className="SplashPage animated slideInDown">
            <Section classname="dev" />
            <Section classname="des" />
          </div>
}
