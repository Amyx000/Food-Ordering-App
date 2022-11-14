import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./app.css"
import Food from "./Component/Food";
import Header from "./Component/Header";
import Home from "./Component/Home";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /><Home/></>} />
          <Route path="/food" element={<><Header /><Food/></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
