import ControlledCarousel from './ControlledCarousel'

function Projects({projectArray}){
  return (
    <div id="projectContainer" className="fadeIn">
      <div id="projectHeader">
        <h2>Projects.</h2>
      </div>
      <div id="carouselContainer">
        <ControlledCarousel projectArray={projectArray} />
      </div>
    </div>
  )
}

export default Projects