import './SmallWidget.css'
import ash from '../../../images/ash.jpg'
import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { saveAs } from 'file-saver';
import { useCookies } from 'react-cookie'
import { UserContext } from '../../../contexts/user/userContext'

function SmallWidget() {
    const [state] = React.useContext(UserContext)
    const id = state.user.users_id

    const [cookies] = useCookies(['token']);

    const [fullname, setFullname] = useState("");
    const [role, setRole] = useState("");
    const [guidanceinfo, setGuidanceInfo] = useState([]);

    const [userinfo, setUserInfo] = useState([]);

    let config = {
        headers: { Authorization: `Bearer ${cookies.token}` }
    };

    useEffect(() => {
        Axios.get(`/accountmanagement`, config).then((response) => {
            setGuidanceInfo(response.data);
            console.log(response.data)
        })

        Axios.get(`/profile/get/${id}`, config).then((response) => {
            setUserInfo(response.data);
            console.log(response.data)
        })
    }, [])

    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>NU Guidance Faculty</span>
            <ul className='widgetSmList'>
                {userinfo.map((val) => (
                    <li className='widgetSmListItem'>
                        <div className='widgetSmUser'>
                            <span className='widgetSmUsername'>{val.fullname}</span>
                            <span className='widgetSmUserTitle'>{val.role}</span>
                        </div>
                    </li>
                ))}
                {guidanceinfo.map((val) => (
                    <li className='widgetSmListItem'>
                        <div className='widgetSmUser'>
                            <span className='widgetSmUsername'>{val.fullname}</span>
                            <span className='widgetSmUserTitle'>{val.role}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SmallWidget