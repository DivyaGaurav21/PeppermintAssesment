import React from 'react'
import Products from '../reusableComponent/Products'
import Navigation from '../reusableComponent/Navigation'
import Footer from '../reusableComponent/Footer'
import { iSolutions, products, solutions } from '../staticData'
import IndustrySolution from '../reusableComponent/solution/IndustrySolution'
import MainSolution from '../reusableComponent/solution/MainSolution'

const NavProduct = () => {
    return (
        <div>
            <Navigation />
            <Products products={products} />
            <IndustrySolution iSolutions={iSolutions} />
            <MainSolution solutions={solutions} />
            <Footer />
        </div>
    )
}

export default NavProduct