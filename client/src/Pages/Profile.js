import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdAdd, MdNavigateNext } from 'react-icons/md'
import '../css/Profile.css';
import arri from '../images/arri.jpg'

import Header from '../components/Header'
import Navbar from '../components/Navbar';
import {UserContext} from "../contexts/user/userContext";

function Profile() {

    const [state] = React.useContext(UserContext)

    console.log(state);

    return (
        <div className="profile-wrapper">
            <Header />
            <Navbar />
            <div>
                <div className="profile-name">
                    <h1>USER PROFILE</h1>
                </div>
                <div className="profile-container">
                    <div className="profile-contents">
                        <div className="student-profile-pic">
                            <img src={arri} />
                        </div>
                        <div className="profile-student-name">
                            <h1>Arriane Ysabelle Joaquin </h1>
                        </div>
                        <div className="profile-user-details">
                            <p>2018375010</p>
                            <p>Female</p>
                            <p>Project 8, Quezon City</p>
                            <p>joaquin@students.national-u.edu.ph</p>
                            <p>College of Computing and Information Technology</p>
                        </div>
                        <div className="profile-edit-btn">
                            <Link to="profile/editprofile">
                                <button>Edit Profile</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile