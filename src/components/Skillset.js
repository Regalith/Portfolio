import React, { Component } from "react";
import "./Component.css"
import "./Skillset.css"
import toolData from '../data/tools.json';
import Toolset from './Toolset.js';
import SmallModal from './SmallModal.js';

class Skillset extends Component {
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
    const currentToolData = toolData.tools[this.state.index]

    return (
      <div className="component" id="skillset">
        {isModalOpen ?
        
          <SmallModal onClose={() => this.setState({ isModalOpen: false })}>
            <Toolset
              toolName={currentToolData.toolName}
              work={currentToolData.work}
            />
          </SmallModal>
          :
          <div/>
        }


        <h1 className="componentTitle"> Skillset </h1>

        <div className="component">
          <h3 className="componentSubTitle">Languages</h3>
          <div className="languages">
            <ul className="languageUL">
              <li> C++ </li>
              <li> C </li>
              <li> C# </li>
              <li> Java </li>
              <li> Javascript </li>
              <li> Python </li>
            </ul>
          </div>
          

          <h3 className="componentSubTitle">Toolsets</h3>
          <div className="grid grid-cols-4 gap-4 gap-y-8">
                <div className="max-w-40 max-h-40 transform transition duration-500 hover:scale-125 hover:outline hover:z-30 flex justify-center items-center">
                    <img src={process.env.PUBLIC_URL + "/images/UnrealEngine.png"} onClick={() => imageClick(0)} alt="Unreal"/>
                </div>
                <div className="max-w-40 max-h-40 transform transition duration-500 hover:scale-125 hover:outline hover:z-30 flex justify-center items-center">
                    <img src={process.env.PUBLIC_URL + "/images/Unity.png"} onClick={() => imageClick(1)} alt="Unity"/>
                </div>
                <div className="max-w-40 max-h-40 transform transition duration-500 hover:scale-125 hover:outline hover:z-30 flex justify-center items-center">
                    <img src={process.env.PUBLIC_URL + "/images/Maya.png"} onClick={() => imageClick(2)} alt="Maya"/>
                </div>
                <div className="max-w-40 max-h-40 transform transition duration-500 hover:scale-125 hover:outline hover:z-30 flex justify-center items-center">
                    <img src={process.env.PUBLIC_URL + "/images/AndroidStudio.png"} onClick={() => imageClick(3)} alt="Android Studio"/>
                </div>
                <div className="max-w-40 max-h-40 transform transition duration-500 hover:scale-125 hover:outline hover:z-30 flex justify-center items-center">
                    <img src={process.env.PUBLIC_URL + "/images/Photoshop.png"} onClick={() => imageClick(4)} alt="Photoshop"/>
                </div>
                <div className="max-w-40 max-h-40 transform transition duration-500 hover:scale-125 hover:outline hover:z-30 flex justify-center items-center">
                    <img src={process.env.PUBLIC_URL + "/images/Perforce.png"} onClick={() => imageClick(5)} alt="Perforce"/>
                </div>
                <div className="max-w-40 max-h-40 transform transition duration-500 hover:scale-125 hover:outline hover:z-30 flex justify-center items-center">
                    <img src={process.env.PUBLIC_URL + "/images/StereoLabs.png"} onClick={() => imageClick(6)} alt="Stereolabs"/>
                </div>
                <div className="max-w-40 max-h-40 transform transition duration-500 hover:scale-125 hover:outline hover:z-30 flex justify-center items-center">
                    <img src={process.env.PUBLIC_URL + "/images/Shotgrid2.png"} onClick={() => imageClick(7)} alt="Shotgrid"/>
                </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Skillset;