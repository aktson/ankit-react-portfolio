import profileImage from "../../assets/fb.jpg";
import { FaDesktop, FaWhmcs, FaMeteor, FaLightbulb } from "react-icons/fa";

import { useState } from "react";

function About() {
  return (
    <section className=" flex flex-col justify-center items-center gap-y-16 bg-base-200 lg:h-screen " id="about">
      <h2>About</h2>
      <div className="grid lg:grid-cols-2 md:grid-col-2 sm:grid-cols-1 gap-8 p-4">
        <div className="p-8  flex flex-col items-center text-center">
          <figure>
            <img src={profileImage} alt="ankit soni" className="h-60 w-60 mb-8 mask mask-parallelogram  " />
          </figure>
          <div>
            <h3>Skills and technologies</h3>
            <p>I'm Front-end delveloper student.</p>
            <p> I have serious passion for UI effects and creating dynamic user user experiences.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 p-2 justify-center ">
          <p className=" para-progress">
            HTML <progress className="progress progress-info" value="90" max="100"></progress>
          </p>
          <p className=" para-progress ">
            CSS3 <progress className="progress progress-info" value="70" max="100"></progress>
          </p>
          <p className=" para-progress ">
            Javascript <progress className="progress progress-info" value="60" max="100"></progress>
          </p>
          <p className=" para-progress ">
            ReactJs<progress className="progress progress-info" value="20" max="100"></progress>
          </p>
          <p className=" para-progress ">
            TailwindCSS<progress className="progress progress-info" value="70" max="100"></progress>
          </p>
          <p className=" para-progress ">
            Wordpress rest-api <progress className="progress progress-info" value="70" max="100"></progress>
          </p>
          <p className=" para-progress ">
            AdobeXD<progress className="progress progress-info" value="80" max="100"></progress>
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4  text-center  grid-cols-2 justify-center gap-4 p-8 container">
        <div>
          <FaWhmcs size={60} className=" mx-auto mb-4 text-secondary " />
          <h3 className="text-xl font-bold">Responsive</h3>
          <p>Layouts that will work on any device</p>
        </div>
        <div>
          <FaDesktop size={60} className=" mx-auto  mb-4 text-secondary" />
          <h3 className="text-xl font-bold">Dynamic</h3>
          <p>Websites don't have to static. I love making pages come to life</p>
        </div>
        <div>
          <FaLightbulb size={60} className=" mx-auto  mb-4  text-secondary" />
          <h3 className="text-xl font-bold">Intuitive</h3>
          <p>Strong preference for easy to use intiitive UX/UI</p>
        </div>
        <div>
          <FaMeteor size={60} className=" mx-auto  mb-4  text-secondary" />
          <h3 className="text-xl font-bold">Fast</h3>
          <p>Fast load times and lag free interaction, my highest priority</p>
        </div>
      </div>
    </section>
  );
}

export default About;
