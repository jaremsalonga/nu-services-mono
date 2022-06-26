import React from 'react'
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
    const [usernameinfo, setUsernameInfo] = useState([]);
    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>NU Guidance Faculty</span>
            <ul className='widgetSmList'>
                <li className='widgetSmListItem'>
                    <img src={ash} className="widgetSmImg" />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Khrysshia Leigh D. Domingo</span>
                        <span className='widgetSmUserTitle'>Guidance Associate</span>
                    </div>
                </li>
                <li className='widgetSmListItem'>
                    <img src={ash} className="widgetSmImg" />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Khrysshia Leigh D. Domingo</span>
                        <span className='widgetSmUserTitle'>Guidance Associate</span>
                    </div>
                </li>
                <li className='widgetSmListItem'>
                    <img src={ash} className="widgetSmImg" />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Khrysshia Leigh D. Domingo</span>
                        <span className='widgetSmUserTitle'>Guidance Associate</span>
                    </div>
                </li>
                <li className='widgetSmListItem'>
                    <img src={ash} className="widgetSmImg" />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Khrysshia Leigh D. Domingo</span>
                        <span className='widgetSmUserTitle'>Guidance Associate</span>
                    </div>
                </li>
                <li className='widgetSmListItem'>
                    <img src={ash} className="widgetSmImg" />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Khrysshia Leigh D. Domingo</span>
                        <span className='widgetSmUserTitle'>Guidance Associate</span>
                    </div>
                </li>
                <li className='widgetSmListItem'>
                    <img src={ash} className="widgetSmImg" />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Khrysshia Leigh D. Domingo</span>
                        <span className='widgetSmUserTitle'>Guidance Associate</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SmallWidget