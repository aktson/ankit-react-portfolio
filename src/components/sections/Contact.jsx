import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";

function Contact() {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [nameAlert, setNameAlert] = useState("");
  const [emailAlert, setEmailAlert] = useState("");
  const [messageAlert, setMessageAlert] = useState("");
  const emailRegex = /\S+@\S+\.\S+/;

  //removes success message
  useEffect(() => {
    const timer = setTimeout(() => {
      setFeedbackMsg("");
    }, 5000);
    return () => clearTimeout(timer);
  });

  function handleName(e) {
    if (!name) {
      setNameAlert(null);
    } else if (name !== "" && name.trim().length <= 4) {
      setNameAlert("must be atleast 4 characters");
    } else {
      setNameAlert(<FaCheck className="text-success" />);
    }

    setName(e.target.value);
  }
  function handleEmail(e) {
    if (!email) {
      setEmailAlert(null);
    } else if (emailRegex.test(email)) {
      setEmailAlert(<FaCheck className="text-success" />);
    } else {
      setEmailAlert("please enter valid email");
    }
    setEmail(e.target.value);
  }
  function handleMessage(e) {
    if (!message) {
      setMessage(null);
    } else if (message !== "" && message.trim().length <= 10) {
      setMessageAlert("must be atleast 10 characters");
    } else {
      setMessageAlert(<FaCheck className="text-success" />);
    }
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name && name.trim().length <= 4) {
      setNameAlert("must be atleast 4 characters");
    }
    if (!emailRegex.test(email)) {
      setEmailAlert("please enter valid email");
    }
    if (!message && message.trim().length <= 10) {
      setMessageAlert("must be atleast 10 characters");
    }
    if (name.trim().length >= 4 && emailRegex.test(email) && email && message.trim().length >= 10) {
      emailjs.sendForm("service_razjftm", "template_ajxy6dn", formRef.current, "user_LG7vK3Lix7E0XaCiTXL0L").then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setFeedbackMsg("Thank you for your messge!!!");
      setName("");
      setNameAlert("");
      setEmail("");
      setEmailAlert("");
      setMessage("");
      setMessageAlert("");
    }
  };

  return (
    <section className="flex flex-col items-center gap-4  py-16 sm:py-32 px-4   justify-center truncate" id="contact">
      <h2>Contact</h2>
      <form ref={formRef} className="form" onSubmit={handleSubmit}>
        {feedbackMsg && <div className="success">{feedbackMsg}</div>}
        <div className="form-control  w-full ">
          <label htmlFor="name" className="mb-2">
            <span className="form-spans">Name {nameAlert && <div className="error">{nameAlert} </div>}</span>
          </label>
          <input type="text" name="user_name" className="input-form" placeholder="name" onChange={handleName} value={name} />
        </div>
        <div className="form-control  w-full">
          <label htmlFor="email" className="mb-2">
            <span className="form-spans">Email {emailAlert && <div className="error">{emailAlert} </div>}</span>
          </label>
          <input type="text" name="user_email" className="input-form" placeholder="email" onChange={handleEmail} value={email} />
        </div>
        <div className="form-control h-full  w-full">
          <label htmlFor="message" className="mb-2">
            <span className="form-spans">Message {messageAlert && <div className="error">{messageAlert}</div>}</span>
          </label>
          <textarea name="message" className="textarea h-24 input-form" placeholder="your message" onChange={handleMessage} value={message} />
        </div>
        <button className="btn-primary btn-md btn w-full" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
