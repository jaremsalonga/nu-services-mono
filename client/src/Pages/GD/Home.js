import React from 'react'
import '../../css/GD/Home.css'
import Sidebar from '../../components/GD/Sidebar'
import FeaturedTab from '../../components/GD/FeaturedTab/FeaturedTab'
import Chart from '../../components/GD/chart/Chart.js'
import { monthData } from '../../components/GD/chart/DummyData'
import Topbar from '../../components/GD/Topbar/Topbar'
import SmallWidget from '../../components/GD/SmallWidget/SmallWidget'
import LargeWidget from '../../components/GD/LargeWidget/LargeWidget'

export default function Home() {
    return (
        <div className='homeWrapper'>
            <Topbar />
            <Sidebar />
            <div className='home-content'>
                {/* <div className='dashboard-name'>
                <h1>Hello, User</h1>
                </div> */}
                <div className='featured-tab'>
                    <FeaturedTab />
                </div>
                <div className='chart-section'>
                    <Chart data={monthData} title="Total Counselled 2021" grid dataKey="counselled_user" />
                </div>
                <div className='second-dashboard-section'>
                    <SmallWidget />
                    <LargeWidget />
                </div>
                <div className='third-dashboard-section'>
                    
                </div>
            </div>

        </div>
    )
}
