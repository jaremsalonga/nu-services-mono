import React from 'react'
import '../../css/GA/Messages.css'
import Chatbody_ga from '../../components/GA/Chatbody_ga/Chatbody_ga'
import Header_ga from '../../components/GA/Header_ga'
import Navbar_ga from '../../components/GA/Navbar_ga'


function Messages() {
    return (
        <div className="message-wrapper">
            <Header_ga />

            <div className="chatbot">
                <Chatbody_ga />
            </div>
        </div>
    )
}

export default Messages
