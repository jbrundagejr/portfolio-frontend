import {useEffect, useState} from 'react'
import {Modal, Header, Segment, Dimmer, Image, Loader} from 'semantic-ui-react'

function ProjectModal({id}){
  const [project, setProject] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`)
      .then(res => res.json())
      .then(projectData => {
        setProject(projectData)
        setIsLoaded(true)
      })
  }, [id])

  if (!isLoaded) {
    return (
      <Segment>
        <Dimmer active inverted>
          <Loader size='large'>Loading</Loader>
        </Dimmer>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    )
  } else {

    const {name, image, blurb, demo_link, github_link} = project

    return (
      <div>
        <Modal 
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          trigger={<h3>More Info</h3>}
        >
          <Header>{name}</Header>
          <Modal.Content image>
            <Image size = "medium" src={image} alt={name} wrapped />
            <Modal.Description>
              <p>{blurb}</p>
              <a href={demo_link} target="_blank" rel="noreferrer">Demo</a>
              <a href={github_link} target="_blank" rel="noreferrer">GitHub Repo</a>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )    
  }
}

export default ProjectModal