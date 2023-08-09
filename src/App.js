import React from "react";
import Home from "./components/Home";

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavProduct from "./components/NavProduct";
import NavAbout from "./components/NavAbout";
import NavCareer from "./components/NavCareer";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="career" element={<NavCareer />} />
        <Route path="product" element={<NavProduct />} />
        <Route path="about" element={<NavAbout />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
