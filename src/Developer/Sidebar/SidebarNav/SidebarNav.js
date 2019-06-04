import React, { useState, useEffect } from 'react'
import './SidebarNav.scss'

import { NavLink } from 'react-router-dom'
import { graphics } from '../../../DataFetch/graphics'


export default (props) => {
  const [sidebarElements, getSidebarElements] = useState('')
  const [showGmail, setShowGmail] = useState(false)

  useEffect(() => {
    graphics().imageSource.then(data => {
      if (data[1].acf) getSidebarElements(data[1].acf)
    })
  }, [])

  const ellipsis = !sidebarElements ? '...' : null
  const icon_home = sidebarElements ? sidebarElements.icon_home : null
  const icon_gmail = sidebarElements ? sidebarElements.icon_gmail : null
  const icon_linkedin = sidebarElements ? sidebarElements.icon_linkedin : null
  const icon_github = sidebarElements ? sidebarElements.icon_github : null

  const alt_home = ellipsis ? ellipsis : "Return to homepage."
  const alt_gmail = ellipsis ? ellipsis : "An envelope icon, signaling site visitor to get in touch with me.0"
  const alt_linkedin = ellipsis ? ellipsis : "LinkedIn icon, initials I.N., signals to reach out to me through my LinkedIn profile."
  const alt_github = ellipsis ? ellipsis : "White silhoutte of a cat, an icon that signals to the visitor to get in touch with me through my github profile."

  const styles_home = {
    background: `url(${icon_home ? icon_home : ""}) center/contain no-repeat`
  }

  const styles_gmail = {
    background: `#f2f2f2 url(${icon_home ? icon_gmail : ""}) center/contain no-repeat`
  }

  const styles_linkedin = {
    background: `#f2f2f2 url(${icon_home ? icon_linkedin : ""}) center/contain no-repeat`
  }

  const styles_github = {
    background: `#f2f2f2 url(${icon_home ? icon_github : ""}) center/contain no-repeat`
  }

  const url_linkedin = ellipsis ? "#!" : sidebarElements.linkedin_page
  const url_github = ellipsis ? "#!" : sidebarElements.github_page

  const gmailHandler = () => {
    return showGmail ? <Gmail /> : null
  }

  const gmailCloseHandler = () => {
   const gmailclose = showGmail ? document.getElementById('gmailclose') : null
   if (gmailclose) gmailclose.addEventListener('click', () => setShowGmail(false))
  }

  useEffect(() => gmailCloseHandler())

  return <>
    <ul className="SidebarNav animated fadeInDown">
      <li><NavLink to="/" alt={alt_home} style={styles_home} className="home">{ ellipsis }</NavLink></li>
      <li id="gmailclick" onClick={() => setShowGmail(!showGmail)}><a href="#gmail!" alt={alt_gmail} style={styles_gmail} className="gmail">{ ellipsis }</a></li>
      <li><a href={url_linkedin} alt={alt_linkedin} style={styles_linkedin} className="linkedin" rel="noopener noreferrer nofollow" target="_blank">{ ellipsis }</a></li>
      <li><a href={url_github} alt={alt_github} style={styles_github} className="github" rel="noopener noreferrer nofollow" target="_blank">{ ellipsis }</a></li>
    </ul>
    { gmailHandler() }
  </>
}


/////////////////////////////////////////////////////////////////////////////////
const Gmail = props => {
  const [gmailIcon, getGmailIcon] = useState('')

  useEffect(() => {
    graphics().imageSource.then(iconData => {
      if (iconData[1].acf.icon_gmail) getGmailIcon(iconData[1].acf.icon_gmail)
    })
  }, [])

  const icon_src = gmailIcon ? gmailIcon : "#!"
  const bgStyles = {
    background: `url(${icon_src}) center/12.5% no-repeat`
  }

  return <>
    <div className="animated fadeInDown Gmail" style={bgStyles}></div>
    <div id="gmailclose" className="Gmail-close animated fadeInUp delay-2s" dangerouslySetInnerHTML={{ __html: `close <span>&times;</span>` }} />
  </>
}
