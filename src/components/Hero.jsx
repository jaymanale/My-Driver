import { Link } from "react-router-dom";
import HeroCar from "./../images/hero.svg";

const Hero = () => {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container text-center my-5">
          <div className="row">
            <div className="col-xm-12 col-sm-6 col-lg-6 my-auto">
              <div className="hero-content__text">
                <h4 className="fw-semibold">Plan your trip now</h4>
                <h1 className="display-3 fw-bold">
                  Save <span className="textGradient">big</span> with our
                  driver/ car rental
                </h1>
                <p className="fw-light">
                  Rent the car of your dreams. Unbeatable prices, unlimited
                  miles, flexible pick-up options and much more.
                </p>

                <Link
                  type="button"
                  className=" fw-semibold btn btn-warning px-5 my-1"
                  to="/book"
                >
                  Book Now
                </Link>
              </div>
            </div>
            <div className="col-xm-12 col-sm-6 col-lg-6 my-auto">
              <object
                data={HeroCar}
                className="card-img-top"
                alt="Car image"
                type="image/svg+xml"
              ></object>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
