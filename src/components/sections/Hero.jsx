import { Link } from "react-scroll";

function Hero() {
  return (
    <>
      <section id="hero">
        <div className="hero min-h-screen ">
          <div className="text-center hero-content">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">
                Hello, I'm <span className="text-primary">Ankit Soni</span>
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae
                et a id nisi.
              </p>
              <Link className="btn btn-primary" to="about" smooth={true} duration={500}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
