import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../css/GA/MyProfile.css';
import archi from '../../images/archieval_s_salvador.jpg'
import Header from '../../components/GD/Topbar/Topbar'
import Navbar from '../../components/GD/Sidebar'
import { UserContext } from '../../contexts/user/userContext'

function Profile() {

    const [state] = React.useContext(UserContext)
    const id = state.user.users_id
    console.log(state);

    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [contact_no, setContactNo] = useState("");
    const [email, setEmail] = useState("");

    const [profiledetails, setProfileDetails] = useState([]);

    useEffect(() => {
        Axios.get(`/profile/get/${id}`).then((response) => {
            setProfileDetails(response.data)
            // console.log(response)
        })
    }, []);


    return (
        <div className="myprofile-wrapper">
            <Header />
            <Navbar />
            <div className="myprofile-container">
                <div className="myprofile-page-name">
                    <h1>My Profile</h1>
                </div>

                <div className='myprofile-detail-holder'>
                    {profiledetails.map((val, index) => (
                        <div className='myprofile-detail-list' key={index}>
                            <div className='myprofile-img-holder'>
                                <img src={archi} />
                                <div className='myprofile-desc'>
                                    {/* <h1>{val.role}</h1> */}

                                </div>
                                <div className='myprofile-edit-btn'>
                                    <Link to="/account/edit">
                                        <button className='myprofile-editbtn' onClick="">EDIT</button>
                                    </Link>
                                </div>
                            </div>
                            <div className='myprofile-details'>
                                {/* <span className='profile-label'>FULLNAME</span> */}
                                <h1 className='myprofile-username'>{val.fullname}</h1>
                                <span className='myprofile-label'>GENDER</span>
                                <h1>{val.gender}</h1>
                                <span className='myprofile-label'>ADDRESS</span>
                                <h1>{val.address}</h1>
                                <span className='myprofile-label'>CONTACT #</span>
                                <h1>{val.contact_no}</h1>
                                <span className='myprofile-label'>EMAIL</span>
                                <h1>{val.email}</h1>

                            </div>
                        </div>
                    ))}
                </div>
                <div className='myprofile-spacer'></div>
            </div>
        </div>
    )
}

export default Profile