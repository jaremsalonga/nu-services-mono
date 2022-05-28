import React, { useState } from 'react'
import '../../css/GA/ViewPending.css'
import { IoChevronBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import shia from '../../images/shia.jpg'
import TimePicker from 'react-time-picker';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import PopUpRequest from '../../components/PopUpRequest'

function ViewPending() {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('10:00');
    return (
        <div className="pending-wrapper">
            <div className="pending-container">
                <div className="pending-header">
                    <div className="pending-back-btn">
                        <Link to="/pendingrequests">
                            <IoChevronBackOutline size="4em" id="back-pendingicon" />
                        </Link>
                    </div>
                </div>
                <div className="pending-contents">
                    <div className="pending-student-images">
                        <img src={shia} />
                    </div>
                    <div className="student-pending-name">
                        <h1>Khrysshia Leighn D. Domingo</h1>
                        <p>2018010357</p>
                        <p>College of Computing and Information Technology</p>
                        <p>3rd Yr</p>
                    </div>
                    <div className="student-answ">
                        <p>Times that shifted: 0</p>
                        <p>Shifting from: College of Computing and Information Technology</p>
                        <p>Shifting to: College of Allied Health</p>
                        <p>Reason of Shifting : Change of Interest</p>
                        <p>Reason Description: I suddenly wants to be a doctor.</p>
                        <p>Commitment to the new Program: Ready to face hard time and very commited</p>
                        <p>Contact at: NUGS- domingokd@students.national-u.edu.ph</p>
                        <p>Type of Communication: Chat</p>
                    </div>

                    <div className="schedule-datetime">
                        <div className="set-date">
                            <p>Select Date:</p>
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="set-time">
                            <p>Choose Time:</p>
                            <TimePicker onChange={onChange} value={value} />
                        </div>
                        <button id="view-acceptbtn" onClick={togglePopup}>Accept</button>
                    </div>

                   
                </div>
            </div>
            {isOpen && <PopUpRequest
                content={<>
                    <div className="popup-container">
                        <div className="popup-header"></div>
                        <div className="popup-content">
                            <p>Request Accepted!
                            </p>
                        </div>

                    </div>
                </>}
                handleClose={togglePopup}
            />}
        </div>
    )
}

export default ViewPending
