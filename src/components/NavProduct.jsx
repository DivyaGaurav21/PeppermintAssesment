import React from 'react'
import Products from '../reusableComponent/Products'
import Navigation from '../reusableComponent/Navigation'
import Footer from '../reusableComponent/Footer'

const NavProduct = () => {
    return (
        <div>
            <Navigation />
            <Products />
            <Footer />
        </div>
    )
}

export default NavProduct