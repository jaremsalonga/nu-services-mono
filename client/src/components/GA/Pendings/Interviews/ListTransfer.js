import React from 'react'
import './ListTransfer.css'

function ListTransfer() {
  return (
    <div className='pendingviewtransfer-wrapper'>
    <Header />
    <Navbar />
    <div className='pendingviewtransfer-container'>
        <div className='pendingviewtransfer-name'>
            <h1>
                <Link to="/pendingrequests/"><RiArrowGoBackFill color='#aaa' /></Link>
                Request Interview for Exit to Transfer
            </h1>
        </div>
        <div className='pendingviewtransfer-list-container'>
            <div className='pendingviewtransfer-list-header'>
                <div className='pendingviewtransfer-header-name'>
                    <h1>Khrysshia Leighn Domingo</h1>
                </div>
            </div>
            <div className='pendingviewtransfer-header-btn'>
                <button className='pendingviewtransfer-download-btn'>
                    <HiDocumentDownload size="2rem" color="#30408D" />
                </button>
            </div>
            <hr id="pendingviewtransfer-divider" />
            <div className='pendingviewtransfer-list-details-holder'>
                <div className='viewgm-divs'>
                    <label><h2 id='pendingviewtransfer-label'>Status: &nbsp;</h2></label>
                </div>
                <div>
                    <label><h2 id='pendingviewtransfer-label'>Purpose of Request: &nbsp;</h2></label>
                </div>
                <div className='pendingviewtransfer-divs'>
                    <label><h2 id='pendingviewtransfer-label'>Number of Copy: &nbsp;</h2></label>
                </div>
                <div className='pendingviewtransfer-divs'>
                    <label><h2 id='pendingviewtransfer-label'>Special Instruction: &nbsp;</h2></label>
                </div>
                <div className='pendingviewtransfer-divs'>
                    <label><h2 id='pendingviewtransfer-label'>Approved By: &nbsp;</h2></label>
                </div>
                <div className='pendingview-gm-divs'>
                    <label><h2 id='pendingviewtransfer-label'>Upload Good Moral:</h2></label>
                    <input type="file" />
                </div>

                <div className='pendingviewtransfer-action-btn'>
                    <div className='pendingviewtransfer-approved'>
                        <button className='pendingviewtransfer-approvedbtnF'>APPROVE</button>
                    </div>
                    <div className='pendingviewtransfer-decline'>
                        <button className='pendingviewtransfer-approvedbtnF'>DECLINE</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}


export default ListTransfer