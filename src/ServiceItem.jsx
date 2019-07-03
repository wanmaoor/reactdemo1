import React, { Component } from 'react'

export default class ServiceItem extends Component {

  render() {
    return (
      <div>
        <li onClick={this.handleClick}>{this.props.content}</li>
      </div>
    )
  }
  handleClick = ()=>{
    this.props.deleteItem(this.props.children)
  }
}
