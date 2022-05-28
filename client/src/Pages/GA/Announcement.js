import React, { useEffect, useState } from 'react'
import '../../css/GA/Announcement.css'
import Axios from 'axios'
import PopUp from '../../components/PopUp';
import { FaCheck } from 'react-icons/fa'
import { useHistory, Link } from 'react-router-dom';
import Header from '../../components/GA/Header_ga'
import Navbar from '../../components/GA/Navbar_ga'



function Announcement() {

    const [delTask, setDelTask] = useState(false)

    const handleConfirmationBox = () => {
        if (!delTask) {
            document.querySelector(".confirm-bg").style.display = "flex"
            document.querySelector(".container").style.display = "flex"
            setDelTask(true);
            submitAnnouncement();
        } else {
            document.querySelector(".confirm-bg").style.display = "none"
            document.querySelector(".container").style.display = "none"
            setDelTask(false);
            history.push('/mainhome');
        }
    }

    const isAnnouncementValid = () => {
        if (!announcement_title || announcement_title.trim() === "") {
            setAnnouncementTitleErrors("*This field cannot be empty!");
        } else if (!announcement_description || announcement_description.trim() === "") {
            setAnnouncementDescriptionErrors("*This field cannot be empty!");
        } else {
            setAnnouncementTitleErrors("");
            setAnnouncementDescriptionErrors("")
            handleConfirmationBox();
        }

    }

    let history = useHistory();
    const [announcement_title, setAnnouncementTitle] = useState("");
    const [announcement_description, setAnnouncementDescription] = useState("");
    
    const [announcement_title_errors, setAnnouncementTitleErrors] = useState("");
    const [announcement_description_errors, setAnnouncementDescriptionErrors] = useState("");
    
    const [announcementList, setAnnouncementList] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:3001/announcement/get').then((response) => {
            setAnnouncementList(response.data)
        })
    }, [])



    const submitAnnouncement = () => {
        Axios.post("http://localhost:3001/announcement/create", {
            announcement_title: announcement_title,
            announcement_description: announcement_description,

        });

        <Link to="/mainhome" />
        setAnnouncementList([...announcementList, {
            announcement_title: announcement_title,
            announcement_description: announcement_description
        }]);
    };

    return (
        <div className="announcement-wrapper">
            <Header />
            <Navbar />
            <div className="announcement-holder">
                <div className="announcement-name">
                    <h1>announcement</h1>
                </div>
                <div className="announcement-content">
                    <div className="announcement-form">
                        {/* <div className="announcement-image">
                        <h3>Image:</h3>
                        <input 
                            type="text"
                            id="announcement_image"
                        />
                        </div> */}
                        <div className="announcement-title">
                            <h3>Image:</h3>
                            <input type="file" />
                            <h3>Title: </h3>
                            <input
                                type="text"
                                placeholder="Title"
                                name="announcement_title"
                                value={announcement_title}
                                id="announcement_title"
                                onChange={(e) => {
                                    setAnnouncementTitle(e.target.value)
                                }}
                            />
                        </div>
                        <span className="announcement-error">{announcement_title_errors}</span>
                        <div className="announcement-desc">
                            <h3>Description</h3>
                            <textarea
                                name="announcement_description"
                                value={announcement_description}
                                maxLength="1000"
                                id="announcement_description"
                                placeholder="Description"
                                onChange={(e) => {
                                    setAnnouncementDescription(e.target.value)
                                }} />
                        </div>
                        <span className="announcement-error">{announcement_description_errors}</span>

                        {/* pop up */}
                        <div className="container">
                            <div className="popup-announcement-header"></div>
                            <div className="confirmation-text">
                                <span id="announcement-check"><FaCheck color='green' size='3em' /></span>
                                <p id="announcement-context">Announcement was successfully Published!</p>
                            </div>
                            <div className="button-container">
                                <button
                                    className="cancel-button"
                                    onClick={() => handleConfirmationBox()}>
                                    Ok
                                </button>
                            </div>
                            <div id="announcement-spacer">&nbsp;</div>
                        </div>
                        <div
                            className="confirm-bg">
                            onClick={() => handleConfirmationBox()}
                        </div>
                        <button
                            className="delete-button"
                            onClick={() => { isAnnouncementValid() }}>
                            Publish
                        </button>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Announcement
