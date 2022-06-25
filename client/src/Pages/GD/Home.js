import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../css/GA/MainHome.css'
import { Link } from 'react-router-dom';
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { FaTrash } from 'react-icons/fa'
import '../../css/GD/Home.css'
import Sidebar from '../../components/GD/Sidebar'
import FeaturedTab from '../../components/GD/FeaturedTab/FeaturedTab'
import Chart from '../../components/GD/chart/Chart.js'
import { monthData } from '../../components/GD/chart/DummyData'
import Topbar from '../../components/GD/Topbar/Topbar'
import SmallWidget from '../../components/GD/SmallWidget/SmallWidget'
import LargeWidget from '../../components/GD/LargeWidget/LargeWidget'
import { UserContext } from '../../contexts/user/userContext'


export default function Home() {

    const [state] = React.useContext(UserContext)
    const id = state.user.users_id

    const [fullname, setFullname] = useState("");
    const [usernameinfo, setUsernameInfo] = useState([]);

    useEffect(() => {
        Axios.get(`/profile/get/${id}`).then((response) => {
            setUsernameInfo(response.data);
        })
    }, [])

    return (
        <div className='homeWrapper'>
            <Topbar />
            <Sidebar />
            <div className='home-content'>
                {usernameinfo.map((val, index) => (
                    <div className='dashboard-name'>
                        <h1>Hello, {val.fullname}</h1>
                    </div>
                ))}

                <div className='featured-tab'>
                    <FeaturedTab />
                </div>
                <div className='overall-section'>
                    <div className='common-reason-smartchat'>
                        <h3>Most Common Reason of Counselling</h3>
                    </div>
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
