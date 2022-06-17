require("dotenv").config()

const {generateJwt, verifyJWT, verifyAndDecodeJWT} = require('./helpers/jwtHelper')
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

const path = require('path');

// var options = {
//     index: 'index.html'
//     };
//     server.use('/', express.static('/home/domingokd/https://nuguidancesystem.azurewebsites.net', options));
//     server.listen(process.env.PORT);


const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const { resourceLimits } = require("worker_threads");
const { Router } = require("express");
const { nextTick } = require("process");
const jwt = require("jsonwebtoken");
const saltRounds = 10;


const whitelist = ['http://localhost:3000/', 'http://localhost:8080/', 'https://nu-services-monolith.herokuapp.com'];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }));


const db = mysql.createConnection({
    user: process.env.DATABASE_USERNAME|| "root",
    host: process.env.DATABASE_HOST || "localhost",
    password: process.env.DATABASE_PASSWORD || "password",
    database: process.env.DATABASE_NAME || "nugss"
});


//register
app.post('/register', (req, res) => {

    const student_number = req.body.student_number
    const fullname = req.body.fullname
    const gender = req.body.gender
    const address = req.body.address
    const contact_no = req.body.contact_no
    const email = req.body.email
    const college = req.body.college
    const password = req.body.password
    const role = "student";
    const reg_student = "INSERT INTO students (student_number, fullname, gender, address, contact_no, email, college, password, role) VALUES (?,?,?,?,?,?,?,?,?)";


    bcrypt.hash(password, saltRounds, (err, hash) => {

        if (err) {
            console.log(err);
        }
        if (email)
            db.query(reg_student, [student_number, fullname, gender, address, contact_no, email, college, hash, role], (err, result) => {
                console.log(err);
            });


        db.query("INSERT INTO users (fullname, gender, address, contact_no, email, college, password, role) VALUES (?,?,?,?,?,?,?,?)",
            [fullname, gender, address, contact_no, email, college, hash, role],
            (err, result) => {
                console.log(err);
            });

    });
});



//auth
app.get('/isUserAuth', verifyAndDecodeJWT, (req, res) => {
    res.status(200).json(res);
})


app.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE email = ? ",
        email,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }

            if (result.length > 0) {
                bcrypt.compare(password, result[0].password, (error, response) => {
                    if (response) {

                        const id = result[0].id

                        const [first] = result;

                        let tokenConfig = {
                            expiresIn : 300
                        };

                        var email = first.email;

                        const token = generateJwt({...first}, tokenConfig);

                        res.status(200).json({...first, token : token, auth : true})

                    } else {
                        res.json({ auth: false, message: "Incorrect email or Password!" });
                        console.log(err);
                    }
                })
            } else {
                res.json({ auth: false, message: "Invalid Email or Password!" });
            }
        }
    );
});


