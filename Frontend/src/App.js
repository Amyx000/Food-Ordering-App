import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./app.css"
import Food from "./Component/Food";
import Header from "./Component/Header";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Signup from "./Component/Signup";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /><Home/></>} />
          <Route path="/food" element={<><Header /><Food/></>} />
          <Route path="/login" element={<><Header /><Login/></>} />
          <Route path="/signup" element={<><Header /><Signup/></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
