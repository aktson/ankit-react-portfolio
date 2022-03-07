import profileImage from "../../assets/fb.jpg";

import Progress from "../Progress";

function About() {
  return (
    <section className=" flex flex-col justify-center items-center py-16 sm:py-32 px-1 lg:h-screen" id="about">
      <h2>About</h2>
      <div className="grid lg:grid-cols-2 md:grid-col-2 sm:grid-cols-1 gap-8 p-4">
        <div className="p-2  flex flex-col items-center text-center" id="about-img">
          <figure>
            <img src={profileImage} alt="ankit soni" className="h-60 w-60 mb-8 mask mask-hexagon  " />
          </figure>
          <div>
            <h3>Skills and technologies</h3>
            <p>I'm Front-end delveloper second year student </p>
            <p> I have serious passion for UI effects and creating dynamic user experiences.</p>
          </div>
        </div>
        <Progress />
      </div>
    </section>
  );
}

export default About;
