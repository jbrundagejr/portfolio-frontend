import {Icon} from 'semantic-ui-react'

function Footer(){
  return (
    <div id="footerContainer">
        <a className="footerLink" href="https://www.linkedin.com/in/jbrundagejr/" target="_blank" rel="noreferrer">
          <Icon size="big" name='linkedin' /></a>
        <a className="footerLink" href="https://github.com/jbrundagejr" target="_blank" rel="noreferrer">
          <Icon size="big" name='github' /></a>
        <a className="footerLink" href="https://jbrundagejr.medium.com/" target="_blank" rel="noreferrer">
          <Icon size="big" name='medium' /></a>
        <a className="footerLink" href="https://twitter.com/BrundageJr" target="_blank" rel="noreferrer">
          <Icon size="big" name='twitter square' /></a>
    </div>
  )
}

export default Footer