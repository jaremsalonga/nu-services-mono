import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { FaCheck } from 'react-icons/fa'
import { useHistory, Link } from 'react-router-dom';
import '../../css/TransferringForm.css'
import { RiErrorWarningLine } from 'react-icons/ri'


function TransferringForm() {
    const [submitTransferringForm, setTransferringForm] = useState(false)

    const ConfirmationBox = () => {
        if (!submitTransferringForm) {
            document.querySelector(".confirm-bg").style.display = "flex"
            document.querySelector(".container").style.display = "flex"
            setTransferringForm(true)
            submitTransferForm();
        } else {
            document.querySelector(".confirm-bg").style.display = "none"
            document.querySelector(".container").style.display = "none"
            setTransferringForm(false)
            history.push('/services/interview');
        }
    }

    const isTransferFormValid = () => {
        if (!transfer_reason || transfer_reason.trim() === "") {
            setTransferReasonErrors("*This field cannot be empty!");
        } else if (transfer_reason === "Select Reason") {
            setTransferReasonErrors("*This field cannot be empty!");
        } else if (!transfer_to || transfer_to.trim() === "") {
            setTransferToErrors("*This field cannot be empty!");
        } else if (!loc_new_school || loc_new_school.trim() === "") {
            setLocNewSchoolErrors("*This field cannot be empty!");
        } else if (!new_course || new_course.trim() === "") {
            setNewCourseErrors("*This field cannot be empty!");
        } else if (!comment_to_nu || comment_to_nu.trim() === "") {
            setCommentToNuErrors("*This field cannot be empty!");
        } else if (!permission_info || permission_info.trim() === "") {
            setPermissionInfoErrors("*This field cannot be empty!");
        } else if (permission_info === "Select Answer") {
            setPermissionInfoErrors("*This field cannot be empty!");
        } else if (!type_of_comm || type_of_comm.trim() === "") {
            setTypeOfCommErrors("*This field cannot be empty!");
        } else if (type_of_comm === "Select type of communication") {
            setTypeOfCommErrors("*This field cannot be empty!");
        } else {
            setTransferReasonErrors("");
            setTransferToErrors("")
            setLocNewSchoolErrors("");
            setNewCourseErrors("");
            setCommentToNuErrors("");
            setPermissionInfoErrors("")
            setTypeOfCommErrors("");
            ConfirmationBox();
        }
    }

    let history = useHistory();

    const [transfer_reason, setTransferReason] = useState("");
    const [transfer_to, setTransferTo] = useState("");
    const [loc_new_school, setLocNewSchool] = useState("");
    const [new_course, setNewCourse] = useState("");
    const [comment_to_nu, setCommentToNu] = useState("");
    const [permission_info, setPermissionInfo] = useState("");
    const [type_of_comm, setTypeOfComm] = useState("");

    const [transfer_reason_errors, setTransferReasonErrors] = useState("");
    const [transfer_to_errors, setTransferToErrors] = useState("");
    const [loc_new_school_errors, setLocNewSchoolErrors] = useState("");
    const [new_course_errors, setNewCourseErrors] = useState("");
    const [comment_to_nu_errors, setCommentToNuErrors] = useState("");
    const [permission_info_errors, setPermissionInfoErrors] = useState("");
    const [type_of_comm_errors, setTypeOfCommErrors] = useState("");


    const [transferlist, setTransferList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/services/interview/get').then((response) => {
            setTransferList(response.data);
        },
            {
                headers: sessionStorage.getItem("token")
            })
    }, [])

    const submitTransferForm = () => {
        Axios.post("http://localhost:3001/interview/requestinterview/createTransferForm", {
            transfer_reason: transfer_reason,
            transfer_to: transfer_to,
            loc_new_school: loc_new_school,
            new_course: new_course,
            comment_to_nu: comment_to_nu,
            permission_info: permission_info,
            type_of_comm: type_of_comm

        });

        <Link to="/main" />
        setTransferList([...transferlist, {
            transfer_reason: transfer_reason,
            transfer_to: transfer_to,
            loc_new_school: loc_new_school,
            new_course: new_course,
            comment_to_nu: comment_to_nu,
            permission_info: permission_info,
            type_of_comm: type_of_comm

        }]);
    };


    return (
        <div className="transferring-form-page">
            <div className="transferring-form-wrapper">
                <div className="transferring-form-contents">
                    <div className="transferring-forms-header"><h2>Transferring Form</h2></div>
                    <form>
                        <div className="transferring-divs">
                            <label><h3 className="transfer-label">*Please identify your Reason</h3></label>
                            <select
                                name="transfer_reason"
                                value={transfer_reason}
                                id="transfer_reason"
                                onChange={(e) => {
                                    setTransferReason(e.target.value)
                                }}>
                                <option>Select Reason</option>
                                <option>Change of Residence</option>
                                <option>School Workload</option>
                                <option>Shift to a Program/Course that is not available in NU</option>
                                <option>Non-fulfillment of Probationary Condition</option>
                                <option>Conflict with Professors</option>
                                <option>Conflict with Fellow Students</option>
                                <option>Conflict with School Management</option>
                                <option>Safety and Security</option>
                                <option>High Tuition Fee</option>
                                <option>Family Problems</option>
                                <option>Poor Quality of Teaching</option>
                                <option>Poor Facilities</option>
                                <option>Proximity</option>
                                <option>Home Schooling</option>
                                <option>Financial Problem</option>
                                <option>Trimestral Scheme</option>
                            </select>
                        </div>
                        <span className="transfer-error">{transfer_reason_errors}</span>
                        <div className="transferring-divs">
                            <label><h3 className="transfer-label">*To what school will you transfer?</h3></label>
                            <input
                                type="text"
                                placeholder="To what school will you transfer?"
                                name="transfer_to"
                                value={transfer_to}
                                id="transfer_to"
                                onChange={(e) => {
                                    setTransferTo(e.target.value)
                                }}
                            />
                        </div>
                        <span className="transfer-error">{transfer_to_errors}</span>
                        <div className="transferring-divs">
                            <label><h3 className="transfer-label">*Location of your preferred school</h3></label>
                            <input
                                type="text"
                                placeholder="Location of your preferred school"
                                name="loc_new_school"
                                value={loc_new_school}
                                id="loc_new_school"
                                onChange={(e) => {
                                    setLocNewSchool(e.target.value)
                                }}
                            />
                        </div>
                        <span className="transfer-error">{loc_new_school_errors}</span>
                        <div className="transferring-divs">
                            <label><h3 className="transfer-label">*Course/program you're planning to take</h3></label>
                            <input
                                type="text"
                                placeholder="Course/program you're planning to take"
                                name="new_course"
                                value={new_course}
                                id="new_course"
                                onChange={(e) => {
                                    setNewCourse(e.target.value)
                                }}
                            />
                        </div>
                        <span className="transfer-error">{new_course_errors}</span>
                        <div className="transferring-divs">
                            <label><h3 className="transfer-label">*Other comments and suggestion for NU's further improvement</h3></label>
                            <input
                                type="text"
                                placeholder="Other comments and suggestion for NU's further improvement"
                                name="comment_to_nu"
                                value={comment_to_nu}
                                id="comment_to_nu"
                                onChange={(e) => {
                                    setCommentToNu(e.target.value)
                                }}
                            />
                        </div>
                        <span className="transfer-error">{comment_to_nu_errors}</span>
                        <div className="transferring-divs">
                            <label><h3 className="transfer-label">*Will you allow us to include your information
                                to the list we will give to the requesting companies/agencies for employment purposes?</h3></label>
                            <select
                                name="permission_info"
                                value={permission_info}
                                id="permission_info"
                                onChange={(e) => {
                                    setPermissionInfo(e.target.value)
                                }}>
                                <option>Select Answer</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <span className="transfer-error">{permission_info_errors}</span>
                        <div className="transferring-divs">
                            <label><h3 className="transfer-label">*How would you like your counselor to communicate with you?</h3></label>
                            <select
                                name="type_of_comm"
                                value={type_of_comm}
                                id="type_of_comm"
                                onChange={(e) => {
                                    setTypeOfComm(e.target.value)
                                }}>
                                <option>Select type of communication</option>
                                <option>Audio Call</option>
                                <option>Chat</option>
                                <option>Video Chat</option>
                            </select>
                        </div>
                        <span className="transfer-error">{type_of_comm_errors}</span>

                        {/* pop up */}
                        <div className="container">
                            <div className="popup-announcement-header"></div>
                            <div className="confirmation-text">
                                <span id="announcement-check"><FaCheck color='green' size='3em' /></span>
                                <p id="announcement-context">Request was successfully Submitted!</p>
                            </div>
                            <div className="button-container">
                                <button
                                    type="button"
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
                        <div className="transfer-submit-btns">
                            <div className="transfer-back">
                                <Link to="/services/interview">
                                    <button type="button" id="transfer-cancelBtn">Cancel</button>
                                </Link>
                            </div><div className="transfer-submit">
                                <button
                                    type="button"
                                    id="transfer-submitBtn"
                                    onClick={() => { isTransferFormValid() }}>Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>


        </div>
    )
}


export default TransferringForm
