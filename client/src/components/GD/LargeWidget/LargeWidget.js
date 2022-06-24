import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { FaTrash } from 'react-icons/fa'
import Axios from 'axios';
import './LargeWidget.css'

function LargeWidget() {

  const [announcement_title, setAnnouncementTitle] = useState("");
  const [announcement_description, setAnnouncementDescription] = useState("");
  const [announcementList, setAnnouncementList] = useState([]);

  useEffect(() => {
    console.log(sessionStorage.getItem('token'));
    Axios.get('/announcement/get').then((response) => {
      setAnnouncementList(response.data);

    })
  }, [])

  return (
    <div className='widgetLg'>
      <span className='widgetLgTitle'>Announcements</span>
      <ul className='widgetLgList'>
        <li className='widgetLgListItem'>
          {announcementList.map((val) => {
            return (
              <div className='widgetLgAnnouncement'>
                <div className='widgetLgAnnouncementContainer'>
                  <div className='widgetLgAnnouncement-header'>
                    <h1>{val.announcement_title}</h1>
                    <div className="announcement-option">
                      <div className="announcement-edit">
                        <Link to='/announcement/edit'>
                          <button className="announcement-editbtn">
                            <HiOutlinePencilAlt size='1.5em' color="gray" />
                          </button>
                        </Link>
                      </div>&nbsp;&nbsp;&nbsp;
                      <div className="announcement-del">
                        <button className="announcement-deltbtn">
                          <FaTrash size='1.5em' color="#D22B2B" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='widgetLgAnnouncement-body'>
                    <div className='widgetLgAnnouncement-desc'>
                      <p>{val.announcement_description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </li>
      </ul>
    </div>
  )
}

export default LargeWidget