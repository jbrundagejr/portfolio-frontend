import {useState} from 'react'
import {Form, Input, Button, TextArea} from 'semantic-ui-react'

function Contact(){
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userSubject, setUserSubject] = useState("")
  const [userMessage, setUserMessage] = useState("")
  const [emailStatus, setEmailStatus] = useState("")

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
       if(resp.error){
          setEmailStatus(resp.error)
       } else {
          setEmailStatus(resp.message)
          setUserName("")
          setUserEmail("")
          setUserSubject("")
          setUserMessage("")
        }
     })
  }

  return (
    <div id="contactContainer" className="fadeIn">
        <h2>Contact.</h2>
      <div id="contactContent">
        {emailStatus ? 
        <p id="emailConfirmation" className="fadeIn">{emailStatus}</p> : 
        <div>
          <div id="contactBlurb">
            <p>Please feel free to reach out if you have any questions or development needs. I will get back to you as soon as I can, 
              and thank you in advance for your interest!</p>
          </div>
          <Form onSubmit={handleEmailSubmit}>
            <Form.Field
              required
              id="name"
              label="Name"
              control={Input}
              type="text"
              placeholder='Your name'
              className="formLabel"
              value={userName}
              onChange={e => setUserName(e.target.value)} 
            />              
            <Form.Field 
              required
              id="email"
              label="Email"
              control={Input}
              type="email"
              placeholder='Your Email Address'
              className="formLabel"
              value={userEmail}
              onChange={e => setUserEmail(e.target.value)}
            />
            <Form.Field 
              required 
              id="subject" 
              label="Subject"
              control={Input}
              type="text"
              placeholder='Email Subject'
              className="formLabel"
              value={userSubject}
              onChange={e => setUserSubject(e.target.value)} 
            />
            <Form.Field 
              required 
              id="message" 
              label="Message"
              control={TextArea}
              type="text"
              placeholder='Your Message'
              className="formLabel"
              value={userMessage}
              onChange={e => setUserMessage(e.target.value)}
            />
            <Button>Send Email</Button>
          </Form>
        </div>
        }
      </div>
    </div>
  )
}

export default Contact