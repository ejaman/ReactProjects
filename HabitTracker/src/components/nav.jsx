import React, { PureComponent } from "react";

export default class Nav extends PureComponent {
  render() {
    console.log("nav");
    return (
      <div className="nav">
        <i className="fas fa-thumbtack"></i>
        <span className="nav-title">Habit Tracker</span>
        <span className="nav-count">{this.props.onCount}</span>
      </div>
    );
  }
}
