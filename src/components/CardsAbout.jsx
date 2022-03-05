import { FaDesktop, FaWhmcs, FaMeteor, FaLightbulb } from "react-icons/fa";

function CardsAbout() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  text-center  justify-center gap-2 p-8 container mx-auto" id="cards">
      <div class="card card-compact bg-base-100 shadow-xl p-2">
        <FaDesktop size={60} className="about-icons" />
        <div class="card-body">
          <h3 class="card-title">Responsive</h3>
          <p>Layouts that will work on any device</p>
        </div>
      </div>
      <div class="card card-compact  bg-base-100 shadow-xl p-2">
        <FaWhmcs size={60} className="about-icons" />
        <div class="card-body">
          <h3 class="card-title">Dynamic</h3>
          <p>Websites don't have to be static. I love making pages come to life</p>
        </div>
      </div>
      <div class="card card-compact  bg-base-100 shadow-xl p-2">
        <FaLightbulb size={60} className="about-icons" />
        <div class="card-body">
          <h3 class="card-title">Intuitive</h3>
          <p>Strong preference for easy to use intiitive UX/UI</p>
        </div>
      </div>
      <div class="card card-compact  bg-base-100 shadow-xl p-2">
        <FaMeteor size={60} className="about-icons" />
        <div class="card-body">
          <h3 class="card-title">Fast</h3>
          <p>Fast load times and lag free interaction, my highest priority</p>
        </div>
      </div>
    </div>
  );
}

export default CardsAbout;
