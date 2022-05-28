import React, { useEffect, useState } from 'react'
import './CreateAnnouncement.css'
import axios from 'axios'
import { FaCheck } from 'react-icons/fa'
import { useHistory, Link } from 'react-router-dom';

function CreateAnnouncement() {

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
        axios.get('http://localhost:3001/announcement/get').then((response) => {
            setAnnouncementList(response.data)
        })
    }, [])


    const submitAnnouncement = () => {
        axios.post("http://localhost:3001/announcement/create", {
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
        <div className='announcement-create'>
            <div className='announcement-create-holder'>
                <h1>Create an Announcement!</h1>
                <div className='announcement-create-form'>
                    <div className='announcement-create-img'>
                        <h3 className='announcement-create-label'>Image:</h3>
                        <input type="file" />
                    </div>
                    <div className='announcement-create-title'>
                        <h3 className='announcement-create-label'>Title:</h3>
                        <input
                            type="text"
                            placeholder='Title'
                            value={announcement_title}
                            id="announcement-create-title"
                            required
                            onChange={(e) => {
                                setAnnouncementTitle(e.target.value)
                            }}
                        />
                    </div>
                    <span className='announcement-create-err'>{announcement_title_errors}</span>
                    <div className='announcement-create-desc'>
                        <h3 className='announcement-create-label'>Description:</h3>
                        <textarea
                            name="announcement_description"
                            value={announcement_description}
                            maxLength="1000"
                            id="announcement-create-desc"
                            placeholder="Description"
                            required
                            onChange={(e) => {
                                setAnnouncementDescription(e.target.value)
                            }} />
                    </div>
                    <span className='announcement-create-err'>{announcement_description_errors}</span>

                    {/* pop-up */}
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
                    <div className="confirm-bg">
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
    )
}

export default CreateAnnouncement