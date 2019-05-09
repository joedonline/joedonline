import React, { Component } from 'react'
import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom';

import Splash from './Splash/Splash'
import Developer from './Developer/Developer'
import Designer from './Designer/Designer'
import NotFound from './NotFound/NotFound'


class App extends Component {

  routesHander = () =>{
    window.scrollTo(0, 0)

    return (
           <Route render={() => (
                  <Switch>
                    <Route path="/developer" component={ Developer } />
                    <Route path="/designer" component={ Designer } />
                    <Route path="/" exact component={ Splash } />
                    <Route component={ NotFound } />
                  </Switch>
           )} />
          )
  }

  render() {
    return <AppRouter>{ this.routesHander() }</AppRouter>
  }
}

export default App
