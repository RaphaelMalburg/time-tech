import React from 'react';
import dataTestimonials from '../../constants/data.testimonials';
import './cardtblue.css';

export default function CardTblue() {
  return (
    <div className="card__container">
      <p className="card__testimonial">{dataTestimonials[1].testimonials}</p>
      <p className="card__name">{dataTestimonials[1].name}</p>
      <div className="card__colored-container">
        <div className="card__img-outline" />
        <img src={dataTestimonials[1].image} alt="" />
      </div>
    </div>
  );
}
