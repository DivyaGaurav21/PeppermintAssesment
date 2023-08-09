import React from "react";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
import Products from "./Components/Products";
import About from "./Components/About";
import HomeImg from "./Components/HomeImg";
import Navigation from "./Components/Navigation";


function App() {
  return (
    <div className="App">
      <Navigation />
      <HomeImg />
      <About />
      <Products/>
      <Cards/>
      <Footer/>
      <h1 className="text-3xl underline">
    </h1>
    </div>
  );
}

export default App;
