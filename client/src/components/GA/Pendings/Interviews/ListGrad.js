import React from 'react'
import './ListGrad.css'

function ListGrad() {
    return (
        <div className='pendingviewgrad-wrapper'>
            <Header />
            <Navbar />
            <div className='pendingviewgrad-container'>
                <div className='pendingviewgrad-name'>
                    <h1>
                        <Link to="/pendingrequests/"><RiArrowGoBackFill color='#aaa' /></Link>
                        Request Interview for Exit to Transfer
                    </h1>
                </div>
                <div className='pendingviewgrad-list-container'>
                    <div className='pendingviewgrad-list-header'>
                        <div className='pendingviewgrad-header-name'>
                            <h1>Khrysshia Leighn Domingo</h1>
                        </div>
                    </div>
                    <div className='pendingviewgrad-header-btn'>
                        <button className='pendingviewgrad-download-btn'>
                            <HiDocumentDownload size="2rem" color="#30408D" />
                        </button>
                    </div>
                    <hr id="pendingviewgrad-divider" />
                    <div className='pendingviewgrad-list-details-holder'>
                        <div className='viewgm-divs'>
                            <label><h2 id='pendingviewgrad-label'>Status: &nbsp;</h2></label>
                        </div>
                        <div>
                            <label><h2 id='pendingviewgrad-label'>Purpose of Request: &nbsp;</h2></label>
                        </div>
                        <div className='pendingviewgrad-divs'>
                            <label><h2 id='pendingviewgrad-label'>Number of Copy: &nbsp;</h2></label>
                        </div>
                        <div className='pendingviewgrad-divs'>
                            <label><h2 id='pendingviewgrad-label'>Special Instruction: &nbsp;</h2></label>
                        </div>
                        <div className='pendingviewgrad-divs'>
                            <label><h2 id='pendingviewgrad-label'>Approved By: &nbsp;</h2></label>
                        </div>
                        <div className='pendingview-gm-divs'>
                            <label><h2 id='pendingviewgrad-label'>Upload Good Moral:</h2></label>
                            <input type="file" />
                        </div>

                        <div className='pendingviewgrad-action-btn'>
                            <div className='pendingviewgrad-approved'>
                                <button className='pendingviewgrad-approvedbtnF'>APPROVE</button>
                            </div>
                            <div className='pendingviewgrad-decline'>
                                <button className='pendingviewgrad-approvedbtnF'>DECLINE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ListGrad