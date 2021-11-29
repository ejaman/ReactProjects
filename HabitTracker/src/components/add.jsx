import React, { Component } from "react";

export default class Add extends Component {
  // 리액트에선 dom요소 사용 ㄴㄴ 그래서 다른 라액트 요소에 접근하고 싶다면 Ref사용해야함
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault(); // submit되면 refresh됨 그걸 방지하는 코드
    // console.log(this.inputRef.current.value);
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
  };
  render() {
    return (
      <form className="add" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          className="add-bar"
          type="text"
          placeholder="enter habit!"
        ></input>
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    );
  }
}
