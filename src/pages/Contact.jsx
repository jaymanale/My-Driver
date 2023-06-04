import ContactUsBanner from "../components/ContactUsBanner";
import Footer from "../components/Footer";
import Instagram from "./../images/social/Instagram.svg";
import Linkedin from "./../images/social/LinkedIN.svg";
import Facebook from "./../images/social/Facebook.svg";
import Youtube from "./../images/social/Youtube.svg";

const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <h1 className="textGradient text-center">contact us</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5928652110215!2d73.82279012579768!3d18.59238513251512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8bc3c339e93%3A0x6d64982e28f8f597!2sDevkar%20Park%2C%20Agrasen%20Nagar%20Society%2C%20Pimple%20Gurav%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411061!5e0!3m2!1sen!2sin!4v1685890264440!5m2!1sen!2sin"
          className="googleMap my-3"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen="Y"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 text-center my-5">
            <h3 className="textGradient mb-3">Contact Info</h3>
            <p>
              <strong>Address:</strong> 60 feet road, near Devkar park, Pimple
              Gurav Pune-411061
            </p>
            <p>
              <strong>Phone:</strong> +91 81491-18781 & +91 81491-18782
            </p>
            <p>
              <strong>Email:</strong>
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 text-center my-5">
            <h3 className="textGradient mb-3">Get Social</h3>
            <div className="mx-auto">
              <object
                data={Instagram}
                className="card-img-top socialIcon mx-2"
                alt="Instagram Social Media icon"
                type="image/svg+xml"
              ></object>
              <object
                data={Facebook}
                className="card-img-top socialIcon  mx-2"
                alt="Facebook Social Media icon"
                type="image/svg+xml"
              ></object>
              <object
                data={Youtube}
                className="card-img-top socialIcon mx-2"
                alt="Youtube Social Media icon"
                type="image/svg+xml"
              ></object>
              <object
                data={Linkedin}
                className="card-img-top socialIcon mx-2"
                alt="Linkedin Social Media icon"
                type="image/svg+xml"
              ></object>
            </div>
          </div>
        </div>
      </div>
      <ContactUsBanner />
      <Footer />
    </>
  );
};

export default Contact;
