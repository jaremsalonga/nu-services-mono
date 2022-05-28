import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Terms.css'


export default function Terms() {
    return (
        <div className="terms-wrapper">
            <div className="terms-header">
                <ul>
                    <li><h1>NATIONAL UNIVERSITY GUIDANCE SERVICE SYSTEM</h1></li>
                    <li id="login-tab"><a href="/"><h1>Log In</h1></a></li>
                </ul>
            </div>
            <div className="term-container">
                <div className="term-container-title">
                    <h1>TERMS AND AGREEMENT</h1>
                </div>
                <div className="term-content">
                    <div className="term-body">
                        <div className="term-reminder">
                            <h2>Please read the terms and conditions carefully before registering to NU Guidance Services
                                System website and mobile application. Your access to and use of the service is applied on your
                                acceptance and compliance with these terms. </h2>
                        </div>
                        <div className="term-about">
                            <h5>National University Guidance Service System (NUGSS) aims to develop a mobile and
                                web application that will be used as a tool for the Guidance Department therefore
                                the services of the department are available here in the service. In line with this,
                                some of the services that the Guidance Department offer needs the information of the
                                students which are highly confidential. As follow, a summary of the Terms of Service
                                of the NU Guidance Service System.</h5>
                        </div>
                        <div className="term-use">
                            <h5> The use of the NU Guidance Service System is subject to the following terms of use:<br /><br />
                                1.	The guidance department generally collects information about the students of National University for some services such as Enrollment (SII), Exit and Shifting Interview and Issuance of Good Moral, therefore, the gathered information from the forms you answered will be confidential and will only be collected by the guidance department.
                                <br />2.	As you register in NU Guidance Service System, personal information will be accumulated by the system that the admins can only view.
                                <br />3.	The use of your own picture for the profile page is needed and it can only be viewed by the admins and yourself.
                                <br />4.	Once you answer a form that contains your personal information, the guidance department will always collect every form answered.
                                <br />5.	This application may also include links to other websites that are provided for your convenience. We are not responsible for the content of the linked site.
                                <br />6.	Part of the services of the Guidance Department is the counseling that might require intimate or personal questions, the information gathered by the admins will be private or confidential. Neither the family of the student nor the faculty will know anything about the counseling unless it’s an emergency or any self-harm involved.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div id="term-space">
            </div>
        </div>
    )
}
