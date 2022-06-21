import React, { useEffect, useState } from 'react'
import Axios from 'axios';
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

    

    const [fullname, setFullname] = useState("");
    const [type_interview, setTypeInterview] = useState("");
    const [reqInfo, setReqInfo] = ([]);

    

    useEffect(() => {
        Axios.get('/pendingrequest/viewrequestdetails').then((response) => { 
            console.log(response.data);
            setReqInfo(response.data);
           
        })
    }, [])

    return (
        <div className="viewpending-wrapper">
            <div className="viewpending-container">
                <ListGoodMoral />
            </div>
        </div>
    )
}

export default ViewPending
