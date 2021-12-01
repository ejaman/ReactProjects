import React, { Component } from "react";
import Add from "./add";
import Habit from "./habit";

export default class Habits extends Component {
  //어떤 습관의 count를 +1할건지 습관을 받아와야함
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleTrash = (habit) => {
    this.props.onTrash(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    console.log("habits");
    return (
      <>
        <Add onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onTrash={this.handleTrash}
            /> // map(habit)을 전달
          ))}
        </ul>
        <button className="habits-reset all" onClick={this.props.onResetAll}>
          Reset all
        </button>
        <button className="habits-reset count" onClick={this.props.onReset}>
          Reset times
        </button>
      </>
    );
  }
}
