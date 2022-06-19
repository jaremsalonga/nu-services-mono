import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import '../../css/Student-View/ViewSII.css'
import { HiDocumentDownload } from 'react-icons/hi'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { useParams } from 'react-router-dom'
import { UserContext } from '../../contexts/user/userContext'


function ViewSII() {

  let { id } = useParams();

  const [state] = React.useContext(UserContext)
  const user_id = state.user.users_id

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

  const [status, setStatus] = useState("");

  const [siiList, setSiiList] = useState([]);

  //profile details
  const [fullname, setFullname] = useState("");
  const [profileInfo, setProfileInfo] = useState([]);

  useEffect(() => {
    let sii_id = window.location.pathname.split("/").pop();
    Axios.get(`/services/studentenrollment/view/${user_id}/${sii_id}`).then((response) => {
      setSiiList(response.data);
      console.log(response)
    })
    Axios.get(`/profile/get/${user_id}`).then((response) => {
      setProfileInfo(response.data);
    })
    console.log(window.location.pathname.split("/").pop())
  }, [])

  return (
    <div className="viewsii-wrapper">
      <Header />
      <Navbar />
      <div className='viewsii-container'>
        <div className='viewsii-name'>
          <h1>Student Individual Inventory</h1>
        </div>
        <div className='viewsii-list-container'>
          {profileInfo.map((val, index) => (
            <div className='viewsii-list-header'>
              <div className='viewsii-header-name'>
                <h1 className='viewsii-user-name'>
                  <Link to="/services/studentenrollment"><RiArrowGoBackFill color='#aaa' /></Link>
                  &nbsp;{val.fullname}</h1>
              </div>
              <div className='viewsii-header-btn'>
                <button className='viewsii-download-btn'><HiDocumentDownload size="2rem" color="#30408D" /></button>
              </div>
            </div>
          ))}
          <hr id='viewsii-divider' />
          <div className='viewsii-list-details-holder'>
            {siiList.map((val, index) => (
              <>
                <div className='viewsii-divs'>
                  <div className='viewsii-divs'>
                    <label><h2 id='viewsii-label'>Status: &nbsp;{val.status}</h2></label>
                    {/* <h2 id='viewgm-details'>Pending</h2> */}
                  </div>
                  <label><h2 id='viewsii-label'>Year Entered: &nbsp;{val.enrollment_year_entered}</h2></label>
                  {/* <h2 id='viewgm-details'>Change of Interest</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Gender Preference: &nbsp;{val.gender_preference}</h2></label>
                  {/* <h2 id='viewgm-details'>1</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Nationality: &nbsp;{val.nationality}</h2></label>
                  {/* <h2 id='viewgm-details'>N/A</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Religion: &nbsp;{val.religion}</h2></label>
                  {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Place of Birth: &nbsp;{val.place_of_birth}</h2></label>
                  {/* <h2 id='viewgm-details'>1</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>City Address: &nbsp;{val.city_address}</h2></label>
                  {/* <h2 id='viewgm-details'>N/A</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Provincial Address: &nbsp;{val.provincial_address}</h2></label>
                  {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Civil Status: &nbsp;{val.civil_status}</h2></label>
                  {/* <h2 id='viewgm-details'>1</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Facebook Account: &nbsp;{val.fb_account}</h2></label>
                  {/* <h2 id='viewgm-details'>N/A</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Father's Name: &nbsp;{val.father_name}</h2></label>
                  {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Father's Occupation: &nbsp;{val.father_occupation}</h2></label>
                  {/* <h2 id='viewgm-details'>1</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Father's Education: &nbsp;{val.father_education}</h2></label>
                  {/* <h2 id='viewgm-details'>N/A</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Mother's Name: &nbsp;{val.mother_name}</h2></label>
                  {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Mothers's Occupation: &nbsp;{val.mother_occupation}</h2></label>
                  {/* <h2 id='viewgm-details'>1</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Mother's Education: &nbsp;{val.mother_education}</h2></label>
                  {/* <h2 id='viewgm-details'>N/A</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Marital Status of Parents: &nbsp;{val.marital_status}</h2></label>
                  {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Estimated Annual Family Income: &nbsp;{val.annual_income}</h2></label>
                  {/* <h2 id='viewgm-details'>1</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Hobbies, Skills, and Interest: &nbsp;{val.enrollment_hobbies}</h2></label>
                  {/* <h2 id='viewgm-details'>N/A</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Elementary School: &nbsp;{val.enrollment_elementary}</h2></label>
                  {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Elementary Year Graduated: &nbsp;{val.elementary_graduated}</h2></label>
                  {/* <h2 id='viewgm-details'>1</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Junior High School: &nbsp;{val.enrollment_junior}</h2></label>
                  {/* <h2 id='viewgm-details'>N/A</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Junior High Year Graduated: &nbsp;{val.junior_graduated}</h2></label>
                  {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Senior High School: &nbsp;{val.enrollment_senior}</h2></label>
                  {/* <h2 id='viewgm-details'>1</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Senior High Year Graduated: &nbsp;{val.senior_graduated}</h2></label>
                  {/* <h2 id='viewgm-details'>N/A</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Vocational: &nbsp;{val.enrollment_vocational}</h2></label>
                  {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Vocational Graduated: &nbsp;{val.vocational_graduated}</h2></label>
                  {/* <h2 id='viewgm-details'>N/A</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Tertiary: &nbsp;{val.enrollment_tertiary}</h2></label>
                  {/* <h2 id='viewgm-details'>1</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Tertiary Graduated: &nbsp;{val.tertiary_graduated}</h2></label>
                  {/* <h2 id='viewgm-details'>N/A</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Subject you find easy: &nbsp;{val.easy_subject}</h2></label>
                  {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Subject you find hard: &nbsp;{val.hard_subject}</h2></label>
                  {/* <h2 id='viewgm-details'>1</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Language Spoken: &nbsp;{val.language_spoken}</h2></label>
                  {/* <h2 id='viewgm-details'>N/A</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Why did you Enroll in NU?: &nbsp;{val.enrollment_reason}</h2></label>
                  {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>How do you learn best?: &nbsp;{val.enrollment_learn}</h2></label>
                  {/* <h2 id='viewgm-details'>1</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>With whom do you usually talk when you have problems?: &nbsp;{val.enrollment_talk}</h2></label>
                  {/* <h2 id='viewgm-details'>N/A</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Which one do you prefer to talk with regarding your concerns?: &nbsp;{val.counselor_talk}</h2></label>
                  {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>In what area do you think you need assistance from a Counselor?: &nbsp;{val.enrollment_help}</h2></label>
                  {/* <h2 id='viewgm-details'>1</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Guardian's Name: &nbsp;{val.guardian_name}</h2></label>
                  {/* <h2 id='viewgm-details'>N/A</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Guardian's Contact No.: &nbsp;{val.guardian_contact}</h2></label>
                  {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                </div>
                <div className='viewsii-divs'>
                  <label><h2 id='viewsii-label'>Guardian's Address: &nbsp;{val.guardian_address}</h2></label>
                  {/* <h2 id='viewgm-details'>Archie Salvador</h2> */}
                </div>
              </>
            ))}
          </div>
        </div>
        <div className='viewsii-spacer'></div>
      </div>

    </div>
  )
}

export default ViewSII