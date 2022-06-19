import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { UserContext } from '../../../../contexts/user/userContext'
import { HiDocumentDownload } from 'react-icons/hi'
import { RiArrowGoBackFill } from 'react-icons/ri'
import './ViewShifting.css'
import Header from '../../../Header';
import Navbar from '../../../Navbar';


function VIewShifting() {

    const [state] = React.useContext(UserContext)
    const id = state.user.users_id
    // console.log(state)

    //profile details
    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");

    const [profileInfo, setProfileInfo] = useState({});

    const [shift_course_count, setShiftCourseCount] = useState("");
    const [shift_from, setShiftFrom] = useState("");
    const [shift_to, setShiftTo] = useState("");
    const [shifting_reason, setShiftingReason] = useState("");
    const [reason_explain, setReasonExplain] = useState("");
    const [shifting_commitment, setShiftingCommitment] = useState("");
    const [type_communication, setTypeOfCommunication] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        let shift_id = window.location.pathname.split("/").pop();
        Axios.get(`/services/interview/shift/view/${shift_id}`).then((response) => {
            setProfileInfo(response.data);
            console.log(response.data);
        })
    }, [])

    return (
        <div className='viewshift-wrapper'>
            <Header />
            <Navbar />
            <div className='viewshift-container'>
                <div className='viewshift-name'>
                    <h1>Request of Interview for Shifting</h1>
                </div>
                <div className='viewshift-list-container'>
                    <div className='viewshift-list-header'>
                        <div className='viewshift-header-name'>
                            <h1 className='viewshift-user-name'>
                                <Link to="/services/interview"><RiArrowGoBackFill color='#aaa' /></Link>
                                &nbsp;{profileInfo.fullname}</h1>
                        </div>
                        <div className='viewshift-header-btn'>
                            <button className='viewshift-download-btn'><HiDocumentDownload size="2rem" color="#30408D" /></button>
                        </div>
                    </div>
                    <hr id='viewshift-divider' />
                    <div className='viewshift-list-details-holder'>
                        <div className='viewshift-divs'>
                            <div className='viewshift-divs'>
                                <label><h2 id='viewshift-label'>Status: &nbsp;{profileInfo.status}</h2></label>
                                {/* <h2 id='viewgm-details'>Pending</h2> */}
                            </div>
                            <label><h2 id='viewshift-label'>Count of Shifting: &nbsp;{profileInfo.shift_course_count}</h2></label>
                            {/* <h2 id='viewgm-details'>Change of Interest</h2> */}
                        </div>
                        <div className='viewshift-divs'>
                            <label><h2 id='viewshift-label'>Shifting From: &nbsp;{profileInfo.shift_from}</h2></label>
                            {/* <h2 id='viewgm-details'>1</h2> */}
                        </div>
                        <div className='viewshift-divs'>
                            <label><h2 id='viewshift-label'>Shifting To: &nbsp;{profileInfo.shift_to}</h2></label>
                            {/* <h2 id='viewgm-details'>N/A</h2> */}
                        </div>
                        <div className='viewshift-divs'>
                            <label><h2 id='viewshift-label'>Reason for Shifting: &nbsp;{profileInfo.shifting_reason}</h2></label>
                            {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                        </div>
                        <div className='viewshift-divs'>
                            <label><h2 id='viewshift-label'>Commitment to Shifting: &nbsp;{profileInfo.shifting_commitment}</h2></label>
                            {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                        </div>
                        <div className='viewshift-divs'>
                            <label><h2 id='viewshift-label'>Type of Communication: &nbsp;{profileInfo.type_communication}</h2></label>
                            {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                        </div>
                        <div className='viewshift-divs'>
                            <label><h2 id='viewshift-label'>Date and Time of Interview: &nbsp; TBA</h2></label>
                            {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                        </div>
                    </div>
                </div>
                <div className='viewshift-spacer'></div>
            </div>

        </div>
    )
}

export default VIewShifting