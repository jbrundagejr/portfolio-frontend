import {Icon} from 'semantic-ui-react'

function Footer(){
  return (
    <div id="footerContainer">
      <div>
        <h2>Jon Brundage Jr. | Brooklyn, NY </h2>
      </div>
      <div>
        <a className="footerLink" href="https://www.linkedin.com/in/jon-brundage-jr-869722164/" target="_blank" rel="noreferrer">
          <Icon name='linkedin' /></a>
        <a className="footerLink" href="https://github.com/jbrundagejr" target="_blank" rel="noreferrer">
          <Icon name='github' /></a>
        <a className="footerLink" href="https://medium.com/me/stories/public" target="_blank" rel="noreferrer">
          <Icon name='medium' /></a>
        <a className="footerLink" href="https://twitter.com/BrundageJr" target="_blank" rel="noreferrer">
          <Icon name='twitter square' /></a>
      </div>
    </div>
  )
}

export default Footer