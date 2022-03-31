import profileImage from "../../assets/fb.jpg";
import Progress from "../inner-sections/Progress";

function About() {
  return (
    <section className=" flex flex-col justify-center items-center py-16 sm:py-32 px-1 lg:h-screen" id="about">
      <h2>Om meg</h2>
      <div className="grid lg:grid-cols-2 md:grid-col-2 sm:grid-cols-1 gap-8 p-4">
        <div className="p-2  flex flex-col items-center text-center" id="about-img">
          <figure>
            <img src={profileImage} alt="ankit soni" className="h-60 w-60 mb-8 mask mask-hexagon  " />
          </figure>
          <div className="max-w-lg">
            <h4>Ankit Soni</h4>
            <p>Bygge state-of-the-art, enkel å bruke, brukervennlige nettsider og applikasjoner er virkelig en lidenskap for meg,</p>
          </div>
        </div>
        <Progress />
      </div>
    </section>
  );
}

export default About;
