import React, { Component } from "react";
import "./Projects.css"
import Modal from './Modal.js'
import ProjectInfo from './ProjectInfo'
import projectData from '../data/projects.json';
class Projects extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      index : 0
    };
  }

  render() {
    const isModalOpen = this.state.isModalOpen;

    const imageClick = (newIndex) => {
      this.setState(
        { 
          isModalOpen: true,
          index: newIndex
        })
    }
    const currentProjectData = projectData.projects[this.state.index]

    return (
      <div>
          
        {isModalOpen ?
        
          <Modal onClose={() => this.setState({ isModalOpen: false })}>
            <ProjectInfo
              projectName={currentProjectData.projectName}
              mediaType={currentProjectData.mediaType}
              mediaLink={currentProjectData.mediaLink}
              work={currentProjectData.work}
            />
          </Modal>
          :
          <div/>
        }

          <div className="projects" id="projects">
            <h1 className="projectsTitle"> Projects </h1>
            <div className="grid grid-cols-4 gap-4">
                <div className="max-w-72 max-h-32 transform transition duration-500 hover:scale-125 hover:outline hover:z-30 flex justify-center items-center">
                    <img src={process.env.PUBLIC_URL + "/images/Minions.png"} onClick={() => imageClick(0)} alt="Minions"/>
                </div>
                <div className="max-w-72 max-h-32 transform transition duration-500 hover:scale-125 hover:outline hover:z-30 flex justify-center items-center">
                    <img src={process.env.PUBLIC_URL + "/images/Volcanu.png"} onClick={() => imageClick(1)}  alt="Volcanu"/>
                </div>
                <div className="max-w-72 max-h-32 transform transition duration-500 hover:scale-125 hover:outline hover:z-30 flex justify-center items-center">
                    <img src={process.env.PUBLIC_URL + "/images/BFM.png"} onClick={() => imageClick(2)}  alt="BFM"/>
                </div>
                <div className="max-w-72 max-h-32 transform transition duration-500 hover:scale-125 hover:outline hover:z-30 flex justify-center items-center">
                    <img src={process.env.PUBLIC_URL + "/images/Hershey.png"} onClick={() => imageClick(3)} alt="Hershey"/>
                </div>
                <div className="max-w-72 max-h-32 transform transition duration-500 hover:scale-125 hover:outline hover:z-30 flex justify-center items-center">
                    <img src={process.env.PUBLIC_URL + "/images/CritterCam.png"} onClick={() => imageClick(4)} alt="CritterCam"/>
                </div>
                <div className="max-w-72 max-h-32 transform transition duration-500 hover:scale-125 hover:outline hover:z-30 flex justify-center items-center">
                    <img src={process.env.PUBLIC_URL + "/images/WonderWoman.png"} onClick={() => imageClick(5)} alt="WonderWoman"/>
                </div>
                <div className="max-w-72 max-h-32 transform transition duration-500 hover:scale-125 hover:outline hover:z-30 flex justify-center items-center">
                    <img src={process.env.PUBLIC_URL + "/images/Dinosphere.png"} onClick={() => imageClick(6)} alt="Dinosphere"/>
                </div>
                <div className="max-w-72 max-h-32 transform transition duration-500 hover:scale-125 hover:outline hover:z-30 flex justify-center items-center">
                    <img src={process.env.PUBLIC_URL + "/images/PvZ.png"} onClick={() => imageClick(7)} alt="PvZ"/>
                </div>
                <div className="max-w-72 max-h-32 transform transition duration-500 hover:scale-125 hover:outline hover:z-30 flex justify-center items-center">
                    <img src={process.env.PUBLIC_URL + "/images/BatTech.png"} onClick={() => imageClick(8)} alt="BatTech"/>
                </div>
                <div className="max-w-72 max-h-32 transform transition duration-500 hover:scale-125 hover:outline hover:z-30 flex justify-center items-center">
                    <img src={process.env.PUBLIC_URL + "/images/TreasureHunt.png"} onClick={() => imageClick(9)} alt="TreasureHunt"/>
                </div>
            </div>

            <h1 className="smallerProjectsTitle"> Miscellaneous Projects </h1>
            <div className="smallProjectsContainer">
               <ul className="languageUL">
                <li className="languageUL"> Integrated ORB SLAM3 into Unreal via a plugin for a pixel streaming thin client to get around ARCore limitations</li>
                <li className="languageUL"> Created a system for tracking thrown foam balls via stereoscopic cameras to drive Unreal gameplay (Zed)</li>
                <li className="languageUL"> Built a system inside Unreal for compositing Unreal scenes into real life 360 video captures</li>
                <li className="languageUL"> Using a combination of Nvidia Hairworks, Nvidia Ansel, and Unreal to create 360 stereoscopic videos of photorealistic animal</li>
                <li className="languageUL"> Built a Shotgrid implementation that removes the need for a shared studio network drive by replacing it with Perforce </li>
              </ul>
            </div>
          </div>
      </div>
    );
  }
}

export default Projects;