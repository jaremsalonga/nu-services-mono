import React, { Component } from "react";
import "./ChatUserProfile.css";
import { RiArrowDownSLine } from 'react-icons/ri'

export default class ChatUserProfile extends Component {
    toggleInfo = (e) => {
        e.target.parentNode.classList.toggle("open");
    };
    render() {
        return (
            <div className="main__userprofile">
                <div className="profile__card user__profile__image">
                    <div className="profile__image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3H8MFM0ccomnnbj_Ad9bV6Ky9E4OetHuJfglUIy_PB1vBz6GEoFWhKph-wYj8SpBylRs&usqp=CAU" />
                    </div>
                    <h4>Chatbot</h4>
                    <p>Your friendly robot</p>
                </div>
                {/* <div className="profile__card">
                    <div className="card__header" onClick={this.toggleInfo}>
                        <h4>Information</h4>
                        <RiArrowDownSLine />
                    </div>
                    <div className="card__content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                        ultrices urna a imperdiet egestas. Donec in magna quis ligula
                    </div>
                </div> */}
            </div>
        );
    }
}