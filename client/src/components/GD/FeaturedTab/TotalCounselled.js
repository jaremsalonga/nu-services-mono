import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import Navbar from '../Sidebar'
import Header from '../Topbar/Topbar'
import './TotalCounselled.css'
import { UserContext } from '../../../contexts/user/userContext'
import { saveAs } from 'file-saver';
import { useCookies } from 'react-cookie'
import { RiArrowGoBackFill } from 'react-icons/ri'

function TotalCounselled() {

    const [state] = React.useContext(UserContext)
    const id = state.user.users_id

    const [cookies] = useCookies(['token']);

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [concern_feeling, setFeelingToday] = useState("");
    const [concern_today, setConcernToday] = useState("");
    const [type_contact, setContact] = useState("");
    const [type_comm, setTypeComm] = useState("");
    const [date, setDate] = useState("");

    const [counselledList, setCounselledList] = useState([]);

    let config = {
        headers: { Authorization: `Bearer ${cookies.token}` }
    };

    useEffect(() => {
        Axios.get(`/dashboard/total-counselled`, config).then((response) => {
            setCounselledList(response.data);
            // console.log(response.data)
        })
    }, [])

    return (
        <div className='totalcounselled-wrapper'>
            <Header />
            <Navbar />
            <div className='totalcounselled-body'>
                <div className='totalcounselled-name'>
                    <h1>
                        <Link to="/dashboard"><RiArrowGoBackFill color='#aaa' /></Link>
                        Total Counselled</h1>
                </div>
                <div className='totalcounselled-container'>
                    <div className='totalcounselled-download-btn'>
                        <ReactHTMLTableToExcel
                            id="test-tbl-xls-button"
                            className='downloadn-table-xls'
                            table="total-counselled-tbl"
                            filename="Total-Counselled"
                            sheet="Total Counselled"
                            buttonText="Download as Excel"
                        />
                    </div>
                    <div className='totalcounselled-tbl-body'>
                        <table id='total-counselled-tbl' className='total-counsel-tbl'>
                            <thead className='totalcounselled-thead'>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Concern</th>
                                    <th>Feeling about Concern</th>
                                    <th>Type of Contact</th>
                                    <th>Ttpe of Communication</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            {counselledList.map((val) => (
                                <tbody>
                                    <td>{val.fullname}</td>
                                    <td>{val.email}</td>
                                    <td>{val.concern_feeling}</td>
                                    <td>{val.concern_today}</td>
                                    <td>{val.type_contact}</td>
                                    <td>{val.type_comm}</td>
                                    <td>{val.date}</td>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalCounselled