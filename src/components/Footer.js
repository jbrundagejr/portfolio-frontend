import { Icon } from "semantic-ui-react"

const Footer = () => {
  return (
    <div id="footerContainer">
      <a
        className="footerLink"
        href="https://www.linkedin.com/in/jbrundagejr/"
        target="_blank"
        rel="noreferrer"
      >
        <Icon size="big" name="linkedin" alt="LinkedIn" />
      </a>
      <a
        className="footerLink"
        href="https://github.com/jbrundagejr"
        target="_blank"
        rel="noreferrer"
      >
        <Icon size="big" name="github" alt="GitHub" />
      </a>
    </div>
  )
}

export default Footer
