import React, { Component } from "react";
import User from "./user";
export default class Practice extends React.Component {
  constructor() {
    super();
    this.state = { name: "Ram yadav" };
  }
  render() {
    function Parentalert(r) {
      alert(r);
    }
    return (
      <div className="container text-center">
        <p
          onClick={() => {
            this.setState({ name: "krishna yadav" });
          }}
        >
          {this.state.name}
        </p>
        <User show={Parentalert} />
      </div>
    );
  }
}
// <h1> <User1 name={this.state.name}/></h1>
