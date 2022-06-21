import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../contexts/user/userContext'
import Header from '../../Header_ga'
import Navbar from '../../Navbar_ga';
import { HiDocumentDownload } from 'react-icons/hi'
import { RiArrowGoBackFill } from 'react-icons/ri'
import './ListGoodMoral.css'
import { useParams } from 'react-router-dom'

function ListGoodMoral() {

  let { id } = useParams();

  const [state] = React.useContext(UserContext);

  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const [profileInfo, setProfileInfo] = useState({});

  const [purpose_req, setPurposeReq] = useState("");
  const [number_copy, setNumberCopy] = useState("");
  const [special_instruction, setSpecialInstruct] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    let goodmoral_id = window.location.pathname.split("/").pop();
    Axios.get(`/services/goodmoral/view/${goodmoral_id}`).then((response) => {
      setProfileInfo(response.data);
      console.log(response.data);
    })
  }, [])

  return (
    <div className='pendingviewgm-wrapper'>
      <Header />
      <Navbar />
      <div className='pendingviewgm-container'>
        <div className='pendingviewgm-name'>
          <h1>
            <Link to="/pendingrequests/"><RiArrowGoBackFill color='#aaa' /></Link>
            Request for Good Moral
          </h1>
        </div>
        <div className='pendingviewgm-list-container'>
          <div className='pendingviewgm-list-header'>
            <div className='pendingviewgm-header-name'>
              <h1>{profileInfo.fullname}</h1>
            </div>
            <div className='pendingviewgm-header-btn'>
              <button className='pendingviewgm-download-btn'>
                <HiDocumentDownload size="2rem" color="#30408D" />
              </button>
            </div>
          </div>

          <hr id="pendingviewgm-divider" />
          <div className='pendingviewgm-list-details-holder'>
            <div className='viewgm-divs'>
              <label><h2 id='pendingviewgm-label'>Status: &nbsp;{profileInfo.status}</h2></label>
            </div>
            <div>
              <label><h2 id='pendingviewgm-label'>Purpose of Request: &nbsp;{profileInfo.purpose_req}</h2></label>
            </div>
            <div className='pendingviewgm-divs'>
              <label><h2 id='pendingviewgm-label'>Number of Copy: &nbsp;{profileInfo.number_copy}</h2></label>
            </div>
            <div className='pendingviewgm-divs'>
              <label><h2 id='pendingviewgm-label'>Special Instruction: &nbsp;{profileInfo.special_instruction}</h2></label>
            </div>
            <div className='pendingviewgm-divs'>
              <label><h2 id='pendingviewgm-label'>Approved By: &nbsp;{profileInfo.approved_by}</h2></label>
            </div>
            <div className='pendingview-gm-divs'>
              <label><h2 id='pendingviewgm-label'>Upload Good Moral:</h2></label>
              <input type="file" />
            </div>

            <div className='pendingviewgm-action-btn'>
              <div className='pendingviewgm-approved'>
                <button className='pendingviewgm-approvedbtn'>APPROVE</button>
              </div>
              <div className='pendingviewgm-decline'>
                <button className='pendingviewgm-declinebtn'>DECLINE</button>
              </div>
            </div>
          </div>
        </div>
        <div className='pendingviewgm-spacer'></div>
      </div>
    </div>
  )
}

export default ListGoodMoral