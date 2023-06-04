import { Link } from "react-router-dom";
import ContactUsBanner from "../components/ContactUsBanner";
import Footer from "../components/Footer";
import LocalDrive from "./../images/localDrive.svg";
import SameDayReturn from "./../images/sameDayReturn.svg";
import MultipleDayStay from "./../images/multipleDaysStay.svg";
import DropAndPickup from "./../images/dropAndPickup.svg";
import RentCar from "./../images/rentCar.svg";

const Services = () => {
  return (
    <>
      <section className="container my-5">
        <h1 className="text-center display-4  fw-bold textGradient">
          Our Services
        </h1>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 offset-md-3 offset-lg-3">
            <div className="card p-5 text-center px-4 p-5 shadow p-3 mb-5 bg-white rounded">
              <object
                data={LocalDrive}
                className="card-img-top"
                alt="local/ city Drive image"
                type="image/svg+xml"
              ></object>

              <div className="card-body">
                <h3 className="card-title textGradient">
                  Local - Within City (Pune)
                </h3>
                <p className="card-text">
                  You can book a driver for trips for multi-day / few-day trips.
                  e.g. For a long vacation trip, to go to your hometown, for a
                  business trip of a few days, you can choose multiple day's
                  trip option.
                </p>
              </div>
              <div>
                <Link
                  type="button"
                  className=" fw-semibold btn btn-warning px-5 my-1"
                  to="/book"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 offset-md-3 offset-lg-3">
            <div className="card p-5 text-center px-4 p-5 shadow p-3 mb-5 bg-white rounded">
              <object
                data={SameDayReturn}
                className="card-img-top"
                alt="Outstation - same day return image"
                type="image/svg+xml"
              ></object>

              <div className="card-body">
                <h3 className="card-title textGradient">
                  Outstation - Same day Return
                </h3>
                <p className="card-text">
                  Out station trip option starts beyond 50 km from your city.
                  this option is for non-stop same day return trips. by using
                  this option on long distance journeys You can avoid the stress
                  and fatigue which comes due to driving for a long time. Also,
                  when you go out for a weekend holiday, the stress of driving
                  makes you unable to enjoy the moment. that time this option
                  can be great for you. You can also use this option for sudden
                  business trips.
                </p>
              </div>
              <div>
                <Link
                  type="button"
                  className=" fw-semibold btn btn-warning px-5 my-1"
                  to="/book"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 offset-md-3 offset-lg-3">
            <div className="card p-5  text-center px-4 p-5 shadow p-3 mb-5 bg-white rounded">
              <object
                data={MultipleDayStay}
                className="card-img-top"
                alt="Outstation - Multiple Days /Halt image"
                type="image/svg+xml"
              ></object>

              <div className="card-body">
                <h3 className="card-title textGradient">
                  Outstation - Multiple Days /Halt
                </h3>
                <p className="card-text">
                  You can book a driver for trips for multi-day / few-day trips.
                  e.g. For a long vacation trip, to go to your hometown, for a
                  business trip of a few days, you can choose multiple day's
                  trip option.
                </p>
              </div>
              <div>
                <Link
                  type="button"
                  className=" fw-semibold btn btn-warning px-5 my-1"
                  to="/book"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 offset-md-3 offset-lg-3">
            <div className="card p-5 text-center px-4 p-5 shadow p-3 mb-5 bg-white rounded">
              <object
                data={DropAndPickup}
                className="card-img-top"
                alt=" Outstation - Pickup & Drop image"
                type="image/svg+xml"
              ></object>

              <div className="card-body">
                <h3 className="card-title textGradient">
                  Outstation - Pickup & Drop
                </h3>
                <p className="card-text">
                  Drop and pickup Drop and pickup is a one way trip. If you need
                  a driver to drop the vehicle with you from one location to
                  another, you can choose the drop and pickup option.
                </p>
              </div>
              <div>
                <Link
                  type="button"
                  className=" fw-semibold btn btn-warning px-5 my-1"
                  to="/book"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 offset-md-3 offset-lg-3">
            <div className="card p-5 text-center px-4 p-5 shadow p-3 mb-5 bg-white rounded">
              <object
                data={RentCar}
                className="card-img-top"
                alt=" Rent a Car image"
                type="image/svg+xml"
              ></object>

              <div className="card-body">
                <h3 className="card-title textGradient">Rent a Car</h3>
                <p className="card-text">
                  In rent car you can get driver with car option. If you need
                  any type of vehicle to go out of town, we can provide the
                  facility of that vehicle. To book a cab and get rate
                  information, you can get the information you want by selecting
                  the inquiry now option below.
                </p>
              </div>
              <div>
                <Link
                  type="button"
                  className=" fw-semibold btn btn-warning px-5 my-1"
                  to="/book"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactUsBanner />
      <Footer />
    </>
  );
};

export default Services;
