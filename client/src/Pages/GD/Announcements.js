import React from 'react'
import '../../css/GD/Announcements.css'
import Sidebar from '../../components/GD/Sidebar'
import Topbar from '../../components/GD/Topbar/Topbar'
import CreateAnnouncement from '../../components/GD/Announcement/CreateAnnouncement/CreateAnnouncement'
import ViewAnnouncement from '../../components/GD/Announcement/ViewAnnouncement/ViewAnnouncement'

function Announcements() {
    return (
        <div className='announcementwrapper'>
            <Topbar />
            <Sidebar />
            <div className='announcementContent'>
                <div className='announcementName'>
                    <h1>Announcement</h1>
                </div>
                <div className='announcement-section'>
                    <CreateAnnouncement />
                </div>
                {/* <div className='announcement-section2'>
                <ViewAnnouncement/>
                </div> */}
            </div>
        </div>
    )
}

export default Announcements