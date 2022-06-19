import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/user/userContext'
import { HiDocumentDownload } from 'react-icons/hi'
import { RiArrowGoBackFill } from 'react-icons/ri'
import '../css/Student-View/ViewSmartChat.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'

function ViewSmartChat() {

  let { id } = useParams();

  const [state] = React.useContext(UserContext)
  const user_id = state.user.users_id

  const [concern_feeling, setConcernFeeling] = useState("");
  const [concern_today, setConcernToday] = useState("");
  const [type_contact, setTypeContact] = useState("");
  const [type_comm, setTypeComm] = useState("");
  const [status, setStatus] = useState("");
  const [smartchatlist, setSmartChatList] = useState([]);

  //profile details
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [profileInfo, setProfileInfo] = useState([]);

  useEffect(() => {
    let smartchat_id = window.location.pathname.split("/").pop();

    Axios.get(`/counseling/view/${user_id}/${smartchat_id}`).then((response) => {
      setSmartChatList(response.data);
      console.log(response);
    })
    Axios.get(`/profile/get/${user_id}`).then((response) => {
      setProfileInfo(response.data);
    })
    console.log(window.location.pathname.split("/").pop())
  }, [])

  return (
    <div className='viewsmart-wrapper'>
      <Header />
      <Navbar />
      <div className='viewsmart-container'>
        <div className='viewsmart-name'>
          <h1>Request for Smart Chat</h1>
        </div>
        <div className='viewsmart-list-container'>
          {profileInfo.map((val, index) => (
            <div className='viewsmart-list-header'>
              <div className='viewsmart-header-name'>
                <h1 className='viewsmart-user-name'>
                  <Link to="/counseling"><RiArrowGoBackFill color='#aaa' /></Link>
                  &nbsp;{val.fullname}</h1>
              </div>
              <div className='viewsmart-header-btn'>
                <button className='viewsmart-download-btn'><HiDocumentDownload size="2rem" color="#30408D" /></button>
              </div>
            </div>
          ))}
          <hr id='viewsmart-divider' />
          <div className='viewgm-list-details-holder'>
            {smartchatlist.map((val, index) => (
              <>
                <div className='viewsmart-divs'>
                  <div className='viewsmart-divs'>
                    <label><h2 id='viewsmart-label'>Status: &nbsp;{val.status}</h2></label>
                    {/* <h2 id='viewsmart-details'>Pending</h2> */}
                  </div>
                  <label><h2 id='viewsmart-label'>What is your concern for today?: &nbsp;{val.concern_today}</h2></label>
                  {/* <h2 id='viewsmart-details'>Change of Interest</h2> */}
                </div>
                <div className='viewsmart-divs'>
                  <label><h2 id='viewsmart-label'>How do you feel about your concern?: &nbsp;{val.concern_feeling}</h2></label>
                  {/* <h2 id='viewsmart-details'>1</h2> */}
                </div>
                <div className='viewsmart-divs'>
                  <label><h2 id='viewsmart-label'>Where do you want to be contacted?: &nbsp;{val.type_contact}</h2></label>
                  {/* <h2 id='viewsmart-details'>N/A</h2> */}
                </div>
                <div className='viewsmart-divs'>
                  <label><h2 id='viewsmart-label'>In what way do you want to communicate?: &nbsp;{val.type_comm}</h2></label>
                  {/* <h2 id='viewsmart-details'>N/A</h2> */}
                </div>
                <div className='viewsmart-divs'>
                  <label><h2 id='viewsmart-label'>Approved By: &nbsp;{val.approved_by}</h2></label>
                  {/* <h2 id='viewsmart-details'>Archie Salvador</h2> */}
                </div>
                <div className='viewtransfer-divs'>
                  <label><h2 id='viewtransfer-label'>Date and Time of Interview: &nbsp; TBA</h2></label>
                  {/* <h2 id='viewsmart-details'>Archie Salvador</h2> */}
                </div>
              </>
            ))}
          </div>
        </div>
        <div className='viewsmart-spacer'></div>
      </div>

    </div>
  )
}

export default ViewSmartChat