import ContactUsBanner from "../components/ContactUsBanner";
import Footer from "../components/Footer";

const BookNow = () => {
  return (
    <>
      <section className="container text-center my-5">
        <h1 className=" my-5 pt-5 ">
          <span className="textGradient fw-bold display-3 ">Book now </span>✅
        </h1>
        <iframe
          className="display-fluid embed-responsive-item "
          src="https://docs.google.com/forms/d/e/1FAIpQLSe09rKblSIiML__Cam34xUpq4ZlP4OXudl7ce5dqNRRpsnWjA/viewform?embedded=true"
          height={1000}
          width="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>{" "}
      </section>
      <ContactUsBanner />
      <Footer />
    </>
  );
};

export default BookNow;
