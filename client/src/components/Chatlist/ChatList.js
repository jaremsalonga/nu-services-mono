import React, { Component } from "react";
import './ChatList.css'
import ChatListItems from "./ChatListItems";
import { IoAddOutline } from 'react-icons/io5'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { GoSearch } from 'react-icons/go'
import Navbar from "../Navbar";


export default class ChatList extends Component {
    allChatUsers = [
        {
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3H8MFM0ccomnnbj_Ad9bV6Ky9E4OetHuJfglUIy_PB1vBz6GEoFWhKph-wYj8SpBylRs&usqp=CAU",
            id: 1,
            name: "Chatbot",
            active: false,
            isOnline: true,
        },
        {
            image:
                "https://media-exp1.licdn.com/dms/image/C5603AQEvrUpPaceT4g/profile-displayphoto-shrink_200_200/0/1517393162693?e=1628121600&v=beta&t=25rUyOrbnHo57kENBvEVGnCqKzD1C0sMCnTUvg5GbEY",
            id: 2,
            name: "Archieval S. Salvador",
            active: false,
            isOnline: false,
        },
        {
            image:
                "http://wellbeing-chat.com/THAT/doctor/image/137201127received_2436253013273467.jpeg",
            id: 3,
            name: "Francis Felix V. Lagarto",
            active: false,
            isOnline: false,
        }
    ];
    constructor(props) {
        super(props);
        this.state = {
            allChats: this.allChatUsers,
        };
    }
    render() {
        return (
            <>
                
<Navbar />
                <div className="main_chatlist">

                    <button className="chat_addBtn">
                        <IoAddOutline />
                        <span>New conversation</span>
                    </button>
                    <div className="chatlist_heading">
                        <h2>Chats</h2>
                        <button className="btn-nobg">
                            <BiDotsHorizontalRounded />
                        </button>
                    </div>
                    <div className="chatList_search">
                        <div className="search_wrap">
                            <input type="text" placeholder="Search Here" required />
                            <button className="search-btn">
                                <GoSearch />
                            </button>
                        </div>
                    </div>
                    <div className="chatlist_items">
                        {this.state.allChats.map((item, index) => {
                            return (
                                <ChatListItems
                                    name={item.name}
                                    key={item.id}
                                    animationDelay={index + 1}
                                    active={item.active ? "active" : ""}
                                    isOnline={item.isOnline ? "active" : ""}
                                    image={item.image}
                                />
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
}