import { useRoutes } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import React from "react";

const App = () => {
  let router = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "*", element: <NotFound /> },
  ]);

  return router;
};

export default App;
