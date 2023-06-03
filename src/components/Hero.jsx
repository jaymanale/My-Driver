import { Link } from "react-router-dom";
import Header from "./../images/hero.svg";

const Hero = () => {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
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
                  className=" fw-semibold btn btn-warning"
                  to="/book"
                >
                  Book Now
                </Link>
              </div>
            </div>
            <div className="col-xm-12 col-sm-6 col-lg-6">
              <img src={Header} alt="car-img" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
