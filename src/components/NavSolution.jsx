import React from 'react'
import Navigation from '../reusableComponent/Navigation'
import Footer from '../reusableComponent/Footer'
import Solution from '../reusableComponent/solution/Solution'
import { solutions } from '../staticData'
import { iSolutions } from '../staticData'

const NavSolution = () => {

    return (
        <div>
            <Navigation />
            <Solution solutions={solutions} iSolutions={iSolutions} />
            <Footer />
        </div>
    )
}

export default NavSolution;