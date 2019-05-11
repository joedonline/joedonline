import React, { Component } from 'react'
import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom';

import SplashPage from './SplashPage/SplashPage'
import Developer from './Developer/Developer'
import Designer from './Designer/Designer'
import NotFound from './NotFound/NotFound'


class App extends Component {

  routesHandler = () =>{
    window.scrollTo(0, 0)

    return (
           <Route render={() => (
                  <Switch>
                    <Route path="/developer" component={ Developer } />
                    <Route path="/designer" component={ Designer } />
                    <Route path="/" exact component={ SplashPage } />
                    <Route component={ NotFound } />
                  </Switch>
           )} />
          )
  }

  render = () => <AppRouter>{ this.routesHandler() }</AppRouter>
}

export default App
