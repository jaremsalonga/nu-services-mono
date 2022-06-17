import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { UserContext } from '../../../../contexts/user/userContext'
import { HiDocumentDownload } from 'react-icons/hi'
import { RiArrowGoBackFill } from 'react-icons/ri'
import './ViewAbsence.css'

function ViewAbsence() {

    const [state] = React.useContext(UserContext)
    const id = state.user.users_id
    // console.log(state)

    //profile details
    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [profileInfo, setProfileInfo] = useState([]);

    useEffect(() => {
        Axios.get(`/profile/get/${id}`).then((response) => {
            setProfileInfo(response.data);
        })
    }, [])

    return (
        <div className='viewabsence-wrapper'>
            <div className='viewabsence-container'>
                <div className='viewabsence-name'>
                    <h1>Request of Interview for Leave of Absence</h1>
                </div>
                <div className='viewabsence-list-container'>
                    {profileInfo.map((val, index) => (
                        <div className='viewabsence-list-header'>
                            <div className='viewabsence-header-name'>
                                <h1 className='viewabsence-user-name'>
                                    <Link to="/services/interview"><RiArrowGoBackFill color='#aaa' /></Link>
                                    &nbsp;{val.fullname}</h1>
                            </div>
                            <div className='viewabsence-header-btn'>
                                <button className='viewabsence-download-btn'><HiDocumentDownload size="2rem" color="#30408D" /></button>
                            </div>
                        </div>
                    ))}
                    <hr id='viewabsence-divider' />
                    <div className='viewabsence-list-details-holder'>
                        <div className='viewabsence-divs'>
                            <div className='viewabsence-divs'>
                                <label><h2 id='viewabsence-label'>Status: &nbsp; Pending</h2></label>
                                {/* <h2 id='viewgm-details'>Pending</h2> */}
                            </div>
                            <label><h2 id='viewabsence-label'>Reason for Leave of Absence: &nbsp;Local Employment</h2></label>
                            {/* <h2 id='viewgm-details'>Change of Interest</h2> */}
                        </div>
                        <div className='viewabsence-divs'>
                            <label><h2 id='viewabsence-label'>Are you going to enroll again in NU?: &nbsp;Yes</h2></label>
                            {/* <h2 id='viewgm-details'>1</h2> */}
                        </div>
                        <div className='viewabsence-divs'>
                            <label><h2 id='viewabsence-label'>Comment to NU: &nbsp; N/A</h2></label>
                            {/* <h2 id='viewgm-details'>N/A</h2> */}
                        </div>
                        <div className='viewabsence-divs'>
                            <label><h2 id='viewabsence-label'>Type of Communication: &nbsp;Chat</h2></label>
                            {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                        </div>
                        <div className='viewabsence-divs'>
                            <label><h2 id='viewabsence-label'>Date and Time of Interview: &nbsp; TBA</h2></label>
                            {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                        </div>
                    </div>
                </div>
                <div className='viewabsence-spacer'></div>
            </div>

        </div>
    )
}

export default ViewAbsence