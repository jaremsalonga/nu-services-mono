import React, { useState } from 'react'
import '../css/MoodTracker.css'


export default function MoodTracker() {
    const [mood, setMood] = useState(null);
    const [mymood, setMyMood] = useState("");

    function handleChange(e) {
        const val = e.target.value;
        if (val < 23) {
            setMood("Angry");
        } else if (val >= 24 && val < 35) {
            setMood("Tired");
        } else if (val >= 48 && val < 70) {
            setMood("Scared");
        } else if (val >= 72 && val < 85) {
            setMood("Sad");
        } else if (val >= 95) {
            setMood("Happy");
        }
    }

    function handleClick() {
        console.log(setMyMood(mood));
    }

    return (
        <div className="moodtracker">
            <div className="moodtracker-container">
                <div className="moodtracker-header">
                    <div className="mood-label">
                        <h1>Mood Tracker</h1>
                    </div>
                    <div className="moodtracker-title">
                        <h2>How are you feeling today?</h2>
                    </div>
                    <div className="moodtracker-content">
                        <div className="moodtracker-icon-row">
                            <div id="angry">😡<br /> <span id="angry-label">Angry</span></div>
                            <div id="tired">😴 <br /> <span id="tired-label">Tired</span></div>
                            <div id="scared">😱 <br /> <span id="scared-label">Scared</span></div>
                            <div id="sad">😞 <br /> <span id="sad-label">Sad</span></div>
                            <div id="happy">😁 <br /> <span id="happpy-label">Happy</span></div>
                        </div>
                        <div className="mood-emoticon-label">
                            <datalist id="tickmarks">
                                <option value="mad" label="😡"></option>
                                <option value="tired" label="😴"></option>
                                <option value="scared" label="😱"></option>
                                <option value="sad" label="😔"></option>
                                <option value="happy" label="😄"></option>
                            </datalist>
                            {/* <p>{mood}</p> */}
                        </div>

                        <input type="range" list="tickmarks" onChange={handleChange} id="moodtracker-slider" />
                        <h1 id="mymood-label">My mood today: {mood} </h1>
                    </div>
                    <div className="moodtracker-feeling">
                        <input type="text" id="moodtracker-concern" placeholder="What's on your mind?" />
                    </div>
                    <div className="moodtrackerbtn">
                        <button type="submit" onClick={handleClick}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}