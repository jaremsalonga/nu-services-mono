import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { UserContext } from '../../../../contexts/user/userContext'
import './ListGrad.css'
import Header from '../../Header_ga'
import Navbar from '../../Navbar_ga'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { HiDocumentDownload } from 'react-icons/hi'
import { useParams } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { saveAs } from 'file-saver';


import TimePicker from 'react-time-picker';
import moment from 'moment';

function ListGrad() {

    let { id } = useParams();

    const [state] = React.useContext(UserContext);

    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");

    const [profileInfo, setProfileInfo] = useState({});
    const [cookies] = useCookies(['token']);

    const [last_ay, setLastAY] = useState("");
    const [last_term, setLastTerm] = useState("");
    const [plan_after_grad, setPlanAfterGrad] = useState("");
    const [comment_to_nu, setCommentToNu] = useState("");
    const [permission_info, setPermissionInfo] = useState("");
    const [type_of_comm, setTypeOfComm] = useState("");
    const [status, setStatus] = useState("");

    const [interview_time, setInterviewTimes] = useState("");
    const [value, setInterviewTime] = useState('10:00');


    useEffect(() => {
        let gradreq_id = window.location.pathname.split("/").pop();
        Axios.get(`/services/interview/grad/view/${gradreq_id}`).then((response) => {
            setProfileInfo(response.data);
            console.log(response.data);
            setInterviewTime(moment(response.data.interview_time ?? '8:00 AM', ["h:mm A"]).format("HH:mm"))
        })
    }, [])

    let acceptReq = (event) => {
        event.preventDefault();
        console.log(cookies)
        let gradreq_id = window.location.pathname.split("/").pop();
        Axios.post(`/viewrequestdetails/grad/approved`, {
            interview_time: moment(value, ["HH:mm"]).format("h:mm A"),
            gradreq_id
        }, config).then((response) => {
            console.log(response.data)
        })
    }

    let declineReq = (event) => {
        event.preventDefault();
        console.log(cookies)
        let gradreq_id = window.location.pathname.split("/").pop();
        Axios.post(`/viewrequestdetails/grad/decline`, {
            status: status,
            gradreq_id
        }, config).then((response) => {
            console.log(response.data)
        })
    }

    let config = {
        headers: { Authorization: `Bearer ${cookies.token}` }
    };

    let download_grad = () => {

        console.log(profileInfo);

        Axios.post('/create-pdf/grad', profileInfo, config)
            .then(() => Axios.get('/fetch-pdf/grad', { responseType: 'blob' }))
            .then((response) => {
                const pdfBlob = new Blob([response.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'Exit - to - Graduate - Request' - { fullname }.pdf)
                console.log(response.data)
            });
    }

    return (
        <div className='pendingviewgrad-wrapper'>
            <Header />
            <Navbar />
            <div className='pendingviewgrad-container'>
                <div className='pendingviewgrad-name'>
                    <h1>
                        <Link to="/pendingrequests/"><RiArrowGoBackFill color='#aaa' /></Link>
                        Request Interview for Exit to Transfer
                    </h1>
                </div>
                <div className='pendingviewgrad-list-container'>
                    <div className='pendingviewgrad-list-header'>
                        <div className='pendingviewgrad-header-name'>
                            <h1>{profileInfo.fullname}</h1>
                        </div>
                        <div className='pendingviewgrad-header-btn'>
                            <button className='pendingviewgrad-download-btn'>
                                <HiDocumentDownload size="2rem" color="#30408D" onClick={download_grad} />
                            </button>
                        </div>
                    </div>
                    <hr id="pendingviewgrad-divider" />
                    <div className='pendingviewgrad-list-details-holder'>
                        <div className='viewgm-divs'>
                            <label><h2 id='pendingviewgrad-label'>Status: &nbsp;{profileInfo.status}</h2></label>
                        </div>
                        <div>
                            <label><h2 id='pendingviewgrad-label'>Last Academic Year Attended: &nbsp;{profileInfo.last_ay}</h2></label>
                        </div>
                        <div className='pendingviewgrad-divs'>
                            <label><h2 id='pendingviewgrad-label'>Last Term Attended: &nbsp;{profileInfo.last_term}</h2></label>
                        </div>
                        <div className='pendingviewgrad-divs'>
                            <label><h2 id='pendingviewgrad-label'>What are your plans after you graduate?: &nbsp;{profileInfo.plan_after_grad}</h2></label>
                        </div>
                        <div className='pendingviewgrad-divs'>
                            <label><h2 id='pendingviewgrad-label'>Other comments and suggestion for NU's further improvement: &nbsp;{profileInfo.comment_to_nu}</h2></label>
                        </div>
                        <div className='pendingviewgrad-divs'>
                            <label><h2 id='pendingviewgrad-label'>Will you allow us to include your information
                                to the list we will give to the requesting companies/agencies for employment purposes?: &nbsp;{profileInfo.permission_info}</h2></label>
                        </div>
                        <div className='pendingviewgrad-divs'>
                            <label><h2 id='pendingviewgrad-label'>Type of Communication: &nbsp;{profileInfo.type_of_comm}</h2></label>
                        </div>
                        <div className='pendingviewgrad-divs'>
                            <label><h2 id='pendingviewgrad-label'>Date and Time of Interview:&nbsp;{profileInfo.date}{profileInfo.setInterviewTimes}</h2></label>
                        </div>
                        <div className='pendingviewgrad-divs'>
                            <label>
                                <h2 id='pendingviewgrad-label'>Time of Interview</h2>
                                <TimePicker onChange={setInterviewTime} value={value} />
                            </label>
                        </div>
                        <div className='pendingviewgrad-action-btn'>
                            <div className='pendingviewgrad-approved'>
                                <button className='pendingviewgrad-approvedbtn' onClick={acceptReq} >APPROVE</button>
                            </div>
                            <div className='pendingviewgrad-decline'>
                                <button className='pendingviewgrad-declinebtn' onClick={declineReq}>DECLINE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ListGrad