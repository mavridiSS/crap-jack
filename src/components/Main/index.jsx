import "./Main.scss";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Main extends Component {
  handleStartGameClick = () => {
    this.props.history.push("/new");
  };

  handleRulesClick = () => {
    this.props.history.push("/rules");
  };

  render() {
    return (
      <div className="main-screen">
        <button onClick={this.handleStartGameClick}>Start game</button>
        <button onClick={this.handleRulesClick}>Rules</button>
      </div>
    );
  }
}

export default withRouter(Main);
