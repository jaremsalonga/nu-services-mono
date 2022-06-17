import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { UserContext } from '../../../../contexts/user/userContext'
import { HiDocumentDownload } from 'react-icons/hi'
import { RiArrowGoBackFill } from 'react-icons/ri'
import './ViewTransfer.css'

function ViewTransfer() {

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
        <div className='viewtransfer-wrapper'>
            <div className='viewtransfer-container'>
                <div className='viewtransfer-name'>
                    <h1>Request of Interview for Leave of Absence</h1>
                </div>
                <div className='viewtransfer-list-container'>
                    {profileInfo.map((val, index) => (
                        <div className='viewtransfer-list-header'>
                            <div className='viewtransfer-header-name'>
                                <h1 className='viewtransfer-user-name'>
                                    <Link to="/services/interview"><RiArrowGoBackFill color='#aaa' /></Link>
                                    &nbsp;{val.fullname}</h1>
                            </div>
                            <div className='viewtransfer-header-btn'>
                                <button className='viewtransfer-download-btn'><HiDocumentDownload size="2rem" color="#30408D" /></button>
                            </div>
                        </div>
                    ))}
                    <hr id='viewtransfer-divider' />
                    <div className='viewtransfer-list-details-holder'>
                        <div className='viewtransfer-divs'>
                            <div className='viewtransfer-divs'>
                                <label><h2 id='viewtransfer-label'>Status: &nbsp; Pending</h2></label>
                                {/* <h2 id='viewgm-details'>Pending</h2> */}
                            </div>
                            <label><h2 id='viewtransfer-label'>Reason of Transferring: &nbsp;Local Employment</h2></label>
                            {/* <h2 id='viewgm-details'>Change of Interest</h2> */}
                        </div>
                        <div className='viewtransfer-divs'>
                            <label><h2 id='viewtransfer-label'>To what school will you transfer?: &nbsp;Yes</h2></label>
                            {/* <h2 id='viewgm-details'>1</h2> */}
                        </div>
                        <div className='viewtransfer-divs'>
                            <label><h2 id='viewtransfer-label'>Location of your preferred school: &nbsp; N/A</h2></label>
                            {/* <h2 id='viewgm-details'>N/A</h2> */}
                        </div>
                        <div className='viewtransfer-divs'>
                            <label><h2 id='viewtransfer-label'>Course/program you're planning to take: &nbsp; N/A</h2></label>
                            {/* <h2 id='viewgm-details'>N/A</h2> */}
                        </div>
                        <div className='viewtransfer-divs'>
                            <label><h2 id='viewtransfer-label'>Other comments and suggestion for NU's further improvement: &nbsp; N/A</h2></label>
                            {/* <h2 id='viewgm-details'>N/A</h2> */}
                        </div>
                        <div className='viewtransfer-divs'>
                            <label><h2 id='viewtransfer-label'>Will you allow us to include your information to the list we will give to the requesting companies/agencies for employment purposes?: &nbsp; N/A</h2></label>
                            {/* <h2 id='viewgm-details'>N/A</h2> */}
                        </div>
                        <div className='viewtransfer-divs'>
                            <label><h2 id='viewtransfer-label'>Type of Communication: &nbsp;Chat</h2></label>
                            {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                        </div>
                        <div className='viewtransfer-divs'>
                            <label><h2 id='viewtransfer-label'>Date and Time of Interview: &nbsp; TBA</h2></label>
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