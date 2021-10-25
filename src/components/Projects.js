import {Dimmer, Loader, Segment} from 'semantic-ui-react'
import ControlledCarousel from './ControlledCarousel'

const Projects = ({isLoaded, projectArray}) => {
  
  if(!isLoaded){
    return (
      <div id="projectContainer" className="fadeIn">
        <div id="projectHeader">
          <h2>Projects.</h2>
        </div>
        <Segment>
          <Dimmer active inverted>
            <Loader inverted size="large">Loading</Loader>
          </Dimmer>
        </Segment>
      </div>
    )
  } else {
    return (
      <div id="projectContainer" className="fadeIn">
        <div id="projectHeader">
          <h2>Projects.</h2>
        </div>
          <ControlledCarousel projectArray={projectArray} />
      </div>
    )
  }
}

export default Projects