const Team = () => {
  return (
    <>
      <section>
        <div className="container">
          <h2 className="my-5">
            <span className="textGradient ">Our Team</span> 😎
          </h2>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="card p-3 text-center px-4 p-5 shadow p-3 mb-5 bg-white rounded">
                <div className="user-image">
                  <img
                    src="https://lh3.googleusercontent.com/a-/AD_cMMRbWRQQWPNt1GlqNp6IOTaLofyArVZwzZukmPuF3bA=s40-c-c0x00000000-cc-rp-mo-br100"
                    className="rounded-circle"
                    width="80"
                    alt="Mayur Panchal image"
                  />
                  <h3 className="fw-bold textGradient my-3">Pankaj Dudhal</h3>
                  <p>Founder of Driver Call's</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="card p-3 text-center px-4 p-5 shadow p-3 mb-5 bg-white rounded">
                <div className="user-image">
                  <img
                    src="https://lh3.googleusercontent.com/a-/AD_cMMRbWRQQWPNt1GlqNp6IOTaLofyArVZwzZukmPuF3bA=s40-c-c0x00000000-cc-rp-mo-br100"
                    className="rounded-circle"
                    width="80"
                    alt="Mayur Panchal image"
                  />
                  <h3 className="fw-bold textGradient my-3">Dharaj Zadbuke</h3>
                  <p>Co-Founder of Driver Call's</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
