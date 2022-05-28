import React, { useState } from 'react';
import '../css/EditProfile.css';
import { Link, useHistory } from 'react-router-dom'
import arri from '../images/arri.jpg'
import PopUp from '../components/PopUp';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function EditProfile() {

   const [student_number, setStudentNumber] = useState("");
   const [fullname, setFullname] = useState("");
   const [gender, setGender] = useState("");
   const [address, setAddress] = useState("");
   const [college, setCollege] = useState("");
   const [password, setPassword] = useState("");
   const [cnpassword, setCnPassword] = useState("");

   

    return (
        <div className="editprofile-wrapper">
            <Header />
            <Navbar />
            <div>
                <div className="editprofile-name">
                    <h1>EDIT PROFILE</h1>
                </div>
                <div className="editprofile-container">
                    <div className="editprofile-contents">
                        <div className="student-editprofile-pic">
                            <img src={arri} />
                        </div>
                        <div className="editprofile-student-name">
                            <h2>Student No.:</h2>
                            <input type="text" />
                            <h2>Full Name:</h2>
                            <input type="text" />
                            <h2>Gender:</h2>
                            <input type="text" />
                            <h2>Address:</h2>
                            <input type="text" />
                            <h2>College:</h2>
                            <select>
                                <option>Select type</option>
                                <option>College of Allied health</option>
                                <option>College of Architecture</option>
                                <option>College of Business and Accountancy</option>
                                <option>College of Computing and Information Technology</option>
                                <option>College of Dentistry</option>
                                <option>College of Education, Arts, and Sciences</option>
                                <option>College of Engineering</option>
                                <option>College of Tourism and Hospitality Management</option>
                            </select>
                            <h2>Password:</h2>
                            <input type="password" />
                            <h2>Confirm Password:</h2>
                            <input type="password" />
                        </div>
                        <div className="editprofile-btns">
                            <div className="editprofile-cancel">
                                <Link to="/profile">
                                    <button>Cancel</button>
                                </Link>
                            </div>
                            <div className="editprofile-edit-btn">

                                <button>Save</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile