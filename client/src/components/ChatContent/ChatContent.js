import React, { Component, useState, createRef, useEffect } from "react";

import './ChatContent.css'
import Avatar from "../../components/Chatlist/Avatar"
import ChatItem from "./ChatItem";
import { FiSend } from 'react-icons/fi'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/database"
import { getFirestore, collection, addDoc, Timestamp, query, orderBy, onSnapshot} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyACsHOHGDXPVmIMuW0u5FQpn2dhbEJMkio",
  authDomain: "nu-service-chat.firebaseapp.com",
  projectId: "nu-service-chat",
  storageBucket: "nu-service-chat.appspot.com",
  messagingSenderId: "470881179277",
  appId: "1:470881179277:web:e5c329b419bc153a1134c4",
  measurementId: "G-N08ZKW85XL"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

console.log(db);

export default class ChatContent extends Component {
    
    messagesEndRef = createRef(null);

    chatItms = [
        {
            key: 1,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3H8MFM0ccomnnbj_Ad9bV6Ky9E4OetHuJfglUIy_PB1vBz6GEoFWhKph-wYj8SpBylRs&usqp=CAU",
            type: "other",
            msg: "Hello, What is your concern for today?",
        },
        {
            key: 2,
            image:
                "https://media-exp1.licdn.com/dms/image/C5103AQEKQKwTQTuM-g/profile-displayphoto-shrink_200_200/0/1571801309136?e=1628726400&v=beta&t=1aZdeahPf3Z2W4ODzHrb6hu_9-t1C_eW3_Jr7PESjAU",
            type: "",
            msg: "I want to request an interview",
        },
        {
            key: 3,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3H8MFM0ccomnnbj_Ad9bV6Ky9E4OetHuJfglUIy_PB1vBz6GEoFWhKph-wYj8SpBylRs&usqp=CAU",
            type: "other",
            msg: "Great! You can request an interview by clicking the services button on the left side and choose from our services.",
        },
        {
            key: 4,
            image:
                "https://media-exp1.licdn.com/dms/image/C5103AQEKQKwTQTuM-g/profile-displayphoto-shrink_200_200/0/1571801309136?e=1628726400&v=beta&t=1aZdeahPf3Z2W4ODzHrb6hu_9-t1C_eW3_Jr7PESjAU",
            type: "",
            msg: "Okay thank you!",
        },
        {
            key: 5,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3H8MFM0ccomnnbj_Ad9bV6Ky9E4OetHuJfglUIy_PB1vBz6GEoFWhKph-wYj8SpBylRs&usqp=CAU",
            type: "other",
            msg: "Anything, mate!",
        },
    ];

    constructor(props) {
        super(props);

        this.state = {
            chat: this.chatItms,
            msg : ''
        };

    }

    scrollToBottom = () => {
        this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    componentDidMount() {
        

        const q = query(collection(db, 'chat'), orderBy('created', 'desc'));

        console.log('mounted', this.state.chat.length);

        onSnapshot(q, (querySnapshot) => {

            this.state.chat = querySnapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }));
        })

        onSnapshot(q, (querySnapshot) => {
            this.setState({
                chat: [...this.state.chat, querySnapshot.docs.pop().data()],
            })
        });
    }

    onStateChange = (e) => {
        this.setState({ msg: e.target.value });
    };

    onClick = (e) => {

        let r = (Math.random() + 1).toString(36).substring(7);

        var chat = {
            key : r,
            msg: this.state.msg,
            created: Timestamp.now()
        }

        addDoc(collection(db, 'chat'), chat);
    };

    render() {
        return (
            <div className="main__chatcontent">
                <div className="content__header">
                    <div className="blocks">
                        <div className="current-chatting-user">
                            <Avatar
                                isOnline="active"
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3H8MFM0ccomnnbj_Ad9bV6Ky9E4OetHuJfglUIy_PB1vBz6GEoFWhKph-wYj8SpBylRs&usqp=CAU"
                            />
                            <p>Chatbot</p>
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
                                <ChatItem
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
                        <button className="btnSendMsg" id="sendMsgBtn" onClick={this.onClick}>
                            <FiSend />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}