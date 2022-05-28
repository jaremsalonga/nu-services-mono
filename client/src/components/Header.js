import React from 'react';
import '../css/Header.css';
import { IconContext } from 'react-icons';
import { RiNotification2Fill } from 'react-icons/ri';
import { IoAlertCircleOutline, IoExitOutline } from 'react-icons/io5'
import header_logo from '../images/header.png'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Profile from '../Pages/Profile'
import Main from '../Pages/Main'
import {useCookies} from "react-cookie";

import {Link} from 'react-router-dom';

// import {Link} from 'react-router-dom'

function Header() {

    const [cookies, setCookie, removeCookie] = useCookies(['token', 'users_id', 'role'])


    const logOut = () => {
        removeCookie('users_id');
        removeCookie('token');
        removeCookie('role');
    }

    return (
        <div>
            <header className="header">
                <nav className="header_navigation">
                    <div></div>
                    {/* <div className="header_logo">
                    <a href="/main"><img src={header_logo} /></a></div> */}
                    {/* <div className="webname"><h1>NU GUIDANCE SERVICES SYSTEM</h1></div> */}
                    <div className="space"/>
                    <div className="header_item">
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
export default Header;