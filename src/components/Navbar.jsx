import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary backgroundGradient fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-3 text-white " to="/">
          Driver Call's
        </Link>
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link fw-bold js-scroll-trigger"
                to="/services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold js-scroll-trigger" to="/book">
                Book Now
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-bold js-scroll-trigger" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link fw-bold js-scroll-trigger"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
