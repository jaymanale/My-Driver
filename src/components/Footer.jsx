const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid blackBackground text-white text-center">
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3 my-5">
              <h3>
                <span className="textGradient text-uppercase">
                  Driver for rent
                </span>{" "}
                🚗
              </h3>

              <ul className="list-unstyled">
                <li>
                  We offers a big range of vehicles for all your driving needs.
                  We have the perfect car to meet your needs.
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 my-5">
              <h3>
                <span className="textGradient text-uppercase">Cities</span> 🏬
              </h3>

              <ul className="list-unstyled">
                <li className="fw-medium">Pune</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 my-5">
              <h3>
                <span className="textGradient text-uppercase">
                  Working Hours
                </span>{" "}
                ⌚
              </h3>

              <ul className="list-unstyled">
                <li className="fw-medium">Mon - Fri: 9:00AM - 9:00PM</li>
                <li className="fw-medium">Sat: 9:00AM - 19:00PM</li>
                <li>Sun: Closed</li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 my-5">
              <h3>
                <span className="textGradient text-uppercase">
                  Company Info
                </span>{" "}
                ℹ️
              </h3>
              <ul className="list-unstyled">
                <li>
                  <p className="fw-medium">
                    60 feet road, Near Devkar park,Pimple Gurav Pune-411061
                  </p>
                </li>
                <li>
                  <p className="fw-medium"> 📱 (+91) 81491-18781</p>
                </li>
                <li>
                  <p className="fw-medium"> 📱 (+91) 81491-18782</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
