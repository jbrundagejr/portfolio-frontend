import {NavLink, useHistory} from 'react-router-dom'

function Header(){
  const history = useHistory()

  function handleHomeClick(){
    history.push('/')
  }

  return (
    <div id="navContainer">
      <div>
        <h1 onClick={handleHomeClick}>jbjr</h1>
      </div>
      <nav>
        <NavLink className="headerLink" to="/projects">Projects</NavLink>
        <NavLink className="headerLink" to="/about">About</NavLink>
        <NavLink className="headerLink" to="/contact">Contact</NavLink>
      </nav>
    </div>
  )
}

export default Header