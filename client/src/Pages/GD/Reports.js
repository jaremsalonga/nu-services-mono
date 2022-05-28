import React from 'react'
import '../../css/GD/Report.css'
import Sidebar from '../../components/GD/Sidebar'
import Topbar from '../../components/GD/Topbar/Topbar'
import CollegeTab from '../../components/GD/CollegeTab/CollegeTab'

function Reports() {
    return (
        <div className='report-wrapper'>
            <Topbar />
            <Sidebar />
            <div className='report-content'>
                <div className='college-tabs'>
                    <CollegeTab />
                </div>
                <div className='report-second-content'>

                </div>
            </div>
        </div>
    )
}

export default Reports