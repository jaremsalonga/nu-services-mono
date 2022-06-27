import React, { useEffect, useState } from 'react'
import '../../css/GD/AccountManagement.css'
import Axios from 'axios'
import Header from '../../components/GD/Topbar/Topbar'
import Navbar from '../../components/GD/Sidebar'
import { UserContext } from '../../contexts/user/userContext'
import { useCookies } from 'react-cookie'
import ListGA from '../../components/GD/AccountManagement/ListGA'
import AddUser from '../../components/GD/AccountManagement/AddUser'


function AccountManagement() {

  const [state] = React.useContext(UserContext)
  const id = state.user.users_id
  console.log(state);

  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [contact_no, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [password, setPassword] = useState("");
  const [cnpassword, setCnPassword] = useState("");

  const [fullnameerrors, setFullnameErrors] = useState("");
  const [gendererrors, setGenderErrors] = useState("");
  const [addresserrors, setAddressErrors] = useState("");
  const [contact_noerrors, setContactNoErrors] = useState("");
  const [email_errors, setEmailErrors] = useState("");
  const [passworderrors, setPasswordErrors] = useState("");
  const [cnpassworderrors, setCnPasswordErrors] = useState("");

  const [cookies] = useCookies(['token']);

  const [accountuserList, setAccountUserList] = useState([]);

  let config = {
    headers: { Authorization: `Bearer ${cookies.token}` }
  };

  useEffect(() => {
    Axios.get('/accountmanagement', config).then((response) => {
      setAccountUserList(response.data)
      console.log(response.data)
    })
  }, []);


  return (
    <div className='account-wrapper'>
      <Header />
      <Navbar />
      <div className='account-container'>
        <div className='account-page-name'>
          <h1>Account AccountManagement</h1>
        </div>
        <div className='list-guidance'>
          <ListGA />
        </div>
      </div>
    </div>
  )
}

export default AccountManagement