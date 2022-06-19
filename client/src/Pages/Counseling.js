import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdAdd, MdNavigateNext } from 'react-icons/md'
import '../css/Counseling.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { UserContext } from '../contexts/user/userContext'


function Counseling() {

    const [state] = React.useContext(UserContext)
    const id = state.user.users_id
    console.log(state)

    const [concern_today, setConcernToday] = useState("");
    const [status, setStatus] = useState("");
    const [smartchatlist, setSmartChatList] = useState([]);

    useEffect(() => {
        Axios.get(`/counseling/get/${id}`).then((response) => {
            setSmartChatList(response.data)
        })
    }, [])

    return (
        <div className="counseling-wrapper">
            <Header />
            <Navbar />
            <div className="counseling-container">
                <div className="counseling-name">
                    <h1>NU Guidance Smart Chats</h1>
                </div>
                <div className="counseling-holder">
                    <div className="counseling-contents">
                        <div className="counseling-create-btn">
                            <Link to="/counseling/consent">
                                <button><MdAdd />Request SmartChat</button>
                            </Link>
                        </div>
                        <div className="counseling-list">
                            <div className="counseling-status">
                                {smartchatlist.map((val) => {
                                    return (
                                        <div className="counseling-list-consents">
                                            <Link to={`/counseling/view/${val.smartchat_id}`}>
                                                <div className="counseling-list-container">
                                                    <div className="counseling-list-status">
                                                        <h3>{val.status}</h3>
                                                    </div>
                                                    <div className="counseling-list-name">
                                                        <h3>Smart Chat Concern with {val.concern_today}</h3>
                                                    </div>
                                                    <div className="counseling-list-divider">
                                                        <hr />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counseling