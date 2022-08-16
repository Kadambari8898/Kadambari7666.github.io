import React,{useRef,useState} from "react";
import "./contact.css";

export default function Contact(){

    const formRef=useRef();
    const [done, setDone] = useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
    }


    return(
        
         
        <div className="c-right">
          <div className="c-title">Contact Me</div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
    )
}