import React from 'react';
import './Quotes.css';
import Slide from '../../components/Slide/Slide';
import {QUOTES} from '../../utils/constants';

function Quotes() {
  const [current, setCurrent] = React.useState(0);
  const length = QUOTES.length;

  function handleClick() {
    if (current < length - 1) {
      setCurrent(current + 1)
    } else {
      setCurrent(0);
    }
  }

  React.useEffect(() => {
    const timeot = setInterval(handleClick, 5000);
    return () => clearTimeout(timeot);
  }, [current]);

  function handleClickBtn(e) {
    setCurrent(e.target.value - 1);
  }

  return (
    <section className="quotes">
      <div className="quotes__container">
        <p className="quotes__text">TESTIMONIALS</p>
        <h3 className="quotes__title">Customers's quotes</h3>
        <p className="quotes__subtitle">Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui
          laudem
          an.
        </p>
      </div>
      <div className="quotes__slider-container">
        {QUOTES.slice(current, current + 1).map((item) => (
          <Slide key={item.id}{...item}
                 active={true}
                 onSlideClick={handleClick}
          />
        ))}
        <div className="quotes__nav-container">
          {QUOTES.map((item, index) => (
            <button
              className={`quotes__button ${current === index ? 'quotes__button_active' : ''}`}
              key={item.id}
              value={index + 1}
              onClick={handleClickBtn}
            />
          ))}
        </div>
      </div>
      {QUOTES.slice(current < length - 1 ? current + 1 : 0, current < length - 1 ? current + 2 : 1).map((item) => (
        <Slide key={item.id}{...item}
               onSlideClick={handleClick}
        />
      ))}

    </section>
  )
}

export default React.memo(Quotes);
