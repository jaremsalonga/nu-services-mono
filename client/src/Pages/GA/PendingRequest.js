import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import "../../css/GA/Request.css";
import shia from '../../images/shia.jpg'
import { BiSearch } from 'react-icons/bi'
import Header from '../../components/GA/Header_ga'
import Navbar from '../../components/GA/Navbar_ga'
import { UserContext } from '../../contexts/user/userContext'
import { IoIosPeople } from 'react-icons/io'
import { CgUserList } from 'react-icons/cg'
import { useCookies } from 'react-cookie'

function PendingRequest() {

    const [state] = React.useContext(UserContext)

    const department_id = state.user.department_id;


    const [fullname, setFullname] = useState("");
    const [type_interview, setTypeInterview] = useState("");

    const [cookies] = useCookies(['token']);

    const [reqInfo, setReqInfo] = useState([]);

    let config = {
        headers: { Authorization: `Bearer ${cookies.token}` },
        params: {
            department_id
        }
    };

    useEffect(() => {
        Axios.get(`/pendingrequest`, config).then((response) => {
            console.log(response);
            setReqInfo(response.data);
        })
    }, [])

    let history = useHistory();

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
                    {reqInfo.map((val, index) => (
                            <div className='pending-cards'>
                                <div className='pending-info'>
                                    <div className='pending-card-title-icon'>
                                        <CgUserList color="#30408D" size="3.5rem" />
                                    </div>
                                    <div className='pending-card-title'>
                                        <div className='pending-card-title'>
                                            <h3>{val.type_interview}</h3>
                                            <span id='pending-username'>{val.fullname}</span>
                                        </div>

                                    </div>

                                    <div className='pending-action-btn'>
                                        <Link to={val.route}>VIEW</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='pendingreq-spacer'></div>
            </div>
        </div>
    )
}

export default PendingRequest
