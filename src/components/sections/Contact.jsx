import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const displayError = (msg) => {
    if (msg) {
      return <span className="text-error px-2 rounded ">*{msg}</span>;
    } else {
      <span className=""></span>;
    }
  };

  return (
    <section className="flex flex-col items-center gap-4 bg-base-200 lg:h-screen p-8  justify-center" id="contact">
      <h2>Contact me</h2>
      <form
        className="form-control p-8 flex gap-5 items-start w-1/4 shadow-2xl max-w-screen-sm rounded-box bg-base-100"
        onSubmit={handleSubmit((data) => {})}>
        <div className="form-control  w-full ">
          <label htmlFor="name " className="mb-2">
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
      </form>
    </section>
  );
}

export default Contact;
