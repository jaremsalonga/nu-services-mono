import React, { Component } from 'react'
import './Chatbody_ga.css'
import ChatList_ga from '../Chatlist_ga/ChatList_ga'
import ChatContent_ga from '../ChatContent_ga/ChatContent_ga'
import Navbar_ga from '../Navbar_ga'


export default class Chatbody_ga extends Component {
    render() {
        return (
            <div className="ga_chatbody">
            <Navbar_ga/>
                <ChatList_ga />
                <ChatContent_ga />
            </div>
        )
    }
}

