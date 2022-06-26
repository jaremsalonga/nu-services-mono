import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Chart.css'
import { UserContext } from '../../../contexts/user/userContext';
import { useParams } from 'react-router-dom'
import { useCookies } from 'react-cookie'

function Chart() {

    let { id } = useParams();

    const [state] = React.useContext(UserContext);

    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");

    const [profileInfo, setProfileInfo] = useState({});
    const [cookies] = useCookies(['token']);

    const [concern_feeling, setConcernFeeling] = useState("");
    const [status, setStatus] = useState("");

    const [reasonlist, setReason] = useState([]);

    let config = {
        headers: { Authorization: `Bearer ${cookies.token}` }
    };

    useEffect(() => {
        Axios.get(`/dashboard/smartchat/reason`).then((response) => {
            setReason(response.data);
            console.log(response.data)
        }, config)

    }, [])


    return (
        <div className='chart-wrapper'>
            <div className='counselled-dl-btn'>
                <button className='dl-counseledbtn'>Download as XLS</button>
            </div>
            <h3 className='chartTitle'>Total Counselled 2022</h3>
            <table className='counselled-tbl' >
                <thead>
                    <tr className='counselled-tr'>
                        <th>Full Name</th>
                        <th>Concern</th>
                        <th>Feelings</th>
                        <th>Type of Contact</th>
                        <th>Type of Communication</th>
                        <th>Approved By</th>
                        <th>Date</th>
                    </tr>
                </thead>
                {reasonlist.map((val, index) => {
                    <tbody>
                        <tr>
                            <td>{val.concern_feeling}</td>
                            <td>Conflict with Fellow Students</td>
                            <td>Confident</td>
                            <td>NUGS</td>
                            <td>Chat</td>
                            <td>Archie Salvador</td>
                            <td>2022-06-25</td>
                        </tr>
                    </tbody>
                })}
            </table>
        </div>
    )
}

export default Chart