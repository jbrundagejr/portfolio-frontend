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
      <Header />
      <Switch>
        <Route exact path = "/">
          <Welcome />
        </Route>
        <Route exact path = "/about">
          <About />
        </Route>
        <Route exact path = "/projects">
          <Projects />
        </Route>
        <Route exact path = "/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
