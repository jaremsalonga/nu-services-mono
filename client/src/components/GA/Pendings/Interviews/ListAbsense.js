import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { UserContext } from '../../../../contexts/user/userContext'
import './ListAbsence.css'
import Header from '../../Header_ga'
import Navbar from '../../Navbar_ga'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { HiDocumentDownload } from 'react-icons/hi'
import { useParams } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { saveAs } from 'file-saver';

import TimePicker from 'react-time-picker';
import moment from 'moment';


function ListAbsense() {

    let { id } = useParams();

    const [state] = React.useContext(UserContext);

    //profile details
    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");


    const [profileInfo, setProfileInfo] = useState({});
    const [cookies] = useCookies(['token']);

    const [absence_reason, setAbsenceReason] = useState("");
    const [enroll_again, setEnrollAgain] = useState("");
    const [comment_to_nu, setCommentToNu] = useState("");
    const [type_of_comm, setTypeOfComm] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");
    const [value, setInterviewTime] = useState('10:00');



    useEffect(() => {
        let absencereq_id = window.location.pathname.split("/").pop();
        Axios.get(`/services/interview/absence/view/${absencereq_id}`).then((response) => {
            setProfileInfo(response.data);
            setInterviewTime(moment(response.data.interview_time ?? '8:00 AM', ["h:mm A"]).format("HH:mm"))
            console.log(response.data);
        })
    }, [])


    let acceptReq = (event) => {
        event.preventDefault();
        console.log(cookies)
        let absencereq_id = window.location.pathname.split("/").pop();
        Axios.post(`/viewrequestdetails/absence/approved`, {
            interview_time : moment(value, ["HH:mm"]).format("h:mm A"),
            absencereq_id
        }, config).then((response) => {
            console.log(response.data)
        })
    }

    let declineReq = (event) => {
        event.preventDefault();
        console.log(cookies)
        let absencereq_id = window.location.pathname.split("/").pop();
        Axios.post(`/viewrequestdetails/absence/decline`, {
            status: status,
            absencereq_id
        }, config).then((response) => {
            console.log(response.data)
        })
    }

    let config = {
        headers: { Authorization: `Bearer ${cookies.token}` }
    };


    let download_absence = () => {

        console.log(profileInfo);

        Axios.post('/create-pdf/absence', profileInfo, config)
            .then(() => Axios.get('/fetch-pdf/absence', { responseType: 'blob' }))
            .then((response) => {
                const pdfBlob = new Blob([response.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'Absence - Request' - { fullname }.pdf)
                console.log(response.data)
            });
    }


    return (
        <div className='pendingviewtabsence-wrapper'>
            <Header />
            <Navbar />
            <div className='pendingviewtabsence-container'>
                <div className='pendingviewtabsence-name'>
                    <h1>
                        <Link to="/pendingrequests/"><RiArrowGoBackFill color='#aaa' /></Link>
                        Request Interview for Leave of Absence
                    </h1>
                </div>
                <div className='pendingviewtabsence-list-container'>
                    <div className='pendingviewtabsence-list-header'>
                        <div className='pendingviewtabsence-header-name'>
                            <h1>{profileInfo.fullname}</h1>
                        </div>
                        <div className='pendingviewtabsence-header-btn'>
                            <button className='pendingviewtabsence-download-btn'>
                                <HiDocumentDownload size="2rem" color="#30408D" onClick={download_absence} />
                            </button>
                        </div>
                    </div>

                    <hr id="pendingviewtabsence-divider" />
                    <div className='pendingviewtabsence-list-details-holder'>
                        <div className='viewgm-divs'>
                            <label><h2 id='pendingviewtabsence-label'>Status: &nbsp;{profileInfo.status}</h2></label>
                        </div>
                        <div>
                            <label><h2 id='pendingviewtabsence-label'>Reason for Leaving of Absence: &nbsp;{profileInfo.absence_reason}</h2></label>
                        </div>
                        <div className='pendingviewtabsence-divs'>
                            <label><h2 id='pendingviewtabsence-label'>Are you going to enroll again in NU?: &nbsp;{profileInfo.enroll_again}</h2></label>
                        </div>
                        <div className='pendingviewtabsence-divs'>
                            <label><h2 id='pendingviewtabsence-label'>Comment to NU: &nbsp;{profileInfo.comment_to_nu}</h2></label>
                        </div>
                        <div className='pendingviewtabsence-divs'>
                            <label><h2 id='pendingviewtabsence-label'>Type of Communication: &nbsp;{profileInfo.type_of_comm}</h2></label>
                        </div>
                        <div className='pendingviewtabsence-divs'>
                            <label><h2 id='pendingviewtabsence-label'>Date and Time of Interview:&nbsp;{profileInfo.date}</h2></label>
                        </div>
                        <div className='pendingviewshift-divs'>
                            <label>
                                <h2 id='pendingviewshift-label'>Time of Interview</h2>
                                <TimePicker onChange={setInterviewTime} value={value} />
                            </label>
                        </div>
                        <div className='pendingviewtabsence-action-btn'>
                            <div className='pendingviewtabsence-approved'>
                                <button className='pendingviewtabsence-approvedbtn' onClick={acceptReq}>APPROVE</button>
                            </div>
                            <div className='pendingviewtabsence-decline'>
                                <button className='pendingviewtabsence-declinebtn' onClick={declineReq}>DECLINE</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='pendingviewtabsence-spacer'></div>
            </div>
        </div>
    )
}


export default ListAbsense