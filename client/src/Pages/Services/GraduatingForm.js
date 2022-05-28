import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { FaCheck } from 'react-icons/fa'
import { useHistory, Link } from 'react-router-dom';
import '../../css/GraduatingForm.css'
import { RiErrorWarningLine } from 'react-icons/ri'
import GraduatingTables from './GraduatingTables';


function GraduatingForm() {
    const [submitGradForm, setSubmitGradForm] = useState(false)

    const ConfirmationBox = () => {
        if (!submitGradForm) {
            document.querySelector(".confirm-bg").style.display = "flex"
            document.querySelector(".container").style.display = "flex"
            setSubmitGradForm(true)
            submitGraduateForm();
        } else {
            document.querySelector(".confirm-bg").style.display = "none"
            document.querySelector(".container").style.display = "none"
            setSubmitGradForm(false)
            history.push('/services/interview');
        }
    }

    const isGradFormValid = () => {
        if (!last_ay || last_ay.trim() === "") {
            setLastAYErrors("*This field cannot be empty!");
        } else if (!last_term || last_term.trim() === "") {
            setLastTermErrors("*This field cannot be empty!");
        } else if (last_term === "Select Last Term Attended") {
            setLastTermErrors("*This field cannot be empty!");
        } else if (!plan_after_grad || plan_after_grad.trim() === "") {
            setPlanAfterGradErrors("*This field cannot be empty!");
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
        } else{
            setLastAYErrors("");
            setLastTermErrors("")
            setPlanAfterGradErrors("");
            setCommentToNuErrors("");
            setPermissionInfoErrors("")
            setTypeOfCommErrors("");
            ConfirmationBox();
        }
    }

    let history = useHistory();

    const [last_ay, setLastAY] = useState("");
    const [last_term, setLastTerm] = useState("");
    const [plan_after_grad, setPlanAfterGrad] = useState("");
    const [comment_to_nu, setCommentToNu] = useState("");
    const [permission_info, setPermissionInfo] = useState("");
    const [type_of_comm, setTypeOfComm] = useState("");

    const [last_ay_errors, setLastAYErrors] = useState("");
    const [last_term_errors, setLastTermErrors] = useState("");
    const [plan_after_grad_errors, setPlanAfterGradErrors] = useState("");
    const [comment_to_nu_errors, setCommentToNuErrors] = useState("");
    const [permission_info_errors, setPermissionInfoErrors] = useState("");
    const [type_of_comm_errors, setTypeOfCommErrors] = useState("");


    const [gradList, setGradList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/services/interview/get').then((response) => {
            setGradList(response.data);
        },
            {
                headers: sessionStorage.getItem("token")
            })
    }, [])

    const submitGraduateForm = () => {
        Axios.post("http://localhost:3001/interview/requestinterview/createGradForm", {
            last_ay: last_ay,
            last_term: last_term,
            plan_after_grad: plan_after_grad,
            comment_to_nu: comment_to_nu,
            permission_info: permission_info,
            type_of_comm: type_of_comm

        });

        <Link to="/main" />
        setGradList([...gradList, {
            last_ay: last_ay,
            last_term: last_term,
            plan_after_grad: plan_after_grad,
            comment_to_nu: comment_to_nu,
            permission_info: permission_info,
            type_of_comm: type_of_comm

        }]);
    };

    return (
        <div className="graduating-form-page">
            <div className="graduating-form-wrapper">
                <div className="graduating-form-contents">
                    <div className="graduating-forms-header"><h2>Exit to Graduate Form</h2></div>
                    <form>
                        <div className="graduating-divs">
                            <label><h3 className="grad-label">*Last Academic Year Attended</h3></label>
                            <input
                                type="text"
                                placeholder="Last Academic Year Attended (Ex. 2020-2021 )"
                                name="last_ay"
                                value={last_ay}
                                id="last_ay"
                                onChange={(e) => {
                                    setLastAY(e.target.value)
                                }}
                            />
                        </div>
                        <span className="grad-error">{last_ay_errors}</span>
                        <div className="graduating-divs">
                            <label><h3 className="grad-label">*Last Term Attended</h3></label>
                            <select
                                name="last_term"
                                value={last_term}
                                id="last_term"
                                onChange={(e) => {
                                    setLastTerm(e.target.value)
                                }}>
                                <option>Select Last Term Attended</option>
                                <option>1st Term</option>
                                <option>2nd Term</option>
                                <option>3rd Term</option>
                            </select>
                        </div>
                        <span className="grad-error">{last_term_errors}</span>
                        <div className="graduating-divs">
                            <label><h3 className="grad-label">*What are your plans after you graduate?</h3></label>
                            <input
                                type="textarea"
                                placeholder="What are your plans after you graduate?"
                                name="plan_after_grad"
                                value={plan_after_grad}
                                id="plan_after_grad"
                                onChange={(e) => {
                                    setPlanAfterGrad(e.target.value)
                                }}
                            />
                        </div>
                        <span className="grad-error">{plan_after_grad_errors}</span>
                        <div className="graduating-divs">
                            <label><h3 className="grad-label">*Other comments and suggestion for NU's further improvement</h3></label>
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
                        <span className="grad-error">{comment_to_nu_errors}</span>
                        <div className="graduating-divs">
                            <label><h3 className="grad-label">*Will you allow us to include your information
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
                        <span className="grad-error">{permission_info_errors}</span>
                        <div className="graduating-divs">
                            <label><h3 className="grad-label">*How would you like your counselor to communicate with you?</h3></label>
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
                        <span className="grad-error">{type_of_comm_errors}</span>

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
                        <div className="graduating-submit-btns">
                            <div className="graduating-back">
                                <Link to="/services/interview">
                                    <button type="button" id="graduating-cancelBtn">Cancel</button>
                                </Link>
                            </div><div className="graduating-submit">
                                <button
                                    type="button"
                                    id="graduating-submitBtn"
                                    onClick={() => { isGradFormValid() }}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GraduatingForm