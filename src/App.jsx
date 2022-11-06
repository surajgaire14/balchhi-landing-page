import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";


const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/about" element = {<About />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
