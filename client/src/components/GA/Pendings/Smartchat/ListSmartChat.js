import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import './ListSmartChat.css'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { HiDocumentDownload } from 'react-icons/hi'
import { UserContext } from '../../../../contexts/user/userContext'
import Header from '../../Header_ga';
import Navbar from '../../Navbar_ga';
import { useParams } from 'react-router-dom'

function ListSmartChat() {

  let { id } = useParams();

  const [state] = React.useContext(UserContext);

  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const [profileInfo, setProfileInfo] = useState({});

  const [concern_feeling, setConcernFeeling] = useState("");
  const [concern_today, setConcernToday] = useState("");
  const [type_contact, setTypeContact] = useState("");
  const [type_comm, setTypeComm] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    let smartchat_id = window.location.pathname.split("/").pop();
    Axios.get(`/counseling/view/${smartchat_id}`).then((response) => {
      setProfileInfo(response.data);
      console.log(response.data);
    })
  }, [])

  return (
    <div className='pendingviewsmart-wrapper'>
      <Header />
      <Navbar />
      <div className='pendingviewsmart-container'>
        <div className='pendingviewsmart-name'>
          <h1>
            <Link to="/pendingrequests/"><RiArrowGoBackFill color='#aaa' /></Link>
            Request for Smart Chat
          </h1>
        </div>
        <div className='pendingviewsmart-list-container'>
          <div className='pendingviewsmart-list-header'>
            <div className='pendingviewsmart-header-name'>
              <h1>{profileInfo.fullname}</h1>
            </div>
            <div className='pendingviewsmart-header-btn'>
              <button className='pendingviewsmart-download-btn'>
                <HiDocumentDownload size="2rem" color="#30408D" />
              </button>
            </div>
          </div>

          <hr id="pendingviewsmart-divider" />
          <div className='pendingviewsmart-list-details-holder'>
            <div className='viewgm-divs'>
              <label><h2 id='pendingviewsmart-label'>Status: &nbsp;{profileInfo.status}</h2></label>
            </div>
            <div>
              <label><h2 id='pendingviewsmart-label'>What is your concern for today?: &nbsp;{profileInfo.concern_today}</h2></label>
            </div>
            <div className='pendingviewsmart-divs'>
              <label><h2 id='pendingviewsmart-label'>How do you feel about your concern?: &nbsp;{profileInfo.concern_feeling}</h2></label>
            </div>
            <div className='pendingviewsmart-divs'>
              <label><h2 id='pendingviewsmart-label'>Where do you want to be contacted?: &nbsp;{profileInfo.type_contact}</h2></label>
            </div>
            <div className='pendingviewsmart-divs'>
              <label><h2 id='pendingviewsmart-label'>In what way do you want to communicate?: &nbsp;{profileInfo.type_comm}</h2></label>
            </div>
            <div className='pendingviewsmart-divs'>
              <label><h2 id='pendingviewsmart-label'>Approved By: &nbsp;{profileInfo.approved_by}</h2></label>
            </div>


            <div className='pendingviewsmart-action-btn'>
              <div className='pendingviewsmart-approved'>
                <button className='pendingviewsmart-approvedbtn'>APPROVE</button>
              </div>
              <div className='pendingviewsmart-decline'>
                <button className='pendingviewsmart-declinebtn'>DECLINE</button>
              </div>
            </div>
          </div>
        </div>
        <div className='pendingviewsmart-spacer'></div>
      </div>
    </div>
  )
}


export default ListSmartChat