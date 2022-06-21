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

function ListAbsense() {

    let { id } = useParams();

    const [state] = React.useContext(UserContext);

    //profile details
    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");

    const [profileInfo, setProfileInfo] = useState({});

    const [absence_reason, setAbsenceReason] = useState("");
    const [enroll_again, setEnrollAgain] = useState("");
    const [comment_to_nu, setCommentToNu] = useState("");
    const [type_of_comm, setTypeOfComm] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        let transferreq_id = window.location.pathname.split("/").pop();
        Axios.get(`/services/interview/absence/view/${transferreq_id}`).then((response) => {
            setProfileInfo(response.data);
            console.log(response.data);
        })
    }, [])


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
                                <HiDocumentDownload size="2rem" color="#30408D" />
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
                        <div className='pendingviewtabsence-action-btn'>
                            <div className='pendingviewtabsence-approved'>
                                <button className='pendingviewtabsence-approvedbtn'>APPROVE</button>
                            </div>
                            <div className='pendingviewtabsence-decline'>
                                <button className='pendingviewtabsence-declinebtn'>DECLINE</button>
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