import React, { Component } from "react";

export default class Habit extends Component {
  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">8</span>
        <button className="habit-btn increase">
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-btn decrease">
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-btn trash">
          <i className="fas fa-trash-alt"></i>
        </button>
      </li>
    );
  }
}
