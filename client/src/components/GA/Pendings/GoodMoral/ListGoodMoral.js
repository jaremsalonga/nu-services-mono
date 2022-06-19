import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../contexts/user/userContext'
import Header from '../../Header_ga'
import Navbar from '../../Navbar_ga';
import { HiDocumentDownload } from 'react-icons/hi'
import { RiArrowGoBackFill } from 'react-icons/ri'
import './ListGoodMoral.css'

function ListGoodMoral() {
  return (
    <div className='pendingviewgm-wrapper'>
      <Header />
      <Navbar />
      <div className='pendingviewgm-container'>
        <div className='pendingviewgm-name'>
          <h1>
            <Link to="/pendingrequests/"><RiArrowGoBackFill color='#aaa' /></Link>
            Request for Good Moral
          </h1>
        </div>
        <div className='pendingviewgm-list-container'>
          <div className='pendingviewgm-list-header'>
            <div className='pendingviewgm-header-name'>
              <h1>Khrysshia Leighn Domingo</h1>
            </div>
          </div>
          <div className='pendingviewgm-header-btn'>
            <button className='pendingviewgm-download-btn'>
              <HiDocumentDownload size="2rem" color="#30408D" />
            </button>
          </div>
          <hr id="pendingviewgm-divider" />
          <div className='pendingviewgm-list-details-holder'>
            <div className='viewgm-divs'>
              <label><h2 id='pendingviewgm-label'>Status: &nbsp;</h2></label>
            </div>
            <div>
              <label><h2 id='pendingviewgm-label'>Purpose of Request: &nbsp;</h2></label>
            </div>
            <div className='pendingviewgm-divs'>
              <label><h2 id='pendingviewgm-label'>Number of Copy: &nbsp;</h2></label>
            </div>
            <div className='pendingviewgm-divs'>
              <label><h2 id='pendingviewgm-label'>Special Instruction: &nbsp;</h2></label>
            </div>
            <div className='pendingviewgm-divs'>
              <label><h2 id='pendingviewgm-label'>Approved By: &nbsp;</h2></label>
            </div>
            <div className='pendingview-gm-divs'>
              <label><h2 id='pendingviewgm-label'>Upload Good Moral:</h2></label>
              <input type="file" />
            </div>

            <div className='pendingviewgm-action-btn'>
              <div className='pendingviewgm-approved'>
                <button className='pendingviewgm-approvedbtnF'>APPROVE</button>
              </div>
              <div className='pendingviewgm-decline'>
                <button className='pendingviewgm-approvedbtnF'>DECLINE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListGoodMoral