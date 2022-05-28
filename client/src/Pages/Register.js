import React, { useEffect, useState } from 'react'
import { Route, useHistory, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import Main from './Main';
import Axios from 'axios';
import '../css/Register.css';
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import PopUpRegister from '../components/PopUpRegister'
import { ImCheckmark } from 'react-icons/im'
import { RiCloseCircleFill } from 'react-icons/ri';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FaCheck } from 'react-icons/fa'

function Register() {

    //register
    const [student_numberReg, setStudent_numberReg] = useState("");
    const [fullnameReg, setFullNameReg] = useState("");
    const [genderReg, setGenderReg] = useState("");
    const [addressReg, setAddressReg] = useState("");
    const [contactnoReg, setContactNoReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [collegeReg, setCollegeReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [cnpasswordReg, setCnPasswordReg] = useState("");

    const [student_numberRegError, setStudent_numberRegError] = useState("");
    const [fullnameRegError, setFullNameRegError] = useState("");
    const [genderRegError, setGenderRegError] = useState("");
    const [addressRegError, setAddressRegError] = useState("");
    const [contactnoRegError, setContactNoRegError] = useState("");
    const [emailRegError, setEmailRegError] = useState("");
    const [collegeRegError, setCollegeRegError] = useState("");
    const [passwordRegError, setPasswordRegError] = useState("");
    const [cnpasswordRegError, setCnPasswordRegError] = useState("");

    const [submitReg, setSubmitReg] = useState("");

    const RegisterConfirmation = () => {
        if (!submitReg) {
            document.querySelector(".confirm-bg").style.display = "flex"
            document.querySelector(".container").style.display = "flex"
            setSubmitReg(true)
            register();
        } else {
            document.querySelector(".confirm-bg").style.display = "none"
            document.querySelector(".container").style.display = "none"
            setSubmitReg(false)
            history.push('/');
        }
    }

    const isRegValid = () => {
        if (!student_numberReg || student_numberReg.trim() === "") {
            setStudent_numberRegError("*This field cannot be empty!");
        } else if (!student_numberReg.match("^[0-9]*$")) {
            setStudent_numberRegError("*Numbers only!");
        } else if (student_numberReg.length <= 4) {
            setStudent_numberRegError("*Use valid student number!");
        } else if (!fullnameReg || fullnameReg.trim() == "") {
            setFullNameRegError("This field cannot be empty");
        } else if (!fullnameReg.match("[a-zA-Z]+([\s][a-zA-Z]+)*")) {
            setFullNameRegError("*Name must contain letters only!");
        } else if (!genderReg || genderReg.trim() === "") {
            setGenderRegError("*This field cannot be empty!");
        } else if (!addressReg || genderReg.trim() == "") {
            setAddressRegError("*This field cannot be empty!");
        } else if (!contactnoReg.match("^[0-9]*$")) {
            setContactNoRegError("*Numbers only!");
        } else if (contactnoReg.length != 11) {
            setContactNoRegError("*Please use a valid number!");
        } else if (!contactnoReg || contactnoReg.trim() == "") {
            setContactNoRegError("*This field cannot be empty!")
        } else if (!emailReg || emailReg.trim() === "") {
            setEmailRegError("*This field cannot be empty!");
        } else if (collegeReg == "Select College") {
            setCollegeRegError("*This field cannot be empty!");
        } else if (!collegeReg || collegeReg.trim() == "") {
            setCollegeRegError("*This field cannot be empty!");
        } else if (!passwordReg || passwordReg.trim() == "") {
            setPasswordRegError("*This field cannot be empty!");
        } else if (!passwordReg.match("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")) {
            setPasswordRegError("*Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
        } else if (passwordReg != cnpasswordReg) {
            setCnPasswordRegError("*Passwords do not match!");
        } else if (!cnpasswordReg || cnpasswordReg.trim() == "") {
            setCnPasswordRegError("*This field cannot be empty!");
        } else {
            setStudent_numberRegError("");
            setFullNameRegError("")
            setGenderRegError("");
            setAddressRegError();
            setContactNoRegError("");
            setEmailRegError("")
            setCollegeRegError("");
            setPasswordRegError();
            setCnPasswordRegError("");
            RegisterConfirmation();
        }
    }

    let history = useHistory();

    Axios.defaults.withCredentials = true;

    const register = () => {
        Axios.post("http://localhost:3001/register", {
            student_number: student_numberReg,
            fullname: fullnameReg,
            gender: genderReg,
            address: addressReg,
            contact_no: contactnoReg,
            email: emailReg,
            college: collegeReg,
            password: passwordReg
        }).then((response) => {
            <Redirect to="/" />
            console.log(response);

        })
    };

    return (
        <div>
            <div className="register-wrapper">
                <div className="register-header">
                    <h1>NATIONAL UNIVERSITY GUIDANCE SERVICE SYSTEM</h1>
                </div>
                <div className="register-container">
                    <div className="register-container-title">
                        <h1>Register</h1>
                    </div>
                    <div className="registration-form">
                        <div className="registration-form-contents">

                            <div className="register-label"><h3>Student Number<span>*</span></h3></div>
                            <div className="registration-field">
                                <input type="text"
                                    placeholder="Student Number"
                                    id="studentid"
                                    onChange={(e) => { setStudent_numberReg(e.target.value) }} />
                            </div>
                            <span className="register-error">{student_numberRegError}</span>
                            <div className="register-label"><h3>Display Picture<span>*</span></h3></div>
                            <div className="registration-field">
                                <input type="file" placeholder="Upload File" />
                            </div>

                            <div className="register-label"><h3>Full Name<span>*</span></h3></div>
                            <div className="registration-field">
                                <input type="text"
                                    id="regfullname"
                                    placeholder="Full Name"
                                    onChange={(e) => { setFullNameReg(e.target.value) }} />
                            </div>
                            <span className="register-error">{fullnameRegError}</span>
                            <div className="register-label"><h3>Gender<span>*</span></h3></div>
                            <div className="registration-field">
                                <select id="reggender"
                                    onChange={(e) => { setGenderReg(e.target.value) }}>
                                    <option>Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <span className="register-error">{genderRegError}</span>
                            <div className="register-label"><h3>Address<span>*</span></h3></div>
                            <div className="registration-field">
                                <input type="text"
                                    id="regaddress"
                                    placeholder="Address"
                                    onChange={(e) => { setAddressReg(e.target.value) }} />
                            </div>
                            <span className="register-error">{addressRegError}</span>
                            <div className="register-label"><h3>Contact No<span>*</span></h3></div>
                            <div className="registration-field">
                                <input type="text"
                                    id="regcontact"
                                    placeholder="Contact No"
                                    onChange={(e) => { setContactNoReg(e.target.value) }} />
                            </div>
                            <span className="register-error">{contactnoRegError}</span>
                            <div className="register-label"><h3>Email<span>*</span></h3></div>
                            <div className="registration-field">
                                <input type="text"
                                    id="regemail"
                                    placeholder="NU email"
                                    onChange={(e) => { setEmailReg(e.target.value) }} />
                            </div>
                            <span className="register-error">{emailRegError}</span>
                            <div className="register-label"><h3>College<span>*</span></h3></div>
                            <div className="registration-field">
                                <select id="regcogdept"
                                    onChange={(e) => { setCollegeReg(e.target.value) }}>
                                    <option>Select College</option>
                                    <option>College of Allied health</option>
                                    <option>College of Architecture</option>
                                    <option>College of Business and Accountancy</option>
                                    <option>College of Computing and Information Technology</option>
                                    <option>College of Dentistry</option>
                                    <option>College of Education, Arts, and Sciences</option>
                                    <option>College of Engineering</option>
                                    <option>College of Tourism and Hospitality Management</option>
                                </select>
                            </div>
                            <span className="register-error">{collegeRegError}</span>
                            <div className="register-label"><h3>Password<span>*</span></h3></div>
                            <div className="registration-field">
                                <input type="password"
                                    id="regpassword"
                                    placeholder="Password"
                                    onChange={(e) => { setPasswordReg(e.target.value) }} />
                            </div>
                            <span className="register-error">{passwordRegError}</span>
                            <div className="register-label"><h3>Confirm Password<span>*</span></h3></div>
                            <div className="registration-field">
                                <input type="password"
                                    id="regcnpassword"
                                    placeholder="Confirm Password"
                                    onChange={(e) => { setCnPasswordReg(e.target.value) }} />
                            </div>
                            <span className="register-error">{cnpasswordRegError}</span>

                            {/* pop up */}
                            <div className="container">
                                <div className="popup-announcement-header"></div>
                                <div className="confirmation-text">
                                    <span id="announcement-check"><FaCheck color='green' size='3em' /></span>
                                    <p id="announcement-context">Request was successfully Submitted!</p>
                                </div>
                                <div className="button-container">
                                    <button
                                        className="cancel-button"
                                        onClick={() => RegisterConfirmation()}>
                                        Ok
                                    </button>
                                </div>
                                <div id="announcement-spacer">&nbsp;</div>
                            </div>
                            <div
                                className="confirm-bg">
                                onClick={() => RegisterConfirmation()}
                            </div>
                            <div className="reg-terms">
                                <p>Upon signing up you are agree to the <Link to="/TermsAndCondition">Terms & Condition.</Link></p>
                            </div>
                            <div className="registration-button">
                                <a href="/"><button id="reg-cancel-btn"><RiCloseCircleFill /> Cancel</button></a> &nbsp; &nbsp;
                                <button type="button" id="signup-btn" onClick={() => { isRegValid() }} ><ImCheckmark /> Sign up</button>
                            </div>

                            <div className="sign-in-link">
                                Already have ann account?<span><Link to="/">Sign In</Link></span>
                            </div>
                            <div className="reg-space"></div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Register