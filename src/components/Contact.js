import React, { Component } from "react";
import "./Contact.css";
class Contact extends Component {
  render() {
    return (
      <div className="about" id="about">
        <h1 className="aboutTitle"> Contact </h1>
          <div className="flex items-center justify-center space-x-8">
            <a href="https://www.linkedin.com/in/tim-bujnevicie-00b34866/" >
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