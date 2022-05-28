import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import '../css/Navbar.css'

const SideBarLink = styled(Link)`

`;

const SideBarLabel = styled.span`
    align-items: center;
    text-align: center;
    margin-left: -5px;
    padding: 10px;
`;

const DropDownLink = styled(Link)`
    ${'' /* background: #ccc; */}
    height: 50px;
    padding-left: .5rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000336;
    font-size: 13px;


    overflow: hidden;
    transition: max-height .3s ease-in;
    &:hover{
        background: #F3F0FC;
        cursor: pointer;
        border-radius: 10px;
    }

`

const SubMenu = ({ item }) => {

    const [subNav, setSubNav] = useState(false);

    const showSubnav = () => setSubNav(!subNav)
    return (
        <>
            <SideBarLink
                to={item.path}
                onClick={item.subNav && showSubnav}>
                <div className="sidenavrow">
                    <div id="icon">{item.icon}</div>
                    <div id="title"><SideBarLabel>{item.title}</SideBarLabel></div>
                </div>
                <div className="sub-menus">
                    {item.subNav && subNav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>


            </SideBarLink>

            {subNav && item.subNav.map((item, index) => {
                return (
                    <DropDownLink
                        to={item.path} key={index}>
                        <SideBarLabel>{item.icon}</SideBarLabel>
                        <SideBarLabel> {item.title}</SideBarLabel>
                    </DropDownLink>
                )
            })}
        </>
    )
}

export default SubMenu