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
                        <li><a href="#"><div className="total-enrollees">
                            <h3>154</h3>
                            <span>submitted SII Form</span>
                        </div></a>
                        </li>
                        <li><a href="#"><div className="total-grad">
                            <h3>21</h3>
                            <span>Submitted Graduating Form</span>
                            <br />
                        </div></a>
                        </li>
                        <li><a href="#"><div className="total-counselled">
                            <h3>24</h3>
                            <span>Counselled</span>
                            <br />
                        </div></a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default TotalList
