import React, { useState, useEffect } from 'react'
import "./SplashPage.scss"

import Section from './Section/Section'
import SiteName from './SiteName/SiteName'
import SpinnerBlocks from '../LoadingSpinners/SpinnerBlocks/SpinnerBlocks'
import WidgetModal from '../Modals/WidgetModal/WidgetModal'


export default (props) => {
   const [showSpinner, setShowSpinner] = useState(true)
   const [showWidgetsModal, setShowWidgetsModal] = useState(false)
   const spinnerHandler = () => {
     setTimeout(() => {
       setShowSpinner(false)
     }, 3200)
   }

   useEffect( () => spinnerHandler() )

   useEffect( () => {
     const IconWidgets = document.getElementById('ModalWidget')
     IconWidgets.addEventListener('click', () => {
       setShowWidgetsModal(!showWidgetsModal)
     })
   } )

   const pageContent = () => {
     return <>
       { showSpinner ? <SpinnerBlocks /> : null }
       <div id="SplashPage" className="SplashPage animated fadeIn">
         { showWidgetsModal
           ? <WidgetModal modalId="ModalWidget" isWidgetModalOn={showWidgetsModal} />
           : <SiteName modalId="ModalWidget" /> }
         <Section classname="dev" linkTo="developer" sectionTitle="<developer>" />
         <Section classname="des" linkTo="designer" sectionTitle="designer" />
       </div>
     </>
   }

   return pageContent()
}
