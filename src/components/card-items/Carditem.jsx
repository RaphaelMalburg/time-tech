import React from 'react';
import images from '../../constants/images';
import Buttonlight from '../button-light/Buttonlight';
import Buttondark from '../button-dark/Buttondark';
import dataitems from '../../constants/data.items';
import './carditem.css';

function Carditem() {
  return (
    <div className="card__outline">
      <div className="card__image">
        <img src={images.watch1} alt="" />
      </div>
      <h1 className="card__item-name">{dataitems[1].name}</h1>
      <h2 className="card__item-price">{dataitems[1].price}</h2>
      <Buttonlight />
      <Buttondark />
    </div>
  );
}

export default Carditem;
