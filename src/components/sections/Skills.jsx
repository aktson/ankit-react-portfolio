import Progress from "../inner-sections/Progress";
import Tabs from "../inner-sections/Tabs";

function Skills() {
  return (
    <section className=" py-16 sm:py-32 px-1 lg:h-screen " id="skills">
      <div className=" max-w-5xl  mx-auto flex flex-col justify-center container">
        <h2 className="text-center mx-auto">Ferdigheter</h2>
        {/* <Progress /> */}
        <Tabs />
      </div>
    </section>
  );
}

export default Skills;
