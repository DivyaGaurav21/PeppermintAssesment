import React from 'react'
import Navigation from '../reusableComponent/Navigation'
import Footer from '../reusableComponent/Footer'
import Solution from '../reusableComponent/Solution'
import { solutions } from '../staticData'

const NavSolution = () => {

    return (
        <div>
            <Navigation />
            <Solution solutions={solutions} />
            <Footer />
        </div>
    )
}

export default NavSolution;