import React from 'react'
import PendingList from '../../components/GD/Pendings/PendingList'
import Sidebar from '../../components/GD/Sidebar'
import Topbar from '../../components/GD/Topbar/Topbar'
import '../../css/GD/PendingRequest.css'

function PendingRequest() {
  return (
    <div className='pendingreq-wrapper'>
      <Topbar />
      <Sidebar />
      <div className='pendingreq-content'>
        <PendingList />
      </div>
    </div>
  )
}

export default PendingRequest