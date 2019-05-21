import React, { Component } from 'react'
import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom';

import SplashPage from './SplashPage/SplashPage'
import Developer from './Developer/Developer'
import Designer from './Designer/Designer'
import NotFound from './NotFound/NotFound'

import { graphics } from './DataFetch/graphics'


class App extends Component {
  state = {
    bgStyle: `#323232`
  }

  componentDidMount() {
    graphics().imageSource.then(res => {
      this.setState({
        bgStyle: res[0] ? `url(${res[0].acf.png_background}) center/cover no-repeat;` : `red;`
      })
    })
  }

  bodyHandler = () => {
    window.scrollTo(0, 0)

    const thebody = document.getElementById('thebody')
    thebody.style = `background: ${this.state.bgStyle}`
  }

  routesHandler = () => {
    this.bodyHandler()

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
