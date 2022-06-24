import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import '../css/EditProfile.css';
import { Link, useHistory, Redirect } from 'react-router-dom'
import arri from '../images/arri.jpg'
import PopUp from '../components/PopUp';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { UserContext } from '../contexts/user/userContext'
import { FaCheck } from 'react-icons/fa'

function EditProfile() {

    let history = useHistory();

    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [contact_no, setContactNo] = useState("");
    const [password, setPassword] = useState("");
    const [cnpassword, setCnPassword] = useState("");

    const [fullnameerrors, setFullnameErrors] = useState("");
    const [gendererrors, setGenderErrors] = useState("");
    const [addresserrors, setAddressErrors] = useState("");
    const [contact_noerrors, setContactNoErrors] = useState("");
    const [passworderrors, setPasswordErrors] = useState("");
    const [cnpassworderrors, setCnPasswordErrors] = useState("");


    const [state] = React.useContext(UserContext);
    const users_id = state.user.users_id;


    const [profiledetails, setProfileDetails] = useState([]);

    const [sumbitTask, setSubmitTask] = useState(false)

    const ConfirmationBox = () => {
        if (!sumbitTask) {
            document.querySelector(".confirm-bg").style.display = "flex"
            document.querySelector(".container").style.display = "flex"
            // setSubmitTask(true)
            updateProfile();
        } else {
            document.querySelector(".confirm-bg").style.display = "none"
            document.querySelector(".container").style.display = "none"
            // setSubmitTask(false)
            history.push('/profile');
        }
    }

    const isEditProfileValid = () => {
        if (!fullname || fullname.trim() === "") {
            setFullnameErrors("*This field cannot be empty!");
        } else if (!fullname.match("[a-zA-Z]")) {
            setFullnameErrors("Letters Only");
        } else if (!gender || gender.trim() === "") {
            setGenderErrors("*This field cannot be empty!");
        } else if (gender === "Select Gender") {
            setGenderErrors("*This field cannot be empty!");
        } else if (!address || address.trim() === "") {
            setAddressErrors("*This field cannot be empty!");
        } else if (!contact_no || contact_no.trim() === "") {
            setContactNoErrors("*This field cannot be empty!");
        } else if (!contact_no.match("^[0-9]*$")) {
            setContactNoErrors("*Numbers only")
        } else if (!password || password.trim() === "") {
            setPasswordErrors("*This field cannot be empty!");
        } else if (!password || password.trim() === "") {
            setPasswordErrors("*This field cannot be empty!");
        } else if (!password.match("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")) {
            setPasswordErrors("*Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters")
        } else if (!cnpassword || cnpassword.trim() === "") {
            setCnPasswordErrors("*This field cannot be empty!");
        } else if (!cnpassword == password) {
            setCnPasswordErrors("*Password not match!");
        } else {
            setFullnameErrors("");
            setGenderErrors("")
            setAddressErrors("");
            setContactNoErrors();
            setPasswordErrors("");
            setCnPasswordErrors("");
            ConfirmationBox();
        }

    }

    const updateProfile = () => {
        Axios.put(`/profile/editprofile/update`, {
            fullname: fullname,
            gender: gender,
            address: address,
            contact_no: contact_no,
            password: password,
            users_id: users_id
        }).then((response) => {
            <Redirect to="/profile" />
            alert("update")
        })
    };


    return (
        <div className="editprofile-wrapper">
            <Header />
            <Navbar />
            <div>
                <div className='edit-profile-container'>
                    <div className="editprofile-page-name">
                        <h1>EDIT PROFILE</h1>
                    </div>
                    <div className='edit-profile-holder'>
                        <form>
                            <div className="editprofile-img">
                                <img src={arri} />
                            </div>
                            <div className='editprofile-div-holder'>
                                <div className='edit-profile-divs'>
                                    <label><h3 id='edit-profile-label'>Fullname</h3></label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        name="fullname"
                                        value={fullname}
                                        id="fullname"
                                        onChange={(e) => {
                                            setFullname(e.target.value)
                                        }}
                                    />
                                </div>
                                <span className="editprofile-error">{fullnameerrors}</span>
                                <div className='edit-profile-divs'>
                                    <label><h3 id='edit-profile-label'>Gender</h3></label>
                                    <select
                                        name="gender"
                                        value={gender}
                                        id="gender"
                                        onChange={(e) => {
                                            setGender(e.target.value)
                                        }}>
                                        <option>Select Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                                <span className="editprofile-error">{gendererrors}</span>
                                <div className='edit-profile-divs'>
                                    <label><h3 id='edit-profile-label'>Address</h3></label>
                                    <input
                                        type="text"
                                        placeholder="Address"
                                        name="address"
                                        value={address}
                                        id="address"
                                        onChange={(e) => {
                                            setAddress(e.target.value)
                                        }}
                                    />
                                </div>
                                <span className="editprofile-error">{addresserrors}</span>
                                <div className='edit-profile-divs'>
                                    <label><h3 id='edit-profile-label'>Contact No</h3></label>
                                    <input
                                        type="text"
                                        placeholder="Contact No"
                                        name="contact_no"
                                        value={contact_no}
                                        id="contact_no"
                                        onChange={(e) => {
                                            setContactNo(e.target.value)
                                        }}
                                    />
                                </div>
                                <span className="editprofile-error">{contact_noerrors}</span>
                                <div className='edit-profile-divs'>
                                    <label><h3 id='edit-profile-label'>Password</h3></label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={password}
                                        id="password"
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}
                                    />
                                </div>
                                <span className="editprofile-error">{passworderrors}</span>
                                <div className='edit-profile-divs'>
                                    <label><h3 id='edit-profile-label'>Confirm Password</h3></label>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="cnpassword"
                                        value={cnpassword}
                                        id="cnpassword"
                                        onChange={(e) => {
                                            setCnPassword(e.target.value)
                                        }}
                                    />
                                </div>
                                <span className="editprofile-error">{cnpassworderrors}</span>

                                {/* pop up */}
                                <div className="container">
                                    <div className="popup-announcement-header"></div>
                                    <div className="confirmation-text">
                                        <span id="announcement-check"><FaCheck color='green' size='3em' /></span>
                                        <p id="announcement-context">Profile Saved!</p>
                                    </div>
                                    <div className="button-container">
                                        <button
                                            className="cancel-button"
                                            onClick={() => ConfirmationBox()}>
                                            Ok
                                        </button>
                                    </div>
                                    <div id="announcement-spacer">&nbsp;</div>
                                </div>
                                <div
                                    className="confirm-bg">
                                    onClick={() => ConfirmationBox()}
                                </div>
                                <div className="editprofile-btns">
                                    <div className="editprofile-back">
                                        <Link to="/profile">
                                            <button type="button" id="editprofile-cancelBtn">Cancel</button>
                                        </Link>
                                    </div><div className="editprofile-submit">
                                        <button
                                            type="button"
                                            id="editprofile-submitBtn"
                                            onClick={() => { isEditProfileValid() }}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>





            </div>
        </div>
    )
}

export default EditProfile