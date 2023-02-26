/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import images from '../../constants/images';
import Buttonlight from '../../components/button-light/Buttonlight';
import Buttondark from '../../components/button-dark/Buttondark';
import dataitems from '../../constants/data.items';

import './home.css';

function Home() {
  return (
    <section>

      <div className="home__split-blue home__split__container">
        <img src={images.watch2} alt="" />
        <h1>{dataitems[1].name}</h1>
        <div className="home__price-tag">
          <span>€</span>
          <p>{dataitems[1].price}</p>
        </div>
        <Buttonlight />
        <Buttondark />
      </div>

      <div className="home__split-bege home__split__container">
        <img src={images.watch1} alt="" />
        <h1>{dataitems[1].name}</h1>
        <div className="home__price-tag">
          <span>€</span>
          <p>{dataitems[1].price}</p>
        </div>
        <Buttonlight />
        <Buttondark />
      </div>

      <div className="home__split-purple home__split__container">
        <img src={images.watch3} alt="" />
        <h1>{dataitems[1].name}</h1>
        <div className="home__price-tag">
          <span>€</span>
          <p>{dataitems[1].price}</p>
        </div>
        <Buttonlight />
        <Buttondark />
      </div>

    </section>
  );
}

export { Home };
