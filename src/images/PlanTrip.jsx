import CarSelect from "./../images/carSelect.svg";
import ContactOperator from "./../images/contactOperator.svg";
import LetsDrive from "./../images/letsDrive.svg";

const PlanTrip = () => {
  return (
    <>
      <section>
        <div className="container my-5">
          <div className="row">
            <p className="text-center fw-bold">Plan your trip now</p>
            <h1 className="text-center display-4  fw-bold">
              <span className="textGradient">Quick & easy </span> Driver/ car
              rental
            </h1>
          </div>
          <div className="row my-5">
            <div className="col-sm-12 col-md-4 col-lg-4 my-5 text-center">
              <img className="imageSize" src={CarSelect} alt="select car" />
              <h3 className="textGradient mt-1">Select Car</h3>
              <p>
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs
              </p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 my-5 text-center">
              <img
                className="imageSize"
                src={ContactOperator}
                alt="select car"
              />
              <h3 className="textGradient mt-1">Contact Operator</h3>
              <p>
                Our knowledgeable and friendly operators are always ready to
                help with any questions or concerns
              </p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 my-5 text-center">
              <img className="imageSize" src={LetsDrive} alt="select car" />
              <h3 className="textGradient mt-1">Let's Drive</h3>
              <p>
                Whether you're hitting the open road, we've got you covered with
                our wide range of cars
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlanTrip;
