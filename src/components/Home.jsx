import React from 'react'
import Navigation from '../reusableComponent/Navigation'
import HomeImg from '../reusableComponent/HomeImg'
import About from '../reusableComponent/About'
import Products from '../reusableComponent/Products'
import HomeItemCard from '../reusableComponent/HomeItemCard'
import Footer from '../reusableComponent/Footer'
import { cards } from '../staticData'
import { products } from '../staticData'
import Contacts from '../reusableComponent/Contacts'

const Home = () => {
    return (
        <div>
            <Navigation />
            <HomeImg />
            <About />
            <Products products={products} />
            <HomeItemCard cards={cards} />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Home;

