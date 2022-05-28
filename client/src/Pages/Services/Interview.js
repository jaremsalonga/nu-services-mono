import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdAdd, MdNavigateNext } from 'react-icons/md'
import '../../css/Interview.css'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'

function Interview() {

    const [status, setStatus] = useState("");

    const [shiftingList, setShiftingList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/services/interview/get').then((response) => {
            setShiftingList(response.data)
        })
    }, [])

    return (
        <div className="interview-wrapper">
            <Header />
            <Navbar />
            <div className="interview-container">
                <div className="interview-name">
                    <h1>Interviews</h1>
                </div>
                <div className="interview-holder">
                    <div className="interview-contents">
                        <div className="interview-create-btn">
                            <Link to="/interview/requestinterview">
                                <button><MdAdd />Request an Interview</button>
                            </Link>
                        </div>
                        <div className="interview-list">
                            <div className="interview-status">
                                {shiftingList.map((val) => {
                                    return (

                                        <div className="interview-list-contents">
                                            <Link to="#">
                                                <div className="interview-list-container">
                                                    <div className="interview-list-status">
                                                        <h3>{val.status}</h3>
                                                    </div>
                                                    <div className="interview-list-name">
                                                        <h3>Request for Interview for {val.type_interview}</h3>
                                                    </div>

                                                </div>
                                                <div className="interview-list-divider">
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
            </div>
        </div>
    )
}

export default Interview