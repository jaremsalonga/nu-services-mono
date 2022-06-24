import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { UserContext } from '../../../../contexts/user/userContext'
import { HiDocumentDownload } from 'react-icons/hi'
import { RiArrowGoBackFill } from 'react-icons/ri'
import './ViewGrad.css'
import Header from '../../../Header';
import Navbar from '../../../Navbar';

function ViewGrad() {

    const [state] = React.useContext(UserContext)
    const id = state.user.users_id
    // console.log(state)

    //profile details
    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");

    const [profileInfo, setProfileInfo] = useState({});

    const [last_ay, setLastAY] = useState("");
    const [last_term, setLastTerm] = useState("");
    const [plan_after_grad, setPlanAfterGrad] = useState("");
    const [comment_to_nu, setCommentToNu] = useState("");
    const [permission_info, setPermissionInfo] = useState("");
    const [type_of_comm, setTypeOfComm] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        let gradreq_id = window.location.pathname.split("/").pop();
        Axios.get(`/services/interview/grad/view/${gradreq_id}`).then((response) => {
            setProfileInfo(response.data);
            console.log(response.data);
        })
    }, [])

    return (
        <div className='viewgrad-wrapper'>
            <Header />
            <Navbar />
            <div className='viewgrad-container'>
                <div className='viewgrad-name'>
                    <h1>Request of Interview for Exit to Gradute</h1>
                </div>
                <div className='viewgrad-list-container'>
                    <div className='viewgrad-list-header'>
                        <div className='viewgrad-header-name'>
                            <h1 className='viewgrad-user-name'>
                                <Link to="/services/interview"><RiArrowGoBackFill color='#aaa' /></Link>
                                &nbsp;{profileInfo.fullname}
                            </h1>
                        </div>
                        <div className='viewgrad-header-btn'>
                            <button className='viewgrad-download-btn'><HiDocumentDownload size="2rem" color="#30408D" /></button>
                        </div>
                    </div>
                    <hr id='viewgrad-divider' />
                    <div className='viewgrad-list-details-holder'>
                        <div className='viewgrad-divs'>
                            <div className='viewgrad-divs'>
                                <label><h2 id='viewgrad-label'>Status: &nbsp; {profileInfo.status}</h2></label>
                                {/* <h2 id='viewgm-details'>Pending</h2> */}
                            </div>
                            <label><h2 id='viewgrad-label'>Last Academic Year Attended: &nbsp;{profileInfo.last_ay}</h2></label>
                            {/* <h2 id='viewgm-details'>Change of Interest</h2> */}
                        </div>
                        <div className='viewgrad-divs'>
                            <label><h2 id='viewgrad-label'>Last Term Attended: &nbsp;{profileInfo.last_term}</h2></label>
                            {/* <h2 id='viewgm-details'>1</h2> */}
                        </div>
                        <div className='viewgrad-divs'>
                            <label><h2 id='viewgrad-label'>What are your plans after you graduate?: &nbsp;{profileInfo.plan_after_grad}</h2></label>
                            {/* <h2 id='viewgm-details'>N/A</h2> */}
                        </div>
                        <div className='viewgrad-divs'>
                            <label><h2 id='viewgrad-label'>Other comments and suggestion for NU's further improvement: &nbsp;{profileInfo.comment_to_nu}</h2></label>
                            {/* <h2 id='viewgm-details'>N/A</h2> */}
                        </div>
                        <div className='viewgrad-divs'>
                            <label><h2 id='viewgrad-label'>Will you allow us to include your information to the list 
                            we will give to the requesting companies/agencies for employment purposes?: &nbsp;{profileInfo.permission_info}</h2></label>
                            {/* <h2 id='viewgm-details'>N/A</h2> */}
                        </div>
                        <div className='viewgrad-divs'>
                            <label><h2 id='viewgrad-label'>Type of Communication: &nbsp;{profileInfo.type_of_comm}</h2></label>
                            {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                        </div>
                        <div className='viewgrad-divs'>
                            <label><h2 id='viewgrad-label'>Date and Time of Interview: &nbsp; {profileInfo.date}</h2></label>
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