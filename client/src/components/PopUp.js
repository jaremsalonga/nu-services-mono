import React from 'react'
import { Link } from 'react-router-dom'
import '../css/PopUp.css'

const PopUp = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <span>
                <Link to="/">Cancel</Link>
                </span>
                <span className="close-icon" onClick={props.handleClose}>
                    <Link to="/profile">
                        Ok
                    </Link></span>
                {props.content}
            </div>
        </div>
    )
}

export default PopUp;