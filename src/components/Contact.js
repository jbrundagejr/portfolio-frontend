import {useState} from 'react'
import {Form, Input} from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'

function Contact(){
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userSubject, setUserSubject] = useState("")
  const [userMessage, setUserMessage] = useState("")
  const history = useHistory()

  function whatUserNamed(e){
    setUserName(e.target.value)
  }

  function whatUserEmailed(e){
    setUserEmail(e.target.value)
  }

  function whatUserSubjected(e){
    setUserSubject(e.target.value)
  }

  function whatUserMessaged(e){
    setUserMessage(e.target.value)
  }

  function handleEmailSubmit(e) {
    e.preventDefault()
    const newEmail = {
      name: userName,
      address: userEmail,
      subject: userSubject,
      message: userMessage
    }
    fetch(`http://localhost:4000/emails`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newEmail)
    })
     .then(res => res.json())
     .then(
       history.push("/")
     )
  }

  return (
    <div id="contactContainer" className="fadeIn">
      <h2>Contact.</h2>
      <div id="contactBlurb">
        <p>Please feel free to reach out if you have any questions or development needs. I will get back to you as soon as I can, and thank you in advance for your interest!</p>
      </div>
      <Form onClick={handleEmailSubmit}>
        <Form.Field required>
          <label className="formLabel">Name</label>
          <Input placeholder='Your name' value={userName} onChange={whatUserNamed}/>
        </Form.Field>
        <Form.Field required>
          <label className="formLabel">Email</label>
          <Input placeholder='Your Email' value={userEmail} onChange={whatUserEmailed} />
        </Form.Field>
        <Form.Field required>
          <label className="formLabel">Subject</label>
          <Input placeholder='Email Subject' value={userSubject} onChange={whatUserSubjected} />
        </Form.Field>
        <Form.Field required>
          <label className="formLabel">Message</label>
          <Input placeholder='Your Message' value={userMessage} onChange={whatUserMessaged} />
        </Form.Field>
      </Form>
    </div>
  )
}

export default Contact