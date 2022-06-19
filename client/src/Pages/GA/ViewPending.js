import React, { useState } from 'react'
import '../../css/GA/ViewPending.css'
import { IoChevronBackOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import shia from '../../images/shia.jpg'
import TimePicker from 'react-time-picker';
import DatePicker from "react-datepicker";
import Header from '../../components/GA/Header_ga'
import Navbar from '../../components/GA/Navbar_ga'

import "react-datepicker/dist/react-datepicker.css";
import PopUpRequest from '../../components/PopUpRequest'
import ListGoodMoral from '../../components/GA/Pendings/GoodMoral/ListGoodMoral'

function ViewPending() {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const [startDate, setStartDate] = useState(new Date());
    const [value, onChange] = useState('10:00');
    return (
        <div className="viewpending-wrapper">
            <div className="viewpending-container">
                <ListGoodMoral />
            </div>
        </div>
    )
}

export default ViewPending
