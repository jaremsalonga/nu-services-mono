import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import PendingList from '../../components/GD/Pendings/PendingList'
import Sidebar from '../../components/GD/Sidebar'
import Topbar from '../../components/GD/Topbar/Topbar'
import '../../css/GD/PendingRequest.css'
import { IoIosPeople } from 'react-icons/io'
import {RiArrowGoBackFill} from 'react-icons/ri'
import { CgUserList } from 'react-icons/cg'
import { useCookies } from 'react-cookie'
import { UserContext } from '../../contexts/user/userContext'

function PendingRequest() {

  const [state] = React.useContext(UserContext);

  const [fullname, setFullname] = useState("");
  const [type_interview, setTypeInterview] = useState("");

  const [cookies] = useCookies(['token']);

  const [reqInfo, setReqInfo] = useState([]);

  let config = {
    headers: { Authorization: `Bearer ${cookies.token}` }
  };

  useEffect(() => {
    Axios.get(`/dashboard/total-pending`, config).then((response) => {
      console.log(response);
      setReqInfo(response.data);
    })
  }, [])

  let history = useHistory();

  return (
    <div className="pending-request-wrapper">
      <Topbar />
      <Sidebar />
      <div className="pending-body">
        <div className="pending-name">
          <h1>
            <Link to="/dashboard"><RiArrowGoBackFill color='#aaa' /></Link>
            Pending Requests
          </h1>
        </div>
        <div className="pending-list">
          <div className="pending-list-content">
            {reqInfo.map((val, index) => (
              <div className='pending-cards'>
                <div className='pending-info'>
                  <div className='pending-card-title-icon'>
                    <CgUserList color="#30408D" size="3.5rem" />
                  </div>
                  <div className='pending-card-title'>
                    <div className='pending-card-title'>
                      <h3>{val.type_interview}</h3>
                      <span id='pending-username'>{val.fullname}</span>
                    </div>
                  </div>

                  <div className='pending-action-btn'>
                    <Link to={val.route}>VIEW</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='pendingreq-spacer'></div>
      </div>
    </div>
  )
}

export default PendingRequest