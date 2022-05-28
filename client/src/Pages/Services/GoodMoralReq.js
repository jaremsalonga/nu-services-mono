import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdAdd, MdNavigateNext } from 'react-icons/md'
import '../../css/GoodMoralReq.css'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'

function GoodMoralReq() {

    const [purpose_req, setPurposeReq] = useState("");
    const [number_copy, setNumberCopy] = useState("");
    const [special_instruction, setSpecialInstruct] = useState("");
    const [status, setStatus] = useState("");

    const [goodmoralList, setGoodmoralList] = useState([]);

    useEffect(() => {
        Axios.get('/services/goodmoral/get/:id').then((response) => {
            setGoodmoralList(response.data.goodmoral_id)
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
                                {goodmoralList.map((val) => {
                                    return (

                                        <div className="goodmoralreq-list-contents">
                                            <Link to="#">
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
            </div>
        </div>
    )
}

export default GoodMoralReq