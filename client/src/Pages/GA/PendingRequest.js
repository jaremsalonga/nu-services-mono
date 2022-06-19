import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "../../css/GA/Request.css";
import shia from '../../images/shia.jpg'
import { BiSearch } from 'react-icons/bi'
import Header from '../../components/GA/Header_ga'
import Navbar from '../../components/GA/Navbar_ga'
import { UserContext } from '../../contexts/user/userContext'
import { MdPendingActions } from 'react-icons/md'
import { RiMentalHealthLine } from 'react-icons/ri'
import { IoIosPeople } from 'react-icons/io'
import { CgUserList } from 'react-icons/cg'

function PendingRequest() {
    let history = useHistory();

    const openReq = () => {
        history.push("/pendingrequests/viewrequestdetails");
    }

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
                                <div className='pending-card-title-icon'>
                                    <CgUserList color="#30408D" size="3.5rem" />
                                </div>
                                <div className='pending-card-title'>
                                    <div className='pending-card-title'>
                                        <h2>Smart Chat</h2>
                                        <span>Khrysshia Domingo</span>
                                    </div>

                                </div>

                                <div className='pending-action-btn'>
                                    <button onClick={openReq} className='pending-view'>VIEW</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className='pending-cards'>
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
                                <h2 className='pending-card-title'>Interviews for Shifting</h2>
                                <div className='pending-total'>
                                    <h3>10</h3>
                                </div>
                            </div>
                        </div>
                        <div className='pending-cards'>
                            <div className='pending-info'>
                                <div className='pending-card-title-icon'><MdPendingActions color='green' size="4rem" /></div>
                                <h2 className='pending-card-title'>Interviews for Exit to Graduate</h2>
                                <div className='pending-total'>
                                    <h3>10</h3>
                                </div>
                            </div>
                        </div>
                        <div className='pending-cards'>
                            <div className='pending-info'>
                                <div className='pending-card-title-icon'><MdPendingActions color='green' size="4rem" /></div>
                                <h2 className='pending-card-title'>Interviews for Exit to Transfer</h2>
                                <div className='pending-total'>
                                    <h3>10</h3>
                                </div>
                            </div>
                        </div>
                        <div className='pending-cards'>
                            <div className='pending-info'>
                                <div className='pending-card-title-icon'><MdPendingActions color='green' size="4rem" /></div>
                                <h2 className='pending-card-title'>Interviews for Leave of Absence</h2>
                                <div className='pending-total'>
                                    <h3>10</h3>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='pendingreq-spacer'></div>
            </div>
        </div>
    )
}

export default PendingRequest
