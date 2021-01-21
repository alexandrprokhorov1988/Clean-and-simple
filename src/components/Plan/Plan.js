import React from 'react';
import './Plan.css';
import img1 from '../../images/plans-img1.png';
import img2 from '../../images/plans-img2.png';
import img3 from '../../images/plans-img3.png';

function Plan() {

  return (
    <section className="plan">
      <div className="plans__container">
        <p className="plans__subtitle">DESKTOP AND MOBILE APP</p>
        <h2 className="plans__title">Plan and manage</h2>
        <p className="plans__text">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an,
          insolens gubergren similique est cu. Et vel modus congue vituperata. Solum patrioque no sea. Mea ex malis
          mollis oporteat. Eum an expetenda consequat.
        </p>
        <div className="plans__button-container">
          <button className="plans__button">View video</button>
          <button className="plans__button">See features</button>
        </div>
      </div>
      <div className="plans__img-container">
        <img className="plans__img plans__img_position_center" src={img1} alt="Картинка"/>
        <img className="plans__img plans__img_position_left" src={img2} alt="Картинка"/>
        <img className="plans__img plans__img_position_bottom" src={img3} alt="Картинка"/>
      </div>
    </section>
  )
}

export default Plan;
