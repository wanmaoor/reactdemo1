import React, { Component, Fragment } from "react";
import ServiceItem from './ServiceItem';
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
          <label htmlFor="service">add service:</label>
          <input
            id="service"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="input service you want"
            ref={(input) => {this.input = input}}
          />
          <button onClick={this.handleClick}>add</button>
        </div>
        <ul
          ref={(ul)=>{this.ul=ul}}
        >
          {this.state.list.map((item, index) => {
            return (
              <ServiceItem
                content={item}
                key={index + item}
                index={index}
                deleteItem={this.deleteClick.bind(this)}
              />
            );
          })}
        </ul>
      </Fragment>
    );
  }
  handleChange = () => {
    this.setState({
      inputValue: this.input.value
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
    }, ()=>{console.log(this.ul.querySelectorAll('li').length)}); //操作虚拟DOM是异步操作,打印操作会在虚拟DOM操作完前就执行,所以永远少一个.二放在setState里就会让打印操作变为同步式的
  };

  deleteClick(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}
