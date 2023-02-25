/* eslint-disable import/prefer-default-export */
import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/shoplist">Shop</Link>
      </div>
    </nav>
  );
}
