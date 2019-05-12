import React, { useEffect } from 'react'
import "./SplashPage.scss"

import Section from './Section/Section'
import SiteName from './SiteName/SiteName'
import SpinnerBlocks from '../LoadingSpinners/SpinnerBlocks/SpinnerBlocks'


export default (props) => {
   useEffect( () => {
     const spinner = document.getElementById('SpinnerBlocks')
     setTimeout(() => {
       spinner.classList.add('SpinnerBlocks--hide')
       spinner.classList.add('SpinnerBlocks-base--hide')
     }, 1600)
   } )

   return <>
     <SpinnerBlocks />
     <div id="SplashPage" className="SplashPage animated slideInDown">
       <SiteName />
       <Section classname="dev" linkTo="developer" sectionTitle="<developer>" />
       <Section classname="des" linkTo="designer" sectionTitle="designer" />
     </div>
   </>
}
