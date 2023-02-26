import React from 'react';
import './buttonlight.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MdAddShoppingCart } from 'react-icons/md';

function Buttonlight() {
  return (
    <button type="button" className="buttonlight__outline">
      <span className="buttonlight__sign"><MdAddShoppingCart /></span>
      <span>Add To Cart</span>
    </button>
  );
}
export default Buttonlight;
