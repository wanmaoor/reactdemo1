import React, { Component, Fragment } from "react";
import ServiceItem from './ServiceItem';
import axios from 'axios'
export default class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
  }
  render() {
    console.log('rendering - 渲染中...')
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
            ref={(input) => { this.input = input }}
          />
          <button onClick={this.handleClick}>add</button>
        </div>
        <ul
          ref={(ul) => { this.ul = ul }}
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

  componentWillMount() {
    // console.log('1 - componentWillMount - 挂載組件前');
  }

  componentDidMount() {
    // console.log('2 - componentDidMount - 組件挂載后')
    // put axios in there generaly
    axios.get('https://www.easy-mock.com/mock/5d1ec47e97713560f50b613d/reactdemo1/service')
      .then((res) => { 
        console.log(res);
        this.setState({
          list: res.data.data
        })
       })
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log('3 - shouldComponentUpdate - 組件應該會更新') //即便在輸入框輸入内容, 也觸發了shouldComponentUpdate函數
    // return true //必須有返回值, 如果是false則不往下執行
    return true
  }

  componentWillUpdate() {
    // console.log('4 - componentWillUpdate - 組件將更新')
  }

  componentDidUpdate() {
    // console.log('5 - componentDidUpdate - 組件完成更新');
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
    }, () => { console.log(this.ul.querySelectorAll('li').length) }); //操作虚拟DOM是异步操作,打印操作会在虚拟DOM操作完前就执行,所以永远少一个.而放在setState里作为第二个参数的作用是作为回调函数执行异步结果
  };

  deleteClick(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}
