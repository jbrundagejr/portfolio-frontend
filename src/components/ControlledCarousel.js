import {useState} from 'react'
import {Carousel} from 'react-bootstrap'
import ProjectModal from './ProjectModal'

function ControlledCarousel({projectArray}) {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    const projectArr = projectArray.map(projectObj => {
      return (
          <Carousel.Item key={projectObj.id}>
            <img
              className="d-block w-100"
              src={projectObj.image}
              alt={projectObj.name}
            />
            <Carousel.Caption>
                <ProjectModal id={projectObj.id}/>
            </Carousel.Caption>
          </Carousel.Item>
        
      )
    })
  
    return (
      <div id="carouselContainer">
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          {projectArr}
        </Carousel>
      </div>
    );
  }
  
 export default ControlledCarousel