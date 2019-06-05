import React, { Component } from 'react'
import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './LandingPage/LandingPage'
import Developer from './Developer/Developer'
import Designer from './Designer/Designer'
import NotFound from './NotFound/NotFound'
import WidgetsPage from './Widgets/WidgetsPage/WidgetsPage'

import { graphics } from './DataFetch/graphics'


class App extends Component {
  state = {
    bgStyle: `#323232`
  }

  componentDidMount() {
    graphics().imageSource.then(res => {
      this.setState({
        bgStyle: res[0] ? `url(${res[0].acf.png_background});` : `red;`
      })
    })
  }

  bodyHandler = () => {
    window.scrollTo(0, 0)
    const thebody = document.getElementById('thebody')
    thebody.style = `background-image: ${this.state.bgStyle}`
  }

  routesHandler = () => {
    this.bodyHandler()

    return <>
      <Route render={() => (
        <Switch>
          <Route path="/developer" component={ Developer } />
          <Route path="/designer" component={ Designer } />
          <Route path="/widgets-page" component={ WidgetsPage } />
          <Route path="/" exact component={ LandingPage } />
          <Route component={ NotFound } />
        </Switch>
       )} />
    </>
  }

  render = () => <AppRouter>{ this.routesHandler() }</AppRouter>
}

export default App
