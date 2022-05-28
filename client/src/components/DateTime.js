import React from 'react'
import '../css/DateTime.css'

var datetime = () => {
    var showdate = new Date();

    var dt = showdate.toDateString();
    var display_time = showdate.getHours() + ' : ' + showdate.getMinutes() + ' : ' + showdate.getSeconds();
    return (
        <div>
            <div className="date-wrapper">
                <div className="date-header">
                    <h1>TODAY</h1>
                    <div className="date-container">
                        <div className="date-content">
                            <span id="time-today">{display_time}</span>
                            <br/><span id="date-today">{dt}</span>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    )

}

export default datetime;