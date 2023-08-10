import React from 'react'
import About from '../reusableComponent/About'
import Footer from '../reusableComponent/Footer'
import Navigation from '../reusableComponent/Navigation'
import HomeItemCard from '../reusableComponent/HomeItemCard'
import { cards } from '../staticData'

const NavAbout = () => {
    return (
        <div>
            <Navigation />
            <About />
            <HomeItemCard cards={cards} />
            <Footer />
        </div>
    )
}

export default NavAbout