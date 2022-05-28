import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdAdd, MdNavigateNext } from 'react-icons/md'
import Axios from 'axios';
import '../../css/Enrollment.css'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'

function Enrollment() {


    const [siiList, setSiiList] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:3001/services/studentenrollment/get').then((response) => {
            setSiiList(response.data)
        })
    }, [])

    return (
        <div className="enrollment-wrapper">
            <Header />
            <Navbar />
            <div className="enrollment-container">
                <div className="enrollment-name">
                    <h1>Student Individual Inventory</h1>
                </div>
                <div className="enrollment-holder">
                    <div className="enrollment-contents">
                        <div className="enrollment-create-btn">
                            <Link to="/enrollment/enrollmentstudentform">
                                <button><MdAdd />Fill up form</button>
                            </Link>
                        </div>
                        <div className="enrollment-list">
                            <div className="enrollment-status">
                            
                                {siiList.map((val) => {
                                    return (
                                        <div className="enrollment-list-contents">
                                            <Link to="#">
                                                <div className="enrollment-list-container">
                                                    <div className="enrollment-list-status">
                                                        <h3>{val.status}</h3>
                                                    </div>
                                                    <div className="enrollment-list-name">
                                                    <h3>Student Individual Inventory Application</h3>
                                                    </div>
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

export default Enrollment