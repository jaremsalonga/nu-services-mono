import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../../css/GA/Navbar_ga.css'

const SideBarLink = styled(Link)`

`;

const SideBarLabel = styled.span`
    align-items: center;
    text-align: center;
    margin-left: -5px;
    padding: 10px;
`;


const NavSubMenu = ({ item }) => {

    const [subNav, setSubNav] = useState(false);

    const showSubnav = () => setSubNav(!subNav)
    return (
        <>
            <SideBarLink
                to={item.path}
                onClick={item.subNav && showSubnav}>
                <div className="sidenavrows">
                    <div id="icon">{item.icon}</div>
                    <div id="title"><SideBarLabel>{item.title}</SideBarLabel></div>
                </div>
                <div className="navsub-menus">
                    {item.subNav && subNav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>


            </SideBarLink>

        </>
    )
}

export default NavSubMenu