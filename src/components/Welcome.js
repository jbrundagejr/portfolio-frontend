import {NavLink} from 'react-router-dom'

function Welcome(){
  return (
    <div id="welcomeContainer" className="fadeIn">
      <h1>Jon</h1>
      <h1>Brundage Jr.</h1>
      <p id="welcomeNote">Real. American. Cheese.</p>
      {/* <div id="welcomeNav">
          <NavLink className="headerLink" to="/projects">Projects</NavLink>
          <NavLink className="headerLink" to="/about">About</NavLink>
          <NavLink className="headerLink" to="/contact">Contact</NavLink>
      </div> */}
    </div>
  )
}

export default Welcome