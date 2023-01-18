import React from 'react'

import WTHeader from '../components/Layout/WTHeader'
import About from '../components/MainPage/About'
import HowItWorks from '../components/MainPage/HowItWorks'
import Reviews from '../components/MainPage/Reviews'

export default function Home() {
    return (
        <>
            <WTHeader />
            <About />
            <HowItWorks />
            <Reviews />
        </>
    )
}
