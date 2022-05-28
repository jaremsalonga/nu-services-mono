import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/App.css';
import Aboutus from './Pages/Aboutus';
import Chat from './Pages/Chatbot';
import Counseling from './Pages/Counseling';
import Landingpage from './Pages/LandingPage';
import Main from './Pages/Main';
import Profile from './Pages/Profile';
import Register from './Pages/Register';

import Services from './Pages/Services';
import Enrollment from './Pages/Services/Enrollment';
import GoodMoral from './Pages/Services/GoodMoral';
import Interview from './Pages/Services/Interview';
import InterviewForm from './Pages/Services/InterviewForm';
import ShiftingForm from './Pages/Services/ShiftingForm';
import GraduatingForm from './Pages/Services/GraduatingForm'
import CounselingForm from './Pages/CouselingForm'

import StopSchooling from './Pages/Services/StopSchooling';
import TransferringForm from './Pages/Services/TransferringForm';
import EnrollmentForm from './Pages/Services/EnrollmentForm';
import EditProfile from './Pages/EditProfile'
import Chatbody from './components/chatbody/Chatbody';



//ga
import MainHome from './Pages/GA/MainHome'
import PendingRequest from './Pages/GA/PendingRequest'
import ScheduledRequest from './Pages/GA/ScheduledRequest'
import Records from './Pages/GA/Records'
import MyProfile from './Pages/GA/MyProfile'
import Announcement from './Pages/GA/Announcement';
import Messages from './Pages/GA/Messages'
import EditProfile_ga from './Pages/GA/EditProfile_ga';
import ViewPending from './Pages/GA/ViewPending';
import GoodMoralReq from './Pages/Services/GoodMoralReq';
import CounselingConsent from './Pages/CounselingConsent';

//gd


import TermsAndCondition from './Pages/Terms';
import Home from './Pages/GD/Home';
import PrivateRoute from "./Utility/Helpers/PrivateRoute";
import PublicRoute from "./Utility/Helpers/PublicRoute";
import { UserProvider } from "./contexts/user/userContext";
import Reports from './Pages/GD/Reports';
import PendingReq from './Pages/GD/PendingRequest';
import Announcements from './Pages/GD/Announcements';


function App() {

  return (
    <Router>
      <UserProvider>
        <PublicRoute path="/" exact component={Landingpage} />
        <PublicRoute path="/register" component={Register} />
        <PublicRoute path="/TermsAndCondition" component={TermsAndCondition} />


        {/* Student */}
        <PrivateRoute path="/main" component={Main} role={['student']} />
        <PrivateRoute path="/services" exact component={Services} role={['student']} />
        <PrivateRoute path="/services/goodmoral" exact component={GoodMoralReq} role={['student']} />
        <PrivateRoute path="/services/goodmoral/request" exact component={GoodMoral} role={['student']} />
        <PrivateRoute path="/services/studentenrollment" exact component={Enrollment} role={['student']} />
        <PrivateRoute exact path="/enrollment/enrollmentstudentform" component={EnrollmentForm} role={['student']} />
        <PrivateRoute path="/services/interview" exact component={Interview} role={['student']} />
        <PrivateRoute exact path="/interview/requestinterview" component={InterviewForm} role={['student']} />

        <PrivateRoute exact path="/interview/shiftingform" component={ShiftingForm} role={['student']} />
        <PrivateRoute exact path="/interview/shiftingform" component={GraduatingForm} role={['student']} />
        <PrivateRoute exact path="/interview/shiftingform" component={StopSchooling} role={['student']} />
        <PrivateRoute exact path="/interview/shiftingform" component={TransferringForm} role={['student']} />

        <PrivateRoute exact path="/counseling" component={Counseling} role={['student']} />
        <PrivateRoute exact path="/counseling/consent" component={CounselingConsent} role={['student']} />
        <PrivateRoute exact path="/counseling/counselingform" component={CounselingForm} role={['student']} />
        <PrivateRoute exact path="/messages" component={Chat} role={['student']} />
        <PrivateRoute exact path="/chats" component={Chatbody} role={['student']} />

        <PrivateRoute exact path="/profile" component={Profile} role={['student']} />
        <PrivateRoute exact path="/aboutus" component={Aboutus} role={['student']} />
        <PrivateRoute exact path="/profile/editprofile" component={EditProfile} role={['student']} />


        {/* Guidance Associate */}
        <PrivateRoute exact path="/mainhome" component={MainHome} role={['guidance associate']} />
        <PrivateRoute exact path="/pendingrequests" component={PendingRequest} role={['guidance associate']} />
        <PrivateRoute exact path="/pendingrequests/viewrequestdetails" component={ViewPending} role={['guidance associate']} />
        <PrivateRoute exact path="/scheduledrequest" component={ScheduledRequest} role={['guidance associate']} />
        <PrivateRoute exact path="/messages/inbox" component={Messages} role={['guidance associate']} />
        <PrivateRoute exact path="/announcement" component={Announcement} role={['guidance associate']} />
        <PrivateRoute exact path="/records" component={Records} role={['guidance associate']} />

        <PrivateRoute exact path="/myprofile" component={MyProfile} role={['guidance associate']} />
        <PrivateRoute exact path="/myprofile/edit" component={EditProfile_ga} role={['guidance associate']} />

        {/* Guidance Director */}
        <PrivateRoute exact path="/dashboard" component={Home} role={['guidance director']} />
        <PrivateRoute exact path="/reports" component={Reports} role={['guidance director']} />
        <PrivateRoute exact path="/pendingrequests/view" component={PendingReq} role={['guidance director']} />
        <PrivateRoute exact path="/announcements/view" component={Announcements} role={['guidance director']} /> 
      </UserProvider>




    </Router>
  );
}

export default App;