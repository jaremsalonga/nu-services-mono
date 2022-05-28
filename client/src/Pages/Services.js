import React from 'react'
import '../css/Services.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GoodMoral from './Services/GoodMoral'
import Enrollment from './Services/Enrollment'
import Interview from './Services/Interview'



function Services() {
  return (
    <div className="services-holder">
      <Router>
        <Switch>
          <Route path="/services/goodmoral" exact component={GoodMoral} />
          <Route path="/services/studentenrollment" exact component={Enrollment} />
          <Route path="/services/interview" exact component={Interview} />
        </Switch>
      </Router>
    </div>
  )
}


export default Services;