import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { UserContext } from '../../../../contexts/user/userContext'
import { HiDocumentDownload } from 'react-icons/hi'
import { RiArrowGoBackFill } from 'react-icons/ri'
import './ViewGrad.css'

function ViewGrad() {

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
        <div className='viewgrad-wrapper'>
            <div className='viewgrad-container'>
                <div className='viewgrad-name'>
                    <h1>Request of Interview for Leave of Absence</h1>
                </div>
                <div className='viewgrad-list-container'>
                    {profileInfo.map((val, index) => (
                        <div className='viewgrad-list-header'>
                            <div className='viewgrad-header-name'>
                                <h1 className='viewgrad-user-name'>
                                    <Link to="/services/interview"><RiArrowGoBackFill color='#aaa' /></Link>
                                    &nbsp;{val.fullname}</h1>
                            </div>
                            <div className='viewgrad-header-btn'>
                                <button className='viewgrad-download-btn'><HiDocumentDownload size="2rem" color="#30408D" /></button>
                            </div>
                        </div>
                    ))}
                    <hr id='viewgrad-divider' />
                    <div className='viewgrad-list-details-holder'>
                        <div className='viewgrad-divs'>
                            <div className='viewgrad-divs'>
                                <label><h2 id='viewgrad-label'>Status: &nbsp; Pending</h2></label>
                                {/* <h2 id='viewgm-details'>Pending</h2> */}
                            </div>
                            <label><h2 id='viewgrad-label'>Last Academic Year Attended: &nbsp;Local Employment</h2></label>
                            {/* <h2 id='viewgm-details'>Change of Interest</h2> */}
                        </div>
                        <div className='viewgrad-divs'>
                            <label><h2 id='viewgrad-label'>Last Term Attended: &nbsp;Yes</h2></label>
                            {/* <h2 id='viewgm-details'>1</h2> */}
                        </div>
                        <div className='viewgrad-divs'>
                            <label><h2 id='viewgrad-label'>What are your plans after you graduate?: &nbsp; N/A</h2></label>
                            {/* <h2 id='viewgm-details'>N/A</h2> */}
                        </div>
                        <div className='viewgrad-divs'>
                            <label><h2 id='viewgrad-label'>Other comments and suggestion for NU's further improvement: &nbsp; N/A</h2></label>
                            {/* <h2 id='viewgm-details'>N/A</h2> */}
                        </div>
                        <div className='viewgrad-divs'>
                            <label><h2 id='viewgrad-label'>Will you allow us to include your information to the list we will give to the requesting companies/agencies for employment purposes?: &nbsp; N/A</h2></label>
                            {/* <h2 id='viewgm-details'>N/A</h2> */}
                        </div>
                        <div className='viewgrad-divs'>
                            <label><h2 id='viewgrad-label'>Type of Communication: &nbsp;Chat</h2></label>
                            {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                        </div>
                        <div className='viewgrad-divs'>
                            <label><h2 id='viewgrad-label'>Date and Time of Interview: &nbsp; TBA</h2></label>
                            {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                        </div>
                    </div>
                </div>
                <div className='viewgrad-spacer'></div>
            </div>

        </div>
    )
}


export default ViewGrad