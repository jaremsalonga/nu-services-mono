import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { FaCheck } from 'react-icons/fa'
import { useHistory, Link } from 'react-router-dom';
import '../../css/ShiftingForm.css'
import { RiErrorWarningLine } from 'react-icons/ri'

function ShiftingForm() {
    const [submitShiftForm, setSubmitShiftForm] = useState(false)

    const ConfirmationBox = () => {
        if (!submitShiftForm) {
            document.querySelector(".confirm-bg").style.display = "flex"
            document.querySelector(".container").style.display = "flex"
            setSubmitShiftForm(true)
            submitShiftingForm();
        } else {
            document.querySelector(".confirm-bg").style.display = "none"
            document.querySelector(".container").style.display = "none"
            setSubmitShiftForm(false)
            history.push('/services/interview');
        }
    }

    const isShiftFormValid = () => {
        if (!shift_course_count || shift_course_count.trim() === "") {
            setShiftCourseCountErrors("*This field cannot be empty!");
        } else if (!shift_course_count.match("^[0-9]*$")) {
            setShiftCourseCountErrors("*Numbers only!")
        } else if (!shift_from || shift_from.trim() === "") {
            setShiftFromErrors("*This field cannot be empty!");
        } else if (shift_from === "Select College") {
            setShiftFromErrors("*This field cannot be empty!")
        } else if (!shift_to || shift_to.trim() === "") {
            setShiftToErrors("*This field cannot be empty!");
        } else if (shift_to === "Select College") {
            setShiftToErrors("Letters only!")
        } else if (shifting_reason === "Select Reason") {
            setShiftingReasonErrors("*This field cannot be empty!")
        } else if (!shifting_reason || shifting_reason.trim() === "") {
            setShiftingReasonErrors("*This field cannot be empty!");
        } else if (!reason_explain || reason_explain.trim() === "") {
            setReasonExplainErrors("*This field cannot be empty!");
        } else if (!shifting_commitment || shifting_commitment.trim() === "") {
            setShiftingCommitmentErrors("*This field cannot be empty!");
        } else if (!type_contact || type_contact.trim() === "") {
            setTypeOfContactErrors("*This field cannot be empty!");
        } else if (!type_communication || type_communication.trim() === "") {
            setTypeOfCommunicationErrors("*This field cannot be empty!");
        } else if (type_communication === "Select Type of Communication") {
            setShiftingReasonErrors("*This field cannot be empty!")
        } else {
            setShiftCourseCountErrors("");
            setShiftFromErrors("")
            setShiftToErrors("");
            setShiftingReasonErrors("");
            setReasonExplainErrors("")
            setShiftingCommitmentErrors("");
            setTypeOfContactErrors("");
            setTypeOfCommunicationErrors("");
            ConfirmationBox();
        }

    }

    let history = useHistory();

    const [shift_course_count, setShiftCourseCount] = useState("");
    const [shift_from, setShiftFrom] = useState("");
    const [shift_to, setShiftTo] = useState("");
    const [shifting_reason, setShiftingReason] = useState("");
    const [reason_explain, setReasonExplain] = useState("");
    const [shifting_commitment, setShiftingCommitment] = useState("");
    const [type_contact, setTypeOfContact] = useState("");
    const [type_communication, setTypeOfCommunication] = useState("");

    const [shift_course_count_errors, setShiftCourseCountErrors] = useState("");
    const [shift_from_errors, setShiftFromErrors] = useState("");
    const [shift_to_errors, setShiftToErrors] = useState("");
    const [shifting_reason_errors, setShiftingReasonErrors] = useState("");
    const [reason_explain_errors, setReasonExplainErrors] = useState("");
    const [shifting_commitment_errors, setShiftingCommitmentErrors] = useState("");
    const [type_contact_errors, setTypeOfContactErrors] = useState("");
    const [type_communication_errors, setTypeOfCommunicationErrors] = useState("");

    const [shiftingList, setShiftingList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/services/studentenrollment/get').then((response) => {
            setShiftingList(response.data);
        },
            {
                headers: sessionStorage.getItem("token")
            })
    }, [])

    const submitShiftingForm = () => {
        Axios.post("http://localhost:3001/interview/requestinterview/createShiftForm", {
            shift_course_count: shift_course_count,
            shift_from: shift_from,
            shift_to: shift_to,
            shifting_reason: shifting_reason,
            reason_explain: reason_explain,
            shifting_commitment: shifting_commitment,
            type_contact: type_contact,
            type_communication: type_communication

        });

        <Link to="/main" />
        setShiftingList([...shiftingList, {
            shift_course_count: shift_course_count,
            shift_from: shift_from,
            shift_to: shift_to,
            shifting_reason: shifting_reason,
            reason_explain: reason_explain,
            shifting_commitment: shifting_commitment,
            type_contact: type_contact,
            type_communication: type_communication

        }]);
    };

    return (
        <div className="shifting-form-page">
            <div className="shifting-form-wrapper">
                <div className="shifting-form-contents">
                    <div className="shifting-forms-header"><h2>Shifting Form</h2></div>
                    <form>
                        <div className="shifting-divs">
                            <label><h3 className="shift-label">*How many times you have shifted course?</h3></label>
                            <input
                                type="text"
                                placeholder="How many times you have shifted course?"
                                name="shift_course_count"
                                value={shift_course_count}
                                id="shift_course_count"
                                onChange={(e) => {
                                    setShiftCourseCount(e.target.value)
                                }}
                            />
                        </div>
                        <span className="shifting-error">{shift_course_count_errors}</span>
                        <div className="shifting-divs">
                            <label><h3 className="shift-label">*I am Shifting from</h3></label>
                            <select
                                name="shift_from"
                                value={shift_from}
                                id="shift_from"
                                onChange={(e) => {
                                    setShiftFrom(e.target.value)
                                }}>
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
                        <span className="shifting-error">{shift_from_errors}</span>
                        <div className="shifting-divs">
                            <label><h3 className="shift-label">*I am Shifting To</h3></label>
                            <select
                                name="shift_to"
                                value={shift_to}
                                id="shift_to"
                                onChange={(e) => {
                                    setShiftTo(e.target.value)
                                }}>
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
                        <span className="shifting-error">{shift_to_errors}</span>
                        <div className="shifting-divs">
                            <label><h3 className="shift-label">*Reason for Shifting</h3></label>
                            <select
                                name="shifting_reason"
                                value={shifting_reason}
                                id="shifting_reason"
                                onChange={(e) => {
                                    setShiftingReason(e.target.value)
                                }}>
                                <option>Select Reason</option>
                                <option>Academic Difficulty</option>
                                <option>Advised to shift by Parents/Family/Friends</option>
                                <option>Faster way to Graduate</option>
                                <option>Failure/s in Pre-requisite Subjects</option>
                                <option>Change of Interest</option>
                                <option>Recommended by Professor</option>
                                <option>Non-fulfillment of Probationary Status</option>
                            </select>
                        </div>
                        <span className="shifting-error">{shifting_reason_errors}</span>
                        <div className="shifting-divs">
                            <label><h3 className="shift-label">*Explain your Reason</h3></label>
                            <input
                                type="text"
                                placeholder="Explain your Reason"
                                name="reason_explain"
                                value={reason_explain}
                                id="reason_explain"
                                onChange={(e) => {
                                    setReasonExplain(e.target.value)
                                }}
                            />
                        </div>
                        <span className="shifting-error">{reason_explain_errors}</span>
                        <div className="shifting-divs">
                            <label><h3 className="shift-label">*Commitment to the new Program</h3></label>
                            <input
                                type="text"
                                placeholder="Commitment to the new Program"
                                name="shifting_commitment"
                                value={shifting_commitment}
                                id="shifting_commitment"
                                onChange={(e) => {
                                    setShiftingCommitment(e.target.value)
                                }}
                            />
                        </div>
                        <span className="shifting-error">{shifting_commitment_errors}</span>
                        <div className="shifting-divs">
                            <label><h3 className="shift-label">*Where do you want to be contacted? (e.g. NUGS(yourNUemailaccount@students.national-u.edu.ph),
                                <br /> Viber (09123456789), Telegram (09123456789 OR account name), etc.) </h3></label>
                            <input
                                type="text"
                                placeholder="Where do you want to be contacted?"
                                name="type_contact"
                                value={type_contact}
                                id="type_contact"
                                onChange={(e) => {
                                    setTypeOfContact(e.target.value)
                                }}
                            />
                        </div>
                        <span className="shifting-error">{type_contact_errors}</span>
                        <div className="shifting-divs">
                            <label><h3 className="shift-label">*In what way do you want to communicate?</h3></label>
                            <select
                                name="type_communication"
                                value={type_communication}
                                id="type_communication"
                                onChange={(e) => {
                                    setTypeOfCommunication(e.target.value)
                                }}>
                                <option>Select Type of Communication</option>
                                <option>Chat</option>
                                <option>Voice Call</option>
                                <option>Video Chat</option>
                            </select>
                        </div>
                        <span className="shifting-error">{type_communication_errors}</span>

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
                        <div className="shifting-submit-btns">
                            <div className="shifting-back">
                                <Link to="/services/interview">
                                    <button type="button" id="shifting-cancelBtn">Cancel</button>
                                </Link>
                            </div><div className="shifting-submit">
                                <button
                                    type="button"
                                    id="shifting-submitBtn"
                                    onClick={() => { isShiftFormValid() }}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}
export default ShiftingForm
