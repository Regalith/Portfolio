import React, { Component } from "react";
import "./Contact.css";
class Contact extends Component {
  render() {
    return (
      <div className="contact" id="contact">
        <h1 className="contactTitle"> Contact </h1>
          <div className="flex items-center justify-center space-x-8">
            <a href="https://www.linkedin.com/in/tbujnevicie/" >
              <img className="imageLink" src={process.env.PUBLIC_URL + "/images/LinkedIn.png"}/>
            </a>
            <a href="mailto:tbujnevicie@gmail.com">
              <img className="imageLink" src={process.env.PUBLIC_URL + "/images/Email.png"}/>
            </a>
          </div>
      </div>
    );
  }
}

export default Contact;