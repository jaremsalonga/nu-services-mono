import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../../css/GoodMoral.css'
import { RiErrorWarningLine } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import { useHistory, Link } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';


function GoodMoral() {

    const [sumbitTask, setSubmitTask] = useState(false)

    const ConfirmationBox = () => {
        if (!sumbitTask) {
            document.querySelector(".confirm-bg").style.display = "flex"
            document.querySelector(".container").style.display = "flex"
            setSubmitTask(true)
            submitGoodmoralRequest();
        } else {
            document.querySelector(".confirm-bg").style.display = "none"
            document.querySelector(".container").style.display = "none"
            setSubmitTask(false)
            history.push('/services/goodmoral/request');
        }
    }

    const isGoodmoralValid = () => {
        if (!purpose_req || purpose_req.trim() === "") {
            setPurposeReqErrors("*This field cannot be empty!");
        } else if (purpose_req == "Select Reason") {
            setPurposeReqErrors("This field cannot be empty");
        } else if (!number_copy || number_copy.trim() === "") {
            setNumberCopyErrors("*This field cannot be empty!");
        } else if (!number_copy.match("^[0-9]*$")) {
            setNumberCopyErrors("*Numbers only")
        } else if (!special_instruction || special_instruction.trim() === "") {
            setSpecialInstructErrors("*This field cannot be empty!");
        } else {
            setPurposeReqErrors("");
            setNumberCopyErrors("")
            setSpecialInstructErrors("");
            ConfirmationBox();
        }

    }

    let history = useHistory();
    const [purpose_req, setPurposeReq] = useState("");
    const [number_copy, setNumberCopy] = useState("");
    const [special_instruction, setSpecialInstruct] = useState("");

    const [purpose_req_errors, setPurposeReqErrors] = useState("");
    const [number_copy_errors, setNumberCopyErrors] = useState("");
    const [special_instruction_errors, setSpecialInstructErrors] = useState("");

    const [goodmoralList, setGoodmoralList] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:3001/services/goodmoral/get').then((response) => {
            setGoodmoralList(response.data);
        }, 
        {
            headers: sessionStorage.getItem("token")
        })
    })

    const submitGoodmoralRequest = () => {
        Axios.post("http://localhost:3001/services/goodmoral/create", {
            purpose_req: purpose_req,
            number_copy: number_copy,
            special_instruction: special_instruction,

        });

        <Link to="/services/goodmoral/request" />
        setGoodmoralList([...goodmoralList, {
            purpose_req: purpose_req,
            number_copy: number_copy,
            special_instruction: special_instruction,

        }]);
    };

    return (
        <div className="goodmoral-form-wrapper">
            <Header />
            <Navbar />
            <div className="goodmoral-form-contents">
                <div className="goodmoral-forms-title">
                    <h2>Request a Certificate of Good Moral</h2></div>
                <div className="goodmoral-form-contents">
                    <div className="goodmoral-reminder">
                        <p>reminders: </p>
                        <span>
                            1. Please allow maximum of 3 working days to verify your request upon sending proof of payment. Email and SMS will be sent.
                            <br />2.  Under existing laws, only the owner of the records is allowed to request for documents in connection with his/her     school records.
                            <br />3. The School reserves the right to withhold, deny or cancel any request for document due to pending accountabilities.
                            <br />4. Processing time of requests commences only upon payment of the requested documents.
                            <br />5. The requested document will be sent to the mailing address that you submit on this form.
                            <br />6.  Failure to follow procedure will cause a delay.
                            <br />Note: Please make sure that you are cleared and your green form are already signed by the Discipline Officer.
                        </span>
                    </div>
                    <form>
                        <div className="goodmoral-divs">
                            <label><h3 id="goodmoral-label">*Purpose of Request</h3></label>
                            <select
                                name="purpose_req"
                                value={purpose_req}
                                id="purpose_req"
                                onChange={(e) => {
                                    setPurposeReq(e.target.value)
                                }}>
                                <option>Select Reason</option>
                                <option>Scholarship</option>
                                <option>Work</option>
                                <option>Transfer into different school</option>
                                <option>Failure/s in Pre-requisite Subjects</option>
                                <option>Change of Interest</option>
                                <option>Recommended by Professor</option>
                                <option>Non-fulfillment of Probationary Status</option>
                            </select>
                        </div>
                        <span className="goodmoral-error">{purpose_req_errors}</span>
                        <div className="goodmoral-divs">
                            <label><h3 id="goodmoral-label">*Numbers of Copies</h3></label>
                            <input
                                type="text"
                                placeholder="Number of Copy"
                                name="number_copy"
                                value={number_copy}
                                id="number_copy"
                                onChange={(e) => {
                                    setNumberCopy(e.target.value)
                                }}
                            />
                        </div>
                        <span className="goodmoral-error">{number_copy_errors}</span>

                        <div className="goodmoral-divs">
                            <label><h3 id="goodmoral-label">*Special Instructions(write N/A if not applicable)</h3></label>
                            <input
                                type="text"
                                placeholder="Sepcial Instruction"
                                name="special_instruction"
                                value={special_instruction}
                                id="special_instruction"
                                onChange={(e) => {
                                    setSpecialInstruct(e.target.value)
                                }}
                            />
                        </div>
                        <span className="goodmoral-error">{special_instruction_errors}</span>

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
                        <div className="goodmoral-btns">
                            <div className="goodmoral-back">
                                <Link to="/services/goodmoral/request">
                                    <button type="button" id="goodmoral-cancelBtn">Cancel</button>
                                </Link>
                            </div><div className="goodmoral-submit">
                                <button
                                    type="button"
                                    id="goodmoral-submitBtn"
                                    onClick={() => { isGoodmoralValid() }}>Submit</button>
                            </div>
                        </div>
                    </form>
                    <div>&nbsp;</div>
                </div>
            </div>
        </div>
    )
}
export default GoodMoral
