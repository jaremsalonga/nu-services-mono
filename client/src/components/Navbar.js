import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavbarItems } from './NavbarItems';
import '../css/Navbar.css'
import { IconContext } from 'react-icons'
import SubMenu from './SubMenu';

import nu_logo from '../images/nu_logo.png'
import shia from '../images/shia.jpg'
import { CgArrowLeftR, CgArrowRightR } from 'react-icons/cg';
import { IoAlertCircleOutline } from 'react-icons/io5';

function Navbar() {

    const [sidebar, setSidebar] = useState(false);

    return (

        <>
            <div className={`nav-menu ${sidebar ? "inactive" : ""}`}>
                <div className="top-section">
                    <div className="logo">
                        <img src={nu_logo} alt="nu_logo" />
                    </div>
                    <div onClick={() => setSidebar(!sidebar)} className="toggle-menu-btn">
                        {sidebar ? (<CgArrowRightR color="white" />)
                            : (<CgArrowLeftR color="#000336" />)}

                    </div>
                </div>
                <div className="nav-menu-divider"></div>

                <div className="main-menu">
                    <ul className='nav-menu-items'>

                        {
                            NavbarItems.map((item, index) => {
                                return (
                                    <SubMenu
                                        item={item}
                                        key={index}
                                        onClick={() => {
                                            if (sidebar) {
                                                setSidebar(false);
                                            }
                                        }}
                                    />
                                )
                            })
                        }
                    </ul>
                    <div className="second-menu">
                        <ul>
                            <li>
                                <IoAlertCircleOutline size="2.7em" color="#000336" />
                                <Link to="/aboutus">
                                <span>About Us</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );

}

export default Navbar;