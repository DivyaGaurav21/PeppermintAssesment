import React from 'react'
import Navigation from '../reusableComponent/Navigation'
import HomeImg from '../reusableComponent/HomeImg'
import About from '../reusableComponent/About'
import Products from '../reusableComponent/Products'
import Cards from '../reusableComponent/Cards'
import Footer from '../reusableComponent/Footer'

const Home = () => {
    return (
        <div>
            <Navigation />
            <HomeImg />
            <About />
            <Products />
            <Cards />
            <Footer />
        </div>
    )
}

export default Home;

