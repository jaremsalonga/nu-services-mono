import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../css/GA/MainHome.css'
import { Link } from 'react-router-dom';
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { FaTrash } from 'react-icons/fa'
import '../../css/GD/Home.css'
import Sidebar from '../../components/GD/Sidebar'
import FeaturedTab from '../../components/GD/FeaturedTab/FeaturedTab'
import Charts from '../../components/GD/chart/Chart'
import { monthData } from '../../components/GD/chart/DummyData'
import Topbar from '../../components/GD/Topbar/Topbar'
import SmallWidget from '../../components/GD/SmallWidget/SmallWidget'
import LargeWidget from '../../components/GD/LargeWidget/LargeWidget'
import { UserContext } from '../../contexts/user/userContext'
import { saveAs } from 'file-saver';
import { useCookies } from 'react-cookie'

import ReactHTMLTableToExcel from 'react-html-table-to-excel';


function Home() {

    const [state] = React.useContext(UserContext)
    const id = state.user.users_id

    const [cookies] = useCookies(['token']);

    const [fullname, setFullname] = useState("");
    const [usernameinfo, setUsernameInfo] = useState([]);



    //smartchat
    const [concern_today, setConcernToday] = useState("");
    const [total, setTotal] = useState("");
    const [reason, setReason] = useState([])
    //shifting
    const [shifting_reason, setShiftingReason] = useState("");
    const [shiftreason, setShiftReason] = useState([])
    //transfer
    const [transfer_reason, setTransferReason] = useState("");
    const [transreason, setTransReason] = useState([])
    //absence
    const [absence_reason, setAbsenceReason] = useState("");
    const [absencereason, setAbsReason] = useState([])

    const [result, setResult] = useState([]);

    let config = {
        headers: { Authorization: `Bearer ${cookies.token}` }
    };


    useEffect(() => {
        Axios.get(`/profile/get/${id}`, config).then((response) => {
            setUsernameInfo(response.data);
            console.log(response.data)
        })

        Axios.get(`/dashboard/smartchat/reason`, config).then((response) => {
            setReason(response.data);
            console.log(response.data)
        })

        Axios.get(`/dashboard/transfer/reason`, config).then((response) => {
            setTransReason(response.data);
            console.log(response.data)
        })

        Axios.get(`/dashboard/absence/reason`, config).then((response) => {
            setAbsReason(response.data);
            console.log(response.data)
        })

        Axios.get(`/dashboard/shift/reason`, config).then((response) => {
            setShiftReason(response.data);
            console.log(response.data)
        })

    }, [])



    return (
        <div className='homeWrapper'>
            <Topbar />
            <Sidebar />
            <div className='home-content'>
                {usernameinfo.map((val, index) => (
                    <div className='dashboard-name'>
                        <h1>Hello, {val.fullname}</h1>
                    </div>
                ))}

                <div className='featured-tab'>
                    <FeaturedTab />
                </div>
                <div className='overall-section'>
                    <div className='common-reason-smartchat'>
                        <h3>Most Reasons of Smart Chat</h3>
                        <div className='smartchat-xlsbtn'>
                            <button id='smartbtn'>Download as XLS</button>
                        </div>
                        <div className='reason-body'>
                            <ReactHTMLTableToExcel
                                id="test-tbl-xls-button"
                                className='downloadn-table-xls'
                                table="emp-table"
                                filename="tablexls"
                                sheet="tablexls"
                                buttonText="Download as Excel"
                            />
                            <table className='smartchat-tbl' id='emp-table'>
                                <thead id='smartchat-thead'>
                                    <tr>
                                        <th>Reason</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                {reason.map((val) => (
                                    <tbody>
                                        <tr>
                                            <td>{val.concern_today}</td>
                                            <td>{val.total}</td>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                    </div>
                    <div className='common-reason-smartchat'>
                        <h3>Most Reasons of Shifting</h3>
                        <div className='smartchat-xlsbtn'>
                            <button id='shiftbtn'>Download as XLS</button>
                        </div>
                        <div className='reason-body'>
                            <table id='shifting-tbl'>
                                <thead id='shifting-thead'>
                                    <tr>
                                        <th>Reason</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                {shiftreason.map((val) => (
                                    <tbody>
                                        <tr>
                                            <td>{val.shifting_reason}</td>
                                            <td>{val.total}</td>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                    </div>
                    <div className='common-reason-smartchat'>
                        <h3>Most Reasons of Transferring</h3>
                        <div className='smartchat-xlsbtn'>
                            <button id='transferbtn'>Download as XLS</button>
                        </div>
                        <div className='reason-body'>
                            <table id='transfer-tbl'>
                                <thead id='transfer-thead'>
                                    <tr>
                                        <th>Reason</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                {transreason.map((val) => (
                                    <tbody>
                                        <tr>
                                            <td>{val.transfer_reason}</td>
                                            <td>{val.total}</td>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                    </div>
                    <div className='common-reason-smartchat'>
                        <h3>Most Reasons of Leave of Absence</h3>
                        <div className='smartchat-xlsbtn'>
                            <button id='absencebtn'>Download as XLS</button>
                        </div>
                        <div className='reason-body'>
                            <table id='absence-tbl'>
                                <thead id='absence-thead'>
                                    <tr>
                                        <th>Reason</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                {absencereason.map((val) => (
                                    <tbody>
                                        <tr>
                                            <td>{val.absence_reason}</td>
                                            <td>{val.total}</td>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                    </div>
                </div>
                <div className='second-dashboard-section'>
                    <SmallWidget />
                    <LargeWidget />
                </div>
                <div className='third-dashboard-section'>

                </div>
            </div>

        </div>
    )
}

export default Home