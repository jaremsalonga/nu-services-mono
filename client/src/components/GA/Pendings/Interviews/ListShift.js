import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { UserContext } from '../../../../contexts/user/userContext'
import Header from '../../Header_ga'
import Navbar from '../../Navbar_ga'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { HiDocumentDownload } from 'react-icons/hi'
import './ListShift.css'
import { useParams } from 'react-router-dom'
import { saveAs } from 'file-saver';
import { useCookies } from 'react-cookie'

import TimePicker from 'react-time-picker';
import moment from 'moment';

function ListShift() {

    let { id } = useParams();

    const [state] = React.useContext(UserContext);

    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");

    const [profileInfo, setProfileInfo] = useState({});
    const [cookies] = useCookies(['token']);

    const [shift_course_count, setShiftCourseCount] = useState("");
    const [shift_from, setShiftFrom] = useState("");
    const [shift_to, setShiftTo] = useState("");
    const [shifting_reason, setShiftingReason] = useState("");
    const [reason_explain, setReasonExplain] = useState("");
    const [shifting_commitment, setShiftingCommitment] = useState("");
    const [type_communication, setTypeOfCommunication] = useState("");
    const [status, setStatus] = useState("");
    const [value, setInterviewTime] = useState('10:00');
    const [date, setDate] = useState("");

    useEffect(() => {
        let shift_id = window.location.pathname.split("/").pop();
        Axios.get(`/services/interview/shift/view/${shift_id}`).then((response) => {
            setProfileInfo(response.data);
            setInterviewTime(moment(response.data.interview_time ?? '8:00 AM', ["h:mm A"]).format("HH:mm"))
            console.log(response.data);
        })
    }, [])

    let config = {
        headers: { Authorization: `Bearer ${cookies.token}` }
    };

    let download_shift = () => {

        console.log(profileInfo);

        Axios.post('/create-pdf/shift', profileInfo, config)
            .then(() => Axios.get('/fetch-pdf/shift', { responseType: 'blob' }))
            .then((response) => {
                const pdfBlob = new Blob([response.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'Shifting - Request' - { fullname }.pdf)
                console.log(response.data)
            });
    }

    let acceptReq = (event) => {
        event.preventDefault();
        console.log(cookies)
        let shift_id = window.location.pathname.split("/").pop();
        Axios.post(`/viewrequestdetails/shift/approved`, {
            interview_time: moment(value, ["HH:mm"]).format("h:mm A"),
            shift_id
        }, config).then((response) => {
            console.log(response)
        })
    }

    let declineReq = (event) => {
        event.preventDefault();
        console.log(cookies)
        let shift_id = window.location.pathname.split("/").pop();
        Axios.post(`/viewrequestdetails/shift/decline`, {
            status: status,
            shift_id
        }, config).then((response) => {
            console.log(response.data)
        })
    }

    return (
        <div className='pendingviewshift-wrapper'>
            <Header />
            <Navbar />
            <div className='pendingviewshift-container'>
                <div className='pendingviewshift-name'>
                    <h1>
                        <Link to="/pendingrequests/"><RiArrowGoBackFill color='#aaa' /></Link>
                        Request Interview for Shifting
                    </h1>
                </div>
                <div className='pendingviewshift-list-container'>
                    <div className='pendingviewshift-list-header'>
                        <div className='pendingviewshift-header-name'>
                            <h1>{profileInfo.fullname}</h1>
                        </div>
                        <div className='pendingviewshift-header-btn'>
                            <button className='pendingviewshift-download-btn'>
                                <HiDocumentDownload size="2rem" color="#30408D" onClick={download_shift} />
                            </button>
                        </div>
                    </div>

                    <hr id="pendingviewshift-divider" />
                    <div className='pendingviewshift-list-details-holder'>
                        <div className='pendingviewshift-divs'>
                            <label><h2 id='pendingviewshift-label'>Status: &nbsp;{profileInfo.status}</h2></label>
                        </div>
                        <div>
                            <label><h2 id='pendingviewshift-label'>Count of Shifting: &nbsp;{profileInfo.shift_course_count}</h2></label>
                        </div>
                        <div className='pendingviewshift-divs'>
                            <label><h2 id='pendingviewshift-label'>Shifting From: &nbsp;{profileInfo.shift_from}</h2></label>
                        </div>
                        <div className='pendingviewshift-divs'>
                            <label><h2 id='pendingviewshift-label'>Shifting To: &nbsp;{profileInfo.shift_to}</h2></label>
                        </div>
                        <div className='pendingviewshift-divs'>
                            <label><h2 id='pendingviewshift-label'>Reason for Shifting: &nbsp;{profileInfo.shifting_reason}</h2></label>
                        </div>
                        <div className='pendingviewshift-divs'>
                            <label><h2 id='pendingviewshift-label'>Commitment to Shifting: &nbsp;{profileInfo.reason_explain}</h2></label>
                        </div>
                        <div className='pendingviewshift-divs'>
                            <label><h2 id='pendingviewshift-label'>Type of Communication: &nbsp;{profileInfo.type_communication}</h2></label>
                        </div>
                        <div className='pendingviewshift-divs'>
                            <label><h2 id='pendingviewshift-label'>Date and Time of Interview:&nbsp;{profileInfo.date}</h2></label>
                        </div>
                        <div className='pendingviewshift-divs'>
                            <label>
                                <h2 id='pendingviewshift-label'>Time of Interview</h2>
                                <TimePicker onChange={setInterviewTime} value={value} />
                            </label>
                        </div>

                        <div className='pendingviewshift-action-btn'>
                            <div className='pendingviewshift-approved'>
                                <button className='pendingviewshift-approvedbtn' onClick={acceptReq}>APPROVE</button>
                            </div>
                            <div className='pendingviewshift-decline'>
                                <button className='pendingviewshift-declinebtn' onClick={declineReq}>DECLINE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListShift