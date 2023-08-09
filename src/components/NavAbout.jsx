import React from 'react'
import About from '../reusableComponent/About'
import Footer from '../reusableComponent/Footer'
import Navigation from '../reusableComponent/Navigation'

const NavAbout = () => {
    return (
        <div>
            <Navigation />
            <About />
            <Footer />
        </div>
    )
}

export default NavAbout