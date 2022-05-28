import React, { Component } from "react";
import Avatar_ga from '../Chatlist_ga/Avatar_ga'
import {BiCheckDouble} from 'react-icons/bi'

export default class ChatItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${this.props.user ? this.props.user : ""}`}
      >
        <div className="chat__item__content">
          <div className="chat__msg">{this.props.msg}</div>
          <div className="chat__meta">
            <span>16 mins ago</span>
            <span><BiCheckDouble/> Seen 1:03PM</span>
          </div>
        </div>
        <Avatar_ga isOnline="active" image={this.props.image} />
      </div>
    );
  }
}