import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { UserContext } from '../../../../contexts/user/userContext'
import Header from '../../Header_ga'
import Navbar from '../../Navbar_ga'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { HiDocumentDownload } from 'react-icons/hi'
import './ListTransfer.css'
import { useParams } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { saveAs } from 'file-saver';


import TimePicker from 'react-time-picker';
import moment from 'moment';

function ListTransfer() {

    let { id } = useParams();

    const [state] = React.useContext(UserContext);

    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");

    const [profileInfo, setProfileInfo] = useState({});
    const [cookies] = useCookies(['token']);

    const [transfer_reason, setTransferReason] = useState("");
    const [transfer_to, setTransferTo] = useState("");
    const [loc_new_school, setLocNewSchool] = useState("");
    const [new_course, setNewCourse] = useState("");
    const [comment_to_nu, setCommentToNu] = useState("");
    const [permission_info, setPermissionInfo] = useState("");
    const [type_of_comm, setTypeOfComm] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");
    const [value, setInterviewTime] = useState('10:00');

    useEffect(() => {
        let transferreq_id = window.location.pathname.split("/").pop();
        Axios.get(`/services/interview/transfer/view/${transferreq_id}`).then((response) => {
            setProfileInfo(response.data);
            setInterviewTime(moment(response.data.interview_time ?? '8:00 AM', ["h:mm A"]).format("HH:mm"))
            console.log(response.data);
        })
    }, [])

    
    let config = {
        headers: { Authorization: `Bearer ${cookies.token}` }
    };

    let download_transfer = () => {

        console.log(profileInfo);

        Axios.post('/create-pdf/transfer', profileInfo, config)
            .then(() => Axios.get('/fetch-pdf/transfer', { responseType: 'blob' }))
            .then((response) => {
                const pdfBlob = new Blob([response.data], { type: 'application/pdf' });

                saveAs(pdfBlob, 'Transfer - Request' - { fullname }.pdf)
                console.log(response.data)
            });
    }

    return (
        <div className='pendingviewtransfer-wrapper'>
            <Header />
            <Navbar />
            <div className='pendingviewtransfer-container'>
                <div className='pendingviewtransfer-name'>
                    <h1>
                        <Link to="/pendingrequests/"><RiArrowGoBackFill color='#aaa' /></Link>
                        Request Interview for Exit to Transfer
                    </h1>
                </div>
                <div className='pendingviewtransfer-list-container'>
                    <div className='pendingviewtransfer-list-header'>
                        <div className='pendingviewtransfer-header-name'>
                            <h1>{profileInfo.fullname}</h1>
                        </div>

                        <div className='pendingviewtransfer-header-btn'>
                            <button className='pendingviewtransfer-download-btn'>
                                <HiDocumentDownload size="2rem" color="#30408D" onClick={download_transfer} />
                            </button>
                        </div>
                    </div>
                    <hr id="pendingviewtransfer-divider" />
                    <div className='pendingviewtransfer-list-details-holder'>
                        <div className='viewgm-divs'>
                            <label><h2 id='pendingviewtransfer-label'>Status: &nbsp;{profileInfo.status}</h2></label>
                        </div>
                        <div>
                            <label><h2 id='pendingviewtransfer-label'>Reason of Transferring: &nbsp; {profileInfo.transfer_reason}</h2></label>
                        </div>
                        <div className='pendingviewtransfer-divs'>
                            <label><h2 id='pendingviewtransfer-label'>To what school will you transfer?: &nbsp; {profileInfo.transfer_to}</h2></label>
                        </div>
                        <div className='pendingviewtransfer-divs'>
                            <label><h2 id='pendingviewtransfer-label'>Location of your preferred school: &nbsp; {profileInfo.loc_new_school}</h2></label>
                        </div>
                        <div className='pendingviewtransfer-divs'>
                            <label><h2 id='pendingviewtransfer-label'>Course/program you're planning to take: &nbsp; {profileInfo.new_course}</h2></label>
                        </div>
                        <div className='pendingviewtransfer-divs'>
                            <label><h2 id='pendingviewtransfer-label'>Other comments and suggestion for NU's further improvement: &nbsp; {profileInfo.comment_to_nu}</h2></label>
                        </div>
                        <div className='pendingviewtransfer-divs'>
                            <label><h2 id='pendingviewtransfer-label'>Will you allow us to include your information to the list we will
                                give to the requesting companies/agencies for employment purposes: &nbsp; {profileInfo.permission_info}</h2></label>
                        </div>
                        <div className='pendingviewtransfer-divs'>
                            <label><h2 id='pendingviewtransfer-label'>Type of Communication: &nbsp; {profileInfo.type_of_comm}</h2></label>
                        </div>
                        <div className='pendingviewtransfer-divs'>
                            <label><h2 id='pendingviewtransfer-label'>Date and Time of Interview:&nbsp;{profileInfo.date}</h2></label>
                        </div>

                        <div className='pendingviewshift-divs'>
                            <label>
                                <h2 id='pendingviewshift-label'>Time of Interview</h2>
                                <TimePicker onChange={setInterviewTime} value={value} />
                            </label>
                        </div>

                        <div className='pendingviewtransfer-action-btn'>
                            <div className='pendingviewtransfer-approved'>
                                <button className='pendingviewtransfer-approvedbtn'>APPROVE</button>
                            </div>
                            <div className='pendingviewtransfer-decline'>
                                <button className='pendingviewtransfer-declinebtn'>DECLINE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ListTransfer