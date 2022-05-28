import React from 'react'
import './PendingList.css'
import ash from '../../../images/ash.jpg'

function PendingList() {
    return (
        <div className='pendings'>
            <div>
                <h3 className='pendingTitle'>Pending Request</h3>
                <table className='pendingTable'>
                    <tr className='pendingTr'>
                        <th className='pendingTh'>Student Name</th>
                        <th className='pendingTh'>College</th>
                        <th className='pendingTh'>Title</th>
                        <th className='pendingTh'>Action</th>
                    </tr>
                    <tr className='pendingTr'>
                        <td className='pendingUser'>
                            <img src={ash} className='pendingImg' />
                            <span className='pendingName'>Khrysshia Leighn D. Domingo</span>
                        </td>
                        <td className='pendingCollege'>CCIT</td>
                        <td className='pendingService'>Request of Good Moral</td>
                        <td className='pendingStatus'></td>
                    </tr>
                    <tr className='pendingTr'>
                        <td className='pendingUser'>
                            <img src={ash} className='pendingImg' />
                            <span className='pendingName'>Khrysshia Leighn D. Domingo</span>
                        </td>
                        <td className='pendingCollege'>CCIT</td>
                        <td className='pendingService'>Request of Good Moral</td>
                        <td className='pendingStatus'></td>
                    </tr>
                    <tr className='pendingTr'>
                        <td className='pendingUser'>
                            <img src={ash} className='pendingImg' />
                            <span className='pendingName'>Khrysshia Leighn D. Domingo</span>
                        </td>
                        <td className='pendingCollege'>CCIT</td>
                        <td className='pendingService'>Request of Good Moral</td>
                        <td className='pendingStatus'></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default PendingList