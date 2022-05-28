import React from 'react'
import '../../css/GA/Records.css'
import Header from '../../components/GA/Header_ga'
import Navbar from '../../components/GA/Navbar_ga'

function Records() {
    return (
        <div className="records-wrapper">
            <Header />
            <Navbar />
            <div className="record-body">
                <div className="activity-name">
                <h1>Records</h1>
                </div>
                <div className="activitylog-table">
                    <table className="activity-table">
                        <tr>
                            <th>Activity</th>
                            <th>Time</th>
                        </tr>
                        <tr>
                            <td>Accepted a Request for Interview</td>
                            <td>Tues May 21, 2020</td>
                        </tr>
                        <tr>
                            <td>Accepted a Request for Counseling</td>
                            <td>Tues May 21, 2020</td>
                        </tr>
                        <tr>
                            <td>Gave a Request of Good Moral to Student No.2019010375</td>
                            <td>Logged out In at 5:01pm</td>
                        </tr>
                        <tr>
                            <td>Ma. Honey S. Salvador</td>
                            <td>Tues May 21, 2020</td>
                        </tr>
                        <tr>
                            <td>Accepted a Request for Interview</td>
                            <td>Tues May 21, 2020</td>
                        </tr>
                        <tr>
                            <td>Accepted a Request for Interview</td>
                            <td>Tues May 21, 2020</td>
                        </tr>
                        <tr>
                            <td>Accepted a Request for Interview</td>
                            <td>Logged In at 2:20pm</td>
                        </tr>
                        <tr>
                            <td>Accepted a Request for Interview</td>
                            <td>Tues April 4, 2020</td>
                        </tr>
                        <tr>
                            <td>Accepted a Request for Interview</td>
                            <td>Logged In at 2:20pm</td>
                        </tr>
                        <tr>
                            <td>Accepted a Request for Interview</td>
                            <td>Tues May 21, 2020</td>
                        </tr>
                        <tr>
                            <td>Accepted a Request for Interview</td>
                            <td>Tues May 21, 2020</td>
                        </tr>
                        <tr>
                            <td>Accepted a Request for Interview</td>
                            <td>Tues May 21, 2020</td>
                        </tr>
                        <tr>
                            <td>Accepted a Request for Interview</td>
                            <td>Tues May 21, 2020</td>
                        </tr>
                    </table>
                </div>
                <div>&nbsp;</div>
            </div>
        </div>
    )
}

export default Records
