import React from "react";

const Contact = () => {
  return (
    <div className="main-content">
      <div
        id="contact"
        className="container-fluid h-100 d-flex flex-row text-center"
      >
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <span className="contact-pre-title">What's next ?</span>
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-text">
            Although I'm not currently looking for any new opportunities,
            because I am too busy to save the world. My inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>
        </div>
      </div>
      <div className="col-md-2"></div>
    </div>
  );
};

export default Contact;
