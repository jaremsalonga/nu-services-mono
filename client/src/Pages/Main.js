import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import '../css/Main.css';
import Navbar from '../components/Navbar';
import { BiLike } from 'react-icons/bi';
import chat_icon from '../images/chat_icon.png'
import { FiSend } from 'react-icons/fi';
import ChatBot from 'react-simple-chatbot';
import { UserContext } from '../contexts/user/userContext'

function Main() {

  const [state] = React.useContext(UserContext)
  const id = state.user.users_id

  const [announcement_title, setAnnouncementTitle] = useState("");
  const [announcement_description, setAnnouncementDescription] = useState("");
  const [announcementList, setAnnouncementList] = useState([]);

  const [fullname, setFullname] = useState("");
  const [usernameinfo, setUsernameInfo] = useState([]);

  useEffect(() => {
    Axios.get(`/profile/get/${id}`).then((response) => {
      setUsernameInfo(response.data);

    })
  }, [])

  useEffect(() => {
    console.log(sessionStorage.getItem('token'));
    Axios.get('/announcement/get').then((response) => {
      setAnnouncementList(response.data);

    })
  }, [])

  return (
    <div className="main-wrapper">
      <Header />
      <Navbar />
      <div className="home-body">
      {usernameinfo.map((val, index) => (
        <div className="main-username">
        
          <h1>Welcome, {val.fullname}!</h1>

        </div>
      ))}
        
        <div className="announcement-label">
          <h1>Announcements</h1>
        </div>
        {announcementList.map((val) => {
          return (
            <div className="announcement-contents">
              <div className="announcement-container">
                <div className="announcement-header">
                  <h1>{val.announcement_title} </h1>
                </div>
                <div className="annoucement-body">
                  <div className="announcement-description">
                    <p>{val.announcement_description}</p>
                    <div className="announcement-space">&nbsp;</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* chatbot start */}
      <div className="chatbot_icon"></div>
    </div>
  )
}

export default Main;