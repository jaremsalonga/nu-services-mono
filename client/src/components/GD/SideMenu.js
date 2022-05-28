import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './Sidebar.css'

const SideBarLink = styled(Link)`

`;
const SideBarLabel = styled.span`
    align-items: center;
    text-align: center;
    margin-left: -5px;
    padding: 10px;
`;


const SideMenu = ({ item }) => {
    return (
        <>
            <SideBarLink
                to={item.path}>
                <div className='sidenavrow'>
                    <div id='icon'>{item.icon}</div>
                    <div id='title'><SideBarLabel>{item.title}</SideBarLabel></div>
                </div>
            </SideBarLink>
        </>
    )
}

export default SideMenu