import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import PopUpEditProfile_ga from '../../components/GA/PopUpEditProfile_ga';
import archi from '../../images/archieval_s_salvador.jpg'
import '../../css/GA/EditProfile_ga.css'
import Header_ga from '../../components/GA/Header_ga';
import Navbar_ga from '../../components/GA/Navbar_ga';


function EditProfile_ga() {

    return (
        <div className="editprofile_ga-wrapper">
            <Header_ga />
            <Navbar_ga />
            <div>
                <div className="editprofile_ga-name">
                    <h1>EDIT PROFILE</h1>
                </div>
                <div className="editprofile_ga-container">
                    <div className="editprofile_ga-contents">
                        <div className="student-editprofile_ga-pic">
                            <img src={archi} />
                        </div>
                        <div className="editprofile_ga-student-name">
                            <h2>Faculty No.:</h2>
                            <input type="text" placeholder="Faculty No" />
                            <h2>Full Name:</h2>
                            <input type="text" placeholder="Archieval S. Salvador" />
                            <h2>Gender:</h2>
                            <input type="text" placeholder="Male" />
                            <h2>Address:</h2>
                            <input type="text" placeholder="assalvador@national-u.edu.ph" />
                            <h2>College:</h2>
                            <select>
                                <option>Select type</option>
                                <option>College of Allied health</option>
                                <option>College of Architecture</option>
                                <option>College of Business and Accountancy</option>
                                <option>College of Computing and Information Technology</option>
                                <option>College of Dentistry</option>
                                <option>College of Education, Arts, and Sciences</option>
                                <option>College of Engineering</option>
                                <option>College of Tourism and Hospitality Management</option>
                            </select>
                            <h2>College:</h2>
                            <select>
                                <option>Select type</option>
                                <option>College of Allied health</option>
                                <option>College of Architecture</option>
                                <option>College of Business and Accountancy</option>
                                <option>College of Computing and Information Technology</option>
                                <option>College of Dentistry</option>
                                <option>College of Education, Arts, and Sciences</option>
                                <option>College of Engineering</option>
                                <option>College of Tourism and Hospitality Management</option>
                            </select>
                            <h2>Password:</h2>
                            <input type="password" />
                            <h2>Confirm Password:</h2>
                            <input type="password" />
                        </div>
                        <div className="editprofile_ga-btns">
                            <div className="editprofile_ga-cancel">
                                <Link to="/myprofile">
                                    <button>Cancel</button>
                                </Link>
                            </div>
                            <div className="editprofile_ga-edit-btn">

                                <button>Save</button>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EditProfile_ga