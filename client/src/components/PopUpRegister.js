import React from 'react'
import { Link } from 'react-router-dom'
import '../css/PopUp.css'

const PopUpRegister = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          <Link to="/">
            Ok
          </Link>
        </span>
        {props.content}
      </div>
    </div>
  )
}

export default PopUpRegister;