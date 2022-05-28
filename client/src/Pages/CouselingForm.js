import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { FaCheck } from 'react-icons/fa'
import { useHistory, Link } from 'react-router-dom';
import '../css/CounselingForm.css'
import { RiErrorWarningLine } from 'react-icons/ri'
import Header from '../components/Header'
import Navbar from '../components/Navbar'


function CounselingForm() {
    const [submitchat, setSubmitChat] = useState(false)

    const ConfirmationBox = () => {
        if (!submitchat) {
            document.querySelector(".confirm-bg").style.display = "flex"
            document.querySelector(".container").style.display = "flex"
            setSubmitChat(true)
            submitSmartChat();
        } else {
            document.querySelector(".confirm-bg").style.display = "none"
            document.querySelector(".container").style.display = "none"
            setSubmitChat(false)
            history.push('/counseling');
        }
    }

    const isSmartChatValid = () => {
        if (!concern || concern.trim() === "") {
            setConcernErrors("*This field cannot be empty!");
        } else if (concern === "Select Reason") {
            setConcernErrors("*This field cannot be empty!");
        } else if (concern_feeling === "Select Reason") {
            setConcernFeelingErrors("*This field cannot be empty!")
        } else if (!concern_feeling || concern_feeling.trim() === "") {
            setConcernFeelingErrors("*This field cannot be empty!");
        } else if (!type_contact || type_contact.trim() === "") {
            setTypeOfContactErrors("*This field cannot be empty!");
        } else if (type_comm === "Choose type of Communication") {
            setTypeOfCommErrors("*This field cannot be empty!")
        } else if (!type_comm || type_comm.trim() === "") {
            setTypeOfCommErrors("*This field cannot be empty!");
        } else {
            setConcernErrors("");
            setConcernFeelingErrors("")
            setTypeOfContactErrors("");
            setTypeOfCommErrors("");
            ConfirmationBox();
        }

    }

    let history = useHistory();
    const [concern, setConcern] = useState("");
    const [concern_feeling, setConcernFeeling] = useState("");
    const [type_contact, setTypeOfContact] = useState("");
    const [type_comm, setTypeOfComm] = useState("");

    const [concern_errors, setConcernErrors] = useState("");
    const [concern_feeling_errors, setConcernFeelingErrors] = useState("");
    const [type_contact_errors, setTypeOfContactErrors] = useState("");
    const [type_comm_errors, setTypeOfCommErrors] = useState("");


    const [smartchatlist, setSmartChatList] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:3001/counseling/consent/get').then((response) => {
            setSmartChatList(response.data);
        },
            {
                headers: sessionStorage.getItem("token")
            })
    })

    const submitSmartChat = () => {
        Axios.post("http://localhost:3001/counseling/CounselingForm/create", {
            concern: concern,
            concern_feeling: concern_feeling,
            type_contact: type_contact,
            type_comm: type_comm

        });

        <Link to="/main" />
        setSmartChatList([...smartchatlist, {
            concern: concern,
            concern_feeling: concern_feeling,
            type_contact: type_contact,
            type_comm: type_comm

        }]);
    };

    return (
        <div className="counseling-form-wrapper">
            <Header />
            <Navbar />
            <div className="counseling-forms-contents">
                <div className="counseling-forms-header"><h1>Smart Chat Form</h1></div>
                <form>
                    <div className="counseling-divs">
                        <label><h3 className="counseling-label">*What is your concern for today?</h3></label>
                        <select
                            name="concern"
                            value={concern}
                            id="concern"
                            onChange={(e) => {
                                setConcern(e.target.value)
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
                    <span className="smartchat-error">{concern_errors}</span>
                    <div className="counseling-divs">
                        <label><h3 className="counseling-label">*How do you feel about your concern?</h3></label>
                        <select
                            name="concern_feeling"
                            value={concern_feeling}
                            id="concern_feeling"
                            onChange={(e) => {
                                setConcernFeeling(e.target.value)
                            }}>
                            <option>Select Reason</option>
                            <option>Anxious</option>
                            <option>Apologetic</option>
                            <option>Arrogant</option>
                            <option>Bored</option>
                            <option>Confident</option>
                            <option>Curious</option>
                            <option>Disappointed</option>
                            <option>Disgusting</option>
                            <option>Enraged</option>
                            <option>Exhausted</option>
                            <option>Frightened</option>
                            <option>Frustrated</option>
                            <option>Motivation</option>
                            <option>Grieving</option>
                            <option>Guilty</option>
                            <option>Happy</option>
                            <option>Horrified</option>
                            <option>Hurt</option>
                            <option>Interested</option>
                            <option>Jealous</option>
                            <option>Lonely</option>
                            <option>Lovestruck</option>
                            <option>Negative</option>
                            <option>Optimistic</option>
                            <option>Paranoid</option>
                            <option>Sad</option>
                            <option>Satisfied</option>
                            <option>Surprised</option>
                            <option>Suspicious</option>
                            <option>Undecided</option>
                            <option>Withdrawn</option>
                        </select>
                    </div>
                    <span className="smartchat-error">{concern_feeling_errors}</span>
                    <div className="counseling-divs">
                        <label><h3 className="counseling-label">*Where do you want to be contacted?</h3></label>
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
                    <span className="smartchat-error">{type_contact_errors}</span>
                    <div className="counseling-divs">
                        <label><h3 className="counseling-label">*In what way do you want to communicate?</h3></label>
                        <select
                            name="type_comm"
                            value={type_comm}
                            id="type_comm"
                            onChange={(e) => {
                                setTypeOfComm(e.target.value)
                            }}>
                            <option>Choose type of Communication</option>
                            <option>Audio</option>
                            <option>Video Call</option>
                            <option>Chat</option>
                        </select>
                    </div>
                    <span className="smartchat-error">{type_comm_errors}</span>

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
                    <div className="counseling-submit-btns">
                        <div className="counseling-back">
                            <Link to="/counseling/consent">
                                <button type="button" id="counseling-cancelBtn">Cancel</button>
                            </Link>
                        </div><div className="counseling-submit">
                            <button
                                type="button"
                                id="counseling-submitBtn"
                                onClick={() => { isSmartChatValid() }}>Submit</button>
                        </div>
                    </div>
                </form>
                <div className="smartchat-spacer">

                </div>
            </div>
        </div>
    )

}
export default CounselingForm
