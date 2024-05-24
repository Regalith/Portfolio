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
        <div className="w-3/5 mx-auto mt-10 justify-center items-center" id="projects">
        {isModalOpen  ? (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                            <h3 className="center-text text-3xl font-bold text-gray-950">
                                {currentProjectData.projectName}
                            </h3>
                            <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-3 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => this.setState({ isModalOpen: false })}>
                                X
                            </button>
                        </div>
                        <div className="relative p-6 flex-auto text-gray-800">
                            <div className="grid gap-4 lg:grid-cols-2 items-center">
                                { currentProjectData.mediaType === "youtube" ? 
                                (
                                    <div className=' aspect-video ' >
                                        <iframe 
                                            className=' h-full w-full rounded-lg'
                                            src={currentProjectData.mediaLink} 
                                            width="100%" 
                                            title="YouTube video player" 
                                            frameborder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> 
                                         </iframe>
                                    </div>
                                ) : null}
                                { currentProjectData.mediaType === "video" ? 
                                (
                                    <video width="800" height="480" controls >
                                        <source src="/videos/Wonderwoman.mp4" type='video/mp4' />
                                </video>
                                ) : null}
                                { currentProjectData.mediaType === "text" ? 
                                (
                                   <div className="w-auto">
                                    {currentProjectData.mediaLink}
                                    </div>
                                ) : null}
                                { currentProjectData.mediaType === "image" ? 
                                (
                                    <img className="w-auto" src={currentProjectData.mediaLink}/>
                                ) : null}

                                <ul>

                                { currentProjectData.work.map(currentElement => (
                                    <li>&#8226; {currentElement}</li>
                                ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

            <h1 className="text-center text-3xl mb-4"> Projects </h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
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
    );
  }
}

export default Projects;