import React, { useState } from 'react'
import '../../css/ConsentShifting.css'
import { useHistory } from 'react-router-dom'

function ConsentShifting() {

    const [agree, setAgree] = useState(false);

    const checkboxHandler = () => {
        setAgree(!agree);
    }

    let history = useHistory();

    const btnHandler = () => {
        history.push('/interview/requestinterview');
    };


    return (
        <div>
            <div className="consentshifting-wrapper">
                <div className="consentshifting-notice">
                    <div className="consentshifting-header">
                        <h1>NU Data Privacy Policy - Students and Alumni</h1>
                    </div>
                    <div className="consentshifting-holder">
                        <div className="consentshifting-content">
                            <p>NU Data Privacy Policy - Students <br /> The information that you supply
                                via this form will be entered into a filing system and will only be accessed by authorized
                                persons of National University Manila or its managers. The information will be retained by
                                the school and will only be used for the purpose of (a) verify and/or validate your identity
                                to ensure that appropriate records will be provided; (b) processing of your requested records
                                and (c) summary information for statistical usage. By supplying such information, you give
                                consentshifting or authorize to the School storing the information for the stated purposes. the
                                information is held by the School in accordance with the provisions of the Data Privacy Act of 2012.
                            </p>

                            <div className="consentshifting-agree">
                                <input type="checkbox" id="agree" onChange={checkboxHandler} />
                                <span> “Yes I have read and understood all the conditions and reminders in connection with this request
                                    and agree to comply with them. By clicking Next, I also certify that the information given
                                    above are true to the best of my knowledge and belief. Under relevant provisions of the Data
                                    Privacy Act of 2012: I give my full consentshifting to National University Manila to use the provided
                                    information for the purpose stated above.I have the right to change or access my information
                                    whenever needed. I understand that when  this information is no longer required, the official
                                    institution procedure will be followed in disposing all information provided.”
                                </span>
                            </div>
                            <div className="consentshifting-next">
                                <button disabled={!agree} className="btn" onClick={btnHandler}>Next</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ConsentShifting
