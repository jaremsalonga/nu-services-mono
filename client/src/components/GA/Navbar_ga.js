import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavbarItem_ga } from './NavbarItem_ga';
import '../../css/GA/Navbar_ga.css'
import nu_logo from '../../images/nu_logo.png'
import { CgArrowLeftR, CgArrowRightR } from 'react-icons/cg';
import { IoAlertCircleOutline } from 'react-icons/io5';
import { NavbarItems } from '../NavbarItems';
import NavSubMenu from './NavSubMenu';



function Navbar_ga() {
    const [navsidebar, setNavSidebar] = useState(false);



    return (
        <>
            <nav className={`navbar-menu ${navsidebar ? "inactive" : ""}`}>
                <div className="top-sec">
                    <div className="nav_logo">
                        <img src={nu_logo} alt="nu_logo" />
                    </div>
                    <div onClick={() => setNavSidebar(!navsidebar)} className="menu-toggle-btn">
                        {navsidebar ? (<CgArrowRightR color="white" />)
                            : (<CgArrowLeftR color="#000336" />)}
                    </div>
                </div>
                <div className="main-menu-section">
                    <ul className="menu-nav-items">
                        {

                            NavbarItem_ga.map((item, index) => {
                                return (
                                    <NavSubMenu 
                                        item={item}
                                        key={index}
                                        onClick={() => {
                                            if (navsidebar) {
                                                setNavSidebar(false);
                                            }
                                        }}
                                    />
                                )
                            })


                            
                        }
                    </ul>
                    <div className="second-nav-menu">
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
            </nav>
        </>
    );
}

export default Navbar_ga;