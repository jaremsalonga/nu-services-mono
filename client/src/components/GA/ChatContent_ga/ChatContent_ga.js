import React, { Component, useState, createRef, useEffect } from "react";
import './ChatContent_ga.css'
import Avatar_ga from '../Chatlist_ga/Avatar_ga'
import ChatItems_ga from './ChatItems_ga'
import { FiSend } from 'react-icons/fi'

export default class ChatContent extends Component {
    messagesEndRef = createRef(null);
    chatItms = [
        {
            key: 1,
            image:
                "https://media-exp1.licdn.com/dms/image/C5103AQEKQKwTQTuM-g/profile-displayphoto-shrink_200_200/0/1571801309136?e=1628726400&v=beta&t=1aZdeahPf3Z2W4ODzHrb6hu_9-t1C_eW3_Jr7PESjAU",
            type: "other",
            msg: "Hello, Sir",
        },
        {
            key: 2,
            image:
                "https://media-exp1.licdn.com/dms/image/C5603AQEvrUpPaceT4g/profile-displayphoto-shrink_100_100/0/1517393162693?e=1626912000&v=beta&t=QzQPn7erTCrs0p0qwAXPAtlA74UNbjUTLZDn_lwkJJA",
            type: "",
            msg: "Hi, how are you?",
        },
        {
            key: 3,
            image:
                "https://media-exp1.licdn.com/dms/image/C5103AQEKQKwTQTuM-g/profile-displayphoto-shrink_200_200/0/1571801309136?e=1628726400&v=beta&t=1aZdeahPf3Z2W4ODzHrb6hu_9-t1C_eW3_Jr7PESjAU",
            type: "other",
            msg: "I'm not feeling muself for the last 3 weeks",
        },
        {
            key: 4,
            image:
                "https://media-exp1.licdn.com/dms/image/C5603AQEvrUpPaceT4g/profile-displayphoto-shrink_100_100/0/1517393162693?e=1626912000&v=beta&t=QzQPn7erTCrs0p0qwAXPAtlA74UNbjUTLZDn_lwkJJA",
            type: "",
            msg: "I'm here you can talk to me",
        },
        {
            key: 5,
            image:
                "https://media-exp1.licdn.com/dms/image/C5103AQEKQKwTQTuM-g/profile-displayphoto-shrink_200_200/0/1571801309136?e=1628726400&v=beta&t=1aZdeahPf3Z2W4ODzHrb6hu_9-t1C_eW3_Jr7PESjAU",
            type: "other",
            msg: "Okay sir",
        },
    ];

    constructor(props) {
        super(props);
        this.state = {
            chat: this.chatItms,
            msg: "",
        };
    }

    scrollToBottom = () => {
        this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    componentDidMount() {
        window.addEventListener("keydown", (e) => {
            if (e.keyCode == 13) {
                if (this.state.msg != "") {
                    this.chatItms.push({
                        key: 1,
                        type: "",
                        msg: this.state.msg,
                        image:
                            "https://media-exp1.licdn.com/dms/image/C5103AQEKQKwTQTuM-g/profile-displayphoto-shrink_200_200/0/1571801309136?e=1628726400&v=beta&t=1aZdeahPf3Z2W4ODzHrb6hu_9-t1C_eW3_Jr7PESjAU",
                    });
                    this.setState({ chat: [...this.chatItms] });
                    this.scrollToBottom();
                    this.setState({ msg: "" });
                }
            }
        });
        this.scrollToBottom();
    }
    onStateChange = (e) => {
        this.setState({ msg: e.target.value });
    };

    render() {
        return (
            <div className="main__chatcontent">
                <div className="content__header">
                    <div className="blocks">
                        <div className="current-chatting-user">
                            <Avatar_ga
                                isOnline="active"
                                image="https://media-exp1.licdn.com/dms/image/C5103AQEKQKwTQTuM-g/profile-displayphoto-shrink_200_200/0/1571801309136?e=1628726400&v=beta&t=1aZdeahPf3Z2W4ODzHrb6hu_9-t1C_eW3_Jr7PESjAU"
                            />
                            <p>Khrysshia Leighn D. Domingo</p>
                        </div>
                    </div>

                    <div className="blocks">
                        <div className="settings">
                            <button className="btn-nobg">
                                <i className="fa fa-cog"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="content__body">
                    <div className="chat__items">
                        {this.state.chat.map((itm, index) => {
                            return (
                                <ChatItems_ga
                                    animationDelay={index + 2}
                                    key={itm.key}
                                    user={itm.type ? itm.type : "me"}
                                    msg={itm.msg}
                                    image={itm.image}
                                />
                            );
                        })}
                        <div ref={this.messagesEndRef} />
                    </div>
                </div>
                <div className="content__footer">
                    <div className="sendNewMessage">
                        <input
                            type="text"
                            placeholder="Type a message here"
                            onChange={this.onStateChange}
                            value={this.state.msg}
                        />
                        <button className="btnSendMsg" id="sendMsgBtn">
                            <FiSend />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}