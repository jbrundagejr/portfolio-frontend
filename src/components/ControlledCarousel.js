import { useState } from "react"
import { Carousel } from "react-bootstrap"
import ProjectModal from "./ProjectModal"

const ControlledCarousel = ({ projectArray }) => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  const projectArr = projectArray.map((projectObj) => {
    return (
      <Carousel.Item key={projectObj.title}>
        <img
          className="d-block w-100 modalImage"
          src={projectObj.image}
          alt={projectObj.title}
        />
        <Carousel.Caption>
          <ProjectModal project={projectObj} />
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
  )
}

export default ControlledCarousel
