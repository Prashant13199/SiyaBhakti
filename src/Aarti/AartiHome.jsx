import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function AartiHome() {
    return (
        <div className='aarti_home'>
            <div className='category_title'>Browse by Aarti</div>
            <div className='chalisa_list'>
                <div className='chalisa_single'>
                    <Link to="/aarti/ganesha" className='chalisa_link'>
                        <img src={'https://cdn.pixabay.com/photo/2024/07/20/11/57/ai-generated-8908217_640.jpg'} className='chalisa_small_image' />
                        <div>Shri Ganesh</div>
                    </Link>
                </div>
                <div className='chalisa_single'>
                    <Link to="/aarti/hanuman" className='chalisa_link'>
                        <img src={'https://m.media-amazon.com/images/I/91GXbWO4sTL.jpg'} className='chalisa_small_image' />
                        <div>Shri Hanuman</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
