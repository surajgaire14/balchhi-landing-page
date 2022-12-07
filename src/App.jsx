import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
// import { useContext } from "react";

const App = () => {
  const [activePage, setActivePage] = React.useState("Home");

  return (
    <>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
          setActivePage={setActivePage}
        />
        <Route
          exact
          path="/about"
          element={<About />}
          setActivePage={setActivePage}
        />
        <Route
          exact
          path="*"
          element={<NotFound />}
          setActivePage={setActivePage}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
