import React from 'react'
import './ListSmartChat.css'

function ListSmartChat() {
  return (
    <div className='pendingviewsmart-wrapper'>
    <Header />
    <Navbar />
    <div className='pendingviewsmart-container'>
      <div className='pendingviewsmart-name'>
        <h1>
          <Link to="/pendingrequests/"><RiArrowGoBackFill color='#aaa' /></Link>
          Request for Smart Chat
        </h1>
      </div>
      <div className='pendingviewsmart-list-container'>
        <div className='pendingviewsmart-list-header'>
          <div className='pendingviewsmart-header-name'>
            <h1>Khrysshia Leighn Domingo</h1>
          </div>
        </div>
        <div className='pendingviewsmart-header-btn'>
          <button className='pendingviewsmart-download-btn'>
            <HiDocumentDownload size="2rem" color="#30408D" />
          </button>
        </div>
        <hr id="pendingviewsmart-divider" />
        <div className='pendingviewsmart-list-details-holder'>
          <div className='viewgm-divs'>
            <label><h2 id='pendingviewsmart-label'>Status: &nbsp;</h2></label>
          </div>
          <div>
            <label><h2 id='pendingviewsmart-label'>Purpose of Request: &nbsp;</h2></label>
          </div>
          <div className='pendingviewsmart-divs'>
            <label><h2 id='pendingviewsmart-label'>Number of Copy: &nbsp;</h2></label>
          </div>
          <div className='pendingviewsmart-divs'>
            <label><h2 id='pendingviewsmart-label'>Special Instruction: &nbsp;</h2></label>
          </div>
          <div className='pendingviewsmart-divs'>
            <label><h2 id='pendingviewsmart-label'>Approved By: &nbsp;</h2></label>
          </div>
          <div className='pendingview-gm-divs'>
            <label><h2 id='pendingviewsmart-label'>Upload Good Moral:</h2></label>
            <input type="file" />
          </div>

          <div className='pendingviewsmart-action-btn'>
            <div className='pendingviewsmart-approved'>
              <button className='pendingviewsmart-approvedbtnF'>APPROVE</button>
            </div>
            <div className='pendingviewsmart-decline'>
              <button className='pendingviewsmart-approvedbtnF'>DECLINE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}


export default ListSmartChat