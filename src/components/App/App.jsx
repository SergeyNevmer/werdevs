import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";

const App = () => (
  <>
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </>
);

export default App;
