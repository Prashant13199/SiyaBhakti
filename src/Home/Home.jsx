import React from 'react'
import Header from '../Header/Header'
import ChalisaHome from '../Chalisa/ChalisaHome'
import AartiHome from '../Aarti/AartiHome'
import Footer from '../Footer/Footer'

export default function Home() {
    return (
        <div>
            <Header />
            <ChalisaHome />
            <AartiHome />
            <Footer />
        </div>
    )
}
