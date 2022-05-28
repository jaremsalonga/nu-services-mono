import React from 'react';
import '../../css/GA/Header_ga.css'
import { IconContext } from 'react-icons';
import { RiNotification2Fill } from 'react-icons/ri';
import header_logo from '../../images/header.png'
import archi from '../../images/archieval_s_salvador.jpg'
import { IoAlertCircleOutline, IoExitOutline } from 'react-icons/io5'


function Header_ga() {
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
                                    <li><a href="/"><IoExitOutline /></a></li>
                                </IconContext.Provider>
                            </ul>
                        </div>
                    </nav>
                </header>
    
            </div>
    
        )
    
    }

export default Header_ga;