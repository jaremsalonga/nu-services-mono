import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/PopUp.css'

const PopUpEditProfile_ga = props => {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>
                <Link to="/myprofile">
                    Ok
                </Link></span>
                {props.content}
            </div>
        </div>
    )
}

export default PopUpEditProfile_ga;