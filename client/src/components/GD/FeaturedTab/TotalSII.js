import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import './TotalSII.css'
import Navbar from '../Sidebar'
import Header from '../Topbar/Topbar'
import { UserContext } from '../../../contexts/user/userContext'
import { saveAs } from 'file-saver';
import { useCookies } from 'react-cookie'
import { RiArrowGoBackFill } from 'react-icons/ri'

function TotalSII() {

    const [state] = React.useContext(UserContext)
    const id = state.user.users_id

    const [cookies] = useCookies(['token']);

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");

    const [enrollment_year_entered, setEnrollmentYearEntered] = useState("");
    const [gender_preference, setGenderPreference] = useState("");
    const [nationality, setNationality] = useState("");
    const [religion, setReligion] = useState("");
    const [place_of_birth, setPlacofBirth] = useState("");
    const [city_address, setCityAddress] = useState("");
    const [provincial_address, setProvincialAddress] = useState("");
    const [civil_status, setCivilStatus] = useState("");
    const [fb_account, setFbAccount] = useState("");
    const [father_name, setFatherName] = useState("");
    const [father_occupation, setFatherOccupation] = useState("");
    const [father_education, setFatherEducation] = useState("");
    const [mother_name, setMotherName] = useState("");
    const [mother_occupation, setMotherOccupation] = useState("");
    const [mother_education, setMotherEducation] = useState("");
    const [marital_status, setMaritalStatus] = useState("");
    const [annual_income, setAnnualIncome] = useState("");
    const [enrollment_hobbies, setEnrollmentHobbies] = useState("");

    const [enrollment_elementary, setElementary] = useState("");
    const [elementary_graduated, setElementaryGraduated] = useState("");
    const [enrollment_junior, setJunior] = useState("");
    const [junior_graduated, setJuniorGraduated] = useState("");
    const [enrollment_senior, setSenior] = useState("");
    const [senior_graduated, setSeniorGraduated] = useState("");
    const [enrollment_vocational, setVocational] = useState("");
    const [vocational_graduated, setVocationalGraduated] = useState("");
    const [enrollment_tertiary, setTertiary] = useState("");
    const [tertiary_graduated, setTertiaryGraduated] = useState("");
    const [easy_subject, setEasySubject] = useState("");
    const [hard_subject, setHardSubject] = useState("");
    const [language_spoken, setLanguageSpoken] = useState("");
    const [enrollment_reason, setReason] = useState("");


    const [enrollment_learn, setLearn] = useState("");
    const [enrollment_talk, setTalk] = useState("");
    const [counselor_talk, setCounselorTalk] = useState("");
    const [enrollment_help, setHelp] = useState("");
    const [guardian_name, setGuardianName] = useState("");
    const [guardian_contact, setGuardianContact] = useState("");
    const [guardian_address, setGuardianAddress] = useState("");


    const [siiList, setSIIList] = useState([]);

    let config = {
        headers: { Authorization: `Bearer ${cookies.token}` }
    };

    useEffect(() => {
        Axios.get(`/dashboard/total-sii`, config).then((response) => {
            setSIIList(response.data);
        })
    }, [])

    return (
        <div className='total-sii-wrapper'>
            <Header />
            <Navbar />
            <div className='total-sii-body'>
                <div className='total-sii-name'>
                    <h1>
                        <Link to="/dashboard"><RiArrowGoBackFill color='#aaa' /></Link>
                        Student Individual Inventory</h1>
                </div>
                <div className='total-sii-container'>
                    <div className='total-sii-download-btn'>
                        <ReactHTMLTableToExcel
                            id="test-tbl-xls-button"
                            className='downloadn-table-xls'
                            table="total-sii-tbl"
                            filename="Total-SII"
                            sheet="Total SII"
                            buttonText="Download as Excel"
                        />
                    </div>
                    <div className='total-sii-tbl-body'>
                        <table id='total-sii-tbl' className='total-counsel-tbl'>
                            <thead className='total-sii-thead'>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Email</th>
                                    <th>Gender Preference</th>
                                    <th>Nationality</th>
                                    <th>Religion</th>
                                    <th>Place of Birth</th>
                                    <th>City Address</th>
                                    <th>Provincial Address</th>
                                    <th>Civil Status</th>
                                    <th>Facebook Account</th>
                                    <th>Father's Name</th>
                                    <th>Father's Occupation</th>
                                    <th>Father's Education</th>
                                    <th>Mother's Name</th>
                                    <th>Mother's Occupation</th>
                                    <th>Mother's Education</th>
                                    <th>Marital Status</th>
                                    <th>Annual Income</th>
                                    <th>Hobbies</th>

                                    <th>Elementary School</th>
                                    <th>Elementary Year Graduated</th>
                                    <th>Junior High School</th>
                                    <th>Junior High Year Graduated</th>
                                    <th>Senior High School</th>
                                    <th>Senior High Year Graduated</th>
                                    <th>Vocational School</th>
                                    <th>Vocational Year Graduated</th>
                                    <th>Tertiary School</th>
                                    <th>Tertiary Year Graduated</th>
                                    <th>Easy Subject</th>
                                    <th>Hard Subject</th>
                                    <th>Language Spoken</th>
                                    <th>Reason Why Enroll on NU</th>

                                    <th>How do you learn best?</th>
                                    <th>With whom do you usually talk when you have problems?</th>
                                    <th>Which one do you prefer to talk with regarding your concerns?</th>
                                    <th>In what area do you think you need assistance from a Counselor?</th>
                                    
                                    <th>Guardian's Name</th>
                                    <th>Guardian's Contact No.</th>
                                    <th>Guardian's Address</th>
                                </tr>
                            </thead>
                            {siiList.map((val) => (
                                <tbody className='totalsii-tbl-body'>
                                    <td>{val.fullname}</td>
                                    <td>{val.email}</td>
                                    <td>{val.enrollment_year_entered}</td>
                                    <td>{val.gender_preference}</td>
                                    <td>{val.nationality}</td>
                                    <td>{val.religion}</td>
                                    <td>{val.place_of_birth}</td>
                                    <td>{val.city_address}</td>
                                    <td>{val.provincial_address}</td>
                                    <td>{val.civil_status}</td>
                                    <td>{val.fb_account}</td>
                                    <td>{val.father_name}</td>
                                    <td>{val.father_occupation}</td>
                                    <td>{val.father_education}</td>
                                    <td>{val.mother_name}</td>
                                    <td>{val.mother_occupation}</td>
                                    <td>{val.mother_education}</td>
                                    <td>{val.marital_status}</td>
                                    <td>{val.annual_income}</td>
                                    <td>{val.enrollment_hobbies}</td>

                                    <td>{val.enrollment_elementary}</td>
                                    <td>{val.elementary_graduated}</td>
                                    <td>{val.enrollment_junior}</td>
                                    <td>{val.junior_graduated}</td>
                                    <td>{val.enrollment_senior}</td>
                                    <td>{val.senior_graduated}</td>
                                    <td>{val.enrollment_vocational}</td>
                                    <td>{val.vocational_graduated}</td>
                                    <td>{val.enrollment_tertiary}</td>
                                    <td>{val.tertiary_graduated}</td>
                                    <td>{val.easy_subject}</td>
                                    <td>{val.hard_subject}</td>
                                    <td>{val.language_spoken}</td>
                                    <td>{val.enrollment_reason}</td>

                                    <td>{val.enrollment_learn}</td>
                                    <td>{val.enrollment_talk}</td>
                                    <td>{val.counselor_talk}</td>
                                    <td>{val.enrollment_help}</td>
                                    <td>{val.guardian_name}</td>
                                    <td>{val.guardian_contact}</td>
                                    <td>{val.guardian_address}</td>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalSII