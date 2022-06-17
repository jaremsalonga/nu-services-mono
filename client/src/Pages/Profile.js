import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdAdd, MdNavigateNext } from 'react-icons/md'
import '../css/Profile.css';
import arri from '../images/arri.jpg'

import Header from '../components/Header'
import Navbar from '../components/Navbar';
import { UserContext } from "../contexts/user/userContext";

function Profile() {

    const [state] = React.useContext(UserContext)
    const id = state.user.users_id
    console.log(state);

    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [contact_no, setContactNo] = useState("");
    const [department_id, setDepartment] = useState("");
    const [role, setRole] = useState("");
    const [email, setEmail] = useState("");

    const [profiledetails, setProfileDetails] = useState([]);

    useEffect(() => {
        Axios.get(`/profile/get/${id}`).then((response) => {
            setProfileDetails(response.data)
            // console.log(response)
        })
    }, []);


    return (
        <div className="profile-wrapper">
            <Header />
            <Navbar />
            <div className='profile-container'>
                <div className='profile-page-name'>
                    <h1>My Profile</h1>
                </div>

                <div className='profile-detail-holder'>
                    {profiledetails.map((val, index) => (
                        <div className='profile-detail-list' key={index}>
                            <div className='profile-img-holder'>
                                <img src={arri} />
                                <div className='profile-desc'>
                                    {/* <h1>{val.role}</h1> */}

                                </div>
                                <div className='profile-edit-btn'>
                                    <Link to="/profile/editprofile">
                                        <button className='profile-editbtn' onClick="">EDIT</button>
                                    </Link>
                                </div>
                            </div>
                            <div className='profile-details'>
                                {/* <span className='profile-label'>FULLNAME</span> */}
                                <h1 className='profile-username'>{val.fullname}</h1>
                                <span className='profile-label'>GENDER</span>
                                <h1>{val.gender}</h1>
                                <span className='profile-label'>ADDRESS</span>
                                <h1>{val.address}</h1>
                                <span className='profile-label'>CONTACT #</span>
                                <h1>{val.contact_no}</h1>
                                <span className='profile-label'>EMAIL</span>
                                <h1>{val.email}</h1>

                            </div>
                        </div>
                    ))}

                </div>
                <div className='profile-spacer'></div>
            </div>
        </div>

    )
}

export default Profile