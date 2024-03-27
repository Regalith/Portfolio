import React, { Component } from "react";
import "./Home.css";
import video from '../videos/DemoReel.mp4';

class Home extends Component {
  render() {
    return (
      <div className="video-wrapper">
        <video  autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video>
      </div>
    );
  }
}

export default Home;