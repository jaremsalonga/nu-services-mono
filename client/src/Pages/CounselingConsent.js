import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { RiErrorWarningLine } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import { useHistory, Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import '../css/CounselingConsent.css';


function CounselingConsent() {
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
            history.push('/counseling/CounselingForm');
        }
    }

    const isSmartChatValid = () => {
        if (!consult_family || consult_family.trim() === "") {
            setConsultFamilyErrors("*This field cannot be empty!");
        } else if (!contact_fam || contact_fam.trim() === "") {
            setContactFamErrors("*This field cannot be empty!");
        } else if (!contact_fam.match("^[0-9]*$")) {
            setContactFamErrors("*Numbers only")
        } else if (!other_allied || other_allied.trim() === "") {
            setOtherAlliedErrors("*This field cannot be empty!");
        } else {
            setConsultFamilyErrors("");
            setContactFamErrors("")
            setOtherAlliedErrors("");
            ConfirmationBox();
        }

    }

    let history = useHistory();
    const [consult_family, setConsultFamily] = useState("");
    const [contact_fam, setContactFam] = useState("");
    const [other_allied, setOtherAllied] = useState("");

    const [consult_family_errors, setConsultFamilyErrors] = useState("");
    const [contact_fam_errors, setContactFamErrors] = useState("");
    const [other_allied_errors, setOtherAlliedErrors] = useState("");

    const [consentlist, setConsentList] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:3001/counseling/consent/get').then((response) => {
            setConsentList(response.data);
        },
            {
                headers: sessionStorage.getItem("token")
            })
    })

    const submitSmartChat = () => {
        Axios.post("http://localhost:3001/counseling/consent/createConsent", {
            consult_family: consult_family,
            contact_fam: contact_fam,
            other_allied: other_allied

        });

        <Link to="/main" />
        setConsentList([...consentlist, {
            consult_family: consult_family,
            contact_fam: contact_fam,
            other_allied: other_allied

        }]);
    };

    return (
        <div>
            <div className="counselingconsent-wrapper">
                <Header />
                <Navbar />
                <div className="counselingconsent-page">
                    <div className="counselingconsent-header">
                        <h1>INFORMED CONSENT</h1>
                    </div>
                    <div className="counselingconsent-holder">
                        <div className="counselingconsent-content">
                            <p>ETHICS & CONFIDENTIALITY:</p>

                            <span>I expect the undersigned counselor and his/her staff members to uphold utmost
                                ethical standards and confidentiality. As this is a professional service, I
                                am aware that records (both written and digital) are essential and will be kept safe.
                                <br />
                                <br /> This confidentiality is suspended under the following circumstances:
                                <br />
                                <br />1. When there is serious, known, and foreseeable harm to myself or others;

                                <br />2. I reveal information of instances of abuse, in any form, being committed against a
                                vulnerable person (e.g., child, elder; employee, woman, mentally ill, etc.);

                                <br />3. A court order is issued or when such release is required by law; and

                                <br />4. I have authorized such release in writing or by verbal permission.
                                <br />
                                <br />TERMINATION OF SERVICES:
                                <br />
                                <br /> At any point in time, I have the right to terminate the services of the undersigned
                                counselor and at the same time, the counselor can terminate the services once I showed improvement in my case.

                                <br />I acknowledge that I have read and understood the terms outlined in this informed
                                consent. I affirm my responsibility in working towards my/my child’s (for clients
                                17 years old and below) goals for the current consultation.
                            </span>
                        </div>
                        <div className="formconsent">
                            <form>
                                <div className="consent-consultfamily">
                                    <h2 className="consent-label">*CONSULTATIONS WITH FAMILY MEMBERS & ALLIED PROFESSIONALS:

                                        <br /><span style={{ fontSize: '11px', fontStyle: 'italic' }}>
                                            (In order to create a supportive environment for me, the undersigned counselor has my permission to seek consultation with the following in case of emergency:
                                            Members of my family, particularly (name of father, mother, aunt, siblings, etc.)</span></h2>
                                    <input
                                        type="text"
                                        placeholder="Consultation with family members & allied professsionals"
                                        name="consult_family"
                                        value={consult_family}
                                        id="consult_family"
                                        onChange={(e) => {
                                            setConsultFamily(e.target.value)
                                        }}
                                    />
                                </div>
                                <span className="consent-error">{consult_family_errors}</span>
                                <div className="consent-contactnofamily">
                                    <h2 className="consent-label">*Contact Number of my family member</h2>
                                    <input
                                        type="text"
                                        placeholder="Contact Number of my family member"
                                        name="contact_fam"
                                        value={contact_fam}
                                        id="contact_fam"
                                        onChange={(e) => {
                                            setContactFam(e.target.value)
                                        }}
                                    />
                                </div>
                                <span className="consent-error">{contact_fam_errors}</span>
                                <div className="consent-consulted">
                                    <h2 className="consent-label">*Other allied professionals with whom I have consulted, particularly <br />(Counselor, Psychologist, Psychiatrist - Name)</h2>
                                    <input
                                        type="text"
                                        placeholder="Other allied professionals with whom I have consulted, particularly (Counselor, Psychologist, Psychiatrist - Name)"
                                        name="other_allied"
                                        value={other_allied}
                                        id="other_allied"
                                        onChange={(e) => {
                                            setOtherAllied(e.target.value)
                                        }}
                                    />
                                </div>
                                <span className="consent-error">{other_allied_errors}</span>
                                <div className="consent-frontside">
                                    <h2 className="consent-label" >*Kindly upload a photocopy or picture of your National U ID <br />(FRONTSIDE) for our reference.</h2>
                                    <input type="file" />
                                </div>
                                <div className="consent-backside">
                                    <h2 className="consent-label">*Kindly upload a photocopy or picture of your National U ID <br />(BACKSIDE) for our reference.</h2>
                                    <input type="file" />
                                </div>

                                {/* pop up */}
                                <div className="container">
                                    <div className="popup-announcement-header"></div>
                                    <div className="confirmation-text">
                                        <span id="announcement-check"><FaCheck color='green' size='3em' /></span>
                                        <p id="announcement-context">Click ok to proceed!</p>
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
                                        <Link to="/counseling">
                                            <button type="button" id="goodmoral-cancelBtn">Cancel</button>
                                        </Link>
                                    </div><div className="goodmoral-submit">
                                        <button
                                            type="button"
                                            id="goodmoral-submitBtn"
                                            onClick={() => { isSmartChatValid() }}>Submit</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CounselingConsent
