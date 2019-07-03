import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class ServiceItem extends Component {

  render() {
    return (
        <li onClick={this.handleClick}>{this.props.content}</li>
    )
  }
  handleClick = ()=>{
    this.props.deleteItem(this.props.children)
  }
  // 第一次存在于virtual DOM 裏不會執行, 而後面則會
  // 在子組件執行
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }
}

// propType validation
ServiceItem.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
