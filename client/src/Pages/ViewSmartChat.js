import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/user/userContext'
import { HiDocumentDownload } from 'react-icons/hi'
import { RiArrowGoBackFill } from 'react-icons/ri'
import '../css/Student-View/ViewSmartChat.css'
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function ViewSmartChat() {

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
          <div className='viewsmart-list-details-holder'>
            <div className='viewsmart-divs'>
              <div className='viewsmart-divs'>
                <label><h2 id='viewsmart-label'>Status: &nbsp; Pending</h2></label>
                {/* <h2 id='viewgm-details'>Pending</h2> */}
              </div>
              <label><h2 id='viewsmart-label'>Consultations With Family Member & Allied Professionals: &nbsp;Local Employment</h2></label>
              {/* <h2 id='viewgm-details'>Change of Interest</h2> */}
            </div>
            <div className='viewsmart-divs'>
              <label><h2 id='viewsmart-label'>Contact Number of my family member: &nbsp;Yes</h2></label>
              {/* <h2 id='viewgm-details'>1</h2> */}
            </div>
            <div className='viewsmart-divs'>
              <label><h2 id='viewsmart-label'>Other allied professionals with whom I have consulted, particularly
                (Counselor, Psychologist, Psychiatrist - Name): &nbsp; N/A</h2></label>
              {/* <h2 id='viewgm-details'>N/A</h2> */}
            </div>
            <div className='viewsmart-divs'>
              <label><h2 id='viewsmart-label'>What is your concern for today?: &nbsp; N/A</h2></label>
              {/* <h2 id='viewgm-details'>N/A</h2> */}
            </div>
            <div className='viewsmart-divs'>
              <label><h2 id='viewsmart-label'>How do you feel about your concern?: &nbsp; N/A</h2></label>
              {/* <h2 id='viewgm-details'>N/A</h2> */}
            </div>
            <div className='viewsmart-divs'>
              <label><h2 id='viewsmart-label'>Where do you want to be contacted?: &nbsp; N/A</h2></label>
              {/* <h2 id='viewgm-details'>N/A</h2> */}
            </div>
            <div className='viewsmart-divs'>
              <label><h2 id='viewsmart-label'>Type of Communication: &nbsp;Chat</h2></label>
              {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
            </div>
            <div className='viewsmart-divs'>
              <label><h2 id='viewsmart-label'>Date and Time of Interview: &nbsp; TBA</h2></label>
              {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
            </div>
          </div>
        </div>
        <div className='viewsmart-spacer'></div>
      </div>
    </div>
  )
}

export default ViewSmartChat