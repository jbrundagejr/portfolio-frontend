import {Image} from 'semantic-ui-react'
import Resume from './Resume'

function About(){
  return (
    <div id="aboutContainer">
      <h2>About Jon</h2>
      <div id="aboutContent">
        <div id="bioPhoto">
          <Image size = "large" src="https://imgur.com/5VyETe1.jpg" alt="Jon Brundage Jr."></Image>
        </div>
        <div id="bioBlurb">
          <p>As a graduate of the Flatiron School of Software Engineering in June 2021, Jon found a passion for coding and web design.
            Specializing in React and Ruby on Rails, Jon is a full-stack engineer with an ability to quickly learn new concepts and implement
            efficient coding to solve problems. </p>
          <p>Before getting into coding, Jon worked in television production as a freelance Director of Photography and Camera Operator 
             for over thirteen years. He has shot for numerous networks including HBO, AMC, NatGeo, and Comedy Central among others. 
             In his capacity as Director of Photography, Jon cultivated team management skills, and heavily relied on his innate ability to lead.</p>
          <p>In his spare time, Jon can be found playing hockey, attempting the crossword, or going for a family jog with his wife and son. 
            He's been living in Crown Heights since moving to Brooklyn in 2008 and thoroughly enjoys all the adventures that 
            Brooklyn has to offer.</p>
        </div>
      </div>
        <div id="aboutLinks">
          <Resume />
          <a className="bioLink" href="https://www.linkedin.com/in/jon-brundage-jr-869722164/" target="_blank" rel="noreferrer"><h3>LinkedIn</h3></a>
          <a className="bioLink" href="https://github.com/jbrundagejr" target="_blank" rel="noreferrer"><h3>GitHub</h3></a>
          <a className="bioLink" href="https://medium.com/me/stories/public" target="_blank" rel="noreferrer"><h3>Blogs</h3></a>
          <a className="bioLink" href="https://twitter.com/BrundageJr" target="_blank" rel="noreferrer"><h3>Twitter</h3></a>
        </div>
    </div>
  )
}

export default About