import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./app.css"
import Account from "./Component/Account/Account";
import AddAddress from "./Component/Account/Address/AddAddress";
import Adresses from "./Component/Account/Address/Adresses";
import UpdateAddress from "./Component/Account/Address/UpdateAddress";
import Admin from "./Component/Account/Admin/Admin";
import Foods from "./Component/Account/Admin/Foods";
import Order from "./Component/Account/Order/Order";
import Profile from "./Component/Account/Profile";
import Food from "./Component/Food/Food";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Login from "./Component/Login-Signup/Login";
import Signup from "./Component/Login-Signup/Signup";
import Users from "./Component/Account/Admin/Users"
import Orders from "./Component/Account/Admin/Orders";
import Addfood from "./Component/Account/Admin/Addfood";
import Updatefood from "./Component/Account/Admin/Updatefood";
import Updateuser from "./Component/Account/Admin/Updateuser";
import Cart from "./Component/Cart/Cart";
import Checkout from "./Component/Checkout/Checkout";
import Payment from "./Component/Checkout/Payment";
import Error from "./Component/Error.js/Error";
import Updateorder from "./Component/Account/Admin/Updateorder";
import About from "./Component/About/About";
import axios from "axios";

function App() {
  const [isAdmin, SetisAdmin] = useState(false)

  useEffect(() => {
      async function checkadmin() {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/isauthadmin`, { withCredentials: true })
        SetisAdmin(res.data)
      }
      checkadmin()
  }, [isAdmin])

  return (
    <div style={{ "marginTop": "90px" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/*" element={<Error />} />
          <Route path="/about" element={<><Header /><About /></>} />
          <Route path="/food" element={<><Header /><Food /></>} />
          <Route path="/cart" element={<><Header /><Cart /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/checkout/payment" element={<Payment />} />
          <Route path="/login" element={<><Header /><Login /></>} />
          <Route path="/signup" element={<><Header /><Signup /></>} />
          <Route path="/user/account/profile" element={<><Header /><Account /><Profile /></>} />
          <Route path="/user/account/addresses" element={<><Header /><Account /><Adresses /></>} />
          <Route path="/user/account/addresses/add" element={<><Header /><Account /><AddAddress /></>} />
          <Route path="/user/account/addresses/update/:id" element={<><Header /><Account /><UpdateAddress /></>} />
          <Route path="/user/account/orders" element={<><Header /><Account /><Order /></>} />
          <Route path="/user/account/admin" element={isAdmin ? <><Header /><Account /><Admin /></> : <Error />} />
          <Route path="/user/account/admin/foods" element={isAdmin ? <><Header /><Account /><Foods /></> : <Error />} />
          <Route path="/user/account/admin/foods/updatefood/:id" element={isAdmin ? <><Header /><Account /><Updatefood /></> : <Error />} />
          <Route path="/user/account/admin/foods/addfood" element={isAdmin ? <><Header /><Account /><Addfood /></> : <Error />} />
          <Route path="/user/account/admin/users" element={isAdmin ? <><Header /><Account /><Users /></> : <Error />} />
          <Route path="/user/account/admin/users/updateuser/:id" element={isAdmin ? <><Header /><Account /><Updateuser /></> : <Error />} />
          <Route path="/user/account/admin/orders" element={isAdmin ? <><Header /><Account /><Orders /></> : <Error />} />
          <Route path="/user/account/admin/orders/updateorder/:id" element={isAdmin ? <><Header /><Account /><Updateorder /></> : <Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
