import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { FaCheck } from 'react-icons/fa'
import { useHistory, Link } from 'react-router-dom';
import '../../css/StopSchooling.css'
import { RiErrorWarningLine } from 'react-icons/ri'



function StopSchooling() {
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
        if (!absence_reason || absence_reason.trim() === "") {
            setAbsenceReasonErrors("*This field cannot be empty!");
        } else if (absence_reason === "Select Reason") {
            setAbsenceReasonErrors("*This field cannot be empty!");
        } else if (!enroll_again || enroll_again.trim() === "") {
            setEnrollAgainErrors("*This field cannot be empty!");
        } else if (enroll_again === "Choose answer") {
            setEnrollAgainErrors("*This field cannot be empty!");
        } else if (!comment_to_nu || comment_to_nu.trim() === "") {
            setCommentToNuErrors("*This field cannot be empty!");
        } else if (!type_of_comm || type_of_comm.trim() === "") {
            setTypeOfCommErrors("*This field cannot be empty!");
        } else if (type_of_comm === "Select type of communication") {
            setTypeOfCommErrors("*This field cannot be empty!");
        } else {
            setAbsenceReasonErrors("");
            setEnrollAgainErrors("")
            setCommentToNuErrors("");
            setTypeOfCommErrors("");
            setTypeOfCommErrors("");
            ConfirmationBox();
        }
    }

    let history = useHistory();

    const [absence_reason, setAbsenceReason] = useState("");
    const [enroll_again, setEnrollAgain] = useState("");
    const [comment_to_nu, setCommentToNu] = useState("");
    const [type_of_comm, setTypeOfComm] = useState("");

    const [absence_reason_errors, setAbsenceReasonErrors] = useState("");
    const [enroll_again_errors, setEnrollAgainErrors] = useState("");
    const [comment_to_nu_errors, setCommentToNuErrors] = useState("");;
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
        Axios.post("http://localhost:3001/interview/requestinterview/createLeaveOfAbsenceForm", {
            absence_reason: absence_reason,
            enroll_again: enroll_again,
            comment_to_nu: comment_to_nu,
            type_of_comm: type_of_comm

        });

        <Link to="/main" />
        setTransferList([...transferlist, {
            absence_reason: absence_reason,
            enroll_again: enroll_again,
            comment_to_nu: comment_to_nu,
            type_of_comm: type_of_comm

        }]);
    };

    return (
        <div className="stop-schooling-form-page">
            <div className="stop-schooling-form-wrapper">
                <div className="stop-schooling-form-contents">
                    <div className="stop-schooling-forms-header"><h2>Leave of Absence Form</h2></div>
                    <form>
                        <div className="stop-schooling-divs">
                            <label><h3 className="stop-school-label">*Please identify your Reason</h3></label>
                            <select
                                name="absence_reason"
                                value={absence_reason}
                                id="absence_reason"
                                onChange={(e) => {
                                    setAbsenceReason(e.target.value)
                                }}>
                                <option>Select Reason</option>
                                <option>High Tuition Fee</option>
                                <option>Financial Problem</option>
                                <option>Family Problems</option>
                                <option>Health Issues</option>
                                <option>Local Employment</option>
                                <option>Work Abroad</option>
                                <option>Conflict with Work Schedules</option>
                                <option>Trimestral Scheme</option>
                                <option>Pregnancy</option>
                                <option>Getting Married</option>
                                <option>Lack of Career Plan (Self-Assessment)</option>
                            </select>
                        </div>
                        <span className="stop-schooling-error">{absence_reason_errors}</span>
                        <div className="stop-schooling-divs">
                            <label><h3 className="stop-school-label">*Do you intend to enroll back to NU when you want to continue your schooling again?</h3></label>
                            <select
                                name="enroll_again"
                                value={enroll_again}
                                id="enroll_again"
                                onChange={(e) => {
                                    setEnrollAgain(e.target.value)
                                }}>
                                <option>Choose answer</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <span className="stop-schooling-error">{enroll_again_errors}</span>
                        <div className="stop-schooling-divs">
                            <label><h3 className="stop-school-label">*Other comments and suggestion for NU's further improvement</h3></label>
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
                        <span className="stop-schooling-error">{comment_to_nu_errors}</span>
                        <div className="stop-schooling-divs">
                            <label><h3 className="stop-school-label">*How would you like your counselor to communicate with you?</h3></label>
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
                        <span className="stop-schooling-error">{type_of_comm_errors}</span>

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
                        <div className="stop-schooling-submit-btns">
                            <div className="stop-schooling-back">
                                <Link to="/services/interview">
                                    <button type="button" id="stop-schooling-cancelBtn">Cancel</button>
                                </Link>
                            </div><div className="stop-schooling-submit">
                                <button
                                    type="button"
                                    id="stop-schooling-submitBtn"
                                    onClick={() => { isTransferFormValid() }}>Submit</button>
                            </div>
                        </div>


                    </form>

                </div>

            </div>

        </div>
    )
}

export default StopSchooling
