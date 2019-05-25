import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './Main.scss'

import { Expertise, Skills, Projects } from './Pages/index'
import { dev } from '../../DataFetch/dev'


export default (props) => {
  const [animation, setAnimation] = useState('fadeIn slow')
  const [expertiseContent, getExpertiseContent] = useState('')

  const animationHandler = (direction) => {
    setAnimation(direction)
  }

  useEffect( () => {
    const larrow = document.getElementById('larrow')
    const rarrow = document.getElementById('rarrow')
    const mainlink_expertise = document.getElementById('mainlink_expertise')
    const mainlink_skills = document.getElementById('mainlink_skills')
    const mainlink_projects = document.getElementById('mainlink_projects')

    if (mainlink_expertise) mainlink_expertise.addEventListener('click', () => {
      animationHandler('fadeIn slow')
    })

    if (mainlink_skills) mainlink_skills.addEventListener('click', () => {
      animationHandler('fadeIn slow')
    })

    if (mainlink_projects) mainlink_projects.addEventListener('click', () => {
      animationHandler('fadeIn slow')
    })

    if (larrow) larrow.addEventListener('click', () => {
      animationHandler('bounceInRight')
    })

    if (rarrow) rarrow.addEventListener('click', () => {
      animationHandler('bounceInLeft')
    })
  } )

  useEffect( () => {
    dev().devContent.then(res => {
      if (res[0].acf.expertise) {
        getExpertiseContent(res[0].acf.expertise)
      }
    })
  }, [] )

  const routeHandler = () => <>
    <Switch>
      <Route path="/developer/projects" render={ () => <Projects animation={animation} /> } />
      <Route path="/developer/skills" render={ () => <Skills animation={animation} /> } />
      <Route path="/developer/expertise" render={ () => <Expertise content={expertiseContent} animation={animation} /> } />
      <Redirect from="/developer" to="/developer/expertise" />
    </Switch>
  </>

  return <main className="Main">{ routeHandler() }</main>
}
