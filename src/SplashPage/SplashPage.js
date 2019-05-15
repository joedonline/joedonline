import React, { useState, useEffect } from 'react'
import "./SplashPage.scss"

import Section from './Section/Section'
import SiteName from './SiteName/SiteName'
import SpinnerBlocks from '../LoadingSpinners/SpinnerBlocks/SpinnerBlocks'


export default (props) => {
   const [showSpinner, setShowSpinner] = useState(true)
   const spinnerHandler = () => {
     setTimeout(() => {
       setShowSpinner(false)
     }, 2400)
   }

   useEffect( () => spinnerHandler() )

   return <>
     { showSpinner ? <SpinnerBlocks /> : null }
     <div id="SplashPage" className="SplashPage animated slideInDown">
       <SiteName />
       <Section classname="dev" linkTo="developer" sectionTitle="<developer>" />
       <Section classname="des" linkTo="designer" sectionTitle="designer" />
     </div>
   </>
}
