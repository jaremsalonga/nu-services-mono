import React, { Component } from 'react'
import ChatList from '../Chatlist/ChatList'
import ChatContent from '../ChatContent/ChatContent'
import UserProfile from '../ChatUserProfile/ChatUserProfile'
import './ChatBody.css'
import Navbar from '../Navbar'

export default class Chatbody extends Component {
    render() {
        return (

            <div className="main_chatbody">
            <ChatList/>
            <ChatContent/>
            </div>

        )
    }

}

