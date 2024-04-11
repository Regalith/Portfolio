import React, { Component } from "react";
import "./Abous.css"
class About extends Component {
  render() {
    return (
      <div className="about" id="about">
        <h1 className="aboutTitle"> About Me </h1>
        <div className="flex items-center">
          <img  className='profilePicture' src={process.env.PUBLIC_URL + "/images/tbujnevicie.png"} alt="Picture of me"/>
          <h3 className="aboutText">
          Hey, I’m Tim, a software engineer living in southern California. I apologize in advance if this website is a little janky. I haven’t
  touched anything javascript or frontend related since back in college, and this is probably running on my frankensteined homelab
  server. Over the years I’ve bounced around working on all sorts of projects, but my favorite topics include, developing the interactive
  media and backend for dark-rides, trying to implement new technologies into useable products, and building out the backend for 
  systems to integrate into game engines like Unreal or C4. (Do people even still use the latter?)  I’ve mostly worked on Unreal projects 
  for the past 8 years, but also developed in Unity, wrote Maya tools, helped write a studio’s Shotgrid pipeline, and dabbled with prototyping 
  user attractions that make use of image based human pose estimation using AI. (Don’t try to track people throwing foam balls in low light
   environments) I enjoy throwing myself at novel problems and coming up with the initial janky solution that I can refine into something 
  passable once it’s finally working.
          </h3>
        </div>
        
      </div>
    );
  }
}

export default About;