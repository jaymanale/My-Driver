import ContactUsBanner from "../components/ContactUsBanner";
import Footer from "../components/Footer";

const BookNow = () => {
  return (
    <>
      <section className="container text-center my-5">
        <h1 className=" display-3  my-3">
          <span className="textGradient">Book now </span>✅
        </h1>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSe09rKblSIiML__Cam34xUpq4ZlP4OXudl7ce5dqNRRpsnWjA/viewform?embedded=true"
          width="640"
          height="800"
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
