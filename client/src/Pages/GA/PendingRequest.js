import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../../css/GA/Request.css";
import shia from '../../images/shia.jpg'
import { BiSearch } from 'react-icons/bi'
import Header from '../../components/GA/Header_ga'
import Navbar from '../../components/GA/Navbar_ga'

function PendingRequest() {

    const [purpose_req, setPurposeReq] = useState("");
    const [number_copy, setNumberCopy] = useState("");
    const [special_instruction, setSpecialInstruct] = useState("");
    const [status, setStatus] = useState("");

    const [goodmoralList, setGoodmoralList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/services/goodmoral/get').then((response) => {
            setGoodmoralList(response.data)
        })
    }, [])


    return (
        <div className="pending-request-wrapper">
            <Header />
            <Navbar />
            <div className="pending-body">
                <div className="pending-name">
                    <h1>Pending Request </h1>
                </div>
                <div className="pending-list">
                <div className="pending-list-content">
                    {goodmoralList.map((val) => {
                        return(
                            <div className="goodmoralreq-list-contents">
                                            <Link to="#">
                                                <div className="goodmoralreq-list-container">
                                                    <div className="goodmoralreq-list-status">
                                                        <h3>{val.status}</h3>
                                                    </div>
                                                    <div className="goodmoralreq-list-name">
                                                        <h3>Request for Certificate of Good Moral for {val.purpose_req}</h3>
                                                    </div>

                                                </div>
                                                <div className="goodmoralreq-list-divider">
                                                    <hr />
                                                </div>
                                            </Link>
                                        </div>
                        )
                    })}
                </div>
                </div>
            </div>
        </div>
    )
}

export default PendingRequest
