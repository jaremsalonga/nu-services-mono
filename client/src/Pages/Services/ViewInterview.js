import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/user/userContext'
import '../../css/Student-View/ViewInterview.css'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { HiDocumentDownload } from 'react-icons/hi'
import { RiArrowGoBackFill } from 'react-icons/ri'
import ViewShifting from '../../components/Student/ViewInterview/Shifting/ViewShifting';
import ViewAbsence from '../../components/Student/ViewInterview/Absence/ViewAbsence';
import ViewGrad from '../../components/Student/ViewInterview/Grad/ViewGrad';
import ViewTransfer from '../../components/Student/ViewInterview/Transfer/ViewTransfer';

function ViewInterview() {

    const [state] = React.useContext(UserContext)
    const id = state.user.users_id

    //profile details
    const [fullname, setFullname] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [profileInfo, setProfileInfo] = useState([]);

    useEffect(() => {
        Axios.get(`/profile/get/${id}`).then((response) => {
            setProfileInfo(response.data);
        })
    }, [])

    return (
        <div className="viewinterview-wrapper">
            <Header />
            <Navbar />
            <div className='viewinterview-container'>
                <ViewShifting />
            </div>

        </div>
    )
}


export default ViewInterview