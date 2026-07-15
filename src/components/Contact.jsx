import React,{useState}from "react";
import Button from "./Button"; 

function Contact() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSent,setIsSent] = useState(false);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsSent(true);
  };
  if (isSent) {
    return (
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div style={{ justifyContent: "center", padding: "1.5rem" }}>
          <p style={{ color: "blue", fontWeight: "bold", margin: 0 }}>
            Message sent successfully!
          </p>
        </div>
      </div>
    );
  }
  return (
    
    <div>
      <h1>Contact Us</h1>
      <hr className="divider" />
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="subject"><strong>Subject:</strong></label>
          <input 
            type="text" 
            id="subject" 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Shift error,Leave request,Website issue" 
            required 
          />
        </div>

        <div>
          <label htmlFor="message"><strong>Message:</strong></label>
          <textarea 
            id="message" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..." 
            rows="5" 
            required 
          />
        </div>

        <div>
          <Button type="submit" style={{backgroundColor: "lightskyblue"}}>Send Message</Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
