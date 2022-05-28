import React from 'react'
import './SmallWidget.css'
import ash from '../../../images/ash.jpg'

function SmallWidget() {
    return (
        <div className='widgetSm'>
            <span className='widgetSmTitle'>NU Guidance Faculty</span>
            <ul className='widgetSmList'>
                <li className='widgetSmListItem'>
                    <img src={ash} className="widgetSmImg" />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Khrysshia Leigh D. Domingo</span>
                        <span className='widgetSmUserTitle'>Guidance Associate</span>
                    </div>
                </li>
                <li className='widgetSmListItem'>
                    <img src={ash} className="widgetSmImg" />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Khrysshia Leigh D. Domingo</span>
                        <span className='widgetSmUserTitle'>Guidance Associate</span>
                    </div>
                </li>
                <li className='widgetSmListItem'>
                    <img src={ash} className="widgetSmImg" />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Khrysshia Leigh D. Domingo</span>
                        <span className='widgetSmUserTitle'>Guidance Associate</span>
                    </div>
                </li>
                <li className='widgetSmListItem'>
                    <img src={ash} className="widgetSmImg" />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Khrysshia Leigh D. Domingo</span>
                        <span className='widgetSmUserTitle'>Guidance Associate</span>
                    </div>
                </li>
                <li className='widgetSmListItem'>
                    <img src={ash} className="widgetSmImg" />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Khrysshia Leigh D. Domingo</span>
                        <span className='widgetSmUserTitle'>Guidance Associate</span>
                    </div>
                </li>
                <li className='widgetSmListItem'>
                    <img src={ash} className="widgetSmImg" />
                    <div className='widgetSmUser'>
                        <span className='widgetSmUsername'>Khrysshia Leigh D. Domingo</span>
                        <span className='widgetSmUserTitle'>Guidance Associate</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default SmallWidget