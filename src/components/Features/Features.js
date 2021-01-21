import React from 'react';
import './Features.css';
import img1 from '../../images/features-img-1.svg';
import img2 from '../../images/features-img-2.svg';
import img3 from '../../images/features-img-3.svg';
import img4 from '../../images/features-img-4.svg';

function Features() {

  return (
    <section className="features">
      <p className="features__text">ABOUT US</p>
      <h2 className="features__title">Read about our app</h2>
      <div className="features__container">
        <article className="features__card">
          <img className="features__img" src={img1} alt="Картинка"/>
          <h3 className="features__card-title">Overview</h3>
          <p className="features__card-text">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.</p>
        </article>
        <article className="features__card">
          <img className="features__img" src={img2} alt="Картинка"/>
          <h3 className="features__card-title">Overview</h3>
          <p className="features__card-text">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.</p>
        </article>
        <article className="features__card">
          <img className="features__img" src={img3} alt="Картинка"/>
          <h3 className="features__card-title">Overview</h3>
          <p className="features__card-text">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.</p>
        </article>
        <article className="features__card">
          <img className="features__img" src={img4} alt="Картинка"/>
          <h3 className="features__card-title">Overview</h3>
          <p className="features__card-text">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.</p>
        </article>
      </div>
      <div className="features__button-container">
        <button className="features__button features__button_type_read">Read more</button>
        <p className="features__button-connector">OR</p>
        <button className="features__button features__button_type_get">Get started</button>
      </div>
    </section>
  );
}

export default Features;
