///// THIS IS ITERATION #1 DESIGN



import React, { useState, useEffect } from 'react'
import "./SplashPage.scss"

import Section from './Section/Section'
import SiteName from './SiteName/SiteName'
import SpinnerBlocks from '../LoadingSpinners/SpinnerBlocks/SpinnerBlocks'
import WidgetModal from '../Modals/WidgetModal/WidgetModal'

import { graphics } from '../DataFetch/graphics'


export default (props) => {
   const [showWidgetsModal, setShowWidgetsModal] = useState(false)
   const [devBgImg, getDevBgImg] = useState('')
   const [desBgImg, getDesBgImg] = useState('')

   useEffect( () => {
     const IconWidgets = document.getElementById('ModalWidget')
     IconWidgets.addEventListener('click', () => {
       setShowWidgetsModal(!showWidgetsModal)
     })
   } )

   useEffect( () => {
     graphics().imageSource.then(res => {
       getDevBgImg(res[1].acf.gif_background)
       getDesBgImg(res[2].acf.gif_background)
     })
   }, [] )


   const pageContent = () => {
     const desBgImgUrlSettings = desBgImg ? desBgImg : '#desBgImg'
     const desColorOverlay = `linear-gradient(-45deg, rgba(32,32,32, 0.24), rgba(32,32,32, 0.32))`

     const devBgImgUrlSettings = devBgImg ? devBgImg : '#devBgImg'
     const devColorOverlay = `linear-gradient(45deg, rgba(0,0,0,0.16), rgba(0,0,0, 0.98))`

     const splashPageHandler = () => <>
         <SiteName modalId="ModalWidget" />
         <Section classname="dev" linkTo="developer" sectionTitle="<developer>" bgImgUrl={devBgImgUrlSettings} colorOverlay={devColorOverlay} />
         <Section classname="des" linkTo="designer" sectionTitle="designer" bgImgUrl={desBgImgUrlSettings} colorOverlay={desColorOverlay} />
     </>

     return <>
       { devBgImg || desBgImg ? null : <SpinnerBlocks /> }
       { showWidgetsModal
         ? <WidgetModal modalId="ModalWidget" isWidgetModalOn={showWidgetsModal} />
         : <div id="SplashPage" className="SplashPage animated fadeIn">{ splashPageHandler() }</div> }
     </>
   }

   return pageContent()
}
