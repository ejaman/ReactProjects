import "./app.css";
import Habits from "./components/habits";
import Nav from "./components/nav";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    // 데이터를 가지고 있는 곳이 데이터를 어떻게 수정할지 잘 알고 있는 최적의 장소 그래서 여기서 처리하는게 가장 좋음!
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Coding", count: 0 },
      { id: 3, name: "Chilling", count: 0 },
    ],
  };
  //어떤 습관의 count를 +1할건지 습관을 받아와야함
  handleIncrement = (habit) => {
    // habit.count++; state를 직접 변경하는 것은 좋지 않음
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 0.5 };
      }
      return item;
    });
    this.setState({ habits: habits }); //{habits} 이렇게 써도 ㄱㅊ, key: value-local variable -> state.habits
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 0.5;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    this.setState({ habits: habits });
  };

  handleTrash = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits: habits });
  };

  handleAdd = (name) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits: habits });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits: habits });
  };

  handleResetAll = () => {
    const habits = this.state.habits.filter((item) => item.name === null);
    this.setState({ habits: habits });
  };

  date() {
    const date = new Date();
    const Y = date.getFullYear();
    const M = date.getMonth() + 1;
    const D = date.getDate();
    return `${Y}/${M}/${D}`;
  }

  render() {
    console.log("app");
    return (
      <>
        <Nav
          onCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <span className="today">{this.date()}</span>
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onTrash={this.handleTrash}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
          onResetAll={this.handleResetAll}
        />
      </>
    );
  }
}
