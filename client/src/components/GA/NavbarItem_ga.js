import React from 'react'
import { GoHome } from 'react-icons/go';
import { VscServerProcess } from 'react-icons/vsc'
import { MdMood } from 'react-icons/md';
import { BsChatDots } from 'react-icons/bs';
import { VscPerson } from 'react-icons/vsc';
import { VscOrganization } from 'react-icons/vsc'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import { FaHandsHelping } from 'react-icons/fa'
import { IoExitOutline } from 'react-icons/io5'
import { BsCalendar } from 'react-icons/bs'
import { BsBookmarks } from 'react-icons/bs'
import {HiOutlineSpeakerphone} from 'react-icons/hi'


export const NavbarItem_ga = [
    {
        title: "Home",
        icon: <GoHome />,
        path: "/mainhome",
    },
    {
        title: "Pending Requests",
        icon: <VscServerProcess />,
        path: "/pendingrequests",
    },
    {
        title: "Calendar",
        icon: <BsCalendar />,
        path: "/scheduledrequest",
    },
    {
        title: "Create Announcement",
        icon: <HiOutlineSpeakerphone />,
        path: "/announcement",
    },
    {
        title: "Messages",
        icon: <BsChatDots />,
        path: "/messages/inbox",
    },
    {
        title: "Records",
        icon: <BsBookmarks />,
        path: "/records",
    },
    {
        title: "Profile",
        icon: <VscPerson />,
        path: "/myprofile",
    }
]