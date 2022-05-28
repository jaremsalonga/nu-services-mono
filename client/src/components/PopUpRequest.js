import React from 'react'
import { Link } from 'react-router-dom'
import '../css/PopUp.css'

const PopUpRequest = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>
                <Link to="/pendingrequests">
                    Ok
                </Link></span>
                {props.content}
            </div>
        </div>
    )
}

export default PopUpRequest;