//-------------------------------------------------------------------------------------//
//goodmoral get
app.get("/services/goodmoral/get", verifyJWT, (req, res) => {
    const sqlSelect = "SELECT * FROM goodmoral_req";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

//goodmoral get
app.get("/services/goodmoral/get/:id", verifyJWT, (req, res) => {
    const user_id = req.params.id;
    const sqlSelect = "SELECT * FROM goodmoral_req WHERE user_id = ?";
    db.query(sqlSelect,user_id, (err, result) => {
        res.send(result);
    });
});

//(Guidance assoc)Get good moral per department and status
app.get("/services/goodmoral", verifyJWT, (req, res) => {

    const {user : {department_id}, status} = req.params;

    const sqlSelect = "SELECT * FROM goodmoral_req WHERE user_id IN (select users_id from users INNER JOIN departments ON department_id = id where department_id = ?) and status = ?";
    db.query(sqlSelect,[department_id, status], (err, result) => {
        res.send(result);
    });
});




//insert goodmoral 
app.post("/services/goodmoral/create", (req, res) => {
    const purpose_req = req.body.purpose_req
    const number_copy = req.body.number_copy
    const special_instruction = req.body.special_instruction
    const status = "pending"
    if (!purpose_req == "" || !purpose_req == "") {
        db.query("INSERT INTO goodmoral_req (purpose_req, number_copy, special_instruction, status) VALUES(?,?,?,?)",
            [purpose_req, number_copy, special_instruction, status],
            (err, result) => {
                console.log(err);
            }
        )
    };
});

//insert sii
app.post('/enrollment/enrollmentstudentform/create', (req, res) => {
    const enrollment_year_entered = req.body.enrollment_year_entered
    const gender_preference = req.body.gender_preference
    const nationality = req.body.nationality
    const religion = req.body.religion
    const place_of_birth = req.body.place_of_birth
    const city_address = req.body.city_address
    const provincial_address = req.body.provincial_address
    const civil_status = req.body.civil_status
    const fb_account = req.body.fb_account
    const father_name = req.body.father_name
    const father_occupation = req.body.father_occupation
    const father_education = req.body.father_education
    const mother_name = req.body.mother_name
    const mother_occupation = req.body.mother_occupation
    const mother_education = req.body.mother_education
    const marital_status = req.body.marital_status
    const annual_income = req.body.annual_income
    const enrollment_hobbies = req.body.enrollment_hobbies

    const enrollment_elementary = req.body.enrollment_elementary
    const elementary_graduated = req.body.elementary_graduated
    const enrollment_junior = req.body.enrollment_junior
    const junior_graduated = req.body.junior_graduated
    const enrollment_senior = req.body.enrollment_senior
    const senior_graduated = req.body.senior_graduated
    const enrollment_vocational = req.body.enrollment_vocational
    const vocational_graduated = req.body.vocational_graduated
    const enrollment_tertiary = req.body.enrollment_tertiary
    const tertiary_graduated = req.body.tertiary_graduated
    const easy_subject = req.body.easy_subject
    const hard_subject = req.body.hard_subject
    const language_spoken = req.body.language_spoken
    const enrollment_reason = req.body.enrollment_reason


    const enrollment_learn = req.body.enrollment_learn
    const enrollment_talk = req.body.enrollment_talk
    const counselor_talk = req.body.counselor_talk
    const enrollment_help = req.body.enrollment_help
    const guardian_name = req.body.guardian_name
    const guardian_contact = req.body.guardian_contact
    const guardian_address = req.body.guardian_address
    const status = "pending"

    if (!enrollment_year_entered == "" || !gender_preference == "" || !enrollment_year_entered == "" ||
        !nationality == "" || !religion == "" || !place_of_birth == "" || !city_address == "" ||
        !provincial_address == "" || !civil_status == "" || !fb_account == "" || !father_name == "" ||
        !father_occupation == "" || !father_education == "" || !mother_name == "" || !mother_occupation == "" ||
        !mother_education == "" || !marital_status == "" || !annual_income == "" || !enrollment_hobbies == "" ||
        !enrollment_elementary == "" || !elementary_graduated == "" || !enrollment_junior == "" || !junior_graduated == "" ||
        !enrollment_senior == "" || !senior_graduated == "" || !vocational_graduated == "" || !enrollment_tertiary == "" || !tertiary_graduated == "" || !easy_subject == "" || !hard_subject == "" ||
        !language_spoken == "" || !enrollment_reason == "" || !enrollment_learn == "" || !enrollment_talk == "" ||
        !counselor_talk == "" || !enrollment_help == "" || !guardian_name == "" || !guardian_contact == "" || !guardian_address == "") {
        db.query("INSERT INTO sii_request (enrollment_year_entered, gender_preference, nationality,religion,place_of_birth, city_address,provincial_address,civil_status,fb_account,father_name, father_occupation,father_education,mother_name,mother_occupation,mother_education,marital_status,annual_income,enrollment_hobbies,enrollment_elementary,elementary_graduated, enrollment_junior, junior_graduated,enrollment_senior,senior_graduated,enrollment_vocational,vocational_graduated,enrollment_tertiary,tertiary_graduated,easy_subject,hard_subject,language_spoken,enrollment_reason,enrollment_learn,enrollment_talk,counselor_talk,enrollment_help,guardian_name,guardian_contact,guardian_address, status) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
            [enrollment_year_entered, gender_preference, nationality, religion, place_of_birth, city_address, provincial_address,
                civil_status, fb_account, father_name, father_occupation, father_education, mother_name, mother_occupation,
                mother_education, marital_status, annual_income, enrollment_hobbies, enrollment_elementary, elementary_graduated,
                enrollment_junior, junior_graduated, enrollment_senior, senior_graduated, enrollment_vocational,
                vocational_graduated, enrollment_tertiary, tertiary_graduated, easy_subject, hard_subject, language_spoken,
                enrollment_reason, enrollment_learn, enrollment_talk, counselor_talk, enrollment_help, guardian_name,
                guardian_contact, guardian_address, status],
            (err, result) => {
                console.log(err);
            }
        )
    };
})

//get sii
app.get('/services/studentenrollment/get', (req, res) => {
    const sqlSelect = "SELECT * from sii_request"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

//shifting get
app.get('/services/interview/get', (req, res) => {
    const sqlSelect = "SELECT * FROM shift_req"
    // const sqlSelect = "SELECT * FROM shift_req INNER JOIN grad_req on shift_req.type_interview = shift_req.type_interview"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

//insert shifting
app.post("/interview/requestinterview/createShiftForm", (req, res) => {
    const shift_course_count = req.body.shift_course_count
    const shift_from = req.body.shift_from
    const shift_to = req.body.shift_to
    const shifting_reason = req.body.shifting_reason
    const reason_explain = req.body.reason_explain
    const shifting_commitment = req.body.shifting_commitment
    const type_contact = req.body.type_contact
    const type_communication = req.body.type_communication
    const status = "pending"
    const type_interview = "Shifting"
    if (!shift_course_count == "" || !shift_from == "" || !shift_to == "" || !shifting_reason == "" || !reason_explain == "" || !reason_explain == ""
        || !shifting_commitment == "" || !type_contact == "" || !type_communication == "") {
        db.query("INSERT INTO shift_req (shift_course_count, shift_from, shift_to,shifting_reason,reason_explain ,shifting_commitment,type_contact,type_communication, status, type_interview) VALUES(?,?,?,?,?,?,?,?,?,?)",
            [shift_course_count, shift_from, shift_to, shifting_reason, reason_explain, shifting_commitment, type_contact, type_communication, status, type_interview],
            (err, result) => {
                console.log(err);
            }
        )
    };
});


//grad get
app.get('/services/interview/get', (req, res) => {
    const sqlSelect = "Select * from exit_req"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

//insert grad
app.post("/interview/requestinterview/createGradForm", (req, res) => {
    const last_ay = req.body.last_ay
    const last_term = req.body.last_term
    const plan_after_grad = req.body.plan_after_grad
    const comment_to_nu = req.body.comment_to_nu
    const permission_info = req.body.permission_info
    const type_of_comm = req.body.type_of_comm
    const status = "pending"
    const type_interview = "Exit to Graduate"
    if (!last_ay == "" || !last_term == "" || !plan_after_grad == "" || !comment_to_nu == ""
        || !permission_info == "" || !permission_info == "" || !type_of_comm == "") {
        db.query("INSERT INTO grad_req (last_ay, last_term, plan_after_grad, comment_to_nu, permission_info, type_of_comm, status, type_interview) VALUES(?,?,?,?,?,?,?,?)",
            [last_ay, last_term, plan_after_grad, comment_to_nu, permission_info, type_of_comm, status, type_interview],
            (err, result) => {
                console.log(err);
            }
        )
    };
});

//insert transfer
app.post("/interview/requestinterview/createTransferForm", (req, res) => {
    const transfer_reason = req.body.transfer_reason
    const transfer_to = req.body.transfer_to
    const loc_new_school = req.body.loc_new_school
    const new_course = req.body.new_course
    const comment_to_nu = req.body.comment_to_nu
    const permission_info = req.body.permission_info
    const type_of_comm = req.body.type_of_comm
    const status = "pending"
    const type_interview = "Exit to Transfer"
    if (!transfer_reason == "" || !transfer_to == "" || !loc_new_school == "" || !new_course == "" || !comment_to_nu == ""
        || !permission_info == "" || !permission_info == "" || !type_of_comm == "") {
        db.query("INSERT INTO transfer_req (transfer_reason, transfer_to, loc_new_school, new_course, comment_to_nu, permission_info, type_of_comm, status, type_interview) VALUES(?,?,?,?,?,?,?,?,?)",
            [transfer_reason, transfer_to, loc_new_school, new_course, comment_to_nu, permission_info, type_of_comm, status, type_interview],
            (err, result) => {
                console.log(err);
            }
        )
    };
});

//insert leave of absence
app.post("/interview/requestinterview/createLeaveOfAbsenceForm", (req, res) => {
    const absence_reason = req.body.absence_reason
    const enroll_again = req.body.enroll_again
    const comment_to_nu = req.body.comment_to_nu
    const type_of_comm = req.body.type_of_comm
    const status = "pending"
    const type_interview = "Leave of Absence"
    if (!absence_reason == "" || !enroll_again == "" || !comment_to_nu == "" || !type_of_comm == "") {
        db.query("INSERT INTO absence_req (absence_reason, enroll_again, comment_to_nu, type_of_comm, status, type_interview) VALUES(?,?,?,?,?,?)",
            [absence_reason, enroll_again, comment_to_nu, type_of_comm, status, type_interview],
            (err, result) => {
                console.log(err);
            }
        )
    };
});

// insert consent
app.post("/counseling/consent/createConsent", (req, res) => {
    const consult_family = req.body.consult_family
    const contact_fam = req.body.contact_fam
    const other_allied = req.body.other_allied
    if (!consult_family == "" || !contact_fam == "" || !other_allied == "" ) {
        db.query("INSERT INTO consent_smartchat (consult_family, contact_fam, other_allied) VALUES(?,?,?)",
            [consult_family, contact_fam, other_allied],
            (err, result) => {
                console.log(err);
            }
        )
    };
});

// consent get
app.get('/counseling/consent/get', (req, res) => {
    const sqlSelect = "Select * from consent_smartchat"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

//smartchat get
app.get('/counseling/CounselingForm/get', (req, res) => {
    const sqlSelect = "Select * from smartchat_req;"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

//inserting smartchat 
app.post("/counseling/CounselingForm/create", (req, res) => {
    const concern = req.body.concern
    const concern_feeling = req.body.concern_feeling
    const type_contact = req.body.type_contact
    const type_comm = req.body.type_comm
    const status = "pending"
    const type_interview = "Smart Chat"
    if (!concern == "" || !concern_feeling == "" || !type_contact == "" || !type_comm == "") {
        db.query("INSERT INTO smartchat_req (concern, concern_feeling,type_comm, type_contact, status, type_interview) VALUES(?,?,?,?,?,?)",
            [concern, concern_feeling, type_contact,type_comm, status, type_interview],
            (err, result) => {
                console.log(err);
            }
        )
    };
});

//-------------------------------------------------------------------------------------//
//registering faculty
app.post('/accountmanagement/create', verifyJWT, (req, res) => {
    const ga_faculty_id = req.body.ga_faculty_id
    const fullname = req.body.fullname
    const gender = req.body.gender
    const address = req.body.address
    const contact_no = req.body.contact_no
    const email = req.body.email
    const course_handle = req.body.course_handle
    const password = req.body.password
    const role = "guidance_associate";
    const reg_faculty = "INSERT INTO guidance_associate (ga_faculty_id, fullname, gender, address, contact_no, email, course_handle, password, role) VALUES (?,?,?,?,?,?,?,?,?)";

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }
        if (email)
            db.query(reg_faculty, [ga_faculty_id, fullname, gender, address, contact_no, email, college, hash, role], (err, result) => {
                [fullname, gender, address, contact_no, email, college, hash, role],
                    console.log(err);
            });

        db.query("INSERT INTO users (fullname, gender, address, contact_no, email, college, password, role) VALUES (?,?,?,?,?,?,?,?)",
            [fullname, gender, address, contact_no, email, college, hash, role],
            (err, result) => {
                console.log(err);
            });

        db.query("INSERT INTO faculty_members (ga_faculty_id, fullname, gender, address, contact_no, email, course_handle, password, role) VALUES (?,?,?,?,?,?,?,?,?)",
            [ga_faculty_id, fullname, gender, address, contact_no, email, college, hash, role],
            (err, result) => {
                console.log(err);
            });
    });
});

//faculty get
app.get("/accountmanagement/get", (req, res) => {
    const sqlSelect = "SELECT * from faculty_members"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

//announcement get
app.get("/announcement/get", (req, res) => {
    const sqlSelect = "SELECT * FROM announcement"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.get("/health-check", (req, res) => {
    res.json({ msg : "Hello" });
});

//insert announcement
app.post("/announcement/create", (req, res) => {
    const announcement_title = req.body.announcement_title
    const announcement_description = req.body.announcement_description
    if (!announcement_title == "" || !announcement_description == "") {
        db.query("INSERT INTO announcement (announcement_title, announcement_description) VALUES (?,?)",
            [announcement_title, announcement_description],
            (err, result) => {
                console.log(err);
            }
        )
    };
});



//-------------------------------------------------------------------------------------//
const port = process.env.PORT || 8080;


if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log('running on port:asdaf ', port);
})