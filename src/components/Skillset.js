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
      <div className="w-3/5 mx-auto mt-10 justify-center items-center" id="skillset">
        {isModalOpen  ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="center-text text-3xl font-bold text-gray-950">
                    {currentToolData.toolName}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-3 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => this.setState({ isModalOpen: false })}
                  >
                    X
                  </button>
                </div>
                <div className="relative p-6 flex-auto text-gray-800">
                  <ul>
                    { currentToolData.work.map(currentElement => (
                      <li>&#8226; {currentElement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}


        <h1 className="text-center text-4xl mb-8"> Skillset </h1>

        <div className="w-3/5 mx-auto justify-center items-center">
          <h3 className="text-center text-3xl mb-4">Languages</h3>
          <div className="text-center text-2xl mb-8">
            <ul>
              <li> C++ </li>
              <li> C </li>
              <li> C# </li>
              <li> Java </li>
              <li> Javascript </li>
              <li> Python </li>
            </ul>
          </div>
          

          <h3 className="text-center text-3xl mb-8">Toolsets</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-8">
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