import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../css/GA/MainHome.css'
import { Link } from 'react-router-dom';
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { FaTrash } from 'react-icons/fa'
import Header from '../../components/GA/Header_ga'
import Navbar from '../../components/GA/Navbar_ga'
import TotalList from './TotalList';



function MainHome() {

  const [announcement_title, setAnnouncementTitle] = useState("");
  const [announcement_description, setAnnouncementDescription] = useState("");
  const [announcementList, setAnnouncementList] = useState([]);


  useEffect(() => {
    Axios.get('http://localhost:3001/announcement/get').then((response) => {
      setAnnouncementList(response.data)
    })
  }, [])


  return (
    <div className="main-home-wrapper">
      <Header />
      <Navbar />
      <div className="mainhome-body">
        <div className="main-home-user-name">
          <h1>Welcome, Archie</h1>
        </div>
 
          <div className="mainhome-totals">
            <div className="mainhome-cards">
              <TotalList />
            </div>
            </div>

        <div className="main-home-contents">
          <h1 id="announcement-main">Announcements</h1>
          {announcementList.map((val) => {
            return (
              <div className="home-announcement-contents">
                <div className="announcement-cards">
                  <div className="announcement-main-header">
                    <h1>{val.announcement_title} </h1>
                    <div className="announcement-option">
                      <div className="announcement-edit">
                        <button className="announcement-editbtn">
                          <HiOutlinePencilAlt size='1.5em' color="gray" />
                        </button>
                      </div>&nbsp;&nbsp;&nbsp;
                      <div className="announcement-del">
                        <button className="announcement-deltbtn">
                          <FaTrash size='1.5em' color="#D22B2B" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="annoucement-main-body">
                    <div className="announcement-desc">
                      <p>{val.announcement_description}</p>
                      <div className="announcement-spacer">&nbsp;</div>
                    </div>
                    <div className="announcement-img">
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default MainHome