import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory, Redirect } from 'react-router-dom'
import '../../css/GA/ScheduledRequest.css'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import Header from '../../components/GA/Header_ga'
import Navbar from '../../components/GA/Navbar_ga'
import { UserContext } from '../../contexts/user/userContext'
import { useCookies } from 'react-cookie'
import NewDatePicker from '../../components/metamorphic/NewDatePicker';
import Calendars from '../../components/GA/Calendar/Calendars';
import { useParams } from 'react-router-dom'


function ScheduledRequest() {

    let { id } = useParams();

    const [state] = React.useContext(UserContext)
    const user_id = state.user.users_id
    const department_id = state.user.department_id;

    const [cookies] = useCookies(['token']);

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());



    let addUnavailability = (event) => {
        event.preventDefault();
        let dates = [];
        let date = new Date(startDate.getTime());

        while (date <= endDate) {
            dates.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }

        let config = {
            headers: { Authorization: `Bearer ${cookies.token}` },
        };

        Axios.post(`/unavailability-dates`, {
            unavailability_date:dates
        }, config).then((res) => {
            console.log(res)
        })
    }


    useEffect(async () => {

        let config = {
            headers: { Authorization: `Bearer ${cookies.token}` },
            params: {
                department_id
            }
        };
        let response = await Axios.get('/unavailability-dates', config).then(response => response.data);
    }, [])

    return (
        <div className="scheduled-request-wrapper">
            <Header />
            <Navbar />
            <div className='schedule-container'>
                <div className='schedule-page-name'>
                    <h1>Calendar</h1>
                </div>
                <form>
                    <div className='unavailable-divs'>
                        <label><h3 className="unavailable-label">Add Unavailable Dates:</h3></label>
                        <div className='start-date'>
                            <label><h4 className='unavailable-label'>Start Date:</h4></label>
                            <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                        </div>
                        <div className='end-date'>
                            <label><h4 className='unavailable-label'>End Date:</h4></label>
                            <DatePicker selected={endDate} onChange={(date: Date) => setEndDate(date)} />
                        </div>

                        <button className='add-unavailablebtn' onClick={addUnavailability}>ADD</button>
                    </div>
                </form>
                {/* <textarea value={`${startDate} - ${endingDate}`} /> */}
                <Calendars />

            </div>

        </div>
    )
}

export default ScheduledRequest
