import React from 'react'
import Navigation from '../reusableComponent/Navigation'
import HomeImg from '../reusableComponent/HomeImg'
import About from '../reusableComponent/About'
import Products from '../reusableComponent/Products'
import HomeItemCard from '../reusableComponent/HomeItemCard'
import Footer from '../reusableComponent/Footer'
import { cards, solutions } from '../staticData'
import { products } from '../staticData'
import Contacts from '../reusableComponent/Contacts'
import MainSolution from '../reusableComponent/solution/MainSolution'

const Home = () => {
    return (
        <div>
            <Navigation />
            <HomeImg />
            <About />
            <Products products={products} />
            <HomeItemCard cards={cards} />
            <MainSolution solutions={solutions} />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Home;

