function Testimonials() {
  return (
    <>
      <section className="testimonials-section bg-light pb-5">
        <div className="container my-5">
          <div className="row">
            <p className="text-center fw-bold mt-5">Review by people</p>
            <h1 className="text-center display-4  fw-bold">
              Client's
              <span className="textGradient"> Testimonials</span>
            </h1>
          </div>
          <div className="row g-2 my-5">
            <div className="col-md-4">
              <div className="card p-3 text-center px-4 p-5 shadow p-3 mb-5 bg-white rounded">
                <div className="user-image">
                  <img
                    src="https://lh3.googleusercontent.com/a-/AD_cMMSpva2rBKiuKv1HmbrqTdaOFxFDZYLuROYcE_Ws=s40-c-c0x00000000-cc-rp-mo-br100"
                    className="rounded-circle"
                    width="80"
                    alt="car-img"
                  />
                </div>

                <div className="user-content">
                  <h5 className="my-3">Onkar Kulkarni ✅</h5>

                  <p>
                    Very much happy and satisfied with the service provided!!!!
                    Bonus Star ⭐ for the punctuality.
                  </p>
                </div>

                <div className="my-1 fw-bold">
                  <span className="h3">⭐</span>
                  <span className="h3">⭐</span>
                  <span className="h3">⭐</span>
                  <span className="h3">⭐</span>
                  <span className="h3">⭐</span>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 text-center px-4 p-5 shadow p-3 mb-5 bg-white rounded">
                <div className="user-image">
                  <img
                    src="https://lh3.googleusercontent.com/a-/AD_cMMTpDEoEwJ4ErwHTfcrapeSwPW1Xz7CU_6EfEWgzcA=s40-c-c0x00000000-cc-rp-mo-br100"
                    className="rounded-circle"
                    width="80"
                    alt="Naresh kumar image"
                  />
                </div>

                <div className="user-content">
                  <h5 className="my-3">Naresh Kumar ✅</h5>

                  <p>
                    One of the best service, very punctual wrt to time.
                    Professional on work.
                  </p>
                </div>

                <div className="my-1 fw-bold">
                  <span className="h3">⭐</span>
                  <span className="h3">⭐</span>
                  <span className="h3">⭐</span>
                  <span className="h3">⭐</span>
                  <span className="h3">⭐</span>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 text-center px-4 p-5 shadow p-3 mb-5 bg-white rounded">
                <div className="user-image">
                  <img
                    src="https://lh3.googleusercontent.com/a-/AD_cMMRbWRQQWPNt1GlqNp6IOTaLofyArVZwzZukmPuF3bA=s40-c-c0x00000000-cc-rp-mo-br100"
                    className="rounded-circle"
                    width="80"
                    alt="Mayur Panchal image"
                  />
                </div>

                <div className="user-content">
                  <h5 className="my-3">Mayur Panchal ✅</h5>

                  <p>
                    professional and punctual, meeting all my expectations. I
                    highly recommended.
                  </p>
                </div>

                <div className="my-1 fw-bold">
                  <span className="h3">⭐</span>
                  <span className="h3">⭐</span>
                  <span className="h3">⭐</span>
                  <span className="h3">⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
