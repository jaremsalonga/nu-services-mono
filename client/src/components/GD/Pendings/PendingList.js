import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './PendingList.css'
import { useCookies } from 'react-cookie'
import { UserContext } from '../../../contexts/user/userContext'

function PendingList() {

    const [state] = React.useContext(UserContext);

    const [fullname, setFullname] = useState("");
    const [type_interview, setTypeInterview] = useState("");

    const [cookies] = useCookies(['token']);

    const [reqInfo, setReqInfo] = useState([]);

    let config = {
        headers: { Authorization: `Bearer ${cookies.token}` }
    };

    useEffect(() => {
        Axios.get(`/dashboard/total-pending`, config).then((response) => {
            console.log(response);
            setReqInfo(response.data);
        })
    }, [])

    let history = useHistory();

    return (
        <div className='pendings'>
        </div>
    )
}

export default PendingList