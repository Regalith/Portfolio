import React, { Component } from "react";
import './Toolset.css'

class Toolset extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
    return (
      <div className="toolset">
          <h1 className="toolsetName"> {this.props.toolName} </h1>
          <ul>
                { this.props.work.map(currentElement => (
                  <li>&#8226; {currentElement}</li>
                ))}
              </ul>
          <div className="flex space-x-4 ">
              
          </div>
          
      </div>
    );
  }
}

export default Toolset;