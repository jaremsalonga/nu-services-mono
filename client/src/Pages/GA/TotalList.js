import React from 'react'
import '../../css/GA/Totallist.css'
import { BiTimeFive } from 'react-icons/bi'
import gender from '../../images/overall/sii gender preference.png'

function TotalList() {
    return (
        <div className="totallist-wrapper">
            <div className="totallist-contents">
                <div className="totallist-cards">
                    <ul id="totallist-items">
                        <li><a href="#"><div className="total-pending">
                            <h3>10</h3>
                            <span>pending requests</span>
                            <br />
                            <span id="pending-time"><BiTimeFive /> updated: 1:00pm </span>
                        </div></a>
                        </li>
                        <li><a href="#"><div className="total-enrollees">
                            <h3>154</h3>
                            <span>submitted SII Form</span>
                            <span id="total-sii"><BiTimeFive /> updated: 4:00pm </span>
                        </div></a>
                        </li>
                        <li><a href="#"><div className="total-grad">
                            <h3>21</h3>
                            <span>Submitted Graduating Form</span>
                            <br />
                            <span id="total-gradform"><BiTimeFive /> updated: 11:00am </span>
                        </div></a>
                        </li>
                        <li><a href="#"><div className="total-counselled">
                            <h3>24</h3>
                            <span>Counselled</span>
                            <br />
                            <span id="time-counsel"><BiTimeFive /> updated: 3:30pm </span>
                        </div></a>
                        </li>
                        <li><a href="#"><div className="total-firsttimers">
                            <h3>77</h3>
                            <span>First Timer</span>
                            <br />
                            <span id="time-counsel"><BiTimeFive /> updated: 1:00pm </span>
                        </div></a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default TotalList
