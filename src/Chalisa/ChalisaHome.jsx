import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function ChalisaHome() {
    return (
        <div className='chalisa_home'>
            <div className='category_title'>Browse by Chalisa</div>
            <div className='chalisa_list'>
                <div className='chalisa_single'>
                    <Link to="/chalisa/ganesha" className='chalisa_link'>
                        <img src={'https://cdn.pixabay.com/photo/2024/07/20/11/57/ai-generated-8908217_640.jpg'} className='chalisa_small_image' />
                        <div>Shri Ganesh</div>
                    </Link>
                </div>
                <div className='chalisa_single'>
                    <Link to="/chalisa/hanuman" className='chalisa_link'>
                        <img src={'https://m.media-amazon.com/images/I/91GXbWO4sTL.jpg'} className='chalisa_small_image' />
                        <div>Shri Hanuman</div>
                    </Link>
                </div>
                <div className='chalisa_single'>
                    <Link to="/chalisa/durga" className='chalisa_link'>
                        <img src={'https://i.pinimg.com/736x/09/45/dc/0945dc0390c53d11b679e6bda3b00700.jpg'} className='chalisa_small_image' />
                        <div>Shri Durga</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
