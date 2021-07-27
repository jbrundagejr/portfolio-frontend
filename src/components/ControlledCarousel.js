import {useState, useEffect} from 'react'
import {Carousel} from 'react-bootstrap'
import ProjectModal from './ProjectModal'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [projectArray, setProjectArray] = useState([])
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    useEffect(() => {
      fetch("http://localhost:3000/projects")
      .then(res => res.json())
      .then(projectData => {
        setProjectArray(projectData)
      })
    }, [])

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
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        {projectArr}
      </Carousel>
    );
  }
  
 export default ControlledCarousel