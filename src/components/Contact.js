import {useState} from 'react'
import {Form, Input, Button} from 'semantic-ui-react'

function Contact(){
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userSubject, setUserSubject] = useState("")
  const [userMessage, setUserMessage] = useState("")
  const [successEmail, setSuccessEmail] = useState("")

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
      email_address: userEmail,
      subject: userSubject,
      message: userMessage
    }
    fetch(`https://mighty-fjord-51024.herokuapp.com/emails`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newEmail)
    })
     .then(res => res.json())
     .then(resp => {
       setSuccessEmail(resp.message)
       setUserName("")
       setUserEmail("")
       setUserSubject("")
       setUserMessage("")
       }
     )
  }

  return (
    <div id="contactContainer" className="fadeIn">
        <h2>Contact.</h2>
      <div id="contactContent">
        {successEmail ? 
        <p id="emailConfirmation" className="fadeIn">{successEmail}</p> : 
        <div>
          <div id="contactBlurb">
            <p>Please feel free to reach out if you have any questions or development needs. I will get back to you as soon as I can, and thank you in advance for your interest!</p>
          </div>
          <Form onSubmit={handleEmailSubmit}>
            <Form.Field required>
              <label htmlFor="name" className="formLabel">Name</label>
              <Input id="name" required placeholder='Your name' value={userName} onChange={whatUserNamed}/>
            </Form.Field>
            <Form.Field required>
              <label htmlFor="email" className="formLabel">Email</label>
              <Input id="email" required type="email" placeholder='Your Email Address' value={userEmail} onChange={whatUserEmailed} />
            </Form.Field>
            <Form.Field required>
              <label htmlFor="subject" className="formLabel">Subject</label>
              <Input id="subject" required placeholder='Email Subject' value={userSubject} onChange={whatUserSubjected} />
            </Form.Field>
            <Form.Field required>
              <label htmlFor="message" className="formLabel">Message</label>
              <Input id="message" required placeholder='Your Message' value={userMessage} onChange={whatUserMessaged} />
            </Form.Field>
            <Button>Send Email</Button>
          </Form>
        </div>
        }
      </div>
    </div>
  )
}

export default Contact