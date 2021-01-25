import React from 'react';
import './GetStarted.css';

function GetStarted() {

  return (
    <section className="get-started">
      <p className="get-started__text">PLAN YOUR LIFE</p>
      <h2 className="get-started__title">Get <span className="get-started__text-accent">started</span> now</h2>
      <p className="get-started__text">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem
        an, insolens gubergren similique est cu. Et vel modus congue vituperata.
      </p>
      <div className="get-started__button-container">
        <button className="get-started__button">View pricing</button>
        <button className="get-started__button">Read documentation</button>
      </div>
    </section>
  )
}

export default GetStarted;
