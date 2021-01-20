import React from 'react';
import './Slide.css';

function Slide({ quote, active = false, onSlideClick }) {

  return (
    <article
      className={`slide ${active ? 'slide_active' : ''}`}
      onClick={onSlideClick}
    >
      <p className={`slide__text ${active ? 'slide__text_active' : ''}`}>{quote}</p>
    </article>
  )
}


export default Slide;
