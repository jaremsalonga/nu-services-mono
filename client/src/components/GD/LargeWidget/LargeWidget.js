import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './LargeWidget.css'

function LargeWidget() {

  const [announcement_title, setAnnouncementTitle] = useState("");
  const [announcement_description, setAnnouncementDescription] = useState("");
  const [announcementList, setAnnouncementList] = useState([]);

  useEffect(() => {
    console.log(sessionStorage.getItem('token'));
    Axios.get('http://localhost:3001/announcement/get').then((response) => {
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