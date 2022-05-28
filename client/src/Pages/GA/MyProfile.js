import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/GA/MyProfile.css';
import archi from '../../images/archieval_s_salvador.jpg'
import Header from '../../components/GA/Header_ga'
import Navbar from '../../components/GA/Navbar_ga'

function Profile() {
    return (
        <div className="myprofile-wrapper">
            <Header />
            <Navbar />
            <div className="myprofile-content">
                <div className="myprofile-name">
                    <h1>USER PROFILE</h1>
                </div>
                <div className="myprofile-container">
                    <div className="myprofile-contents">
                        <div className="student-myprofile-pic">
                            <img src={archi} />
                        </div>
                        <div className="myprofile-student-name">
                            <h1>Archieval S. Salvador</h1>
                        </div>
                        <div className="myprofile-user-details">
                            <p>10098731</p>
                            <p>Male</p>
                            <p>Sampaloc, Manila</p>
                            <p>assalvador@national-u.edu.ph</p>
                            <p>College of Computing and Information Technology</p>
                            <p>College of Allied Health</p>
                        </div>
                        <div className="myprofile-edit-btn">
                            <Link to="/myprofile/edit">
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