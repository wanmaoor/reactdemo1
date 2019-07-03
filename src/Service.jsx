import React, {Component, Fragment} from "react";
import ReactDOM from "react-dom";

export default class Service extends Component {
  render(){
   return (
    <Fragment>
      <div>
        <input type="text"/>
        <button>add</button>
      </div>
      <ul>
        <li>酒水</li>
        <li>餐饮</li>
      </ul>
    </Fragment>
   )
  }
}