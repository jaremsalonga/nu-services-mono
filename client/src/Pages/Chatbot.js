import React from 'react'
import Chatbody from '../components/chatbody/Chatbody'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../css/Chatbot.css'

function Chat() {
    return (
        <div className="chat-wrapper">
            <Header />
            <div className="chatbot">
                <Chatbody />
            </div>
        </div>
    )
}

export default Chat;