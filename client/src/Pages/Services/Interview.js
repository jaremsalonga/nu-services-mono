import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdAdd, MdNavigateNext } from 'react-icons/md'
import '../../css/Interview.css'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { UserContext } from '../../contexts/user/userContext'

function Interview() {

    const [status, setStatus] = useState("");

    const [shiftingList, setShiftingList] = useState([]);
    const [state] = React.useContext(UserContext)
    const id = state.user.users_id

    useEffect(() => {
        Axios.get(`/services/interview/get/${id}`).then((response) => {
            setShiftingList(response.data)
            console.log(response.data)
            // const arr1 = response.data[0];
            // const arr2 = response.data[1]
            // const arr3 = [...arr1, ...arr2]
            // setShiftingList(arr3)
        })
    }, [])

    return (
        <div className="interview-wrapper">
            <Header />
            <Navbar />
            <div className="interview-container">
                <div className="interview-name">
                    <h1>
                        Interviews
                    </h1>
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
                                {shiftingList.map((val, index) => {
                                    return (
                                        <div className="interview-list-contents" key={index}>
                                            <Link to={`/services/interview/${val.route}${val.id}`}>
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