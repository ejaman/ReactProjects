import React, { Component } from "react";

export default class Habit extends Component {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleTrash = () => {
    this.props.onTrash(this.props.habit);
  };

  render() {
    // console.log(this.props);
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>

        <button className="habit-btn increase" onClick={this.handleIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-btn decrease" onClick={this.handleDecrement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-btn trash" onClick={this.handleTrash}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </li>
    );
  }
}
