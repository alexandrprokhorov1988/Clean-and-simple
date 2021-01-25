import React from 'react';
import './Stats.css';
import imgLeft from '../../images/stats-img-left.svg';
import imgRight from '../../images/stats-img-right.svg';

function Stats() {
  return (
    <section className="stats">
      <div className="stats__container stats__container_theme_left">
        <img className="stats__img stats__img_theme_left" src={imgLeft} alt="Картинка"/>
        <p className="stats__numbers stats__numbers_theme_left">89%</p>
        <p className="stats__text stats__text_theme_left">Customers who have increased their productivity</p>
      </div>
      <div className="stats__container stats__container_theme_right">
        <img className="stats__img stats__img_theme_right" src={imgRight} alt="Картинка"/>
        <p className="stats__numbers stats__numbers_theme_right">3123</p>
        <p className="stats__text stats__text_theme_right">Users who have used our application</p>
      </div>
    </section>
  )
}

export default Stats;
