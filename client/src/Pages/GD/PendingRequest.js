import React from 'react'
import PendingList from '../../components/GD/Pendings/PendingList'
import Sidebar from '../../components/GD/Sidebar'
import Topbar from '../../components/GD/Topbar/Topbar'
import '../../css/GD/PendingRequest.css'
import { IoIosPeople } from 'react-icons/io'
import { CgUserList } from 'react-icons/cg'
import { useCookies } from 'react-cookie'
import { UserContext } from '../../contexts/user/userContext'

function PendingRequest() {
  return (
    <div className="pending-request-wrapper">
      <Topbar />
      <Sidebar />
      <div className="pending-body">
        <div className="pending-name">
          <h1>Pending Requests </h1>
        </div>
        <div className="pending-list">
          <div className="pending-list-content">
            {/* {reqInfo.map((val, index) => ( */}
            <div className='pending-cards'>
              <div className='pending-info'>
                <div className='pending-card-title-icon'>
                  <CgUserList color="#30408D" size="3.5rem" />
                </div>
                <div className='pending-card-title'>
                  <div className='pending-card-title'>
                    <h3>type of interview</h3>
                    <span id='pending-username'>khrysshia</span>
                  </div>

                </div>

                <div className='pending-action-btn'>
                  {/* <Link to={val.route}>VIEW</Link> */}
                  VIEW
                </div>
              </div>
            </div>
            {/* ))} */}
          </div>
        </div>
        <div className='pendingreq-spacer'></div>
      </div>
    </div>
  )
}

export default PendingRequest