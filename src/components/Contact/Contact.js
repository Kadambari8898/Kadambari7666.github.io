import React,{useRef,useState} from "react";
import "./contact.css";
import emailjs from "emailjs-com";

export default function Contact(){

    const form=useRef();
    const [done, setDone] = useState(false)

    const sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm("service_ume07ns", "template_n6l7nya", form.current, "-jfLON9MX-FN3453V")
        .then((result) => {
            console.log(result.text);
            setDone(true) 
        }, (error) => {
            console.log(error.text);
        });}
    
        // service_i0zd34d
        // template_n6l7nya
        // -jfLON9MX-FN3453V
        
    


    return(
        
         
        <div className="c-right">
          <div className="c-title">Contact Me</div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <input type="submit" value="send" className='button' ></input>
            {done && "Thank you..."}
          </form>
        </div>
      
    )
}