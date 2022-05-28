import React from 'react'
import './FeaturedTab.css'
import { BiTime } from 'react-icons/bi'
import { RiMentalHealthLine } from 'react-icons/ri'
import { MdPendingActions, MdOutlinePersonPin } from 'react-icons/md'



function FeaturedTab() {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <span className='featuredTitle'>Counselled</span>
                <div className='featuredContainer'>
                    <span className='featuredIcon'><RiMentalHealthLine size={50} color='red' /></span>
                    <span className='featuredTotal'>108 Student</span>
                </div>
                <span className='featuredTime'> <BiTime className='timeIcon' />Last Update: 10:00 AM </span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Pending Requests</span>
                <div className='featuredContainer'>
                    <span className='featuredIcon'><MdPendingActions size={50} /></span>
                    <span className='featuredTotal'>108 Student</span>
                </div>
                <span className='featuredTime'> <BiTime className='timeIcon' />Last Update: 10:00 AM </span>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>First Timers</span>
                <div className='featuredContainer'>
                    <span className='featuredIcon'><MdOutlinePersonPin size={50} color='green' /></span>
                    <span className='featuredTotal'>108 Student</span>
                </div>
                <span className='featuredTime'> <BiTime className='timeIcon' /> Last Update: 10:00 AM </span>
            </div>
        </div>
    )
}

export default FeaturedTab  