import React from 'react'
import Products from '../reusableComponent/Products'
import Navigation from '../reusableComponent/Navigation'
import Footer from '../reusableComponent/Footer'
import { products } from '../staticData'

const NavProduct = () => {
    return (
        <div>
            <Navigation />
            <Products products={products} />
            <Footer />
        </div>
    )
}

export default NavProduct