import React, { Component, Fragment } from "react";
export default class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["阿斯顿`", "bb"]
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="input service you want"
          />
          <button onClick={this.handleClick}>add</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li
                key={index + item}
                onClick={this.deleteClick.bind(this, index)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
  handleChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };
  handleClick = () => {
    if (!this.state.inputValue) {
      alert("input something");
      return;
    }
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  };
  deleteClick(index) {
    console.log(index);
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}
