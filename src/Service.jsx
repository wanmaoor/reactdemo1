import React, { Component, Fragment } from "react";
export default class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange} placeholder="input service you want"/>
          <button onClick={this.handleClick}>add</button>
        </div>
        <ul>
          <li>酒水</li>
          <li>餐饮</li>
        </ul>
      </Fragment>
    );
  }
  handleChange = (e)=>{
    this.setState({
      inputValue: e.target.value
    })
  }
  handleClick = (e) => {

  }
}
