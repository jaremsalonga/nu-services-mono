import React from 'react'
import '../css/Aboutus.css'
import Header from '../components/Header';
import Navbar from '../components/Navbar';


function Aboutus() {
    return (
        <div className="aboutus-wrapper">
            <Header />
            <Navbar />
            <div className="aboutus-holder">
                <div className="aboutus-name">
                    <h1>Who are We? </h1>
                </div>
                <div className="aboutus-content">
                   <h4> National University Guidance Service System (NUGSS) is a system application that
                    helps students paved the way <br/> into better schooling, together with the National
                    University – Manila Guidance Department, services are orchestrated in NUGSS through
                    mobile and web application. Moreover, this can help students and the guidance department
                    to have an easier process of communication and consultation virtually.
                    The system application contains all the services offered mainly by the guidance department
                    specifically: counseling, interview for exit, for shifting and for graduation,
                    issuance of good moral, group sessions, support-group, webinar, peer facilitation,
                    testing and referral. All services mentioned can be run through NUGSS mobile and web
                    application. NUGSS can be used not only during the pandemic, the application is open
                    at all times and it is convenient to use.
<br/><br/><br/>
                    <p>National University Guidance Service System (NUGSS)  is solely made for the students
                        of National University- Manila that grapples to have a conventional talk with the guidance
                        counselor or in need of assistance regarding school requirements. NUGSS has its different
                        features includes: chatbot and mood tracker, this is where the formal talk between the student
                        and counselor starts. NUGSS is developed by the team from National University – Manila, 4th year BSIT-MWA students.</p>
                </h4>
                </div>
            </div>

        </div>

    )
}

export default Aboutus;