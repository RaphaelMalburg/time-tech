import React from 'react';
import './buttonlight.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MdAddShoppingCart } from 'react-icons/md';

function Buttonlight() {
  return (
    <div className="buttonlight__outline">
      <span className="buttonlight__sign"><MdAddShoppingCart /></span>
      <span>Add To Cart</span>
    </div>
  );
}
export default Buttonlight;
