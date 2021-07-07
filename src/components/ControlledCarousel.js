import {useState} from 'react'
import {Carousel} from 'react-bootstrap'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://imgur.com/fe63t1z.png"
            
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>More Info</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://imgur.com/WKBlKTF.png"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>More Info</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src=""
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>More Info</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
 export default ControlledCarousel