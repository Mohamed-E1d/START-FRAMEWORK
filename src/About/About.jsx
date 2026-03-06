import React from 'react';
import './About.css'
export default function About() {
  return (
    <main className="about py-5 text-white text-center">
      <div className="container">
        <h2 className="fw-bold text-uppercase">About Component</h2>

        <div className=" d-flex align-items-center justify-content-center my-4">
          <div className="line bg-white me-3"></div>
          <i className="fa-solid fa-star fs-5"></i>
          <div className="line bg-white ms-3"></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-5">
            <p className="about-text">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-5">
            <p className="about-text">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
