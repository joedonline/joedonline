import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './Main.scss'

import Page from './Page/Page'

export default (props) => {

  const routeHandler = () => <>
    <Switch>
      <Route path="/developer/projects" render={ () => <Page pagename="projects" heading="project samples" navto_left={"skills"} navto_right={false} /> } />
      <Route path="/developer/skills" render={ () => <Page pagename="skills" heading="technical skills" navto_left={"expertise"} navto_right={"projects"} /> } />
      <Route path="/developer/expertise" render={ () => <Page pagename="expertise" heading="expertise & qualifications" navto_left={false} navto_right={"skills"} /> } />
      <Redirect from="/developer" to="/developer/expertise" />
    </Switch>
  </>

  return <main className="Main">{ routeHandler() }</main>
}
