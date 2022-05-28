import React, { useState } from 'react'
import { CgArrowLeftR, CgArrowRightR } from 'react-icons/cg';
import nu_logo from '../../images/nu_logo.png'
import { SidebarItem } from './SidebarItem';
import SideMenu from './SideMenu'
import './Sidebar.css'

function Sidebar() {

    const [sidebar, setSidebar] = useState(false);
    return (
        <>
            <div className={`side-menu ${sidebar ? "inactive" : ""}`}>
                <div className='topSection'>
                    <div className='logo'>
                        <img src={nu_logo} alt="nu_logo" />
                    </div>
                    {/* <div onClick={() => setSidebar(!sidebar)} className="toggle-menu-btn">
                        {sidebar ? (<CgArrowRightR color="white" />)
                            : (<CgArrowLeftR color="#000336" />)}
                    </div> */}
                </div>
                <div className='side-menu-divider'></div>

                <div className='main-menu'>
                    <ul className='side-menu-items'>

                        {
                            SidebarItem.map((item, index) => {
                                return (
                                    <SideMenu
                                        item={item}
                                        key={index}
                                        onClick={() => {
                                            if (sidebar) {
                                                setSidebar(false)
                                            }
                                        }}
                                    />
                                )
                            })
                        }

                    </ul>

                </div>
            </div>
        </>
    )
}

export default Sidebar