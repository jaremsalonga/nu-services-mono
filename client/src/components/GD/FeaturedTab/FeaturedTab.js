import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import './FeaturedTab.css'
import { Link } from 'react-router-dom';
import { BiTime } from 'react-icons/bi'
import { RiMentalHealthLine } from 'react-icons/ri'
import { MdPendingActions, MdOutlinePersonPin } from 'react-icons/md'
import { useCookies } from 'react-cookie'
import { UserContext } from '../../../contexts/user/userContext'


function FeaturedTab() {
    const [state] = React.useContext(UserContext)
    const id = state.user.users_id

    const [cookies] = useCookies(['token']);

    //counselled
    const [count, setCount] = useState("");
    const [totalsmart, setTotal] = useState([]);

    //request
    const [Totals, setPendingCount] = useState("");
    const [pendingTotal, setPendingTotal] = useState([]);

    //sii
    const [total, setSIICount] = useState("");
    const [siiTotal, setSIITotal] = useState([]);

    let config = {
        headers: { Authorization: `Bearer ${cookies.token}` }
    };

    useEffect(() => {
        Axios.get(`/dashboard/counselled/total`, config).then((response) => {
            setTotal(response.data);
            console.log(response.data)
        })

        Axios.get(`/dashboard/pendings/total`, config).then((response) => {
            setPendingTotal(response.data);
            console.log(response.data)
        })

        Axios.get(`/dashboard/sii/total`, config).then((response) => {
            setSIITotal(response.data);
            console.log(response.data)
        })

    }, [])
    return (
        <div className='featured'>
            <Link to="/featured/total-counselled">
                <div className='featuredItem'>
                    <span className='featuredTitle'>Total Counselled</span>
                    <div className='featuredContainer'>
                        <span className='featuredIcon'><RiMentalHealthLine size={50} color='red' /></span>
                        {totalsmart.map((val) => (
                            <span className='featuredTotal'>{val.count} Student</span>
                        ))}

                    </div>
                </div>
            </Link>
            <div className='featuredItem'>
                <span className='featuredTitle'>Pending Requests</span>
                <div className='featuredContainer'>
                    <span className='featuredIcon'><MdPendingActions size={50} /></span>
                    {pendingTotal.map((val) => (
                        <span className='featuredTotal'>{val.Totals} Request</span>
                    ))}
                </div>
            </div>
            <div className='featuredItem'>
                <span className='featuredTitle'>Student Individual Inventory</span>
                <div className='featuredContainer'>
                    <span className='featuredIcon'><MdOutlinePersonPin size={50} color='green' /></span>
                    {siiTotal.map((val) => (
                        <span className='featuredTotal'>{val.total} SII</span>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default FeaturedTab  