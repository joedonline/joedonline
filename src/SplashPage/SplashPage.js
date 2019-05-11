import React from 'react'
import "./SplashPage.scss"

import Section from './Section/Section'
import SiteName from './SiteName/SiteName'


export default (props) => {
   return <div className="SplashPage animated slideInDown">
            <SiteName />
            <Section classname="dev" linkTo="developer" sectionTitle="<developer>" />
            <Section classname="des" linkTo="designer" sectionTitle="designer" />
          </div>
}
