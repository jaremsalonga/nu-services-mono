import React, { Component } from "react";
import './ChatList_ga.css'
import ChatListItems_ga from "./ChatListItems_ga";
import { IoAddOutline } from 'react-icons/io5'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { GoSearch } from 'react-icons/go'


export default class ChatList extends Component {
    allChatUsers = [
        {
            image:
                "https://media-exp1.licdn.com/dms/image/C5103AQEKQKwTQTuM-g/profile-displayphoto-shrink_200_200/0/1571801309136?e=1628726400&v=beta&t=1aZdeahPf3Z2W4ODzHrb6hu_9-t1C_eW3_Jr7PESjAU",
            id: 1,
            name: "Khrysshia Leighn D. Domingo",
            active: false,
            isOnline: true,
        },
        {
            image:
                "https://pbs.twimg.com/profile_images/3059970011/9ad50b80d0631fe4dc75516674dcd1ae.jpeg",
            id: 2,
            name: "Alyssa Nicole O. Ungos",
            active: false,
            isOnline: false,
        },
        {
            image:
                "http://wellbeing-chat.com/THAT/doctor/image/137201127received_2436253013273467.jpeg",
            id: 3,
            name: "Patricia Arcilla",
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
                            <ChatListItems_ga
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
        );
    }
}