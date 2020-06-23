import React, { Component } from "react";

export default class Addpost extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", info: "", backGroundColor: "white" };
  }

//   Addname = (e) => {
//     this.setState({ name: e.target.value });
//   };

//   Addinfo = (e) => {
//     this.setState({ info: e.target.value });
//   };

  validName = (e) => {
    if (e.target.value == "Orgad") {
      this.setState({ name: e.target.value, backGroundColor: "green" });
    } else {
      this.setState({ name: e.target.value, backGroundColor: "white" });
    }
  };
  validInfo = (e) => {
    if (e.target.value.length > 5) {
      this.setState({ info: (e.target.value = "Error") });
    } else {
      this.setState({ info: e.target.value });
    }
  };

  render() {
    return (
      <div style={{ backgroundColor: this.state.backGroundColor }}>
        <h1>add post</h1>
        <br />
        <input onChange={( this.validName)}type="text"placeholder="name"></input>
        <br />
        <input
          onChange={( this.validInfo)}type="text" placeholder="info"></input>
        <br />
        <button onClick={() => {this.props.Add(this.state.name, this.state.info);}}>Add post</button>
      </div>
    );
  }
}
