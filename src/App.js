import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Header from './components/Header'
import Welcome from './components/Welcome'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import axios from 'axios'
import {SERVER_URL} from './util/server_url'

function App() {
  const [projectArray, setProjectArray] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    axios.get(`${SERVER_URL}/projects`)
    .then(projectData => {
      setProjectArray(projectData.data)
      setIsLoaded(true)
    })
  }, [])
  
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
          <Projects isLoaded={isLoaded} projectArray={projectArray} />
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
