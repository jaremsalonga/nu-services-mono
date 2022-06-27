import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import './COAH.css'
import Header from '../../Topbar/Topbar'
import Navbar from '../../Sidebar'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../contexts/user/userContext';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { useCookies } from 'react-cookie';
import { countBy } from 'lodash';
import { RiArrowGoBackFill } from 'react-icons/ri'

function COAH() {

    const [state] = React.useContext(UserContext)
    const id = state.user.users_id

    const [cookies] = useCookies(['token']);

    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [contact_no, setContactNo] = useState("");
    const [email, setEmail] = useState("");

    const [studentInfo, setStudentInfo] = useState([]);

    //transfer most reason
    const [total, setTotal] = useState("");
    const [transfer_reason, setTransferReason] = useState("");
    const [counttransfer, setCountTransfer] = useState([]);

    //smartchat
    const [concern_today, setConcernToday] = useState("");
    const [reason, setReason] = useState([])
    //shifting
    const [shifting_reason, setShiftingReason] = useState("");
    const [shiftreason, setShiftReason] = useState([])
    //absence
    const [absence_reason, setAbsenceReason] = useState("");
    const [absencereason, setAbsReason] = useState([])

    //gender preference
    const [gender_preference, setGenderPreference] = useState("");
    const [most_gender, setMostGender] = useState([]);


    let config = {
        headers: { Authorization: `Bearer ${cookies.token}` }
    };

    useEffect(() => {
        Axios.get(`/reports/coah`, config).then((response) => {
            setStudentInfo(response.data);
            // console.log(response.data)
        })

        Axios.get(`/reports/coah/transfer/reason`, config).then((response) => {
            setCountTransfer(response.data);
            // console.log(response.data)
        })

        Axios.get(`/reports/coah/absence/reason`, config).then((response) => {
            setAbsReason(response.data);
            // console.log(response.data)
        })

        Axios.get(`/reports/coah/shifting/reason`, config).then((response) => {
            setShiftReason(response.data);
            // console.log(response.data)
        })

        Axios.get(`/reports/coah/smartchat/reason`, config).then((response) => {
            setReason(response.data);
            // console.log(response.data)
        })

        Axios.get(`/reports/coah/genderpref`, config).then((response) => {
            setMostGender(response.data);
            // console.log(response.data)
        })

    }, [])

    return (
        <div className='coah-wrapper'>
            <Header />
            <Navbar />
            <div className='coah-body'>
                <div className='coah-name'>
                    <h1>
                        <Link to="/reports"><RiArrowGoBackFill color='#aaa' /></Link>
                        College of Allied Health
                    </h1>
                </div>
                <div className='coah-content'>
                    <div className='coah-tables'>
                        <div className='coah-students'>
                            <h3>Students of College of Allied Health</h3>
                        </div>
                        <div className='coah-students-xlsbtn'>
                            <ReactHTMLTableToExcel
                                id="test-tbl-xls-button"
                                className='downloadn-table-xls'
                                table="coah-student-tbl"
                                filename="COAH-Students"
                                sheet="COAH - Students"
                                buttonText="Download as Excel"
                            />
                        </div>
                        <div className='coah-students-body'>
                            <table id='coah-student-tbl'>
                                <thead id='coah-student-tbl'>
                                    <tr>
                                        <th>Full Name</th>
                                        <th>Gender</th>
                                        <th>Address</th>
                                        <th>Contact No.</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                {studentInfo.map((val) => (
                                    <tbody>
                                        <tr>
                                            <td>{val.fullname}</td>
                                            <td>{val.gender}</td>
                                            <td>{val.address}</td>
                                            <td>{val.contact_no}</td>
                                            <td>{val.email}</td>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                    </div>
                    <div className='coah-tables'>
                        <div className='coah-students'>
                            <h3>Most Reasons of Transfering in College of Allied Health</h3>
                        </div>
                        <div className='coah-students-xlsbtn'>
                            <ReactHTMLTableToExcel
                                id="test-tbl-xls-button"
                                className='downloadn-table-xls'
                                table="coah-transfer-tbl"
                                filename="coah-tranfer-reason"
                                sheet="COAH Transfer - Most Reason"
                                buttonText="Download as Excel"
                            />
                        </div>
                        <div className='coah-students-body'>
                            <table id='coah-transfer-tbl'>
                                <thead id='coah-transfer-thead'>
                                    <tr>
                                        <th>Reason of Transferring</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                {counttransfer.map((val) => (
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
                    <div className='coah-tables'>
                        <div className='coah-students'>
                            <h3>Most Reasons of Absence in College of Allied Health</h3>
                        </div>
                        <div className='coah-students-xlsbtn'>
                            <ReactHTMLTableToExcel
                                id="test-tbl-xls-button"
                                className='downloadn-table-xls'
                                table="coah-absence-tbl"
                                filename="coah-absence-reason"
                                sheet="COAH-Absence-Most Reason"
                                buttonText="Download as Excel"
                            />
                        </div>
                        <div className='coah-students-body'>
                            <table id='coah-absence-tbl'>
                                <thead id='coah-absence-thead'>
                                    <tr>
                                        <th>Reason of Absence</th>
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
                    <div className='coah-tables'>
                        <div className='coah-students'>
                            <h3>Most Reasons of Shifting in College of Allied Health</h3>
                        </div>
                        <div className='coah-students-xlsbtn'>
                            <ReactHTMLTableToExcel
                                id="test-tbl-xls-button"
                                className='downloadn-table-xls'
                                table="coah-shift-tbl"
                                filename="coah-shifting-reason"
                                sheet="COAH-Shifting-Most Reason"
                                buttonText="Download as Excel"
                            />
                        </div>
                        <div className='coah-students-body'>
                            <table id='coah-shift-tbl'>
                                <thead id='coah-shift-thead'>
                                    <tr>
                                        <th>Reason of Shifting</th>
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
                    <div className='coah-tables'>
                        <div className='coah-students'>
                            <h3>Most Reasons of Smartchat in College of Allied Health</h3>
                        </div>
                        <div className='coah-students-xlsbtn'>
                            <ReactHTMLTableToExcel
                                id="test-tbl-xls-button"
                                className='downloadn-table-xls'
                                table="coah-smart-tbl"
                                filename="coah-smartchat-reason"
                                sheet="COAH-SmartChat-Most Reason"
                                buttonText="Download as Excel"
                            />
                        </div>
                        <div className='coah-students-body'>
                            <table id='coah-smart-tbl'>
                                <thead id='coah-smart-thead'>
                                    <tr>
                                        <th>Reason of Smart Chat</th>
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
                </div>
            </div>
        </div>
    )
}

export default COAH