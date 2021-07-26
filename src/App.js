import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path = "/">
          <Welcome />
        </Route>
        <Route exact path = "/about">
          <Header />
          <About />
        </Route>
        <Route exact path = "/projects">
          <Header />
          <Projects />
        </Route>
        <Route exact path = "/contact">
          <Header />
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
