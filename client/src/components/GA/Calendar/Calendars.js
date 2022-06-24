import React, { useState } from 'react'
import Calendar from 'react-calendar'
import './Calendars.css'

function Calendars() {

    const [date, setDate] = useState(new Date());
    return (
        <div>
            <div className='calendar-conatiner'>
                <Calendar onChange={setDate} value={date} />
            </div>
        </div>

    )
}
export default Calendars