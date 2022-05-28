import React, { useEffect, useState } from 'react'
import Axios from 'axios';



function AnnouncementList() {
    const [announcementList, setAnnouncementList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/announcement/get').then((response) => {
            setAnnouncementList(response.data)
        })
    }, [])

    return (
        <div>
            {announcementList.map((val) => {
                return (
                    <h1>Anouncement title: {val.announcement_title}</h1>
                )
            })}
        </div>
    )
}

export default AnnouncementList
