import React, { useState } from 'react'
import { Router } from 'react-router'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import '../../css/InterviewForm.css'
import GraduatingForm from './GraduatingForm'
import ShiftingForm from './ShiftingForm'
import StopSchooling from './StopSchooling'
import TransferringForm from './TransferringForm'


const InterviewForm = () => {
    const [buttons, setButtons] = useState([
        { label: "Shifting", value: false },
        { label: "Exit to Graduate", value: false },
        { label: "Exit to Transfer ", value: false },
        { label: "Leave of Absence", value: false },
    ]);

    const handleButtonsChange = ({
        buttons,
        setButtons,
        handleButtonsChange
    }) => label => {
        const newButtonsState = buttons.map(button => {
            if (button.label === label) {
                return (button = { label: button.label, value: true });
            }
            return {
                label: button.label,
                value: false
            };
        });
        setButtons(newButtonsState);
    };

    return (
        <div className="interview-form-wrapper">
            <Header />
            <Navbar />
            <div className="interview-form-container">
                <div className="interview-form-name">
                    <h1>NU Guidance Interview</h1>
                </div>
                <Specialbuton {...{ buttons, setButtons, handleButtonsChange }} />
                {buttons[0].value && <div><ShiftingForm /></div>}
                {buttons[1].value && <div><GraduatingForm /></div>}
                {buttons[2].value && <div><TransferringForm /></div>}
                {buttons[3].value && <div><StopSchooling /></div>}
            </div>
            <div className="interview-space"></div>
        </div>
        
    );
};

const Specialbuton = ({ buttons, setButtons, handleButtonsChange }) => {
    return (
        <>
            <div className="interview-form-buttons">
                <div className="list-forms">
                    {buttons.map((button, index) => (
                        <button className="interview-btns"
                            key={`${button.label}-${index}`}
                            onClick={() =>
                                handleButtonsChange({ buttons, setButtons })(button.label)
                            }
                        >
                            {button.label.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
            
        </>
    );
};


export default InterviewForm
