import {Image} from 'semantic-ui-react'
import resume from '../JonBrundageJrResume.pdf'

function About(){
  return (
    <div id="aboutContainer" className="fadeIn">
      <div id="aboutHeader">
        <h2>About.</h2>
      </div>
      <div id="aboutContent">
        <div id="bioPhoto">
          <Image size = "large" src="https://imgur.com/5VyETe1.jpg" alt="Jon Brundage Jr."></Image>
        </div>
        <div id="bioBlurb">
          <p>A graduate of the Flatiron School of Software Engineering in June 2021, Jon realized his passion for coding and web design very 
            early on in the program. Specializing in React and Ruby on Rails, Jon is a full-stack engineer with an ability to quickly learn new concepts and implement
            efficient coding to solve problems.</p>
          <p>Before getting into coding, Jon worked in television production as a freelance Director of Photography and Camera Operator 
             for over thirteen years. He has shot for numerous networks including HBO, AMC, NatGeo, and Comedy Central among others. 
             In his capacity as Director of Photography, Jon cultivated team management skills, and heavily relied on his innate ability to lead.</p>
          <p>In his spare time, Jon can be found playing hockey, attempting the crossword, or going for a family jog with his wife and son. 
            He's been living in Crown Heights since moving to Brooklyn in 2008 and thoroughly enjoys all the adventures that 
            Brooklyn has to offer.</p>
          <a id="resumeLink" href={resume} target="_blank" rel="noreferrer">View Jon's Resume</a>
        </div>
      </div>
    </div>
  )
}

export default About