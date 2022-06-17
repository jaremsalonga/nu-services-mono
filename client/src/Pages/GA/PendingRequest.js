import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../../css/GA/Request.css";
import shia from '../../images/shia.jpg'
import { BiSearch } from 'react-icons/bi'
import Header from '../../components/GA/Header_ga'
import Navbar from '../../components/GA/Navbar_ga'
import { UserContext } from '../../contexts/user/userContext'
import { MdPendingActions } from 'react-icons/md'
import { RiMentalHealthLine } from 'react-icons/ri'
import { IoIosPeople } from 'react-icons/io'

function PendingRequest() {

    return (
        <div className="pending-request-wrapper">
            <Header />
            <Navbar />
            <div className="pending-body">
                <div className="pending-name">
                    <h1>Pending Requests </h1>
                </div>
                <div className="pending-list">
                    <div className="pending-list-content">
                        <div className='pending-cards'>
                            <div className='pending-info'>
                                <div className='pending-card-title-icon'><IoIosPeople color="#30408D" size="4rem" /></div>
                                <h2 className='pending-card-title'>Good Moral</h2>
                                <div className='pending-total'>
                                    <h3>10</h3>
                                </div>
                            </div>
                        </div>
                        <div className='pending-cards'>
                            <div className='pending-info'>
                                <div className='pending-card-title-icon'><MdPendingActions color='green' size="4rem" /></div>
                                <h2 className='pending-card-title'>Interviews</h2>
                                <div className='pending-total'>
                                    <h3>10</h3>
                                </div>
                            </div>
                        </div>
                        <div className='pending-cards'>
                            <div className='pending-info'>
                                <div className='pending-card-title-icon'><RiMentalHealthLine color="red" size="4rem" /></div>
                                <h2 className='pending-card-title'>Smart Chat</h2>
                                <div className='pending-total'>
                                    <h3>10</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PendingRequest
