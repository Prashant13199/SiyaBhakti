import React from 'react'
import Ganesha from '../Assets/Ganesha.png'

export default function Header() {
    return (
        <div className='header'>
            <img className='header_image' src={Ganesha} />
            <div className='header_title'>
                वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । &nbsp;निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
            </div>
        </div>
    )
}
