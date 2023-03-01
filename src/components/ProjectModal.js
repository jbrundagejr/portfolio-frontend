import { useState } from "react"
import { Modal, Header, Image, Icon } from "semantic-ui-react"

const ProjectModal = ({ project }) => {
  const [open, setOpen] = useState(false)

  const { title, tools, image, notes, link } = project

  const iconArray = tools.map((icon) => {
    return <i key={icon} className={icon} id="devIcon"></i>
  })
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      key={title}
      trigger={<h3>More Info</h3>}
      classtitle="modal"
    >
      <Header>
        <div id="modalHeader">
          {title}
          <Icon
            id="modalCloseIcon"
            name="arrow alternate circle left outline"
            size="small"
            onClick={() => setOpen(false)}
          />
        </div>
      </Header>
      <Modal.Content image>
        <Image
          size="large"
          src={image}
          className="modalImage"
          alt={title}
          wrapped
        />
        <Modal.Description>
          <p>{notes}</p>
          <h4>Made With:</h4>
          {iconArray}
          <div id="modalLinkContainer">
            {link ? (
              <a
                className="modalLink"
                href={link}
                target="_blank"
                rel="noreferrer"
              >
                View the project
              </a>
            ) : null}
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default ProjectModal
