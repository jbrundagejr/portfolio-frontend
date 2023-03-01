import { useState } from "react"
import { Form, Input, Button, TextArea } from "semantic-ui-react"
import emailjs from "@emailjs/browser"

const Contact = () => {
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userSubject, setUserSubject] = useState("")
  const [userMessage, setUserMessage] = useState("")
  const [emailSent, setEmailSent] = useState(false)

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    const newEmail = {
      name: userName,
      email: userEmail,
      subject: userSubject,
      message: userMessage,
    }
    emailjs.send(
      "service_epg22qw",
      "template_fuk8h9j",
      newEmail,
      "9N-PltVTHVxDEt0_D"
    )
    setUserName("")
    setUserEmail("")
    setUserSubject("")
    setUserMessage("")
    setEmailSent(true)
  }

  return (
    <div id="contactContainer" className="fadeIn">
      <h2>Contact.</h2>
      <div id="contactContent">
        {emailSent ? (
          <div id="emailConfirmation" className="fadeIn centered">
            <p>Thanks for reaching out. I'll get back to you shortly!</p>
          </div>
        ) : (
          <div>
            <div id="contactBlurb">
              <p>
                Please feel free to reach out if you have any questions or
                development needs. I will get back to you as soon as I can, and
                thank you in advance for your interest!
              </p>
            </div>
            <Form onSubmit={handleEmailSubmit} className="contactForm">
              <Form.Field
                required
                id="Name"
                label="Name"
                control={Input}
                type="text"
                placeholder="Your name"
                className="formLabel"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <Form.Field
                required
                id="Email"
                label="Email"
                control={Input}
                type="email"
                placeholder="Your Email Address"
                className="formLabel"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              />
              <Form.Field
                required
                id="Subject"
                label="Subject"
                control={Input}
                type="text"
                placeholder="Email Subject"
                className="formLabel"
                value={userSubject}
                onChange={(e) => setUserSubject(e.target.value)}
              />
              <Form.Field
                required
                id="Message"
                label="Message"
                control={TextArea}
                type="text"
                placeholder="Your Message"
                className="formLabel"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
              />
              <Button>Send Email</Button>
            </Form>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact
