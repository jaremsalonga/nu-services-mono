import React from 'react'
import './ListShift.css'

function ListShift() {
    return (
        <div className='pendingviewshift-wrapper'>
            <Header />
            <Navbar />
            <div className='pendingviewshift-container'>
                <div className='pendingviewshift-name'>
                    <h1>
                        <Link to="/pendingrequests/"><RiArrowGoBackFill color='#aaa' /></Link>
                        Request Interview for Shifting
                    </h1>
                </div>
                <div className='pendingviewshift-list-container'>
                    <div className='pendingviewshift-list-header'>
                        <div className='pendingviewshift-header-name'>
                            <h1>Khrysshia Leighn Domingo</h1>
                        </div>
                    </div>
                    <div className='pendingviewshift-header-btn'>
                        <button className='pendingviewshift-download-btn'>
                            <HiDocumentDownload size="2rem" color="#30408D" />
                        </button>
                    </div>
                    <hr id="pendingviewshift-divider" />
                    <div className='pendingviewshift-list-details-holder'>
                        <div className='viewgm-divs'>
                            <label><h2 id='pendingviewshift-label'>Status: &nbsp;</h2></label>
                        </div>
                        <div>
                            <label><h2 id='pendingviewshift-label'>Purpose of Request: &nbsp;</h2></label>
                        </div>
                        <div className='pendingviewshift-divs'>
                            <label><h2 id='pendingviewshift-label'>Number of Copy: &nbsp;</h2></label>
                        </div>
                        <div className='pendingviewshift-divs'>
                            <label><h2 id='pendingviewshift-label'>Special Instruction: &nbsp;</h2></label>
                        </div>
                        <div className='pendingviewshift-divs'>
                            <label><h2 id='pendingviewshift-label'>Approved By: &nbsp;</h2></label>
                        </div>
                        <div className='pendingview-gm-divs'>
                            <label><h2 id='pendingviewshift-label'>Upload Good Moral:</h2></label>
                            <input type="file" />
                        </div>

                        <div className='pendingviewshift-action-btn'>
                            <div className='pendingviewshift-approved'>
                                <button className='pendingviewshift-approvedbtnF'>APPROVE</button>
                            </div>
                            <div className='pendingviewshift-decline'>
                                <button className='pendingviewshift-approvedbtnF'>DECLINE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListShift