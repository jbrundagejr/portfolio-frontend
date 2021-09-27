import {Dimmer, Loader, Image, Segment} from 'semantic-ui-react'
import ControlledCarousel from './ControlledCarousel'

function Projects({isLoaded, projectArray}){
  

  if(!isLoaded){
    return (
      <div className="loadingDiv">
        <Segment>
          <Dimmer active inverted>
            <Loader inverted size="large">Loading</Loader>
          </Dimmer>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
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