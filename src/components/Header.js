import {NavLink} from 'react-router-dom'
import {Dropdown} from 'semantic-ui-react'

function Header(){

  return (
    <div id="navContainer">
      <Dropdown icon="bars">
          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink className="headerLink" to="/projects">Projects</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink className="headerLink" to="/about">About</NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink className="headerLink" to="/contact">Contact</NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}

export default Header