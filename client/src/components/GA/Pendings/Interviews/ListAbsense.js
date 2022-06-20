import React from 'react'
import './ListAbsence.css'

function ListAbsense() {
  return (
    <div className='pendingviewtabsence-wrapper'>
    <Header />
    <Navbar />
    <div className='pendingviewtabsence-container'>
        <div className='pendingviewtabsence-name'>
            <h1>
                <Link to="/pendingrequests/"><RiArrowGoBackFill color='#aaa' /></Link>
                Request Interview for Exit to Transfer
            </h1>
        </div>
        <div className='pendingviewtabsence-list-container'>
            <div className='pendingviewtabsence-list-header'>
                <div className='pendingviewtabsence-header-name'>
                    <h1>Khrysshia Leighn Domingo</h1>
                </div>
            </div>
            <div className='pendingviewtabsence-header-btn'>
                <button className='pendingviewtabsence-download-btn'>
                    <HiDocumentDownload size="2rem" color="#30408D" />
                </button>
            </div>
            <hr id="pendingviewtabsence-divider" />
            <div className='pendingviewtabsence-list-details-holder'>
                <div className='viewgm-divs'>
                    <label><h2 id='pendingviewtabsence-label'>Status: &nbsp;</h2></label>
                </div>
                <div>
                    <label><h2 id='pendingviewtabsence-label'>Purpose of Request: &nbsp;</h2></label>
                </div>
                <div className='pendingviewtabsence-divs'>
                    <label><h2 id='pendingviewtabsence-label'>Number of Copy: &nbsp;</h2></label>
                </div>
                <div className='pendingviewtabsence-divs'>
                    <label><h2 id='pendingviewtabsence-label'>Special Instruction: &nbsp;</h2></label>
                </div>
                <div className='pendingviewtabsence-divs'>
                    <label><h2 id='pendingviewtabsence-label'>Approved By: &nbsp;</h2></label>
                </div>
                <div className='pendingview-gm-divs'>
                    <label><h2 id='pendingviewtabsence-label'>Upload Good Moral:</h2></label>
                    <input type="file" />
                </div>

                <div className='pendingviewtabsence-action-btn'>
                    <div className='pendingviewtabsence-approved'>
                        <button className='pendingviewtabsence-approvedbtnF'>APPROVE</button>
                    </div>
                    <div className='pendingviewtabsence-decline'>
                        <button className='pendingviewtabsence-approvedbtnF'>DECLINE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}


export default ListAbsense