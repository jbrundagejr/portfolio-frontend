import {useState} from 'react'
import {Header, Modal} from 'semantic-ui-react'

function Resume(){
    const [open, setOpen] = useState(false)

  return (
    <div>
      <Modal
        closeIcon
        open={open}
        trigger={<h3 id="resumeTrigger">Resume</h3>}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        >
        <Header>
            <h2>Jon Brundage Jr.'s Resume</h2>
        </Header>
        <Modal.Content>
        {/* <iframe title = "BrundageResume" src="https://docs.google.com/document/d/e/2PACX-1vREb6Z9DDSpc4A29iufoPaSti-xdC4xd23yNIaOeyiGRzV1dOyF-DxcCGR3RbIywL6pbXmvtJ-QIT0l/pub?embedded=true"></iframe> */}
        </Modal.Content>
      </Modal>
    </div>
  )
}

export default Resume