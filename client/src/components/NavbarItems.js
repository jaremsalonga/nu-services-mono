import React, { useState } from 'react'
import { GoHome, GoOrganization } from 'react-icons/go';
import { VscServerProcess } from 'react-icons/vsc'
import { MdMood } from 'react-icons/md';
import { BsAward, BsChatDots } from 'react-icons/bs';
import { VscPerson } from 'react-icons/vsc';
import { VscOrganization } from 'react-icons/vsc'
import { RiNotification2Fill } from 'react-icons/ri';
import { FaHandsHelping, FaNewspaper } from 'react-icons/fa'
import { IoAlertCircleOutline, IoExitOutline } from 'react-icons/io5'
import PopUp from './PopUp';


export const NavbarItems = [

    {
        title: "Home",
        icon: <GoHome />,
        path: "/main",
    },
    {
        title: "Services",
        path: "#",
        icon: <VscServerProcess />,
        subNav: [
            {
                title: "Certificate of Good Moral",
                icon: <BsAward />,
                path: "/services/goodmoral"
            },
            {
                title: "Student Individual Inventory",
                icon: <FaNewspaper />,
                path: "/services/studentenrollment",
            },
            {
                title: "Request an Interviews",
                icon: <GoOrganization />,
                path: "/services/interview",
            },
        ]
    },
    {
        title: "Smart Chat",
        icon: <FaHandsHelping />,
        path: "/counseling",
    },
    {
        title: "Chat",
        icon: <BsChatDots />,
        path: "/messages",
    },
    {
        title: "Profile",
        icon: <VscPerson />,
        path: "/profile",
    },
    // {
    //     title: "About Us",
    //     icon: <IoAlertCircleOutline />,
    //     path: "/aboutus",
    // },
    // {
    //     title: "Notification",
    //     icon: <RiNotification2Fill />,
    //     path: "/aboutus",
    // },

]


