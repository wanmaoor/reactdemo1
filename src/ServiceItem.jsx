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
}

// propType validation
ServiceItem.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
