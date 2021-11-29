import React, { Component } from "react";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <i className="fas fa-thumbtack"></i>
        <span className="nav-title">Habit Tracker</span>
        <span className="nav-count">{this.props.onCount}</span>
      </div>
    );
  }
}
