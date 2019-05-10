import React from 'react'
import "./Splash.scss"

import SplashPart from './SplashPart/SplashPart'


export default (props) => {
   return <div className="Splash animated slideInDown">
            <SplashPart isSiteName={false} classname="Dev" navTo="developer" skillSetTitle="<developer>" />
            <SplashPart isSiteName={false} classname="Des" navTo="designer" skillSetTitle="Designer" />
            <SplashPart isSiteName={true} classname="sitename" />
          </div>
}
