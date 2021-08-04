import {useEffect, useState} from 'react'
import {Modal, Header, Segment, Dimmer, Image, Loader} from 'semantic-ui-react'

function ProjectModal({id}){
  const [project, setProject] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    fetch(`https://mighty-fjord-51024.herokuapp.com/projects/${id}`)
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

    const {id, name, image, blurb, demo_link, github_link, backend_repo, made_with, link} = project

    const iconArray = made_with.split(", ").map(icon => {
      return (
        <i key={icon.id} className={icon} id="devIcon"></i>
      )
    })
    return (
      <div>
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          key={id}
          trigger={<h3>More Info</h3>}
        >
          <Header><h2>{name}</h2></Header>
          <Modal.Content image>
            <Image size="large" src={image} alt={name} wrapped />
            <Modal.Description>
              <p>{blurb}</p>
              <h4>Made With:</h4>
              {iconArray}
              <div id="modalLinkContainer">
                {link ? <a className="modalLink" href={link} target="_blank" rel="noreferrer">Website</a> : null}
                {demo_link ? <a className="modalLink" href={demo_link} target="_blank" rel="noreferrer">Demo</a> : null}
                {github_link ? <a className="modalLink" href={github_link} target="_blank" rel="noreferrer">Frontend Repo</a> : null}
                {backend_repo ? <a className="modalLink" href={backend_repo} target="_blank" rel="noreferrer">Backend Repo</a> : null}
              </div>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )    
  }
}

export default ProjectModal