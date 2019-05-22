import React, { useState, useEffect } from 'react'
import './Sidebar.scss'

import { graphics } from '../../DataFetch/graphics'
import { dev } from '../../DataFetch/dev'

import Icon from './Icon/Icon'
import Content from './Content/Content'

import HeartSpinner from '../../LoadingSpinners/HeartBeating/HeartBeating'


export default (props) => {
  const [homeIcon, getHomeIcon] = useState('')
  const [gmailIcon, getGmailIcon] = useState('')
  const [linkedInIcon, getLinkedInIcon] = useState('')
  const [githubIcon, getGitHubIcon] = useState('')
  const [linkedin, getLinkedIn] = useState('')
  const [github, getGitHub] = useState('')
  const [content, getContent] = useState('')

  useEffect( () => {
    graphics().imageSource.then(res => {
      getHomeIcon(res[1].acf.icon_home)
      getGmailIcon(res[1].acf.icon_gmail)
      getLinkedInIcon(res[1].acf.icon_linkedin)
      getGitHubIcon(res[1].acf.icon_github)
      getLinkedIn(res[1].acf.linkedin_page)
      getGitHub(res[1].acf.github_page)
    })

    dev().devContent.then(res => {
      getContent({
        pageTitle: res[0].acf.page_title,
        pageSubtitle: res[0].acf.page_subtitle,
        summary: res[0].acf.summary,
        technologies: res[0].acf.technologies,
        educationTraining: res[0].acf.education_training
      })
    })
  }, [] )

  const iconclassname = "Sidebar__icon-links-item"

  const sidebarHandler = () => <>
    <aside className="Sidebar">
      <ul className="Sidebar__icon-links">
        <Icon isnavlink={true} linkto="/" classname={`${iconclassname}--home`} bgimg={homeIcon} ___target="" />
        <Icon isnavlink={true} linkto="#!" classname={`${iconclassname}--home`} bgimg={gmailIcon} ___target="" />
        <Icon isnavlink={false} linkto={linkedin} classname={`${iconclassname}--home`} bgimg={linkedInIcon} ___target="_blank" />
        <Icon isnavlink={false} linkto={github} classname={`${iconclassname}--home`} bgimg={githubIcon} ___target="_blank" />
      </ul>

      <section className="Sidebar__content-area">
        <div className="Sidebar__content-area-titles">
          <h1 className="title">{content.pageTitle}</h1>
          <h2 className="subtitle">{content.pageSubtitle}</h2>
        </div>
        <Content contentHeading="summary" content={content.summary} />
        <Content contentHeading="technologies" content={content.technologies} />
        <Content contentHeading="education & training" content={content.educationTraining} />
      </section>
    </aside>
  </>

  return homeIcon ? sidebarHandler() : <HeartSpinner />
}
