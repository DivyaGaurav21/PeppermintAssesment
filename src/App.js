import React from "react";
import Footer from "./Components/Footer";
import Cards from "./Components/Cards";
import Products from "./Components/Products";
function App() {
  return (
    <div className="App">
      <h1 className="bg-gray-600 py-6">NAVIGATION</h1>
      <Products/>
      <Cards/>
      <Footer/>
      <h1 className="text-3xl underline">
    </h1>
    </div>
  );
}

export default App;
