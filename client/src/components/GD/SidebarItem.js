import React from 'react'
import { RiDashboardLine } from 'react-icons/ri';
import { MdSupervisorAccount } from 'react-icons/md'
import { MdLocalActivity } from 'react-icons/md';
import { IoExitOutline } from 'react-icons/io5'
import { BsChatDotsFill } from 'react-icons/bs'
import { GoGraph } from 'react-icons/go'
import { VscServerProcess } from 'react-icons/vsc';
import { BsCalendar } from 'react-icons/bs';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { VscPerson } from 'react-icons/vsc'

export const SidebarItem = [
    {
        title: "Dashboard",
        icon: <RiDashboardLine />,
        path: "/dashboard",
    },
    {
        title: "Reports",
        icon: <GoGraph />,
        path: "/reports",
    },
    {
        title: "Pending Requests",
        icon: <VscServerProcess />,
        path: "/pendingrequests/view",
    },
    {
        title: "Scheduled Request",
        icon: <BsCalendar />,
        path: "/scheduledrequest/view",
    },
    {
        title: "Announcement",
        icon: <HiOutlineSpeakerphone />,
        path: "/announcements/view",
    },
    {
        title: "Messages",
        icon: <BsChatDotsFill />,
        path: "/messages/view",
    },
    {
        title: "Account Management",
        icon: <MdSupervisorAccount />,
        path: "/accountmanagement",
    },
    {
        title: "Activity Logs",
        icon: <MdLocalActivity />,
        path: "/activitylogs",
    },
    {
        title: "Me",
        icon: <VscPerson />,
        path: "/account",
    },
    
]