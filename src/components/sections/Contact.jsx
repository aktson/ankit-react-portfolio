import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const formRef = useRef();
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const displayError = (msg) => {
  //   if (msg) {
  //     return <span className="text-error px-2 rounded ">*{msg}</span>;
  //   } else {
  //     <span className=""></span>;
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_razjftm", "template_ajxy6dn", formRef.current, "user_LG7vK3Lix7E0XaCiTXL0L").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section className="flex flex-col items-center gap-4 bg-base-200 lg:h-screen  justify-center p-2" id="contact">
      <h2>Let's Work together</h2>

      <form ref={formRef} className="form" onSubmit={handleSubmit}>
        <div className="form-control  w-full ">
          <label htmlFor="name" className="mb-2">
            <span className="label-text ">Name</span>
          </label>
          <input type="text" name="user_name" className="input-form" placeholder="name" />
        </div>
        <div className="form-control  w-full">
          <label htmlFor="email" className="mb-2">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="user_email" className="input-form" placeholder="email" />{" "}
        </div>
        <div className="form-control h-full  w-full">
          <label htmlFor="message" className="mb-2">
            <span className="label-text">Message </span>
          </label>
          <textarea name="message" className="textarea h-24 input-form" placeholder="your message" />{" "}
        </div>
        <button className="btn-primary btn-md btn w-full" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
