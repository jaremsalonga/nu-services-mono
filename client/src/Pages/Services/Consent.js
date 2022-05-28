import React, { useState } from 'react'
import '../../css/Consent.css'
import PopUp from '../../components/PopUp'
import { useHistory, Link } from 'react-router-dom'

function Consent() {

    const [agree, setAgree] = useState(false);

    const checkboxHandler = () => {
        setAgree(!agree);
    }

    let history = useHistory();

    const btnHandler = () => {
        history.push('/services/goodmoral');
    };


    return (
        <div>
            <div className="consent-wrapper">
                <div className="consent-notice">
                    <div className="consent-header">
                        <h1>NU Data Privacy Policy - Students and Alumni</h1>
                    </div>
                    <div className="consent-holder">
                        <div className="consent-content">
                            <p>NU Data Privacy Policy - Students and Alumni The information that you supply
                                via this form will be entered into a filing system and will only be accessed by authorized
                                persons of National University Manila or its managers. The information will be retained by
                                the school and will only be used for the purpose of (a) verify and/or validate your identity
                                to ensure that appropriate records will be provided; (b) processing of your requested records
                                and (c) summary information for statistical usage. By supplying such information, you give
                                consent or authorize to the School storing the information for the stated purposes. the
                                information is held by the School in accordance with the provisions of the Data Privacy Act of 2012.
                            </p>

                            <div className="consent-agree">
                                <input type="checkbox" id="agree" onChange={checkboxHandler} />
                                <span> “Yes I have read and understood all the conditions and reminders in connection with this request
                                    and agree to comply with them. By clicking Accept, I also certify that the information given
                                    above are true to the best of my knowledge and belief. Under relevant provisions of the Data
                                    Privacy Act of 2012: I give my full consent to National University Manila to use the provided
                                    information for the purpose stated above.I have the right to change or access my information
                                    whenever needed. I understand that when  this information is no longer required, the official
                                    institution procedure will be followed in disposing all information provided.”
                                </span>
                            </div>
                            <div className="consent-btns">
                                <div className="consent-backbtn">
                                    <Link to="/services/goodmoral/request"><button>Back</button></Link>
                                </div>

                                <div className="consentshifting-next">
                                    <button disabled={!agree} className="btn" onClick={btnHandler}>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Consent
