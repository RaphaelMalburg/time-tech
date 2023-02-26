/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MdOutlineShoppingCart } from 'react-icons/md';
// eslint-disable-next-line import/no-extraneous-dependencies
import { HiOutlineUser } from 'react-icons/hi';
import images from '../../constants/images';

export function Navbar() {
  return (
    <nav>
      <div className="nav__logo-container">
        <Link to="/">
          <img src={images.logoname} alt="logo" />
        </Link>
      </div>
      <div className="nav__links">
        <Link to="/">Home</Link>
        <Link to="/shoplist">Shop</Link>
        <Link to="/login"><HiOutlineUser /></Link>
        <Link to="/cart"><MdOutlineShoppingCart /></Link>
      </div>
    </nav>
  );
}
