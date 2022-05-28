import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../../css/EnrollmentForm.css'
import { FaCheck } from 'react-icons/fa'
import { RiErrorWarningLine } from 'react-icons/ri'
import { useHistory, Link } from 'react-router-dom';
import GraduatingTables from './GraduatingTables';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';

function EnrollmentForm() {
    const [submitSII, setSubmitSII] = useState(false);

    const ConfirmationBox = () => {
        if (!submitSII) {
            document.querySelector(".confirm-bg").style.display = "flex"
            document.querySelector(".container").style.display = "flex"
            setSubmitSII(true)
            submitGoodmoralRequest();
        } else {
            document.querySelector(".confirm-bg").style.display = "none"
            document.querySelector(".container").style.display = "none"
            setSubmitSII(false)
            history.push('/services/studentenrollment');
        }
    }

    const isSIIValid = () => {
        if (!enrollment_year_entered || enrollment_year_entered.trim() === "") {
            setEnrollmentYearEnteredErrors("*This field cannot be empty!");
        } else if (!gender_preference || gender_preference.trim() === "") {
            setGenderPreferenceErrors("*This field cannot be empty!");
        } else if (!gender_preference == "Select Gender Preference") {
            setGenderPreferenceErrors("*Please Choose an answer")
        } else if (!nationality || nationality.trim() === "") {
            setNationalityErrors("*This field cannot be empty!");
        } else if (!religion || religion.trim() === "") {
            setReligionErrors("*This field cannot be empty!");
        } else if (!place_of_birth || place_of_birth.trim() === "") {
            setPlacofBirthErrors("*This field cannot be empty!");
        } else if (!city_address || city_address.trim() === "") {
            setReligionErrors("*This field cannot be empty!");
        } else if (!provincial_address || provincial_address.trim() === "") {
            setProvincialAddressErrors("*This field cannot be empty!");
        } else if (!civil_status || civil_status.trim() === "") {
            setCivilStatusErrors("*This field cannot be empty!");
        } else if (civil_status === "Select civil status") {
            setCivilStatusErrors("*This field cannot be empty!");
        } else if (!fb_account || fb_account.trim() === "") {
            setFbAccountErrors("*This field cannot be empty!");
        } else if (!father_name || father_name.trim() === "") {
            setFatherNameErrors("*This field cannot be empty!");
        } else if (!father_occupation || father_occupation.trim() === "") {
            setFatherOccupationErrors("*This field cannot be empty!");
        } else if (!father_education || father_education.trim() === "") {
            setFatherEducationErrors("*This field cannot be empty!");
        } else if (!mother_name || mother_name.trim() === "") {
            setMotherNameErrors("*This field cannot be empty!");
        } else if (!mother_occupation || mother_occupation.trim() === "") {
            setMotherOccupationErrors("*This field cannot be empty!");
        } else if (!mother_education || mother_education.trim() === "") {
            setMotherEducationErrors("*This field cannot be empty!");
        } else if (!marital_status || marital_status.trim() === "") {
            setMaritalStatusErrors("*This field cannot be empty!");
        } else if (marital_status === "Select Marital Status") {
            setMaritalStatusErrors("*This field cannot be empty!");
        } else if (annual_income === "Select estimated annual family income") {
            setAnnualIncomeErrors("*This field cannot be empty!");
        } else if (!annual_income || annual_income.trim() === "") {
            setAnnualIncomeErrors("*This field cannot be empty!");
        } else if (!enrollment_hobbies || enrollment_hobbies.trim() === "") {
            setEnrollmentHobbiesErrors("*This field cannot be empty!");
        } else if (!enrollment_elementary || enrollment_elementary.trim() === "") {
            setElementaryErrors("*This field cannot be empty!");
        } else if (!elementary_graduated || elementary_graduated.trim() === "") {
            setElementaryGraduatedErrors("*This field cannot be empty!");
        } else if (elementary_graduated.match("^[0-9]*$")) {
            setEnrollmentYearEnteredErrors("*Numbers only");
        } else if (!enrollment_junior || enrollment_junior.trim() === "") {
            setJuniorErrors("*This field cannot be empty!");
        } else if (!junior_graduated || junior_graduated.trim() === "") {
            setJuniorGraduatedErrors("*This field cannot be empty!");
        } else if (junior_graduated.match("^[0-9]*$")) {
            setJuniorGraduatedErrors("*Numbers only");
        } else if (!enrollment_senior || enrollment_senior.trim() === "") {
            setSeniorErrors("*This field cannot be empty!");
        } else if (!senior_graduated || senior_graduated.trim() === "") {
            setSeniorGraduatedErrors("*This field cannot be empty!");
        } else if (senior_graduated.match("^[0-9]*$")) {
            setSeniorGraduatedErrors("*Numbers only");
        } else if (!enrollment_vocational || enrollment_vocational.trim() === "") {
            setVocationalErrors("*This field cannot be empty!");
        } else if (!vocational_graduated || vocational_graduated.trim() === "") {
            setVocationalGraduatedErrors("*This field cannot be empty!");
        } else if (vocational_graduated.match("^[0-9]*$")) {
            setVocationalGraduatedErrors("*Numbers only");
        } else if (!enrollment_tertiary || enrollment_tertiary.trim() === "") {
            setTertiaryErrors("*This field cannot be empty!");
        } else if (!tertiary_graduated || tertiary_graduated.trim() === "") {
            setTertiaryGraduatedErrors("*This field cannot be empty!");
        } else if (tertiary_graduated.match("^[0-9]*$")) {
            setTertiaryGraduatedErrors("*Numbers only");
        } else if (!easy_subject || easy_subject.trim() === "") {
            setEasySubjectErrors("*This field cannot be empty!");
        } else if (!hard_subject || hard_subject.trim() === "") {
            setHardSubjectErrors("*This field cannot be empty!");
        } else if (!language_spoken || language_spoken.trim() === "") {
            setLanguageSpokenErrors("*This field cannot be empty!");
        } else if (!enrollment_reason || enrollment_reason.trim() === "") {
            setReasonErrors("*This field cannot be empty!");
        } else if (!enrollment_learn || enrollment_learn.trim() === "") {
            setLearnErrors("*This field cannot be empty!");
        } else if (!enrollment_talk || enrollment_talk.trim() === "") {
            setTalkErrors("*This field cannot be empty!");
        } else if (!counselor_talk || counselor_talk.trim() === "") {
            setCounselorTalkErrors("*This field cannot be empty!");
        } else if (!enrollment_help || enrollment_help.trim() === "") {
            setHelpErrors("*This field cannot be empty!");
        } else if (!guardian_name || guardian_name.trim() === "") {
            setGuardianNameErrors("*This field cannot be empty!");
        } else if (!guardian_contact || guardian_contact.trim() === "") {
            setGuardianContactErrors("*This field cannot be empty!");
        } else if (!guardian_address || guardian_address.trim() === "") {
            setGuardianAddressErrors("*This field cannot be empty!");
        }




        else {
            setEnrollmentYearEnteredErrors("");
            setGenderPreferenceErrors("")
            setNationalityErrors("");
            setPlacofBirthErrors("");
            setCityAddressErrors("");
            setProvincialAddressErrors("")
            setCivilStatusErrors("");
            setFbAccountErrors("");
            setFatherNameErrors("");
            setFatherOccupationErrors("")
            setFatherEducationErrors("");
            setMotherNameErrors("");
            setMotherOccupationErrors("");
            setMotherEducationErrors("")
            setMaritalStatusErrors("");
            setAnnualIncomeErrors("");
            setEnrollmentHobbiesErrors("");

            setElementaryErrors("");
            setElementaryGraduatedErrors("")
            setJuniorErrors("");
            setJuniorGraduatedErrors("");
            setSeniorErrors("");
            setSeniorGraduatedErrors("")
            setVocationalErrors("");
            setVocationalGraduatedErrors("");
            setTertiaryErrors("");
            setTertiaryGraduatedErrors("")
            setEasySubjectErrors("");
            setHardSubjectErrors("");
            setLanguageSpokenErrors("");
            setReasonErrors("");

            setLearnErrors("");
            setTalkErrors("");
            setCounselorTalkErrors("");
            setHelpErrors("");
            setGuardianNameErrors("");
            setGuardianContactErrors(""); 
            setGuardianAddressErrors("");

            ConfirmationBox();
        }
    }

    useEffect(() => {
        Axios.get('http://localhost:3001/services/goodmoral/get').then((response) => {
            setSIIList(response.data)
        })
    }, [])


    const submitGoodmoralRequest = () => {
        Axios.post("http://localhost:3001/enrollment/enrollmentstudentform/create", {
            enrollment_year_entered: enrollment_year_entered,
            gender_preference: gender_preference,
            nationality: nationality,
            religion: religion,
            place_of_birth: place_of_birth,
            city_address: city_address,
            provincial_address: provincial_address,
            civil_status: civil_status,
            fb_account: fb_account,
            father_name: father_name,
            father_occupation: father_occupation,
            father_education: father_education,
            mother_name: mother_name,
            mother_occupation: mother_occupation,
            mother_education: mother_education,
            marital_status: marital_status,
            annual_income: annual_income,
            enrollment_hobbies: enrollment_hobbies,

            enrollment_elementary: enrollment_elementary,
            elementary_graduated: elementary_graduated,
            enrollment_junior: enrollment_junior,
            junior_graduated: junior_graduated,
            enrollment_senior: enrollment_senior,
            senior_graduated: senior_graduated,
            enrollment_vocational: enrollment_vocational,
            vocational_graduated: vocational_graduated,
            enrollment_tertiary: enrollment_tertiary,
            tertiary_graduated: tertiary_graduated,
            easy_subject: easy_subject,
            hard_subject: hard_subject,
            language_spoken: language_spoken,
            enrollment_reason: enrollment_reason,


            enrollment_learn: enrollment_learn,
            enrollment_talk: enrollment_talk,
            counselor_talk: counselor_talk,
            enrollment_help: enrollment_help,
            guardian_name: guardian_name,
            guardian_contact: guardian_contact,
            guardian_address: guardian_address
        });

        <Link to="/main" />
        setSIIList([...siiList, {
            enrollment_year_entered: enrollment_year_entered,
            gender_preference: gender_preference,
            nationality: nationality,
            religion: religion,
            place_of_birth: place_of_birth,
            city_address: city_address,
            provincial_address: provincial_address,
            civil_status: civil_status,
            fb_account: fb_account,
            father_name: father_name,
            father_occupation: father_occupation,
            father_education: father_education,
            mother_name: mother_name,
            mother_occupation: mother_occupation,
            mother_education: mother_education,
            marital_status: marital_status,
            annual_income: annual_income,
            enrollment_hobbies: enrollment_hobbies,

            enrollment_elementary: enrollment_elementary,
            elementary_graduated: elementary_graduated,
            enrollment_junior: enrollment_junior,
            junior_graduated: junior_graduated,
            enrollment_senior: enrollment_senior,
            senior_graduated: senior_graduated,
            enrollment_vocational: enrollment_vocational,
            vocational_graduated: vocational_graduated,
            enrollment_tertiary: enrollment_tertiary,
            tertiary_graduated: tertiary_graduated,
            easy_subject: easy_subject,
            hard_subject: hard_subject,
            language_spoken: language_spoken,
            enrollment_reason: enrollment_reason,


            enrollment_learn: enrollment_learn,
            enrollment_talk: enrollment_talk,
            counselor_talk: counselor_talk,
            enrollment_help: enrollment_help,
            guardian_name: guardian_name,
            guardian_contact: guardian_contact,
            guardian_address: guardian_address
        }]);
    };

    let history = useHistory();

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

    //Errors
    const [enrollment_year_entered_errors, setEnrollmentYearEnteredErrors] = useState("");
    const [gender_preference_errors, setGenderPreferenceErrors] = useState("");
    const [nationality_errors, setNationalityErrors] = useState("");
    const [religion_errors, setReligionErrors] = useState("");
    const [place_of_birth_errors, setPlacofBirthErrors] = useState("");
    const [city_address_errors, setCityAddressErrors] = useState("");
    const [provincial_address_errors, setProvincialAddressErrors] = useState("");
    const [civil_status_errors, setCivilStatusErrors] = useState("");
    const [fb_account_errors, setFbAccountErrors] = useState("");
    const [father_name_errors, setFatherNameErrors] = useState("");
    const [father_occupation_errors, setFatherOccupationErrors] = useState("");
    const [father_education_errors, setFatherEducationErrors] = useState("");
    const [mother_name_errors, setMotherNameErrors] = useState("");
    const [mother_occupation_errors, setMotherOccupationErrors] = useState("");
    const [mother_education_errors, setMotherEducationErrors] = useState("");
    const [marital_status_errors, setMaritalStatusErrors] = useState("");
    const [annual_income_errors, setAnnualIncomeErrors] = useState("");
    const [enrollment_hobbies_errors, setEnrollmentHobbiesErrors] = useState("");

    const [enrollment_elementary_errors, setElementaryErrors] = useState("");
    const [elementary_graduated_errors, setElementaryGraduatedErrors] = useState("");
    const [enrollment_junior_errors, setJuniorErrors] = useState("");
    const [junior_graduated_errors, setJuniorGraduatedErrors] = useState("");
    const [enrollment_senior_errors, setSeniorErrors] = useState("");
    const [senior_graduated_errors, setSeniorGraduatedErrors] = useState("");
    const [enrollment_vocational_errors, setVocationalErrors] = useState("");
    const [vocational_graduated_errors, setVocationalGraduatedErrors] = useState("");
    const [enrollment_tertiary_errors, setTertiaryErrors] = useState("");
    const [tertiary_graduated_errors, setTertiaryGraduatedErrors] = useState("");
    const [easy_subject_errors, setEasySubjectErrors] = useState("");
    const [hard_subject_errors, setHardSubjectErrors] = useState("");
    const [language_spoken_errors, setLanguageSpokenErrors] = useState("");
    const [enrollment_reason_errors, setReasonErrors] = useState("");


    const [enrollment_learn_errors, setLearnErrors] = useState("");
    const [enrollment_talk_errors, setTalkErrors] = useState("");
    const [counselor_talk_errors, setCounselorTalkErrors] = useState("");
    const [enrollment_help_errors, setHelpErrors] = useState("");
    const [guardian_name_errors, setGuardianNameErrors] = useState("");
    const [guardian_contact_errors, setGuardianContactErrors] = useState("");
    const [guardian_address_errors, setGuardianAddressErrors] = useState("");

    const [siiList, setSIIList] = useState([]);

    return (
        <div className="enrollment-form-wrapper">
            <Header />
            <Navbar />
            <div className="enrollment-form-container">
                <div className="enrollment-titles-name-pd">
                    <h1>Student Individual Inventory Form</h1>
                </div>
                <div className="enrollment-form-holder">
                    <form>
                        {/* Personal Data */}
                        <div className="enrollment-forms-header">
                            <h3>Personal Data</h3>
                        </div>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Year Entered</h3></label>
                            <input
                                type="text"
                                placeholder="Year Entered"
                                name="enrollment_year_entered"
                                value={enrollment_year_entered}
                                id="enrollment_year_entered"
                                onChange={(e) => {
                                    setEnrollmentYearEntered(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{enrollment_year_entered_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Gender Preference</h3></label>
                            <select
                                name="gender_preference"
                                value={gender_preference}
                                id="gender_preference"
                                onChange={(e) => {
                                    setGenderPreference(e.target.value)
                                }}>
                                <option>Select Gender Preference</option>
                                <option>Gay</option>
                                <option>Lesbian</option>
                                <option>Bisexual</option>
                                <option>Transgender</option>
                            </select>
                        </div>
                        <span className="enrollment-error">{gender_preference_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Nationality</h3></label>
                            <input
                                type="text"
                                placeholder="Nationality"
                                name="Nationality"
                                value={nationality}
                                id="nationality"
                                onChange={(e) => {
                                    setNationality(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{nationality_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Religion</h3></label>
                            <input
                                type="text"
                                placeholder="Religion"
                                name="religion"
                                value={religion}
                                id="religion"
                                onChange={(e) => {
                                    setReligion(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{religion_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Place of Birth</h3></label>
                            <input
                                type="text"
                                placeholder="Place of Birth"
                                name="place_of_birth"
                                value={place_of_birth}
                                id="place_of_birth"
                                onChange={(e) => {
                                    setPlacofBirth(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{place_of_birth_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*City Address</h3></label>
                            <input
                                type="text"
                                placeholder="City Address"
                                name="city_address"
                                value={city_address}
                                id="city_address"
                                onChange={(e) => {
                                    setCityAddress(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{city_address_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Provincial Address</h3></label>
                            <input
                                type="text"
                                placeholder="Provincial Address"
                                name="provincial_address"
                                value={provincial_address}
                                id="provincial_address"
                                onChange={(e) => {
                                    setProvincialAddress(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{provincial_address_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Civil Status</h3></label>
                            <select
                                name="civil_status"
                                value={civil_status}
                                id="civil_status"
                                onChange={(e) => {
                                    setCivilStatus(e.target.value)
                                }}>
                                <option>Select civil status</option>
                                <option>Single</option>
                                <option>Married</option>
                                <option>Divorced</option>
                                <option>Widowed</option>
                            </select>
                        </div>
                        <span className="enrollment-error">{civil_status_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Facebook Account</h3></label>
                            <input
                                type="text"
                                placeholder="Facebook Account"
                                value={fb_account}
                                id="fb_account"
                                onChange={(e) => {
                                    setFbAccount(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{fb_account_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Father's Name</h3></label>
                            <input
                                type="text"
                                placeholder="Father's Name"
                                value={father_name}
                                id="father_name"
                                onChange={(e) => {
                                    setFatherName(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{father_name_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Father's Occupation</h3></label>
                            <input
                                type="text"
                                placeholder="Father's Occupation"
                                value={father_occupation}
                                id="father_occupation"
                                onChange={(e) => {
                                    setFatherOccupation(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{father_occupation_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Father's Education</h3></label>
                            <input
                                type="text"
                                placeholder="Father's Education"
                                value={father_education}
                                id="father_education"
                                onChange={(e) => {
                                    setFatherEducation(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{father_education_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Mother's Name</h3></label>
                            <input
                                type="text"
                                placeholder="Mother's Name"
                                value={mother_name}
                                id="mother_name"
                                onChange={(e) => {
                                    setMotherName(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{mother_name_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Mothers's Occupation</h3></label>
                            <input
                                type="text"
                                placeholder="Mother's Occupation"
                                value={mother_occupation}
                                id="mother_occupation"
                                onChange={(e) => {
                                    setMotherOccupation(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{mother_occupation_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Mother's Education</h3></label>
                            <input
                                type="text"
                                placeholder="Mother's Education"
                                value={mother_education}
                                id="mother_education"
                                onChange={(e) => {
                                    setMotherEducation(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{mother_education_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Marital Status of Parents</h3></label>
                            <select
                                name="marital_status"
                                value={marital_status}
                                id="marital_status"
                                onChange={(e) => {
                                    setMaritalStatus(e.target.value)
                                }}>
                                <option>Select Marital Status</option>
                                <option>Living together here in the Philippines</option>
                                <option>Living together here in the Philippines but Mother abroad</option>
                                <option>Living together here in the Philippines but Father abroad</option>
                                <option>Living together here in the Philippines but both are abroad</option>
                                <option>Legally Separated</option>
                                <option>Separated but not legally</option>
                            </select>
                        </div>
                        <span className="enrollment-error">{marital_status_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Estimated Annual Family Income</h3></label>
                            <select
                                name="annual_income"
                                value={annual_income}
                                id="annual_income"
                                onChange={(e) => {
                                    setAnnualIncome(e.target.value)
                                }}>
                                <option>Select estimated annual family income</option>
                                <option>160,000 and below</option>
                                <option>16,001 to 250,000</option>
                                <option>250,001 – 400,000</option>
                                <option>400,001 – 800,000</option>
                                <option>800,001 – 2,000,000</option>
                                <option>2,000,001 – 8,000,000</option>
                            </select>
                        </div>
                        <span className="enrollment-error">{annual_income_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Hobbies, Skills, and Interest</h3></label>
                            <input
                                type="text"
                                placeholder="Hobbies, Skills, and Interest"
                                value={enrollment_hobbies}
                                id="enrollment_hobbies"
                                onChange={(e) => {
                                    setEnrollmentHobbies(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{enrollment_hobbies_errors}</span>

                        {/* Educational Background */}
                        <div className="enrollment-titles-name-eb"><h3>Educational Background</h3></div>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Elementary</h3></label>
                            <input
                                type="text"
                                placeholder="Elementary School"
                                value={enrollment_elementary}
                                id="enrollment_elementary"
                                onChange={(e) => {
                                    setElementary(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{enrollment_elementary_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Elementary Year Graduated</h3></label>
                            <input
                                type="text"
                                placeholder="Elementary Year Graduated"
                                value={elementary_graduated}
                                id="elementary_graduated"
                                onChange={(e) => {
                                    setElementaryGraduated(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{elementary_graduated_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Junior High School</h3></label>
                            <input
                                type="text"
                                placeholder="Junior High School"
                                value={enrollment_junior}
                                id="enrollment_junior"
                                onChange={(e) => {
                                    setJunior(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{enrollment_junior_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Junior High Year Graduated</h3></label>
                            <input
                                type="text"
                                placeholder="Junior High Year Graduated"
                                value={junior_graduated}
                                id="junior_graduated"
                                onChange={(e) => {
                                    setJuniorGraduated(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{junior_graduated_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Senior High School</h3></label>
                            <input
                                type="text"
                                placeholder="Senior High School"
                                value={enrollment_senior}
                                id="enrollment_senior"
                                onChange={(e) => {
                                    setSenior(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{enrollment_senior_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Senior High Year Graduated</h3></label>
                            <input
                                type="text"
                                placeholder="Senior High Year Graduated"
                                value={senior_graduated}
                                id="senior_graduated"
                                onChange={(e) => {
                                    setSeniorGraduated(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{senior_graduated_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Junior High Year Graduated</h3></label>
                            <input
                                type="text"
                                placeholder="Junior High Year Graduated"
                                value={junior_graduated}
                                id="junior_graduated"
                                onChange={(e) => {
                                    setJuniorGraduated(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{junior_graduated_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Vocational (Type N/A if not applicable)</h3></label>
                            <input
                                type="text"
                                placeholder="Vocational"
                                value={enrollment_vocational}
                                id="enrollment_vocational"
                                onChange={(e) => {
                                    setVocational(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{enrollment_vocational_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Vocational Graduated</h3></label>
                            <input
                                type="text"
                                placeholder="Vocational Graduated"
                                value={vocational_graduated}
                                id="vocational_graduated"
                                onChange={(e) => {
                                    setVocationalGraduated(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{vocational_graduated_errors}</span> <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Tertiary (Type N/A if not applicable)</h3></label>
                            <input
                                type="text"
                                placeholder="Tertiary"
                                value={enrollment_tertiary}
                                id="enrollment_tertiary"
                                onChange={(e) => {
                                    setTertiary(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{enrollment_tertiary_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Tertiary Graduated</h3></label>
                            <input
                                type="text"
                                placeholder="Tertiary Graduated"
                                value={tertiary_graduated}
                                id="tertiary_graduated"
                                onChange={(e) => {
                                    setTertiaryGraduated(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{tertiary_graduated_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Subject you find easy</h3></label>
                            <select
                                name="easy_subject"
                                value={easy_subject}
                                id="easy_subject"
                                onChange={(e) => {
                                    setEasySubject(e.target.value)
                                }}>
                                <option>Choose subject</option>
                                <option>English</option>
                                <option>Filipino</option>
                                <option>Math</option>
                                <option>History</option>
                                <option>Science</option>
                                <option>Music</option>
                                <option>Art</option>
                                <option>Physical Education</option>
                                <option>Health</option>
                            </select>
                        </div>
                        <span className="enrollment-error">{easy_subject_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Subject you find hard</h3></label>
                            <select
                                name="hard_subject"
                                value={hard_subject}
                                id="hard_subject"
                                onChange={(e) => {
                                    setHardSubject(e.target.value)
                                }}>
                                <option>Choose subject</option>
                                <option>English</option>
                                <option>Filipino</option>
                                <option>Math</option>
                                <option>History</option>
                                <option>Science</option>
                                <option>Music</option>
                                <option>Art</option>
                                <option>Physical Education</option>
                                <option>Health</option>
                            </select>
                        </div>
                        <span className="enrollment-error">{hard_subject_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Language Spoken</h3></label>
                            <select
                                name="language_spoken"
                                value={language_spoken}
                                id="language_spoken"
                                onChange={(e) => {
                                    setLanguageSpoken(e.target.value)
                                }}>
                                <option>Choose Dialect/language</option>
                                <option>Tagalog</option>
                                <option>English</option>
                                <option>Bikol</option>
                                <option>Kapampangan</option>
                                <option>Ilocano</option>
                                <option>Ilonggo(Hiligaynon)</option>
                                <option>Cebuano</option>
                                <option>Waray</option>
                                <option>Bisaya</option>
                            </select>
                        </div>
                        <span className="enrollment-error">{language_spoken_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Why did you Enroll in NU?</h3></label>
                            <select
                                name="enrollment_reason"
                                value={enrollment_reason}
                                id="enrollment_reason"
                                onChange={(e) => {
                                    setReason(e.target.value)
                                }}>
                                <option>Select answer</option>
                                <option>Quality Education</option>
                                <option>Affordable Tuition Fee</option>
                                <option>Nearness to Home</option>
                                <option>Safe Environment</option>
                                <option>Peer Pressure</option>
                                <option>Parents Decision </option>
                                <option>Good Facilities</option>
                                <option>Course is available</option>
                                <option>Good Professors</option>
                            </select>
                        </div>
                        <span className="enrollment-error">{enrollment_reason_errors}</span>

                        {/* Counseling Concern */}
                        <div className="enrollment-titles-name-counseling"><h1>Counseling Concern</h1></div>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*How do you learn best?</h3></label>
                            <select
                                name="enrollment_learn"
                                value={enrollment_learn}
                                id="enrollment_learn"
                                onChange={(e) => {
                                    setLearn(e.target.value)
                                }}>
                                <option>Select answer</option>
                                <option>Hands-on experience</option>
                                <option>Lectures</option>
                                <option>Self-study</option>
                                <option>Group interaction</option>
                                <option>Visual presentation</option>
                            </select>
                        </div>
                        <span className="enrollment-error">{enrollment_learn_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*With whom do you usually talk when you have problems?</h3></label>
                            <select
                                name="enrollment_talk"
                                value={enrollment_talk}
                                id="enrollment_talk"
                                onChange={(e) => {
                                    setTalk(e.target.value)
                                }}>
                                <option>Select answer</option>
                                <option>Father</option>
                                <option>Mother</option>
                                <option>Brother</option>
                                <option>Sister</option>
                                <option>Peers/Friends</option>
                                <option>Professor</option>
                                <option>Counselor</option>
                                <option>Relationship Partner</option>
                            </select>
                        </div>
                        <span className="enrollment-error">{enrollment_talk_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Which one do you prefer to talk with regarding your concerns?</h3></label>
                            <select
                                name="counselor_talk"
                                value={counselor_talk}
                                id="counselor_talk"
                                onChange={(e) => {
                                    setCounselorTalk(e.target.value)
                                }}>
                                <option>Select answer</option>
                                <option>Male Counselor</option>
                                <option>Female Counselor</option>
                            </select>
                        </div>
                        <span className="enrollment-error">{counselor_talk_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*In what area do you think you need assistance from a Counselor?</h3></label>
                            <select
                                name="enrollment_help"
                                value={enrollment_help}
                                id="enrollment_help"
                                onChange={(e) => {
                                    setHelp(e.target.value)
                                }}>
                                <option>Select answer</option>
                                <option>Family concerns</option>
                                <option>Peers/Friends</option>
                                <option>Academic concerns</option>
                                <option> Relationship with the opposite sex</option>
                                <option>Personal adjustment</option>
                            </select>
                        </div>
                        <span className="enrollment-error">{enrollment_help_errors}</span>

                        {/* Guardian */}
                        <div className="enrollment-titles-name-guardian"><h1>In case of Emergency, please notify:</h1></div>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Guardian's Name</h3></label>
                            <input
                                type="text"
                                placeholder="Guardian's Name"
                                value={guardian_name}
                                id="guardian_name"
                                onChange={(e) => {
                                    setGuardianName(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{guardian_name_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Guardian's Contact No.</h3></label>
                            <input
                                type="text"
                                placeholder="Guardian's Contact No."
                                value={guardian_contact}
                                id="guardian_contact"
                                onChange={(e) => {
                                    setGuardianContact(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{guardian_contact_errors}</span>
                        <div className="enrollment-divs">
                            <label><h3 id="enrollment-label">*Guardian's Address</h3></label>
                            <input
                                type="text"
                                placeholder="Guardian's Address"
                                value={guardian_address}
                                id="guardian_address"
                                onChange={(e) => {
                                    setGuardianAddress(e.target.value)
                                }}
                            />
                        </div>
                        <span className="enrollment-error">{guardian_address_errors}</span>


                        {/* pop up */}
                        <div className="container">
                            <div className="popup-announcement-header"></div>
                            <div className="confirmation-text">
                                <span id="announcement-check"><FaCheck color='green' size='3em' /></span>
                                <p id="announcement-context">Request was successfully Submitted!</p>
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
                        <div className="enrollment-submit-btns">
                            <div className="enrollment-back">
                                <Link to="/services/enrollment/request">
                                    <button type="button" id="enrollment-cancelBtn">Cancel</button>
                                </Link>
                            </div><div className="enrollment-submit">
                                <button
                                    type="button"
                                    id="enrollment-submitBtn"
                                    onClick={() => { isSIIValid() }}>Submit</button>
                            </div>
                        </div>
                    </form>
                    <div>&nbsp;</div>
                </div>
            </div>
        </div>
    )
}

export default EnrollmentForm