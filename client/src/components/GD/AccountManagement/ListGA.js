import Axios from 'axios';
import './ListGA.css'
import React, { useEffect, useState } from 'react'
import { Link, useHistory, Redirect } from 'react-router-dom'
import { FaCheck } from 'react-icons/fa'
import { useCookies } from 'react-cookie'
import { UserContext } from '../../../contexts/user/userContext'

function ListGA() {
    const [state] = React.useContext(UserContext)
    const id = state.user.users_id

    const [cookies] = useCookies(['token']);

    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [contact_no, setContactNo] = useState("");
    const [college, setCollege] = useState("");
    const [password, setPassword] = useState("");
    const [cnpassword, setCnPassword] = useState("");

    const [fullnameerrors, setFullnameErrors] = useState("");
    const [gendererrors, setGenderErrors] = useState("");
    const [addresserrors, setAddressErrors] = useState("");
    const [contact_noerrors, setContactNoErrors] = useState("");
    const [college_error, setCollegeErrors] = useState("");
    const [role_error, setRoleErrors] = useState("");
    const [passworderrors, setPasswordErrors] = useState("");
    const [cnpassworderrors, setCnPasswordErrors] = useState("");

    const [role, setRole] = useState("");
    const [guidanceinfo, setGuidanceInfo] = useState([]);
    const [sumbitTask, setSubmitTask] = useState(false)

    let config = {
        headers: { Authorization: `Bearer ${cookies.token}` }
    };

    let history = useHistory();

    const ConfirmationBox = () => {
        if (!sumbitTask) {
            document.querySelector(".confirm-bg").style.display = "flex"
            document.querySelector(".container").style.display = "flex"
            setSubmitTask(true)
            addGuidanceAssoc();
        } else {
            document.querySelector(".confirm-bg").style.display = "none"
            document.querySelector(".container").style.display = "none"
            // setSubmitTask(false)
            history.push('/accountmanagement');
        }
    }

    const isAddUserValid = () => {
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
        } else if (college == "Select College") {
            setCollegeErrors("*This field cannot be empty!");
        } else if (!college || college.trim() == "") {
            setCollegeErrors("*This field cannot be empty!");
        } else if (role == "Select Role") {
            setRoleErrors("*This field cannot be empty!");
        } else if (!role || role.trim() == "") {
            setRoleErrors("*This field cannot be empty!");
        } else if (!password || password.trim() === "") {
            setPasswordErrors("*This field cannot be empty!");
        } else if (!password || password.trim() === "") {
            setPasswordErrors("*This field cannot be empty!");
        } else if (!password.match("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")) {
            setPasswordErrors("*Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters")
        } else if (!cnpassword || cnpassword.trim() === "") {
            setCnPasswordErrors("*This field cannot be empty!");
        } else if (cnpassword != password) {
            setCnPasswordErrors("*Password not match!");
        } else {
            setFullnameErrors("");
            setGenderErrors("")
            setAddressErrors("");
            setContactNoErrors();
            setCollegeErrors();
            setRoleErrors();
            setPasswordErrors("");
            setCnPasswordErrors("");
            ConfirmationBox();
        }
    }

    const addGuidanceAssoc = () => {
        Axios.post(`/accountmanagement/create`, {
            fullname: fullname,
            gender: gender,
            address: address,
            contact_no: contact_no,
            department_id: college,
            role: role,
            password: password,
        }, config).then((response) => {
            <Redirect to="/accountmanagement" />
            console.log(response.data)
        })
    };

    useEffect(() => {
        Axios.get(`/accountmanagement`, config).then((response) => {
            setGuidanceInfo(response.data);
            console.log(response.data)
        })
    }, [])

    return (
        <div className='listga'>
            <div className='list-conatiner'>
                <span className='listgaTitle'>NU Guidance Faculty</span>
                <ul className='listgaList'>
                    {guidanceinfo.map((val) => (
                        <li className='listgaListItem'>
                            <div className='listgaUser'>
                                <span className='listgaUsername'>{val.fullname}</span>
                                <span className='listgaUserTitle'>{val.role}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='adduserholder'>
                <form>
                    <div className='adduser-div-holder'>
                    <h1>ADD NEW USER</h1>
                        <div className='adduser-divs'>
                            <label><h3 id='adduser-label'>Fullname</h3></label>
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
                        <span className="adduser-error">{fullnameerrors}</span>
                        <div className='adduser-divs'>
                            <label><h3 id='adduser-label'>Gender</h3></label>
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
                        <span className="adduser-error">{gendererrors}</span>
                        <div className='adduser-divs'>
                            <label><h3 id='adduser-label'>Address</h3></label>
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
                        <span className="adduser-error">{addresserrors}</span>
                        <div className='adduser-divs'>
                            <label><h3 id='adduser-label'>Contact No</h3></label>
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
                        <div className="adduser-divs">
                            <select id="adduserdept"
                                onChange={(e) => { setCollege(e.target.value) }}>
                                <option>Select College</option>
                                <option value={3}>College of Allied health</option>
                                <option value={2}>College of Architecture</option>
                                <option value={4}>College of Business and Accountancy</option>
                                <option value={1}>College of Computing and Information Technology</option>
                                <option value={5}>College of Dentistry</option>
                                <option value={6}>College of Education, Arts, and Sciences</option>
                                <option value={7}>College of Engineering</option>
                                <option value={8}>College of Tourism and Hospitality Management</option>
                            </select>
                        </div>
                        <span className="adduser-error">{college_error}</span>
                        <div className="adduser-divs">
                            <select id="adduserdept"
                                onChange={(e) => { setRole(e.target.value) }}>
                                <option>Select Role</option>
                                <option>Guidance Associate</option>
                                <option>Guidance Director</option>
                                <option>Guidance Coordinator</option>
                            </select>
                        </div>
                        <span className="adduser-error">{role_error}</span>
                        <span className="adduser-error">{contact_noerrors}</span>
                        <div className='adduser-divs'>
                            <label><h3 id='adduser-label'>Password</h3></label>
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
                        <span className="adduser-error">{passworderrors}</span>
                        <div className='adduser-divs'>
                            <label><h3 id='eadduser-label'>Confirm Password</h3></label>
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
                        <span className="adduser-error">{cnpassworderrors}</span>

                        {/* pop up */}
                        <div className="container">
                            <div className="popup-announcement-header"></div>
                            <div className="confirmation-text">
                                <span id="announcement-check"><FaCheck color='green' size='3em' /></span>
                                <p id="announcement-context">User Added!</p>
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
                        <div className="adduser-btns">
                            <div className="adduser-back">
                                <Link to="/accountmanagement">
                                    <button type="button" id="adduser-cancelBtn">Cancel</button>
                                </Link>
                            </div><div className="adduser-submit">
                                <button
                                    type="button"
                                    id="adduser-submitBtn"
                                    onClick={() => { isAddUserValid() }}>Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ListGA