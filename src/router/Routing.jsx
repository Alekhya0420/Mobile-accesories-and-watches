import React from 'react';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../layout/Header';
import ProductCart from '../product/Productcart';
import CartStore from '../product/CartStore';
import Login from '../login/Login';
import Registration from '../registration/Registration';
import CartDetails from '../product/CartDetails';
import Footer from '../layout/Footer';
import Home from '../home/Home';
import Reset from '../reset/Reset';
import PrivateRoutes from '../api/auth';

function Routing() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route element={<PrivateRoutes/>}>
        <Route path="/prod" element={<ProductCart/>} />
        </Route>

        <Route path="/:myid" element={<CartDetails/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/login/forget" element={<Reset/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path="/cart" element={<CartStore/>}/>
        <Route path="/cart/:myid" element={<CartDetails/>}/> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default Routing;
