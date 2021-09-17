import ControlledCarousel from './ControlledCarousel'

function Projects(){
  return (
    <div id="projectContainer" className="fadeIn">
      <div id="projectHeader">
        <h2>Projects.</h2>
      </div>
      <div id="carouselContainer">
        <ControlledCarousel />
      </div>
    </div>
  )
}

export default Projects