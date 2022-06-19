import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import '../../css/Student-View/ViewGoodMoral.css'
import { UserContext } from '../../contexts/user/userContext'
import { HiDocumentDownload } from 'react-icons/hi'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { useParams } from 'react-router-dom'


function ViewGoodMoral() {

  let { id } = useParams();

  const [state] = React.useContext(UserContext)
  const user_id = state.user.users_id

  // console.log(state)


  //goodmoral req details
  const [purpose_req, setPurposeReq] = useState("");
  const [number_copy, setNumberCopy] = useState("");
  const [special_instruction, setSpecialInstruct] = useState("");
  const [status, setStatus] = useState("");
  const [approved_by, setApprovedBy] = useState("");
  const [goodmoralList, setGoodmoralList] = useState([]);


  useEffect(() => {
    let goodmoral_id = window.location.pathname.split("/").pop();

    Axios.get(`/services/goodmoral/view/${user_id}/${goodmoral_id}`).then((response) => {
      setGoodmoralList(response.data);
      console.log(response);
    })
    Axios.get(`/profile/get/${user_id}`).then((response) => {
      setProfileInfo(response.data);
    })
    console.log(window.location.pathname.split("/").pop())
  }, [])

  //profile details
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [profileInfo, setProfileInfo] = useState([]);

  return (
    <div className="viewgm-wrapper">
      <Header />
      <Navbar />
      <div className='viewgm-container'>
        <div className='viewgm-name'>
          <h1>Request for Certificate of Good Moral</h1>
        </div>
        <div className='viewgm-list-container'>
          {profileInfo.map((val, index) => (
            <div className='viewgm-list-header'>
              <div className='viewgm-header-name'>
                <h1 className='viewgm-user-name'>
                  <Link to="/services/goodmoral"><RiArrowGoBackFill color='#aaa' /></Link>
                  &nbsp;{val.fullname}</h1>
              </div>
              <div className='viewgm-header-btn'>
                <button className='viewgm-download-btn'><HiDocumentDownload size="2rem" color="#30408D" /></button>
              </div>
            </div>
          ))}
          <hr id='viewgm-divider' />
          <div className='viewgm-list-details-holder'>
            {goodmoralList.map((val, index) => (
              <>
                <div className='viewgm-divs'>
                    <label><h2 id='viewgm-label'>Status: &nbsp;{val.status}</h2></label>
                    {/* <h2 id='viewgm-details'>Pending</h2> */}
                  <label><h2 id='viewgm-label'>Purpose of Request: &nbsp;{val.purpose_req}</h2></label>
                  {/* <h2 id='viewgm-details'>Change of Interest</h2> */}
                </div>
                <div className='viewgm-divs'>
                  <label><h2 id='viewgm-label'>Number of Copy: &nbsp;{val.number_copy}</h2></label>
                  {/* <h2 id='viewgm-details'>1</h2> */}
                </div>
                <div className='viewgm-divs'>
                  <label><h2 id='viewgm-label'>Special Instruction: &nbsp;{val.special_instruction}</h2></label>
                  {/* <h2 id='viewgm-details'>N/A</h2> */}
                </div>
                <div className='viewgm-divs'>
                  <label><h2 id='viewgm-label'>Approved By: &nbsp;{val.approved_by}</h2></label>
                  {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                </div>
              </>
            ))}
          </div>
        </div>
        <div className='viewgm-spacer'></div>
      </div>

    </div>
  )
}

export default ViewGoodMoral