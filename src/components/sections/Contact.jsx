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
        <input type="text" name="user_name" className="input-form" placeholder="name" />
        <input type="text" name="user_subject" className="input-form" placeholder="subject" />
        <input type="text" name="user_email" className="input-form" placeholder="email" />
        <textarea name="message" className="textarea h-24 input-form" placeholder="your message" />
        <button className="btn-primary btn-md btn w-full" type="submit">
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;

{
  /* <form
ref={formRef}
className="form-control p-8 flex gap-5 items-start shadow-2xl w-full md:w-6/12 xl:w-3/12  rounded-box bg-base-100"
onSubmit={handleSubmit((data, e) => {
  console.log(data);
})}>
<div className="form-control  w-full ">
  <label htmlFor="name" className="mb-2">
    <span className="label-text ">Name {displayError(errors.name?.message)}</span>
  </label>
  <input
    {...register("name", {
      required: " name is required",
      minLength: {
        value: 4,
        message: "name must be atleast 4 characters",
      },
    })}
    id="name"
    className="input-form"
    placeholder="name"
  />
</div>
<div className="form-control  w-full">
  <label htmlFor="email" className="mb-2">
    <span className="label-text">Email {displayError(errors.email?.message)}</span>
  </label>
  <input
    name="user_email"
    id="email"
    className="input-form"
    placeholder="email"
    {...register("email", {
      required: "email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "please enter valid email ",
      },
    })}
  />
</div>
<div className="form-control h-full  w-full">
  <label htmlFor="message" className="mb-2">
    <span className="label-text">Message {displayError(errors.message?.message)}</span>
  </label>
  <textarea
    name="message"
    className="textarea h-24 input-form"
    placeholder="your message"
    {...register("message", {
      required: "message must be atleast 10 characters",
      minLength: { value: 10, message: "message must be 10 characters" },
    })}
  />
</div>
<button className="btn-primary btn-md btn w-full" type="submit">
  Send
</button>
</form> */
}
