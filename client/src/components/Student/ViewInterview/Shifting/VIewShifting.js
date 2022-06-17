import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { UserContext } from '../../../../contexts/user/userContext'
import { HiDocumentDownload } from 'react-icons/hi'
import { RiArrowGoBackFill } from 'react-icons/ri'
import './ViewShifting.css'


function VIewShifting() {

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
        <div className='viewshift-wrapper'>
            <div className='viewshift-container'>
                <div className='viewshift-name'>
                    <h1>Request of Interview for Shifting</h1>
                </div>
                <div className='viewshift-list-container'>
                    {profileInfo.map((val, index) => (
                        <div className='viewshift-list-header'>
                            <div className='viewshift-header-name'>
                                <h1 className='viewshift-user-name'>
                                    <Link to="/services/interview"><RiArrowGoBackFill color='#aaa' /></Link>
                                    &nbsp;{val.fullname}</h1>
                            </div>
                            <div className='viewshift-header-btn'>
                                <button className='viewshift-download-btn'><HiDocumentDownload size="2rem" color="#30408D" /></button>
                            </div>
                        </div>
                    ))}
                    <hr id='viewshift-divider' />
                    <div className='viewshift-list-details-holder'>
                        <div className='viewshift-divs'>
                            <div className='viewshift-divs'>
                                <label><h2 id='viewshift-label'>Status: &nbsp; Pending</h2></label>
                                {/* <h2 id='viewgm-details'>Pending</h2> */}
                            </div>
                            <label><h2 id='viewshift-label'>Count of Shifting: &nbsp;2</h2></label>
                            {/* <h2 id='viewgm-details'>Change of Interest</h2> */}
                        </div>
                        <div className='viewshift-divs'>
                            <label><h2 id='viewshift-label'>Shifting From: &nbsp; 1</h2></label>
                            {/* <h2 id='viewgm-details'>1</h2> */}
                        </div>
                        <div className='viewshift-divs'>
                            <label><h2 id='viewshift-label'>Shifting To: &nbsp; N/A</h2></label>
                            {/* <h2 id='viewgm-details'>N/A</h2> */}
                        </div>
                        <div className='viewshift-divs'>
                            <label><h2 id='viewshift-label'>Reason for Shifting: &nbsp; Archie Salvador</h2></label>
                            {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                        </div>
                        <div className='viewshift-divs'>
                            <label><h2 id='viewshift-label'>Commitment to Shifting: &nbsp; Archie Salvador</h2></label>
                            {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                        </div>
                        <div className='viewshift-divs'>
                            <label><h2 id='viewshift-label'>Type of Contact: &nbsp; Archie Salvador</h2></label>
                            {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                        </div>
                        <div className='viewshift-divs'>
                            <label><h2 id='viewshift-label'>Type of Communication: &nbsp; Archie Salvador</h2></label>
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