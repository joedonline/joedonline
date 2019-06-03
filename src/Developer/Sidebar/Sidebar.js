import React, { useState, useEffect } from 'react'
import './Sidebar.scss'

import { dev } from '../../DataFetch/dev'

import SidebarNav from './SidebarNav/SidebarNav'
import SidebarContent from './SidebarContent/SidebarContent'


export default (props) => {
  const [contents, getContents] = useState('')

  useEffect(() => {
    dev().devContent.then(c => {
      if (c[0].acf) getContents({...c[0].acf})
    })
  }, [])

  const ellipsis = contents ? null : "..."
  const title = contents ? contents.page_title : ellipsis
  const subtitle = contents ? contents.page_subtitle : ellipsis
  const summaryContent = contents ? contents.summary : ellipsis
  const technologiesContent = contents ? contents.technologies : ellipsis
  const educationContent = contents ? contents.education_training : ellipsis

  return <>
    <section className="Sidebar">
      <SidebarNav />
      <aside className="Sidebar-contentarea">
        <header>
          <h1 className="title">{ title }</h1>
          <h2 className="subtitle">{ subtitle }</h2>
        </header>

        <SidebarContent contentHeading="summary" content={summaryContent} />
        <SidebarContent contentHeading="technologies" content={technologiesContent} />
        <SidebarContent contentHeading="education & training" content={educationContent} />
      </aside>
    </section>
  </>
}
