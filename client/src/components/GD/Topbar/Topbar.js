import React from 'react';
import './Topbar.css';
import { IconContext } from 'react-icons';
import { IoExitOutline } from 'react-icons/io5'
import { useCookies } from "react-cookie";

import { Link } from 'react-router-dom';


function Topbar() {

    const [cookies, setCookie, removeCookie] = useCookies(['token', 'users_id', 'role'])


    const logOut = () => {
        removeCookie('users_id');
        removeCookie('token');
        removeCookie('role');
    }

    return (
        <div className='topbar'>
            <header className="topbarheader">
                <nav className="topbar_navigation">
                    <div></div>
                    {/* <div className="header_logo">
                    <a href="/main"><img src={header_logo} /></a></div> */}
                    {/* <div className="webname"><h1>NU GUIDANCE SERVICES SYSTEM</h1></div> */}
                    <div className="space" />
                    <div className="topbar_item">
                        <ul>
                            <IconContext.Provider value={{ size: '2em' }}>
                                <li><Link to="/"><IoExitOutline onClick={logOut}></IoExitOutline></Link></li>
                            </IconContext.Provider>
                        </ul>
                    </div>
                </nav>
            </header>

        </div>
    )
}

export default Topbar