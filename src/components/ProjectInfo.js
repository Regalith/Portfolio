import React, { Component } from "react";
import './ProjectInfo.css'
import video from '../videos/DemoReel.mp4';

class ProjectInfo extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    //const medaType = this.props.mediaType;
    const isYoube = this.props.mediaType === "youtube";
    const isVideo = this.props.mediaType === "video";
    const isText = this.props.mediaType === "text";
    const isImage = this.props.mediaType === "image";
    return (
      <div className="projectInfo">
          <h1 className="projectName"> {this.props.projectName} </h1>
          <div className="flex space-x-4 ">
              {isYoube ?
              <div className="video-responsive">
                <iframe
                  width="800"
                  height="480"
                  src={this.props.mediaLink}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
              :
              <div/>
              }
              {isVideo ?
                
                  //<video autoPlay loop muted>
                  <video width="800" height="480" controls >
                    <source src="/videos/Wonderwoman.mp4" type='video/mp4' />
                  </video>
                
              :
              <div/>
              }

              {isText ?
              <div className="text">
              {this.props.mediaLink}
              </div>
              :
              <div/>
              }
              {isImage ?
              <img className="image" src={this.props.mediaLink}/>
              :
              <div/>
              }

              <ul>
                { this.props.work.map(currentElement => (
                  <li>&#8226; {currentElement}</li>
                ))}
              </ul>
          </div>
          
      </div>
    );
  }
}

export default ProjectInfo;