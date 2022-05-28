import React, { useEffect, useState } from 'react'
import { Route, useHistory, withRouter } from 'react-router-dom';
import Axios from 'axios';
import '../css/LandingPage.css';
import logo1 from '../images/logo1.png'
import { Link } from 'react-router-dom'
import { IoPerson } from 'react-icons/io5'
import { FaLock } from 'react-icons/fa'
import { useCookies } from 'react-cookie'

function Landingpage() {

  //login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const [loginStatus, setLoginStatus] = useState(false);

  const [loginmsg, setLoginMsg] = useState("");

  const [cookies, setCookie] = useCookies(['access_token', 'refresh_token'])

  Axios.defaults.withCredentials = true;
  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {

      console.log(response, 'err', response.data.auth);

      if (!response.data.auth) {
        setLoginStatus(false);
        setLoginMsg(response.data.message);
      } else {

          let expires = new Date();

          const {token, users_id, role} = response.data;

          expires.setTime(expires.getTime() + (response.data.expires_in * 1000))

          setCookie('token', token, { path: '/',  expires});

          //userAuthenticated(token);

          setLoginStatus(true);

          let routeLocation = (role == 'student') ? '/main' : (role === 'guidance associate') ? '/mainhome' : (role == 'guidance director') ? '/dashboard' : '/admin';

          history.push(routeLocation);
      }
    });
  };

  const userAuthenticated = () => {
    Axios.get("http://localhost:3001/isUserAuth", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    }).then((response) => {
      console.log(response);
      login();
    });
  }

  useEffect(() => {
  }, [])

  return (
    <div>
      <div className="login-logo-container">
        <img className="login-logo" src={logo1} />
      </div>
      <div className="login-container">
        <div className="login-holder"></div>
        <div className="login-contents">
          <div className="login-form">

            <h1>Login</h1>
            <div className="email-login">
              <label>
                <span className="login-icon"><IoPerson size='2em' /></span>
              </label>
              <input type="text"
                placeholder="Email"
                onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className="password-login">
              <label >
                <span className="login-password-icon"><FaLock size='2em' /></span>
                <input type="password"
                  placeholder="Password"
                  onChange={(e) => { setPassword(e.target.value) }} />
              </label>
            </div>
          </div>

          <div className="forgot-password">
            <Link to="/forgotpassword">
              <div id="forgotpassword">Forgot Password? Click Here</div>
            </Link>
          </div>
          <div className="status">
            <h1>{loginmsg}</h1>
          </div>
          <div className="login-btn">
            <button style={{ backgroundColor: '#000336', border: '#000336', color: 'white' }}
              onClick={userAuthenticated}>Sign In</button>
          </div>
          <div className="signup-link">
            <Link to="/register">
              <div id="register-link">Doesn't have an Account? SignUp</div>
            </Link>
          </div>
          
        

        </div>
      </div>
    </div>

  )
}
export default Landingpage
