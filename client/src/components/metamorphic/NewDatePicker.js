import React, {useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function NewDatePicker(props) {

    const [startDate, setLocalDateState] = useState(new Date());

    let datePickerOnChange = (val) => {
        setLocalDateState(val)
        props.setDate(val);
    }

    return (
        <DatePicker selected={startDate} excludeDates={props.unavailabilityDate} onChange={(date:Date) => datePickerOnChange(date)}/>
    );
}  

export default NewDatePicker