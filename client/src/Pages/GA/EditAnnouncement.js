import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { Link, useHistory, Redirect } from 'react-router-dom'
import Header from '../../components/GA/Header_ga';
import Navbar from '../../components/GA/Navbar_ga';
import '../../css/GA/EditAnnouncement.css'
import { FaCheck } from 'react-icons/fa'
import { UserContext } from '../../contexts/user/userContext'

function EditAnnouncement() {

    const [state] = React.useContext(UserContext);
    const users_id = state.user.users_id;

    let history = useHistory();

    const [announcement_title, setAnnouncementTitle] = useState("");
    const [announcement_description, setAnnouncementDescription] = useState("");

    const [announcement_title_errors, setAnnouncementTitleErrors] = useState("");
    const [announcement_description_errors, setAnnouncementDescriptionErrors] = useState("");

    const [announcementList, setAnnouncementList] = useState([]);
    const [sumbitTask, setSubmitTask] = useState(false)

    const ConfirmationBox = () => {
        if (!sumbitTask) {
            document.querySelector(".confirm-bg").style.display = "flex"
            document.querySelector(".container").style.display = "flex"
            // setSubmitTask(true)
            updateAnnouncement();
        } else {
            document.querySelector(".confirm-bg").style.display = "none"
            document.querySelector(".container").style.display = "none"
            // setSubmitTask(false)
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
            ConfirmationBox();
        }
    }

    const updateAnnouncement = () => {
        Axios.put(`/announcement/edit`, {
            announcement_title: announcement_title,
            announcement_description: announcement_description,
            users_id: users_id
        }).then((response) => {
            <Redirect to="/mainhome" />
        })
    }
    return (
        <div className='editannouncement-wrapper'>
            <Header />
            <Navbar />

            <div>
                <div className='editannouncement-container'>
                    <div className="editannouncement-page-name">
                        <h1>EDIT MY PROFILE</h1>
                    </div>
                    <div className='editannouncement-holder'>
                        <form>
                            <div className='editannouncement-div-holder'>
                                <div className='editannouncement-divs'>
                                    <label><h3 id='editannouncement-label'>Title:</h3></label>
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
                                <span className="editannouncement-error">{announcement_title_errors}</span>
                                <div className='editannouncement-divs'>
                                    <label><h3 id='editannouncement-label'>Description:</h3></label>
                                    <textarea
                                        type="text"
                                        placeholder="Description"
                                        name="announcement_description"
                                        value={announcement_description}
                                        id="announcement_description"
                                        onChange={(e) => {
                                            setAnnouncementDescription(e.target.value)
                                        }}
                                    />
                                </div>
                                <span className="editannouncement-error">{announcement_description_errors}</span>
                               
                                {/* pop up */}
                                <div className="container">
                                    <div className="popup-announcement-header"></div>
                                    <div className="confirmation-text">
                                        <span id="announcement-check"><FaCheck color='green' size='3em' /></span>
                                        <p id="announcement-context">Announcement Updated!</p>
                                    </div>
                                    <div className="button-container">
                                        <button
                                            className="cancel-button"
                                            onClick={() => ConfirmationBox()}>
                                            Ok
                                        </button>
                                    </div>
                                    <div id="announcement-spacer">&nbsp;</div>
                                </div>
                                <div
                                    className="confirm-bg">
                                    onClick={() => ConfirmationBox()}
                                </div>
                                <div className="editannouncement-btns">
                                    <div className="editannouncement-back">
                                        <Link to="/mainhome">
                                            <button type="button" id="editannouncement-cancelBtn">Cancel</button>
                                        </Link>
                                    </div><div className="editannouncement-submit">
                                        <button
                                            type="button"
                                            id="editannouncement-submitBtn"
                                            onClick={() => { isAnnouncementValid() }}>Update</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EditAnnouncement