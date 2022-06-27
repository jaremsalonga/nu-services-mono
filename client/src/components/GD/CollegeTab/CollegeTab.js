import React from 'react'
import { Link } from 'react-router-dom'
import './CollegeTab.css'

function CollegeTab() {
    return (
        <div className='colleges'>
            <div className='college-column1'>
                <Link to="/reports/coah">
                    <div className='collegeItem'>
                        <span className='collegeTitle'>COAH</span>
                        <div className='collegeContainer'>
                            <span className='collegeTotal'>360 Students</span>
                        </div>
                    </div>
                </Link>
                <Link to='/reports/coa'>
                    <div className='collegeItem'>
                        <span className='collegeTitle'>COA</span>
                        <div className='collegeContainer'>
                            <span className='collegeTotal'>360 Students</span>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className='collegeItem'>
                        <span className='collegeTitle'>CBA</span>
                        <div className='collegeContainer'>
                            <span className='collegeTotal'>360 Students</span>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className='collegeItem'>
                        <span className='collegeTitle'>CCIT</span>
                        <div className='collegeContainer'>
                            <span className='collegeTotal'>360 Students</span>
                        </div>
                    </div>
                </Link>
            </div>
            <div className='college-column2'>
                <Link>
                    <div className='collegeItem'>
                        <span className='collegeTitle'>COD</span>
                        <div className='collegeContainer'>
                            <span className='collegeTotal'>360 Students</span>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className='collegeItem'>
                        <span className='collegeTitle'>CEAS</span>
                        <div className='collegeContainer'>
                            <span className='collegeTotal'>360 Students</span>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className='collegeItem'>
                        <span className='collegeTitle'>COE</span>
                        <div className='collegeContainer'>
                            <span className='collegeTotal'>360 Students</span>
                        </div>
                    </div>
                </Link>
                <Link>
                    <div className='collegeItem'>
                        <span className='collegeTitle'>CTHM</span>
                        <div className='collegeContainer'>
                            <span className='collegeTotal'>360 Students</span>
                        </div>
                    </div>
                </Link>
            </div>


        </div>
    )
}

export default CollegeTab