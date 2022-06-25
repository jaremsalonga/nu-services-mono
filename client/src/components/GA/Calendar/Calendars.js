import React, { useState, useEffect } from 'react'
import Calendar from 'react-calendar'
import './Calendars.css'
import moment from 'moment';
import axios from 'axios';
import { useCookies } from 'react-cookie'

function Calendars() {

    const [cookies] = useCookies(['token']);

    const [date, setDate] = useState(new Date());
    const [unavabilityDates, setUnavailabilityDates] = useState([]);
    const [acceptedInterviews, setAcceptedInterview] = useState([]);
    const [interviews, setInterviews] = useState([]);

    const marks = [
        '2022-06-26'
    ]

    let config = {
        headers: { Authorization: `Bearer ${cookies.token}` }
    };
    

    useEffect(() => {
        getUnavabilityDates();
        getAcceptedInterviews();
    }, []);
    
    async function getUnavabilityDates(){

        axios.get('/associate/unavailability-dates', config).then((response) => {

            let dates = response.data.map(function (item) {
                return item['unavailability_date'];
            });

            setUnavailabilityDates(dates);
        })
    }

    async function getAcceptedInterviews(){

        axios.get('/scheduledrequest', config).then((response) => {

            setAcceptedInterview(response.data);

            setInterviews(response.data.map(function (item) {
                return item.date
            }))
        })
    }


    return (
        <div>
            <div className='calendar-conatiner'>
                <Calendar tileClassName={({ date, view }) => {

                    if(interviews.find(x => x===moment(date).format("YYYY-MM-DD"))) {
                            return 'interview'
                        }

                    if(unavabilityDates.find(x => x===moment(date).format("YYYY-MM-DD"))) {
                            return 'unavailable'
                        }
                    }
                
                }
                tileContent={({ date, view }) => {

                    if(view === 'month') {
                        
                        return acceptedInterviews.map(function(item){

                            if(item.date === moment(date).format("YYYY-MM-DD")) {
                                return(<p>{item.interview} - {item.count}</p>)
                            }
                            
                        });
                    }
                }}
                tileDisabled={({ date }) => {
                   return date <= new Date();
                }}
                onChange={setDate} value={date} />
            </div>
        </div>

    )
}
export default Calendars