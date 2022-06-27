import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import Modal from "react-modal";
import './TermPopUp.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: "80vw",
        transform: 'translate(-50%, -50%)',
    },
};


function TermPopUp() {

    let history = useHistory();

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const [agree, setAgree] = useState(false);

    const checkboxHandler = () => {
        // if agree === true, it will be set to false
        // if agree === false, it will be set to true
        setAgree(!agree);
        // Don't miss the exclamation mark
    }

    const btnHandler = () => {
        setIsOpen(false)
      };

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    const closeModal = () => {
        history.push("/")
    }

    useEffect(() => {
        setIsOpen(true);
    }, [])
    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}>
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Terms and Agreement</h2>
                <hr />
                <div>
                    <i style={{ color: "red", fontSize: "12px" }}>Please read the terms and conditions carefully before registering to NU Guidance Services
                        System website and mobile application. Your access to and use of the service is applied on your
                        acceptance and compliance with these terms.</i>
                </div><br />
                <p>
                    National University Guidance Service System (NUGSS) aims to develop a mobile and
                    web application that will be used as a tool for the Guidance Department therefore
                    the services of the department are available here in the service. In line with this,
                    some of the services that the Guidance Department offer needs the information of the
                    students which are highly confidential. As follow, a summary of the Terms of Service
                    of the NU Guidance Service System.
                </p>
                <p>
                    The use of the NU Guidance Service System is subject to the following terms of use:<br /><br />
                    1.	The guidance department generally collects information about the students of National University for some services such as Enrollment (SII), Exit and Shifting Interview and Issuance of Good Moral, therefore, the gathered information from the forms you answered will be confidential and will only be collected by the guidance department.
                    <br />2.	As you register in NU Guidance Service System, personal information will be accumulated by the system that the admins can only view.
                    <br />3.	The use of your own picture for the profile page is needed and it can only be viewed by the admins and yourself.
                    <br />4.	Once you answer a form that contains your personal information, the guidance department will always collect every form answered.
                    <br />5.	This application may also include links to other websites that are provided for your convenience. We are not responsible for the content of the linked site.
                    <br />6.	Part of the services of the Guidance Department is the counseling that might require intimate or personal questions, the information gathered by the admins will be private or confidential. Neither the family of the student nor the faculty will know anything about the counseling unless it’s an emergency or any self-harm involved.
                </p>
                <br />
                <input type="checkbox" onChange={checkboxHandler} /> I agree to the terms and conditions.

                <div className="terms-btns">
                    <button style={{ backgroundColor: "red" }} variant="secondary" onClick={closeModal} id='terms-cancel'>
                        Cancel
                    </button>
                    <button style={{ backgroundColor: "#30408D", marginLeft: "10px", width: "5vw", borderRadius: "5px", cursor: "pointer" }}
                        disabled={!agree} variant="primary" onClick={btnHandler} >
                        Accept
                    </button>
                </div>

            </Modal>
        </>
    );
}

export default TermPopUp