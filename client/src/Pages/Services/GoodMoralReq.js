import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdAdd, MdNavigateNext } from 'react-icons/md'
import '../../css/GoodMoralReq.css'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { UserContext } from '../../contexts/user/userContext'

function GoodMoralReq() {

    const [state] = React.useContext(UserContext)
    const id = state.user.users_id
    console.log(state)

    const [purpose_req, setPurposeReq] = useState("");
    const [number_copy, setNumberCopy] = useState("");
    const [special_instruction, setSpecialInstruct] = useState("");
    const [status, setStatus] = useState("");

    const [goodmoralList, setGoodmoralList] = useState([]);

    useEffect(() => {
        Axios.get(`/services/goodmoral/get/${id}`).then((response) => {
            setGoodmoralList(response.data)
        })
    }, [])

    return (
        <div className="goodmoralreq-wrapper">
            <Header />
            <Navbar />
            <div className="goodmoralreq-container">
                <div className="goodmoralreq-name">
                    <h1>certificate of goodmoral</h1>
                </div>
                <div className="goodmoralreq-holder">
                    <div className="goodmoralreq-contents">
                        <div className="goodmoralreq-create-btn">
                            <Link to="/services/goodmoral/request">
                                <button><MdAdd />Request a Certificate of Goodmoral</button>
                            </Link>
                        </div>
                        <div className="goodmoralreq-list">
                            <div className="goodmoralreq-status">
                                {goodmoralList.map((val, index) => {
                                    return (

                                        <div className="goodmoralreq-list-contents" key={index}>
                                            <Link to={`/services/goodmoral/view/${val.goodmoral_id}`}>
                                                <div className="goodmoralreq-list-container">
                                                    <div className="goodmoralreq-list-status">
                                                        <h3>{val.status}</h3>
                                                    </div>
                                                    <div className="goodmoralreq-list-name">
                                                        <h3>Request for Certificate of Good Moral for {val.purpose_req}</h3>
                                                    </div>

                                                </div>
                                                <div className="goodmoralreq-list-divider">
                                                    <hr />
                                                </div>
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='goodmoral-spacer'></div>
            </div>
        </div>
    )
}

export default GoodMoralReq