import { NavLink } from "react-router-dom"
import { Dropdown } from "semantic-ui-react"
import { useMediaQuery } from "react-responsive"

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" })

  return (
    <div id="navContainer">
      {isMobile ? (
        <Dropdown icon="bars" direction="left">
          <Dropdown.Menu>
            <Dropdown.Item>
              <NavLink className="headerLink" to="/projects">
                Projects
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink className="headerLink" to="/about">
                About
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item>
              <NavLink className="headerLink" to="/contact">
                Contact
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <div id="desktopLinkContainer">
          <NavLink className="headerLink" to="/projects">
            Projects
          </NavLink>
          <NavLink className="headerLink" to="/about">
            About
          </NavLink>
          <NavLink className="headerLink" to="/contact">
            Contact
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Header
