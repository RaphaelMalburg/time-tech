/* eslint-disable import/named */
/* eslint-disable react/jsx-filename-extension */
// import logo from './logo.svg';
// import './styles/App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './containers/navbar/Navbar';
import { Footer } from './containers/footer/Footer';
import { Cart } from './containers/cart/Cart';
import { Register } from './containers/register/Register';
import { Login } from './containers/login/Login';
import { Shoplist } from './containers/shoplist/Shoplist';
import { Home } from './containers/home/Home';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoplist" element={<Shoplist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>

    </div>

  );
}

export default App;
