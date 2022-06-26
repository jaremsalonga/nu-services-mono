import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { UserContext } from '../../../../contexts/user/userContext'
import { HiDocumentDownload } from 'react-icons/hi'
import { RiArrowGoBackFill } from 'react-icons/ri'
import './ViewTransfer.css'
import Header from '../../../Header';
import Navbar from '../../../Navbar';

function ViewTransfer() {

    const [state] = React.useContext(UserContext)
    const id = state.user.users_id
    // console.log(state)

    //profile details
    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");

    const [profileInfo, setProfileInfo] = useState({});

    const [transfer_reason, setTransferReason] = useState("");
    const [transfer_to, setTransferTo] = useState("");
    const [loc_new_school, setLocNewSchool] = useState("");
    const [new_course, setNewCourse] = useState("");
    const [comment_to_nu, setCommentToNu] = useState("");
    const [permission_info, setPermissionInfo] = useState("");
    const [type_of_comm, setTypeOfComm] = useState("");
    const [status, setStatus] = useState("");
    const [interview_time, setInterviewTime] = useState("")
    const [date, setDate] = useState("");

    useEffect(() => {
        let transferreq_id = window.location.pathname.split("/").pop();
        Axios.get(`/services/interview/transfer/view/${transferreq_id}`).then((response) => {
            setProfileInfo(response.data);
            console.log(response.data);
        })
    }, [])

    return (
        <div className='viewtransfer-wrapper'>
            <Header />
            <Navbar />
            <div className='viewtransfer-container'>
                <div className='viewtransfer-name'>
                    <h1>Request of Interview for Exit to Transfer</h1>
                </div>
                <div className='viewtransfer-list-container'>
                    <div className='viewtransfer-list-header'>
                        <div className='viewtransfer-header-name'>
                            <h1 className='viewtransfer-user-name'>
                                <Link to="/services/interview"><RiArrowGoBackFill color='#aaa' /></Link>
                                &nbsp;{profileInfo.fullname}
                            </h1>
                        </div>
                        <div className='viewtransfer-header-btn'>
                            <button className='viewtransfer-download-btn'><HiDocumentDownload size="2rem" color="#30408D" /></button>
                        </div>
                    </div>
                    <hr id='viewtransfer-divider' />
                    <div className='viewtransfer-list-details-holder'>
                        <div className='viewtransfer-divs'>
                            <div className='viewtransfer-divs'>
                                <label><h2 id='viewtransfer-label'>Status: &nbsp;{profileInfo.status}</h2></label>
                                {/* <h2 id='viewgm-details'>Pending</h2> */}
                            </div>
                            <label><h2 id='viewtransfer-label'>Reason of Transferring: &nbsp;{profileInfo.transfer_reason}</h2></label>
                            {/* <h2 id='viewgm-details'>Change of Interest</h2> */}
                        </div>
                        <div className='viewtransfer-divs'>
                            <label><h2 id='viewtransfer-label'>To what school will you transfer?: &nbsp;{profileInfo.transfer_to}</h2></label>
                            {/* <h2 id='viewgm-details'>1</h2> */}
                        </div>
                        <div className='viewtransfer-divs'>
                            <label><h2 id='viewtransfer-label'>Location of your preferred school: &nbsp;{profileInfo.loc_new_school}</h2></label>
                            {/* <h2 id='viewgm-details'>N/A</h2> */}
                        </div>
                        <div className='viewtransfer-divs'>
                            <label><h2 id='viewtransfer-label'>Course/program you're planning to take: &nbsp;{profileInfo.new_course}</h2></label>
                            {/* <h2 id='viewgm-details'>N/A</h2> */}
                        </div>
                        <div className='viewtransfer-divs'>
                            <label><h2 id='viewtransfer-label'>Other comments and suggestion for NU's further improvement:
                                &nbsp;{profileInfo.comment_to_nu}</h2></label>
                            {/* <h2 id='viewgm-details'>N/A</h2> */}
                        </div>
                        <div className='viewtransfer-divs'>
                            <label><h2 id='viewtransfer-label'>Will you allow us to include your information to the
                                list we will give to the requesting companies/agencies for employment purposes?: &nbsp;{profileInfo.permission_info}</h2></label>
                            {/* <h2 id='viewgm-details'>N/A</h2> */}
                        </div>
                        <div className='viewtransfer-divs'>
                            <label><h2 id='viewtransfer-label'>Type of Communication: &nbsp;{profileInfo.type_of_comm}</h2></label>
                            {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                        </div>
                        <div className='viewtransfer-divs'>
                            <label><h2 id='viewtransfer-label'>Date and Time of Interview: &nbsp; {profileInfo.date} at {profileInfo.interview_time}</h2></label>
                            {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                        </div>
                    </div>
                </div>
                <div className='viewtransfer-spacer'></div>
            </div>

        </div>
    )
}


export default ViewTransfer