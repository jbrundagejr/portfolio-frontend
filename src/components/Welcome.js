import {NavLink, useHistory} from 'react-router-dom'

function Welcome(){
  return (
    <div id="welcomeContainer" className="fadeIn">
      <h1>Jon</h1>
      <h1>Brundage Jr.</h1>
      <div>
        <nav>
          <NavLink className="headerLink" to="/projects">Projects</NavLink>
          <NavLink className="headerLink" to="/about">About</NavLink>
          <NavLink className="headerLink" to="/contact">Contact</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Welcome